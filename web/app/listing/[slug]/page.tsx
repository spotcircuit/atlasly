import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: { slug: string };
};

export default async function ListingPage({ params }: PageProps) {
  const listing = await prisma.listing.findUnique({
    where: { slug: params.slug },
    include: { categories: { include: { category: true } } },
  });

  if (!listing) {
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-xl font-semibold">Listing not found</h1>
        <p className="text-sm text-muted-foreground">We couldn't find this listing.</p>
      </div>
    );
  }

  const cats = listing.categories.map((c) => c.category.label);

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      {listing.claimStatus !== 'VERIFIED' && (
        <div className="rounded-md border bg-amber-50 text-amber-900 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Is this your business?</p>
              <p className="text-sm">Claim this page to update details and appear higher in search.</p>
            </div>
            <a href="/pricing" className="inline-flex items-center px-4 py-2 border rounded-md hover:bg-amber-100">Claim</a>
          </div>
        </div>
      )}

      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">{listing.name}</h1>
        <div className="text-sm text-muted-foreground">{listing.city}, {listing.state}</div>
        {cats.length > 0 && (
          <div className="text-sm text-muted-foreground">{cats.join(' • ')}</div>
        )}
      </div>

      {listing.description && (
        <div>
          <h2 className="text-lg font-medium mb-2">About</h2>
          <p className="text-sm leading-6 whitespace-pre-line">{listing.description}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h3 className="font-medium">Contact</h3>
          {listing.phone && <div className="text-sm">📞 {listing.phone}</div>}
          {listing.email && <div className="text-sm">✉️ {listing.email}</div>}
          {listing.website && (
            <div className="text-sm">
              🔗 <a className="underline" href={listing.website} target="_blank" rel="noreferrer">Website</a>
            </div>
          )}
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Address</h3>
          <div className="text-sm whitespace-pre-line">
            {listing.address}
            <br />
            {listing.city}, {listing.state} {listing.postalCode}
          </div>
        </div>
      </div>
    </div>
  );
}
