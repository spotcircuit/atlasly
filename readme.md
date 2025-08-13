Atlasly — Schema‑Driven Business Directory
=========================================

Build a vertical‑agnostic, schema‑driven business directory with map + faceted geo search, claim flow, and paid placement (Stripe).

• App: Next.js 14 App Router, TypeScript, Tailwind, shadcn/ui, deployed on Vercel
• Data: Neon Postgres via Prisma
• Search: Typesense (geo + facets) — optional until you provision it
• Maps: Mapbox GL
• Auth/Billing: Auth.js + Stripe (from starter; claim flow not wired yet)

Repo layout:
- `web/` — Next.js app (run npm scripts here)
- `docs/` — detailed guides (setup, Prisma, Typesense, deployment, routes, Stripe)

## Status (at a glance)
- Implemented: Prisma models, ingest + lead APIs, server search helper, Mapbox component, Typesense client/indexer scaffolding, directory + listing routes, repo cleanup
- Pending: Provision Typesense + env, run indexer, implement claim flow + Stripe Checkout/webhooks, add vertical config, acceptance tests, deploy to Vercel

See full checklist: `docs/CHECKLIST.md`.

## Quick start (Windows / PowerShell)
Prereqs: Node.js (npm), Git. App lives under `web/`.

1) Install deps

```powershell
npm install --prefix .\web
```

2) Environment
- Copy `web/.env.example` → `web/.env` and set values.
- Minimum to run: `DATABASE_URL` (Neon), `NEXT_PUBLIC_MAPBOX_TOKEN`.

3) Prisma (DB schema)

```powershell
# Cwd: .\web
npx prisma generate
npx prisma migrate dev --name init
```

4) Dev server

```powershell
npm run dev --prefix .\web
```

Visit http://localhost:3000

5) (Optional) Typesense indexing
- Requires `TYPESENSE_HOST`, `TYPESENSE_API_KEY`, `TYPESENSE_SEARCH_ONLY_KEY` in `web/.env`.

```powershell
npm run index:typesense --prefix .\web
```

## Routes
- Directory: `/directory/[city]/[category]` — server search + map + facets
- Listing: `/listing/[slug]` — details with claim banner when unverified

## Documentation
- Setup: `docs/SETUP.md`
- Prisma + Neon: `docs/PRISMA.md`
- Typesense (what, why, how): `docs/TYPESENSE.md`
- Deployment (Vercel): `docs/DEPLOYMENT.md`
- Routes & search details: `docs/ROUTES_AND_SEARCH.md`
- Claim flow + Stripe plan (upcoming): `docs/STRIPE_CLAIM.md`
- Project checklist: `docs/CHECKLIST.md`

## Tech stack
- Next.js 14 App Router, React 18, TypeScript, Tailwind, shadcn/ui
- Prisma ORM + Neon Postgres
- Typesense search (geo + facets + planWeight ranking)
- Mapbox GL for map pins
- Auth.js + Stripe (from starter)

## Contributing / workflow
- Windows‑friendly scripts; use PowerShell.
- Run npm from `web/` or use `--prefix .\\web` from repo root.
- Git: feature branches from `main`; conventional commits preferred.

---
Legacy draft (reference) follows below.

Absolutely. Here’s a crystal-clear, copy-paste handoff for your AI code builder that implements the stack we picked: Next.js (App Router) + Neon Postgres + Prisma + Stripe + Auth + Mapbox + Typesense. It starts from a clean Neon/Prisma/Stripe starter, then adds map + faceted geo search + listings + plans + claim flow.

0) Goal (one paragraph for the AI)
Build a vertical-agnostic, schema-driven business directory with map + faceted geo search, paid placement (Featured/Sponsored) via Stripe subscriptions, claim flow, and a B2C lead form. Stack: Next.js (App Router, TypeScript, Tailwind, shadcn/ui) on Vercel; DB on Neon (Postgres) via Prisma; search on Typesense (geopoint + facets); maps on Mapbox. Start from the “Next SaaS Stripe Starter” (Neon + Prisma + Stripe + Auth) and extend.

Base to fork: mickasmt/next-saas-stripe-starter (Next.js 14 + Prisma + Neon + Stripe + Auth.js v5). 
GitHub
SaaS Starter

1) Scaffold & deploy
1.1 Fork + install
bash
Copy
Edit
# Fork on GitHub, then locally:
git clone https://github.com/<your-org>/<your-fork>.git
cd next-saas-stripe-starter
pnpm install
This starter already wires Neon + Prisma + Stripe + Auth.js. 
GitHub

1.2 Create Neon DB + connect Prisma
Create a Neon project & database; copy the pooled connection string.

Set DATABASE_URL (pooled) in .env.

Run migrations:

bash
Copy
Edit
pnpm prisma migrate dev
pnpm prisma generate
(If traffic spikes later, follow Prisma↔Neon pooling guidance.) 
Neon
Prisma
+1

