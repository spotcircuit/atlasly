import { Metadata } from 'next';
import Map, { type Marker } from '@/components/map/Map';
import { searchListings } from '@/lib/search';
import { getCurrentVertical } from '@/config/verticals';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { 
  MapPin, 
  Star, 
  Filter, 
  Search,
  Grid,
  List,
  TrendingUp,
  Phone,
  Globe,
  Calendar
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: { city: string; category: string };
  searchParams?: Record<string, string | string[]>;
};

const vertical = getCurrentVertical();

// Format city name for display
function formatCityName(slug: string): string {
  return slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

// Format category name
function formatCategoryName(slug: string): string {
  const category = vertical.categories.find(cat => cat.slug === slug);
  return category?.label || slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cityName = formatCityName(params.city);
  const categoryName = formatCategoryName(params.category);
  
  return {
    title: `${categoryName} in ${cityName} | Find Top MedSpas & Aesthetic Clinics`,
    description: `Discover the best ${categoryName.toLowerCase()} providers in ${cityName}. Compare prices, read reviews, and book consultations with verified medical spas.`,
    openGraph: {
      title: `${categoryName} in ${cityName}`,
      description: `Find and compare top-rated medical spas offering ${categoryName.toLowerCase()} in ${cityName}.`,
      type: 'website',
    },
  };
}

export default async function DirectoryPage({ params, searchParams }: PageProps) {
  const q = (searchParams?.q as string) || undefined;
  const brands = (searchParams?.brands as string)?.split(',').filter(Boolean);
  const financing = (searchParams?.financing as string)?.split(',').filter(Boolean);
  const rating = searchParams?.rating ? Number(searchParams.rating) : undefined;
  const lat = searchParams?.lat ? Number(searchParams.lat) : undefined;
  const lng = searchParams?.lng ? Number(searchParams.lng) : undefined;
  const sort = (searchParams?.sort as string) || 'relevance';

  const result = await searchListings({
    q,
    city: params.city,
    facets: {
      categories: [params.category],
      brands,
      financing,
      rating,
    },
    lat,
    lng,
    radiusMeters: 24000,
    page: 1,
  });

  const hits: any[] = result.hits || [];
  const markers: Marker[] = hits
    .map((h) => h.document)
    .filter((d: any) => d.lat != null && d.lng != null)
    .map((d: any) => ({ id: d.id, name: d.name, lat: d.lat, lng: d.lng }));

  const cityName = formatCityName(params.city);
  const categoryName = formatCategoryName(params.category);

  // Get facet options from config
  const brandOptions = vertical.facets.find(f => f.key === 'brands')?.options || [];
  const financingOptions = vertical.facets.find(f => f.key === 'financing')?.options || [];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {categoryName} in {cityName}
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              {hits.length} verified medical spas offering {categoryName.toLowerCase()} treatments
            </p>
            
            {/* Search Bar */}
            <div className="mt-6 flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder={`Search ${categoryName.toLowerCase()} providers...`}
                  defaultValue={q}
                  className="pl-10"
                />
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <Card>
              <CardContent className="p-4">
                <div className="mb-4 flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <h3 className="font-semibold">Filters</h3>
                </div>
                
                <div className="space-y-4">
                  {/* Sort */}
                  <div>
                    <label className="text-sm font-medium">Sort By</label>
                    <Select defaultValue={sort}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="relevance">Most Relevant</SelectItem>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                        <SelectItem value="reviews">Most Reviews</SelectItem>
                        <SelectItem value="nearest">Nearest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Rating Filter */}
                  <div>
                    <label className="text-sm font-medium">Minimum Rating</label>
                    <div className="mt-2 space-y-2">
                      {[4.5, 4.0, 3.5, 3.0].map((r) => (
                        <label key={r} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="rating"
                            value={r}
                            defaultChecked={rating === r}
                            className="text-purple-600"
                          />
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{r}+ stars</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Brands Filter */}
                  <div>
                    <label className="text-sm font-medium">Product Brands</label>
                    <div className="mt-2 space-y-2">
                      {brandOptions.map((brand: { value: string; label: string }) => (
                        <label key={brand.value} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            value={brand.value}
                            defaultChecked={brands?.includes(brand.value)}
                            className="text-purple-600"
                          />
                          <span className="text-sm">{brand.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Financing Filter */}
                  <div>
                    <label className="text-sm font-medium">Financing</label>
                    <div className="mt-2 space-y-2">
                      {financingOptions.map((option: { value: string; label: string }) => (
                        <label key={option.value} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            value={option.value}
                            defaultChecked={financing?.includes(option.value)}
                            className="text-purple-600"
                          />
                          <span className="text-sm">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" variant="outline">
                    Clear Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Map */}
            <Card>
              <Map 
                markers={markers} 
                className="h-[400px] w-full overflow-hidden rounded-lg" 
              />
            </Card>

            {/* Results Count & View Toggle */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing {hits.length} results
                {q && ` for "${q}"`}
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Grid className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Listings Grid */}
            <div className="grid gap-4 md:grid-cols-2">
              {hits.map((h) => {
                const d = h.document as any;
                return (
                  <Card key={d.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <Link href={`/listing/${d.slug}`}>
                      {/* Image */}
                      <div className="relative h-48 bg-gray-100">
                        {d.imageUrl ? (
                          <Image
                            src={d.imageUrl}
                            alt={d.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
                            <span className="text-4xl font-bold text-purple-300">
                              {d.name.charAt(0)}
                            </span>
                          </div>
                        )}
                        {d.planCode && (
                          <Badge className="absolute right-2 top-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                            {d.planCode === 'SPONSORED' ? (
                              <>
                                <TrendingUp className="mr-1 h-3 w-3" />
                                Sponsored
                              </>
                            ) : d.planCode === 'FEATURED' ? (
                              <>
                                <Star className="mr-1 h-3 w-3" />
                                Featured
                              </>
                            ) : 'Verified'}
                          </Badge>
                        )}
                      </div>

                      <CardContent className="p-4">
                        <div className="mb-2">
                          <h3 className="font-semibold text-gray-900 hover:text-purple-600">
                            {d.name}
                          </h3>
                          <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                            <MapPin className="h-3 w-3" />
                            <span>{d.city}</span>
                            {d.distance && (
                              <>
                                <span>•</span>
                                <span>{(d.distance / 1609.34).toFixed(1)} mi</span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Rating */}
                        {typeof d.rating === 'number' && (
                          <div className="mb-3 flex items-center gap-2">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="ml-1 font-medium">{d.rating.toFixed(1)}</span>
                            </div>
                            <span className="text-sm text-gray-500">
                              ({d.reviewCount || 0} reviews)
                            </span>
                          </div>
                        )}

                        {/* Categories */}
                        {Array.isArray(d.categories) && d.categories.length > 0 && (
                          <div className="mb-3 flex flex-wrap gap-1">
                            {d.categories.slice(0, 3).map((cat: string) => (
                              <Badge key={cat} variant="secondary" className="text-xs">
                                {cat}
                              </Badge>
                            ))}
                          </div>
                        )}

                        {/* Quick Actions */}
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Phone className="mr-1 h-3 w-3" />
                            Call
                          </Button>
                          <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                            <Calendar className="mr-1 h-3 w-3" />
                            Book
                          </Button>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                );
              })}
            </div>

            {/* No Results */}
            {hits.length === 0 && (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-gray-500">No MedSpas found matching your criteria.</p>
                  <Button className="mt-4" variant="outline">
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Pagination */}
            {hits.length > 0 && (
              <div className="flex justify-center gap-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="outline" className="bg-purple-600 text-white hover:bg-purple-700">
                  1
                </Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}