import { getTypesenseClient } from './typesense';

type Facets = {
  brands?: string[];
  financing?: string[];
  rating?: number;
  categories?: string[];
};

function client() {
  return getTypesenseClient();
}

export async function searchListings({
  q,
  city,
  facets,
  lat,
  lng,
  radiusMeters = 24000,
  page = 1,
}: {
  q?: string;
  city?: string;
  facets?: Facets;
  lat?: number;
  lng?: number;
  radiusMeters?: number;
  page?: number;
}) {
  const ts = client();

  const parts: string[] = [];
  if (city) parts.push(`city:=${JSON.stringify(city)}`);
  if (facets?.brands?.length) parts.push(`brands:=[${facets.brands.map((b) => `"${b}"`).join(',')}]`);
  if (facets?.financing?.length) parts.push(`financing:=[${facets.financing.map((f) => `"${f}"`).join(',')}]`);
  if (facets?.rating) parts.push(`rating:>=${facets.rating}`);
  if (facets?.categories?.length) parts.push(`categories:=[${facets.categories.map((c) => `"${c}` + `"`).join(',')}]`);
  if (lat != null && lng != null) {
    const radius = Math.max(1, Math.round(radiusMeters));
    parts.push(`location:(${lat}, ${lng}, ${radius} m)`);
  }
  const filter_by = parts.join(' && ');

  const params: any = {
    q: q || '*',
    query_by: 'name,categories,city',
    sort_by: 'planWeight:desc,_text_match:desc',
    per_page: 20,
    page,
  };
  if (filter_by) params.filter_by = filter_by;

  return ts.collections('listings').documents().search(params);
}
