import { Metadata } from "next";
import SearchHero from "@/components/sections/search-hero";
import FeaturedListings from "@/components/sections/featured-listings";
import CategoryGrid from "@/components/sections/category-grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Shield, Clock } from "lucide-react";
import Link from "next/link";
import { getCurrentVertical } from "@/config/verticals";

const vertical = getCurrentVertical();

export const metadata: Metadata = {
  title: vertical.seo.title,
  description: vertical.seo.description,
  keywords: vertical.seo.keywords.join(", "),
  openGraph: {
    title: vertical.seo.title,
    description: vertical.seo.description,
    type: "website",
  },
};

// Structured data for the homepage
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": vertical.name,
  "description": vertical.description,
  "url": process.env.NEXT_PUBLIC_APP_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${process.env.NEXT_PUBLIC_APP_URL}/directory/{city}/{category}?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

const stats = [
  {
    icon: TrendingUp,
    value: "5,000+",
    label: "MedSpas Listed",
    description: "Verified clinics"
  },
  {
    icon: Users,
    value: "500K+",
    label: "Monthly Searches",
    description: "Active patients"
  },
  {
    icon: Shield,
    value: "100%",
    label: "Verified",
    description: "Licensed providers"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Booking",
    description: "Online consultations"
  },
];

export default function HomePage() {
  const config = vertical.content.homepage || {};
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {config.showHero !== false && <SearchHero />}
      
      {config.showFeaturedListings !== false && <FeaturedListings />}
      
      {config.showCategories !== false && <CategoryGrid />}
      
      {/* Stats Section */}
      {config.showStats !== false && (
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-base font-semibold text-gray-800">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      )}

      {/* CTA Section for Businesses */}
      <section 
        className="py-12 text-white sm:py-16"
        style={{ background: vertical.branding?.gradients?.secondary || "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Grow Your Business
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
            Join thousands of businesses already connecting with customers. 
            Claim your listing and stand out with premium placement.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              <Link href="/pricing">
                Claim Your Business
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/dashboard">
                Business Login
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Why Choose Our Directory
            </h2>
            <p className="mt-4 text-base font-medium text-gray-700 sm:text-lg">
              We connect patients with verified medical spas and aesthetic clinics
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-purple-200 bg-purple-50/50">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">Verified Listings</h3>
                <p className="text-sm font-medium text-gray-700">
                  All MedSpas are verified to ensure accurate information and legitimate operations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 bg-purple-50/50">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">Real Reviews</h3>
                <p className="text-sm font-medium text-gray-700">
                  Authentic patient reviews help you make informed decisions about treatments.
                </p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 bg-purple-50/50">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">Easy Discovery</h3>
                <p className="text-sm font-medium text-gray-700">
                  Advanced search and filtering makes finding the right MedSpa quick and simple.
                </p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 bg-purple-50/50">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">Mobile Friendly</h3>
                <p className="text-sm font-medium text-gray-700">
                  Access MedSpa information on any device, with click-to-call and directions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 bg-purple-50/50">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">Lead Generation</h3>
                <p className="text-sm font-medium text-gray-700">
                  MedSpas receive qualified patient inquiries directly from interested customers.
                </p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 bg-purple-50/50">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">Premium Placement</h3>
                <p className="text-sm font-medium text-gray-700">
                  Featured listings get priority placement and enhanced visibility in search results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Activity / Social Proof */}
      <section className="border-t bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center text-xs text-gray-600">
            <span>💉 12 people booking Botox consultations</span>
            <span>✨ 89 MedSpas verified this week</span>
            <span>⭐ 423 treatment reviews today</span>
            <span>📍 Trusted clinics in 50+ cities</span>
          </div>
        </div>
      </section>
    </>
  );
}