# Routes + Search

## App Router
- Directory page (server component): `web/app/directory/[city]/[category]/page.tsx`
- Listing detail: `web/app/listing/[slug]/page.tsx`

We moved the directory route under `/directory/...` to avoid a dynamic route collision with another top-level dynamic segment.

## Search helper
- `web/lib/search.ts`
- Facets supported: `brands`, `financing`, `rating`, `categories`
- Geo filter uses `location:(lat, lng, radius m)` when `lat` & `lng` are provided
- Sort: `planWeight:desc,_text_match:desc`

## Mapbox
- Component: `web/components/map/Map.tsx` (client-safe)
- Token: `NEXT_PUBLIC_MAPBOX_TOKEN` in `web/.env`
