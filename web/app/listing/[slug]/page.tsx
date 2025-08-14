import { Metadata } from 'next';
import { prisma } from '@/lib/db';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Star, 
  CheckCircle,
  Calendar,
  DollarSign,
  Shield,
  Award,
  Heart,
  Users,
  Camera
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getCurrentVertical } from '@/config/verticals';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: { slug: string };
};

const vertical = getCurrentVertical();

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const listing = await prisma.listing.findUnique({
    where: { slug: params.slug },
  });

  if (!listing) {
    return {
      title: 'MedSpa Not Found',
    };
  }

  return {
    title: `${listing.name} - ${listing.city}, ${listing.state} | MedSpa Directory`,
    description: listing.description || `Find information, reviews, and contact details for ${listing.name} in ${listing.city}, ${listing.state}. Book consultations for Botox, fillers, and aesthetic treatments.`,
    openGraph: {
      title: listing.name,
      description: listing.description || `${listing.name} - Medical Spa in ${listing.city}, ${listing.state}`,
      type: 'website',
    },
  };
}

export default async function ListingPage({ params }: PageProps) {
  const listing = await prisma.listing.findUnique({
    where: { slug: params.slug },
    include: { categories: { include: { category: true } } },
  });

  if (!listing) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="mx-auto max-w-md">
            <h1 className="text-3xl font-bold text-gray-900">MedSpa Not Found</h1>
            <p className="mt-4 text-gray-600">We couldn't find this medical spa listing.</p>
            <Button asChild className="mt-6">
              <Link href="/directory">Browse All MedSpas</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const cats = listing.categories.map((c) => c.category.label);

  // Generate structured data for SEO
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: listing.name,
    description: listing.description,
    url: `${process.env.NEXT_PUBLIC_APP_URL}/listing/${listing.slug}`,
    telephone: listing.phone,
    email: listing.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: listing.address,
      addressLocality: listing.city,
      addressRegion: listing.state,
      postalCode: listing.postalCode,
      addressCountry: listing.country,
    },
    ...(listing.lat && listing.lng && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: listing.lat,
        longitude: listing.lng,
      }
    }),
    ...(listing.rating && listing.reviewCount && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: listing.rating,
        reviewCount: listing.reviewCount,
      }
    })
  };

  // Placeholder services (would come from database)
  const services = [
    { name: "Botox", price: "From $350" },
    { name: "Dermal Fillers", price: "From $650" },
    { name: "Laser Hair Removal", price: "From $200" },
    { name: "Chemical Peels", price: "From $150" },
    { name: "Microneedling", price: "From $300" },
    { name: "IPL Photofacial", price: "From $400" },
  ];

  const amenities = [
    "Free Consultation",
    "Financing Available", 
    "Licensed Providers",
    "FDA Approved Treatments",
    "Private Treatment Rooms",
    "Same-Day Appointments"
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 py-8">
          {/* Claim Banner */}
          {listing.claimStatus !== 'VERIFIED' && (
            <Card className="mb-6 border-amber-200 bg-amber-50">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="font-semibold text-amber-900">Is this your MedSpa?</p>
                    <p className="text-sm text-amber-700">Claim this listing to update details, add photos, and respond to reviews.</p>
                  </div>
                  <Button asChild className="bg-amber-600 hover:bg-amber-700">
                    <Link href="/pricing">Claim This Business</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Main Header */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Business Info */}
            <div className="lg:col-span-2 space-y-4">
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{listing.name}</h1>
                    {listing.planCode && (
                      <Badge className="mt-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        {listing.planCode === 'SPONSORED' ? '⭐ Sponsored' : listing.planCode === 'FEATURED' ? '✨ Featured' : '✓ Verified'}
                      </Badge>
                    )}
                  </div>
                </div>
                
                {/* Rating */}
                {listing.rating && (
                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(listing.rating!) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-semibold">{listing.rating}</span>
                    <span className="text-gray-600">({listing.reviewCount} reviews)</span>
                  </div>
                )}

                {/* Categories */}
                {cats.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cats.map((cat) => (
                      <Badge key={cat} variant="secondary" className="bg-purple-100 text-purple-700">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Location */}
                <div className="mt-3 flex items-center text-gray-600">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{listing.city}, {listing.state}</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Consultation
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
                <Button size="lg" variant="outline">
                  <Globe className="mr-2 h-4 w-4" />
                  Visit Website
                </Button>
              </div>
            </div>

            {/* Image Gallery Placeholder */}
            <div className="lg:col-span-1">
              <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gray-100">
                {listing.imageUrl ? (
                  <Image
                    src={listing.imageUrl}
                    alt={listing.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
                    <Camera className="h-16 w-16 text-purple-300" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            {listing.description && (
              <Card>
                <CardHeader>
                  <CardTitle>About This MedSpa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {listing.description}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Services & Pricing */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Treatments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {services.map((service) => (
                    <div key={service.name} className="flex items-center justify-between rounded-lg border p-3">
                      <span className="font-medium">{service.name}</span>
                      <span className="text-sm text-purple-600">{service.price}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-gray-500">
                  * Prices are estimates. Contact the MedSpa for exact pricing and current promotions.
                </p>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Amenities & Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <Card>
              <CardHeader>
                <CardTitle>Patient Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <Users className="mx-auto h-12 w-12 text-gray-300" />
                  <p className="mt-4">No reviews yet</p>
                  <Button variant="outline" className="mt-4">
                    Write a Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact & Hours */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {listing.phone && (
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium">{listing.phone}</p>
                      <p className="text-xs text-gray-500">Call for appointment</p>
                    </div>
                  </div>
                )}
                
                {listing.email && (
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium">{listing.email}</p>
                      <p className="text-xs text-gray-500">Email inquiries</p>
                    </div>
                  </div>
                )}

                {listing.website && (
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <a 
                        href={listing.website} 
                        target="_blank" 
                        rel="noreferrer"
                        className="font-medium text-purple-600 hover:underline"
                      >
                        Visit Website
                      </a>
                      <p className="text-xs text-gray-500">Book online</p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-gray-600">
                      {listing.address}<br />
                      {listing.city}, {listing.state} {listing.postalCode}
                    </p>
                    <Button variant="link" className="px-0 text-purple-600">
                      Get Directions →
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card>
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-green-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">Open Now</span>
                </div>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-6 text-center">
                <Shield className="mx-auto h-12 w-12 text-purple-600" />
                <h3 className="mt-3 font-semibold">Verified MedSpa</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Licensed medical professionals<br />
                  FDA-approved treatments
                </p>
              </CardContent>
            </Card>

            {/* Lead Form CTA */}
            <Card className="bg-gradient-to-br from-purple-600 to-pink-600 text-white border-0">
              <CardContent className="p-6 text-center">
                <Heart className="mx-auto h-12 w-12" />
                <h3 className="mt-3 text-lg font-semibold">Special Offer</h3>
                <p className="mt-2 text-sm opacity-90">
                  Get 20% off your first treatment
                </p>
                <Button className="mt-4 w-full bg-white text-purple-600 hover:bg-gray-100">
                  Claim Offer
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}