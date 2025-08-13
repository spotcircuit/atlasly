# Project Checklist

## Done
- Repo initialized and pushed to GitHub; `web/` included as regular directory
- `.gitattributes`, `.gitignore` added (env files ignored)
- Prisma schema created; models for Listing/Category/Lead, relations fixed
- Mapbox component added (client-safe)
- Typesense helpers added: `lib/typesense.ts`, `lib/search.ts`
- Typesense indexer added: `lib/indexer.ts`, `scripts/typesense-index.ts`
- Ingest API: `app/api/ingest/route.ts`
- Lead API: `app/api/lead/route.ts`
- Directory route relocated to `/directory/[city]/[category]`
- Listing detail route at `/listing/[slug]`

## TODO
- Provision Typesense, set env keys, create `listings` collection, run indexer
- Implement claim flow + Stripe Checkout + webhooks; update planWeight on subscription
- Add vertical config: `packages/config/medspa.ts` and loader utility
- Acceptance tests: ingest seed, search + map, claim, lead, deployment
- Vercel setup: set Root Directory to `web`, add env vars
- Final polish: content, UI states, error handling

## Acceptance (Definition of Done)
- Import of seed JSON/CSV writes to Neon and indexes to Typesense
- `/directory/[city]/[category]` renders results + pins; facets and geo filter work; Featured/Sponsored rank first
- `/listing/[slug]` shows claim banner if unclaimed
- Claim → Stripe Checkout → webhook updates planCode & planWeight; reflected in search ranking
- `/api/lead` validates TCPA consent and persists lead
- Deployed on Vercel with envs configured
