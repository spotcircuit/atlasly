# Claim Flow + Stripe (Planned)

Status: Not implemented yet. Starter provides Stripe/Auth plumbing.

## Planned implementation
1. Add plan selection (BASIC, FEATURED, SPONSORED) on listing page.
2. Create Stripe Checkout Session for selected plan.
3. On success, store subscription → update `Listing.planCode` & `planWeight`.
4. Webhook handlers:
   - `checkout.session.completed`
   - `customer.subscription.updated`
5. Reindex listing document in Typesense with new `planWeight`.

## Env required
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- Price IDs: `STRIPE_PRICE_BASIC`, `STRIPE_PRICE_FEATURED`, `STRIPE_PRICE_SPONSORED`

See `web/.env.example`.
