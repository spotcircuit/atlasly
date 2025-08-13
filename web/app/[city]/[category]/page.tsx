import Map, { type Marker } from '@/components/map/Map';
import { searchListings } from '@/lib/search';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: { city: string; category: string };
  searchParams?: Record<string, string | string[]>;
};

export default async function DirectoryPage({ params, searchParams }: PageProps) {
  const q = (searchParams?.q as string) || undefined;
  const brands = (searchParams?.brands as string)?.split(',').filter(Boolean);
  const financing = (searchParams?.financing as string)?.split(',').filter(Boolean);
  const rating = searchParams?.rating ? Number(searchParams.rating) : undefined;
  const lat = searchParams?.lat ? Number(searchParams.lat) : undefined;
  const lng = searchParams?.lng ? Number(searchParams.lng) : undefined;

  const result = await searchListings({
    q,
    city: params.city,
    facets: {
      categories: [params.category],
      brands,
      financing,
      rating,
    },
    lat,
    lng,
    radiusMeters: 24000,
    page: 1,
  });

  const hits: any[] = result.hits || [];
  const markers: Marker[] = hits
    .map((h) => h.document)
    .filter((d: any) => d.lat != null && d.lng != null)
    .map((d: any) => ({ id: d.id, name: d.name, lat: d.lat, lng: d.lng }));

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{params.city} • {params.category}</h1>
        {q && <p className="text-sm text-muted-foreground">Search: "{q}"</p>}
      </div>

      <Map markers={markers} className="w-full h-[420px] rounded-md overflow-hidden" />

      <ul className="grid md:grid-cols-2 gap-4">
        {hits.map((h) => {
          const d = h.document as any;
          return (
            <li key={d.id} className="border rounded-md p-4">
              <div className="flex items-center justify-between">
                <div>
                  <a href={`/listing/${d.slug}`} className="text-lg font-medium hover:underline">{d.name}</a>
                  <div className="text-sm text-muted-foreground">{d.city}</div>
                </div>
                {typeof d.rating === 'number' && (
                  <div className="text-sm">⭐ {d.rating.toFixed(1)}</div>
                )}
              </div>
              {Array.isArray(d.categories) && d.categories.length > 0 && (
                <div className="mt-2 text-xs text-muted-foreground">{d.categories.join(', ')}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
