# Prisma + Neon

Prisma schema lives in `web/prisma/schema.prisma`. Datasource uses `DATABASE_URL`.

## Commands (run from project root with Cwd to web or use --schema)
```powershell
# Preferred: run with Cwd = web
# Cwd: c:\Users\Big Daddy Pyatt\CascadeProjects\atlasly\web
npx prisma generate
npx prisma migrate dev --name init

# Alternative from root
npx prisma generate --schema .\web\prisma\schema.prisma
npx prisma migrate dev --name init --schema .\web\prisma\schema.prisma
```

## Troubleshooting
- Error `Environment variable not found: DATABASE_URL` → ensure commands are run from `web/` so `.env` is loaded, or pass `--schema` and ensure the env is accessible to the shell.
- On Windows CRLF warnings are harmless. To standardize:
```powershell
git config core.autocrlf true
```

## Models (summary)
- `Listing`, `Category`, `ListingCategory` (join), `Lead`
- `Listing.planWeight` ranks Featured/Sponsored higher in search
- `Listing.claimStatus` (UNCLAIMED, PENDING, VERIFIED)

See full schema in `web/prisma/schema.prisma`.
