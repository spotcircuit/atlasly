# Setup (Windows + Vercel)

This project is a monorepo with the Next.js app in `web/`.

## Requirements
- Node.js (use nvm-windows or the standard installer)
- npm (bundled with Node)
- Git for Windows
- PowerShell

## Clone & install
```powershell
# From your workspace directory
git clone https://github.com/spotcircuit/atlasly.git
# App lives in web/
# Install dependencies
npm install --prefix .\web
```

## Environment variables
Create `web\.env` (do NOT commit). Use `web\.env.example` as a reference.

Minimum to run locally:
- Database (Neon): `DATABASE_URL`
- Mapbox: `NEXT_PUBLIC_MAPBOX_TOKEN`
- Auth (for starter): `AUTH_SECRET`, `NEXTAUTH_URL`
- Optional now, required later: Stripe, Typesense

Example (do not paste secrets into Git):
```ini
DATABASE_URL=postgres://<user>:<pass>@<host>/<db>?sslmode=require
NEXT_PUBLIC_MAPBOX_TOKEN=pk_xxx
```

## Vercel project
- Root Directory: `web`
- Build Command: `npm run build`
- Output Directory: `.next`
- Add all environment variables from `web/.env.example` (with real values) in Vercel → Settings → Environment Variables

## Run locally
```powershell
# Start dev server
npm run dev --prefix .\web
# Generate Prisma client and apply migrations
npm run prisma:generate --prefix .\web  # if script exists
# or
npx prisma generate --schema .\web\prisma\schema.prisma
npx prisma migrate dev --name init --schema .\web\prisma\schema.prisma
```
