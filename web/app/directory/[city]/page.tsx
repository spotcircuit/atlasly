import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Star, 
  TrendingUp, 
  ChevronRight,
  Building2,
  Search,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { getCurrentVertical } from "@/config/verticals";

const vertical = getCurrentVertical();

// Format city name for display
function formatCityName(slug: string): string {
  return slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const cityName = formatCityName(params.city);
  
  return {
    title: `MedSpas in ${cityName} | Find Top Medical Spas & Aesthetic Clinics`,
    description: `Browse all medical spas and aesthetic clinics in ${cityName}. Compare treatments, read reviews, and book consultations with verified providers.`,
    openGraph: {
      title: `MedSpas in ${cityName}`,
      description: `Find and compare top-rated medical spas in ${cityName}.`,
      type: 'website',
    },
  };
}

export default async function CityDirectoryPage({ params }: { params: { city: string } }) {
  const cityName = formatCityName(params.city);
  
  // Get categories from vertical config
  const categories = vertical.categories;
  
  // Mock featured listings - would come from database
  const featuredListings = [
    {
      id: "1",
      slug: "elite-aesthetics-ny",
      name: "Elite Aesthetics New York",
      address: "750 Park Avenue",
      rating: 4.9,
      reviewCount: 342,
      imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop",
      categories: ["Botox & Dysport", "Dermal Fillers"],
      planCode: "SPONSORED"
    },
    {
      id: "2",
      slug: "manhattan-medspa",
      name: "Manhattan Medical Spa",
      address: "1250 Broadway",
      rating: 4.7,
      reviewCount: 256,
      imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
      categories: ["Laser Treatments", "Chemical Peels"],
      planCode: "FEATURED"
    },
    {
      id: "3",
      slug: "tribeca-wellness-spa",
      name: "Tribeca Wellness & Beauty",
      address: "88 Franklin Street",
      rating: 4.8,
      reviewCount: 189,
      categories: ["Microneedling", "IV Therapy"],
      planCode: null
    }
  ];

  // Mock stats - would be calculated from database
  const stats = {
    totalListings: 127,
    averageRating: 4.6,
    totalReviews: 3420,
    topCategory: "Botox & Dysport"
  };

  const heroStyle = vertical.branding?.gradients?.primary
    ? { background: vertical.branding.gradients.primary }
    : {};

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20" style={heroStyle}>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              MedSpas in {cityName}
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Discover {stats.totalListings}+ medical spas and aesthetic clinics in {cityName}
            </p>
            
            {/* Search Bar */}
            <div className="mx-auto mt-8 max-w-2xl">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-purple-400" />
                  <Input
                    type="text"
                    placeholder={`Search MedSpas in ${cityName}...`}
                    className="h-12 border-white/30 bg-white/90 pl-10 backdrop-blur-sm focus:bg-white focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <Button className="h-12 bg-white text-purple-600 hover:bg-white/90">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-gradient-to-br from-purple-50 to-pink-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-3xl font-bold text-purple-600">{stats.totalListings}</div>
              <div className="mt-1 text-sm text-gray-600">Medical Spas</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-3xl font-bold text-purple-600">
                <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                {stats.averageRating}
              </div>
              <div className="mt-1 text-sm text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">{stats.totalReviews.toLocaleString()}</div>
              <div className="mt-1 text-sm text-gray-600">Total Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">{stats.topCategory}</div>
              <div className="mt-1 text-sm text-gray-600">Most Popular Treatment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <p className="mt-2 text-gray-600">
              Find MedSpas in {cityName} specializing in your preferred treatments
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon ?? Star;
              return (
                <Link
                  key={category.slug}
                  href={`/directory/${params.city}/${category.slug}`}
                  className="group"
                >
                  <Card className="transition-all hover:shadow-lg hover:border-purple-300">
                    <CardContent className="p-6">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200">
                        <Icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="font-semibold group-hover:text-purple-600">
                        {category.label}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {Math.floor(Math.random() * 30) + 10} providers
                      </p>
                      <div className="mt-3 flex items-center text-sm text-purple-600">
                        View all
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* Featured Listings */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">Featured MedSpas in {cityName}</h2>
            <p className="mt-2 text-gray-600">
              Top-rated medical spas and aesthetic clinics
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredListings.map((listing) => (
              <Link key={listing.id} href={`/listing/${listing.slug}`}>
                <Card className="overflow-hidden transition-all hover:shadow-xl">
                  {/* Image */}
                  <div className="relative h-48">
                    {listing.imageUrl ? (
                      <Image
                        src={listing.imageUrl}
                        alt={listing.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
                        <Building2 className="h-12 w-12 text-purple-300" />
                      </div>
                    )}
                    {listing.planCode && (
                      <Badge className="absolute right-2 top-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        {listing.planCode === 'SPONSORED' ? (
                          <>
                            <TrendingUp className="mr-1 h-3 w-3" />
                            Sponsored
                          </>
                        ) : listing.planCode === 'FEATURED' ? (
                          <>
                            <Star className="mr-1 h-3 w-3" />
                            Featured
                          </>
                        ) : 'Verified'}
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 hover:text-purple-600">
                      {listing.name}
                    </h3>
                    <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-3 w-3" />
                      <span>{listing.address}</span>
                    </div>

                    {/* Rating */}
                    {listing.rating && (
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 font-medium">{listing.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">
                          ({listing.reviewCount} reviews)
                        </span>
                      </div>
                    )}

                    {/* Categories */}
                    {listing.categories && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {listing.categories.slice(0, 2).map((cat) => (
                          <Badge key={cat} variant="secondary" className="text-xs">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              View All {stats.totalListings} MedSpas
            </Button>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">Popular Neighborhoods</h2>
            <p className="mt-2 text-gray-600">
              Explore MedSpas by neighborhood in {cityName}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Mock neighborhoods - would be dynamic */}
            {['Downtown', 'Midtown', 'Upper East Side', 'Financial District', 'Tribeca', 'SoHo', 'Chelsea', 'Greenwich Village'].map((neighborhood) => (
              <Link
                key={neighborhood}
                href={`/directory/${params.city}?neighborhood=${neighborhood.toLowerCase().replace(' ', '-')}`}
                className="group"
              >
                <Card className="transition-all hover:shadow-md hover:border-purple-300">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium group-hover:text-purple-600">{neighborhood}</h4>
                        <p className="text-sm text-gray-500">
                          {Math.floor(Math.random() * 20) + 5} MedSpas
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-gradient-to-br from-purple-600 to-pink-600 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Own a MedSpa in {cityName}?</h2>
          <p className="mt-4 text-lg text-white/90">
            Claim your listing and connect with thousands of potential customers
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
              Claim Your Listing
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}