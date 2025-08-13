import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';
import { reindexListings } from '@/lib/indexer';

const ListingInput = z.object({
  slug: z.string().min(1).optional(),
  name: z.string().min(1),
  website: z.string().url().optional(),
  description: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  address: z.string().optional(),
  city: z.string().min(1),
  state: z.string().min(1),
  postalCode: z.string().min(1),
  country: z.string().default('US').optional(),
  lat: z.number().optional(),
  lng: z.number().optional(),
  rating: z.number().optional(),
  reviewCount: z.number().optional(),
  brands: z.array(z.string()).optional(),
  financing: z.array(z.string()).optional(),
  categories: z.array(z.string()).optional(), // category slugs
});

const PayloadSchema = z.object({
  listings: z.array(ListingInput),
  reindex: z.boolean().optional().default(true),
});

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

async function geocodeIfNeeded(l: z.infer<typeof ListingInput>) {
  if ((l.lat == null || l.lng == null) && l.address) {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) return l;
    const q = encodeURIComponent(`${l.address}, ${l.city}, ${l.state} ${l.postalCode}`);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${q}.json?limit=1&access_token=${token}`;
    try {
      const res = await fetch(url);
      if (!res.ok) return l;
      const data = (await res.json()) as any;
      const first = data?.features?.[0];
      if (first?.center?.length === 2) {
        return { ...l, lng: first.center[0], lat: first.center[1] };
      }
    } catch {
      // ignore geocode failure
    }
  }
  return l;
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = PayloadSchema.parse(json);

    // Upsert categories first
    const catSlugs = new Set<string>();
    for (const l of parsed.listings) {
      (l.categories || []).forEach((c) => catSlugs.add(c));
    }
    await Promise.all(
      Array.from(catSlugs).map((slug) =>
        prisma.category.upsert({
          where: { slug },
          create: { slug, label: slug.replace(/-/g, ' ') },
          update: { label: slug.replace(/-/g, ' ') },
        })
      )
    );

    // Upsert listings and join rows
    for (const inputRaw of parsed.listings) {
      const input = await geocodeIfNeeded(inputRaw);
      const slug = input.slug || slugify(`${input.city}-${input.name}`);

      const listing = await prisma.listing.upsert({
        where: { slug },
        create: {
          slug,
          name: input.name,
          website: input.website,
          description: input.description,
          phone: input.phone,
          email: input.email,
          address: input.address,
          city: input.city,
          state: input.state,
          postalCode: input.postalCode,
          country: input.country ?? 'US',
          lat: input.lat,
          lng: input.lng,
          rating: input.rating,
          reviewCount: input.reviewCount,
          brands: input.brands ?? [],
          financing: input.financing ?? [],
          planWeight: 0,
        },
        update: {
          name: input.name,
          website: input.website,
          description: input.description,
          phone: input.phone,
          email: input.email,
          address: input.address,
          city: input.city,
          state: input.state,
          postalCode: input.postalCode,
          country: input.country ?? 'US',
          lat: input.lat,
          lng: input.lng,
          rating: input.rating,
          reviewCount: input.reviewCount,
          brands: input.brands ?? [],
          financing: input.financing ?? [],
        },
      });

      // Reset categories for this listing
      if (input.categories?.length) {
        // Clear existing
        await prisma.listingCategory.deleteMany({ where: { listingId: listing.id } });
        // Attach new
        for (const cs of input.categories) {
          const cat = await prisma.category.findUnique({ where: { slug: cs } });
          if (cat) {
            await prisma.listingCategory.create({
              data: { listingId: listing.id, categoryId: cat.id },
            });
          }
        }
      }
    }

    if (parsed.reindex) {
      try {
        await reindexListings();
      } catch (e) {
        // If Typesense not configured, ignore and continue
        console.warn('Reindex failed (ignored):', e);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || 'Invalid payload' }, { status: 400 });
  }
}