1.3 Stripe & Auth minimal boot
In Stripe, create a test product & three prices: BASIC, FEATURED, SPONSORED (monthly). Copy Price IDs.

In .env, set Stripe keys + webhook secret (Starter includes webhook boilerplate). 
GitHub

Run dev:

bash
Copy
Edit
pnpm dev
2) Typesense (search) + Mapbox (maps)
2.1 Spin up Typesense & collection
Use Typesense Cloud or self-host.

Add to .env:

ini
Copy
Edit
TYPESENSE_HOST=https://<cluster>.typesense.net
TYPESENSE_API_KEY=ts_xxx
TYPESENSE_SEARCH_ONLY_KEY=ts_search_xxx  # optional for client-only
Create the listings collection (geo + facets + ranking):

json
Copy
Edit
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
    {"name":"geo","type":"geopoint"}
  ],
  "default_sorting_field": "planWeight"
}
Use filter_by + sort_by: "planWeight:desc,_text_match:desc" to pin Featured/Sponsored first, then relevance.
(Typesense docs for geosearch, geopoint, and geo demos.) 
Typesense
+1

2.2 Add Mapbox
Add to .env:

ini
Copy
Edit
NEXT_PUBLIC_MAPBOX_TOKEN=pk.xxx
Install and add a minimal Mapbox component (or adapt next-maps for App Router + shadcn/ui): 
GitHub
DEV Community

3) Data model (Prisma)
Create/extend prisma/schema.prisma with directory entities:

prisma
Copy
Edit
enum ClaimStatus { UNCLAIMED PENDING VERIFIED }

model Listing {
  id           String   @id @default(cuid())
  slug         String   @unique
  name         String
  website      String?
  description  String?
  phone        String?
  email        String?
  address      String?
  city         String
  state        String
  postalCode   String
  country      String   @default("US")
  lat          Float?
  lng          Float?
  rating       Float?    // aggregate
  reviewCount  Int?
  brands       String[]
  financing    String[]
  categories   ListingCategory[]
  planCode     String?   // FREE/BASIC/FEATURED/SPONSORED
  planWeight   Int       @default(0) // 0 free, 10 basic, 50 featured, 100 sponsored
  claimStatus  ClaimStatus @default(UNCLAIMED)
  ownerId      String?    // user who claimed (from Auth)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}

model Category {
  id     String   @id @default(cuid())
  slug   String   @unique
  label  String
  listings ListingCategory[]
}

model ListingCategory {
  listingId  String
  categoryId String
  listing    Listing  @relation(fields: [listingId], references: [id])
  category   Category @relation(fields: [categoryId], references: [id])
  @@id([listingId, categoryId])
}

model Lead {
  id        String   @id @default(cuid())
  listingId String?
  listing   Listing? @relation(fields: [listingId], references: [id])
  name      String
  email     String
  phone     String
  zip       String
  interest  String   // e.g., botox
  timeline  String   // e.g., <=14d | 30d | research
  budget    String?
  consentTs DateTime
  ip        String?
  utm       Json?
  createdAt DateTime @default(now())
}
Run:

bash
Copy
Edit
pnpm prisma migrate dev
pnpm prisma generate
4) Indexer: DB → Typesense
Create scripts/typesense-index.ts (Node script) to upsert records:

ts
Copy
Edit
import Typesense from "typesense";
import { prisma } from "@/lib/db";

const client = new Typesense.Client({
  nodes: [{ host: process.env.TYPESENSE_HOST!.replace("https://",""), port: 443, protocol: "https" }],
  apiKey: process.env.TYPESENSE_API_KEY!,
  connectionTimeoutSeconds: 8,
});

async function main() {
  const listings = await prisma.listing.findMany({
    include: { categories: { include: { category: true } } }
  });

  const docs = listings.map(l => ({
    id: l.id,
    name: l.name,
    city: l.city,
    categories: l.categories.map(c => c.category.slug),
    brands: l.brands,
    financing: l.financing,
    rating: l.rating ?? 0,
    planWeight: l.planWeight ?? 0,
    geo: [l.lat ?? 0, l.lng ?? 0]
  }));

  await client.collections("listings").documents().import(docs, { action: "upsert" });
}

main();
Run as needed:

bash
Copy
Edit
pnpm tsx scripts/typesense-index.ts
(Typesense geosearch + reference implementations.) 
Typesense
+1

5) Pages & routes
5.1 Directory routes
Create app routes:

csharp
Copy
Edit
app/
  (directory)/
    [city]/
      [category]/page.tsx
    listing/
      [slug]/page.tsx
/[city]/[category]/page.tsx (server component)
Inputs: params.city, params.category, searchParams.radius, facets (brands, financing, rating).

Calls a server function searchListings() that queries Typesense:

q: params.category

filter_by: city:=<city> && [facet filters]

per_page, page

sort_by: "planWeight:desc,_text_match:desc"

