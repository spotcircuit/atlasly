import Link from "next/link";
import { Star, MapPin, Badge, TrendingUp, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge as UIBadge } from "@/components/ui/badge";
import { getCurrentVertical } from "@/config/verticals";
import Image from "next/image";

interface Listing {
  id: string;
  name: string;
  slug: string;
  description?: string;
  city: string;
  state: string;
  rating?: number;
  reviewCount?: number;
  categories: string[];
  planCode?: string;
  imageUrl?: string;
}

interface FeaturedListingsProps {
  title?: string;
  subtitle?: string;
  listings?: Listing[];
}

const defaultListings: Listing[] = [
  {
    id: "1",
    name: "Elite Aesthetics New York",
    slug: "elite-aesthetics-ny",
    description: "Premium Botox and dermal filler treatments with expert injectors",
    city: "New York",
    state: "NY",
    rating: 4.8,
    reviewCount: 234,
    categories: ["Botox", "Fillers"],
    planCode: "SPONSORED",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop", // Medical spa interior
  },
  {
    id: "2",
    name: "Radiance MedSpa Los Angeles",
    slug: "radiance-medspa-la",
    description: "Advanced laser treatments and body contouring services",
    city: "Los Angeles",
    state: "CA",
    rating: 4.6,
    reviewCount: 189,
    categories: ["Laser", "Body"],
    planCode: "FEATURED",
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop", // Spa treatment room
  },
  {
    id: "3",
    name: "Luxe Aesthetics Chicago",
    slug: "luxe-aesthetics-chicago",
    description: "Complete medical spa services with state-of-the-art technology",
    city: "Chicago",
    state: "IL",
    rating: 4.9,
    reviewCount: 156,
    categories: ["Aesthetics", "Wellness"],
    planCode: "FEATURED",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop", // Modern medical facility
  },
];

export default function FeaturedListings({
  title = "Featured Businesses",
  subtitle = "Top-rated businesses in your area",
  listings = defaultListings,
}: FeaturedListingsProps) {
  const vertical = getCurrentVertical();
  const getPlanBadge = (planCode?: string) => {
    switch (planCode) {
      case "SPONSORED":
        return (
          <UIBadge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <TrendingUp className="mr-1 h-3 w-3" />
            Sponsored
          </UIBadge>
        );
      case "FEATURED":
        return (
          <UIBadge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
            <Star className="mr-1 h-3 w-3" />
            Featured
          </UIBadge>
        );
      default:
        return null;
    }
  };

  const sectionStyle = vertical.branding?.gradients?.dark 
    ? { background: vertical.branding.gradients.dark }
    : {};

  return (
    <section className="py-12 sm:py-16" style={sectionStyle}>
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-sm text-white/80">{subtitle}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <Card
              key={listing.id}
              className="group relative overflow-hidden bg-white transition-shadow hover:shadow-lg"
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
              <Link href={`/listing/${listing.slug}`}>
                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  {listing.imageUrl ? (
                    <Image
                      src={listing.imageUrl}
                      alt={listing.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
                      <Camera className="h-12 w-12 text-purple-300" />
                    </div>
                  )}
                  {listing.planCode && (
                    <div className="absolute right-2 top-2 z-10">
                      {getPlanBadge(listing.planCode)}
                    </div>
                  )}
                </div>

                <CardContent className="p-4">
                  <div className="mb-3">
                    <h3
                      className="text-lg font-semibold text-gray-900 group-hover:text-purple-600"
                      itemProp="name"
                    >
                      {listing.name}
                    </h3>
                    <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                      <MapPin className="h-3 w-3" />
                      <span itemProp="address">
                        {listing.city}, {listing.state}
                      </span>
                    </div>
                  </div>

                  {listing.description && (
                    <p
                      className="mb-3 line-clamp-2 text-sm text-gray-600"
                      itemProp="description"
                    >
                      {listing.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {listing.categories.slice(0, 2).map((category) => (
                        <span
                          key={category}
                          className="inline-block rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-700"
                        >
                          {category}
                        </span>
                      ))}
                    </div>

                    {listing.rating && (
                      <div
                        className="flex items-center gap-1"
                        itemProp="aggregateRating"
                        itemScope
                        itemType="https://schema.org/AggregateRating"
                      >
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span
                          className="text-sm font-medium text-gray-900"
                          itemProp="ratingValue"
                        >
                          {listing.rating}
                        </span>
                        <span className="text-xs text-gray-500">
                          (<span itemProp="reviewCount">{listing.reviewCount}</span>)
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/directory"
            className="inline-flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors"
          >
            View all businesses
            <span className="ml-1" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}