# Typesense (Search)

Atlasly uses Typesense for fast faceted + geo search and ranking paid plans higher.

## What you need
- A Typesense cluster (Typesense Cloud recommended) or self-hosted.
- API Keys:
  - Admin API Key → `TYPESENSE_API_KEY` (server-only)
  - Search-only Key → `TYPESENSE_SEARCH_ONLY_KEY` (optional, client-safe)
- Host URL → `TYPESENSE_HOST` (e.g., `https://xxxxx.a1.typesense.net`)

Set in `web/.env`:
```ini
TYPESENSE_HOST=https://<cluster>.typesense.net
TYPESENSE_API_KEY=ts_xxx
TYPESENSE_SEARCH_ONLY_KEY=ts_search_xxx
```

## Collection schema expected
The indexer populates a `listings` collection with a geopoint field named `location` and facets used in `lib/search.ts`.

```json
{
  "name": "listings",
  "fields": [
    {"name":"id","type":"string"},
    {"name":"name","type":"string"},
    {"name":"city","type":"string","facet":true},
    {"name":"categories","type":"string[]","facet":true},
    {"name":"brands","type":"string[]","facet":true},
    {"name":"financing","type":"string[]","facet":true},
    {"name":"rating","type":"float","facet":true},
    {"name":"planWeight","type":"int32","facet":true},
    {"name":"location","type":"geopoint"}
  ],
  "default_sorting_field": "planWeight"
}
```

- Sorting: `planWeight:desc,_text_match:desc`
- Geo filter example in `lib/search.ts`: `location:(lat, lng, radius m)`

## Indexing
- Script: `web/scripts/typesense-index.ts`
- Run:
```powershell
npm run index:typesense --prefix .\web
# or from Cwd = web
npm run index:typesense
```

If env vars are missing, the script will fail fast. Ensure `web/.env` is set.