Geo optional: aroundLatLng: "<lat>,<lng>", radius: <meters>

/listing/[slug]/page.tsx
Fetch listing by slug (Prisma), render details, ClaimBanner if UNCLAIMED.

(Use Mapbox component alongside the results list.) 
GitHub

6) APIs / server actions
6.1 /api/ingest (POST)
Accept CSV/JSON payload (your directory template).

For each row:

If lat/lng missing, optionally geocode with Mapbox; else skip geocoding.

upsert Listing + Category relations.

Recalculate planWeight by planCode.

After commit, reindex Typesense (call indexer or queue).

6.2 /api/search (GET) — optional
If you prefer a server endpoint (instead of calling Typesense from RSC), proxy search with your API key and return results.

6.3 /api/lead (POST)
Validate required fields + TCPA consent checkboxes.

Save Lead with consentTs, ip, and UTMs.

Notify listing owner (email) & optional SMS.

Rate-limit by IP (Redis/Vercel KV if you want).

7) Claim flow + Stripe
7.1 Start claim
On listing page, Claim button opens modal → select plan (BASIC, FEATURED, SPONSORED).

Create Stripe Checkout Session with selected price.

Redirect to success_url /claim/success?listing=<id>.

7.2 Webhook
Handle checkout.session.completed and customer.subscription.updated:

Find listing by ownerId or metadata.

Set planCode and planWeight (e.g., FEATURED → 50, SPONSORED → 100).

Reindex single doc in Typesense.

(Use the starter’s existing Stripe/Auth plumbing; Next.js official SaaS starter shows subscription + webhook patterns.) 
GitHub

8) Mapbox component (client)
Create components/map/Map.tsx (SSR-safe client component) and import in /[city]/[category]/page.tsx. Use the token from NEXT_PUBLIC_MAPBOX_TOKEN, draw pins from Typesense results (lat/lng). For a minimal App Router + shadcn implementation, mirror the next-maps approach. 
GitHub
DEV Community

9) Vertical config (schema-driven)
Add packages/config/medspa.ts:

ts
Copy
Edit
export default {
  vertical: "medspa",
  taxonomy: {
    categories: [
      { slug: "botox", label: "Botox" },
      { slug: "fillers", label: "Fillers" },
      { slug: "coolsculpting", label: "CoolSculpting" },
      { slug: "laser-resurfacing", label: "Laser Resurfacing" }
    ],
    facets: [
      { key: "brands", label: "Brands", options: ["Allergan","Galderma","Merz"] },
      { key: "financing", label: "Financing", options: ["CareCredit","Cherry","In-house"] },
      { key: "rating", label: "Rating", type: "range", min: 1, max: 5 },
      { key: "distance", label: "Distance", type: "radius", defaultMi: 15 }
    ]
  },
  copy: {
    heroTitle: "Find top medspas near you",
    claimCta: "Own this business? Claim your listing"
  }
} as const;
Load by host/ENV in lib/config.ts.

10) ENV (single list for the AI)
ini
Copy
Edit
# DB
DATABASE_URL=postgres://<neon-user>:<pass>@<neon-host>/<db>?sslmode=require

# Auth/NextAuth (from starter)
AUTH_SECRET=...
NEXTAUTH_URL=https://<your-domain>

# Stripe
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_PRICE_BASIC=price_xxx
STRIPE_PRICE_FEATURED=price_xxx
STRIPE_PRICE_SPONSORED=price_xxx

# Typesense
TYPESENSE_HOST=https://<cluster>.typesense.net
TYPESENSE_API_KEY=ts_xxx
TYPESENSE_SEARCH_ONLY_KEY=ts_search_xxx

# Mapbox
NEXT_PUBLIC_MAPBOX_TOKEN=pk_xxx
11) Acceptance checklist (Definition of Done)
 Import of seed CSV writes to Neon and indexes to Typesense (no manual DB edits).

 /[city]/[category] renders: list + map pins; facet filters work; Featured/Sponsored appear first.

 /listing/[slug] shows ClaimBanner if unclaimed.

 Claim → Stripe Checkout → webhook updates planCode and planWeight; page now shows badge and top placement on category page.

 /api/lead validates TCPA consent and rate-limits; leads persist.

 Map interactivity works (token, pins, popup with name + “Book/Claim”).

 Typesense query latency ~<150ms typical.

 Deployed on Vercel; environment vars set; basic CI passes.

12) References you can follow (why these choices)
Neon + Prisma + Stripe + Auth starter (our base): GitHub & docs. 
GitHub
SaaS Starter

Typesense geosearch / geo demo (geopoint field, radius, facets, Next.js example). 
Typesense
+1

Mapbox for Next.js (App Router + shadcn example via next-maps; general integration guides). 
GitHub
DEV Community

Neon + Prisma guides (connection & pooling). 
Neon
Prisma

Next.js SaaS Starter (official reference for Stripe subscriptions/webhooks patterns).