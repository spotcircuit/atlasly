import { Metadata } from 'next';
import Link from 'next/link';
import { getCurrentVertical } from '@/config/verticals';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Search, 
  TrendingUp,
  Sparkles,
  Heart,
  Zap,
  Syringe,
  Users,
  ArrowRight
} from 'lucide-react';

const vertical = getCurrentVertical();

export const metadata: Metadata = {
  title: 'Browse MedSpas by City & Treatment | MedSpa Directory',
  description: 'Find medical spas and aesthetic clinics near you. Browse by city, treatment type, or search for specific services.',
};

export default function DirectoryPage() {
  // Popular cities from config
  const popularCities = vertical.locations.filter(loc => loc.featured);
  
  // Get categories with icons
  const treatmentCategories = vertical.categories;

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Browse MedSpa Directory
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Find the perfect medical spa for your aesthetic needs. Browse by location or treatment type.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Search Section */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <Search className="mb-4 h-12 w-12 text-purple-600" />
              <h2 className="mb-2 text-xl font-semibold">Quick Search</h2>
              <p className="mb-6 text-gray-600">
                Know what you're looking for? Jump directly to popular searches.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild variant="outline" className="border-purple-200 hover:bg-purple-50">
                  <Link href="/directory/new-york/botox-dysport">
                    Botox in New York
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-purple-200 hover:bg-purple-50">
                  <Link href="/directory/los-angeles/dermal-fillers">
                    Fillers in Los Angeles
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-purple-200 hover:bg-purple-50">
                  <Link href="/directory/miami/laser-treatments">
                    Laser in Miami
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Browse by Treatment */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Browse by Treatment
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {treatmentCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.slug}
                  className="group cursor-pointer border-gray-200 transition-all hover:border-purple-300 hover:shadow-md"
                >
                  <Link href={`/directory/new-york/${category.slug}`}>
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 to-pink-100">
                        {IconComponent && <IconComponent className="h-6 w-6 text-purple-600" />}
                      </div>
                      <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-purple-600">
                        {category.label}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {category.description}
                      </p>
                      <div className="mt-4 flex items-center text-sm text-purple-600">
                        Browse listings
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Browse by City */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Popular Cities
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularCities.map((city) => (
              <Card 
                key={city.slug}
                className="group cursor-pointer border-gray-200 transition-all hover:border-purple-300 hover:shadow-md"
              >
                <Link href={`/directory/${city.slug}/botox-dysport`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-purple-600" />
                          <h3 className="font-semibold text-gray-900 group-hover:text-purple-600">
                            {city.name}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600">
                          {city.state}
                        </p>
                      </div>
                      {city.featured && (
                        <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                          Popular
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          {/* View All Cities Link */}
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/cities">
                View All Cities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="mt-12 border-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <CardContent className="p-8 text-center">
            <Sparkles className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-2 text-2xl font-bold">
              Can't Find Your MedSpa?
            </h2>
            <p className="mb-6 text-white/90">
              List your medical spa for free and reach thousands of potential clients
            </p>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/pricing">
                Add Your MedSpa
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}