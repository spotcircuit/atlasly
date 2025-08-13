# Deployment (Vercel)

## Project settings
- Root Directory: `web`
- Framework preset: Next.js
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `.next`

## Environment variables (Vercel → Settings → Environment Variables)
Copy keys from `web/.env.example` and your local `web/.env` (no secrets in Git). Minimum:
- `DATABASE_URL`
- `NEXT_PUBLIC_MAPBOX_TOKEN`
- Stripe keys if enabling Checkout/webhooks
- Typesense keys if enabling search in production

## Link & deploy
```powershell
# From repo root, create/link project pointing to web/
vercel --cwd web
# After linking, push to GitHub triggers deployments automatically
```

## Domains
Configure in Vercel → Domains. Set `NEXTAUTH_URL` to the production URL.
