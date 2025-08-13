import { prisma } from './db';
import { getTypesenseClient } from './typesense';

const COLLECTION_NAME = 'listings';

async function ensureListingsCollection() {
  const client = getTypesenseClient();
  try {
    // Check if collection exists
    await client.collections(COLLECTION_NAME).retrieve();
    return;
  } catch (_err) {
    // Fall through to attempt create
  }

  // Create collection with fields we index/filter/sort on
  await client.collections().create({
    name: COLLECTION_NAME,
    fields: [
      { name: 'id', type: 'string' },
      { name: 'slug', type: 'string' },
      { name: 'name', type: 'string' },
      { name: 'city', type: 'string', facet: true },
      { name: 'categories', type: 'string[]', facet: true },
      { name: 'brands', type: 'string[]', facet: true },
      { name: 'financing', type: 'string[]', facet: true },
      { name: 'rating', type: 'float', facet: true },
      { name: 'planWeight', type: 'int32' },
      { name: 'lat', type: 'float' },
      { name: 'lng', type: 'float' },
      { name: 'location', type: 'geopoint' },
    ],
    default_sorting_field: 'planWeight',
  } as any);
}

export async function reindexListings() {
  await ensureListingsCollection();
  const client = getTypesenseClient();

  const listings = await prisma.listing.findMany({
    include: { categories: { include: { category: true } } },
  });

  const docs = listings.map((l) => ({
    id: l.id,
    slug: l.slug,
    name: l.name,
    city: l.city,
    categories: l.categories.map((c) => c.category.slug),
    brands: l.brands ?? [],
    financing: l.financing ?? [],
    rating: l.rating ?? 0,
    planWeight: l.planWeight ?? 0,
    lat: l.lat ?? null,
    lng: l.lng ?? null,
    location: l.lat != null && l.lng != null ? `${l.lat}, ${l.lng}` : undefined,
  }));

  // Upsert documents in bulk
  await client.collections(COLLECTION_NAME).documents().import(docs, { action: 'upsert' } as any);
}
