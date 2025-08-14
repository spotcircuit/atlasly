import { Metadata } from "next";
import Link from "next/link";
import { 
  TrendingUp, 
  Star, 
  Target, 
  Eye,
  MousePointer,
  Users,
  BarChart3,
  Shield,
  Zap,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Megaphone,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getCurrentVertical } from "@/config/verticals";

const vertical = getCurrentVertical();

export const metadata: Metadata = {
  title: "Advertise Your MedSpa | Featured Listings & Sponsored Placements",
  description: "Boost your MedSpa's visibility with featured listings and sponsored placements. Reach thousands of potential patients actively searching for aesthetic treatments.",
  keywords: "medspa advertising, featured listings, sponsored placement, medical spa marketing, aesthetic clinic promotion",
  openGraph: {
    title: "Advertise Your MedSpa on Atlasly",
    description: "Increase your visibility and attract more patients with featured listings and targeted advertising.",
    type: "website",
  },
};

const advertisingOptions = [
  {
    name: "Featured Listing",
    icon: Star,
    description: "Stand out with premium placement in search results",
    price: "$99/month",
    benefits: [
      "Top placement in category pages",
      "Featured badge on listing",
      "2x more visibility",
      "Priority in search results",
      "Enhanced listing details"
    ],
    stats: {
      views: "+150%",
      clicks: "+200%",
      leads: "+85%"
    }
  },
  {
    name: "Sponsored Placement",
    icon: TrendingUp,
    description: "Appear at the top of search results and homepage",
    price: "$299/month",
    benefits: [
      "#1 position in search results",
      "Homepage featured section",
      "Sponsored badge",
      "3x more visibility",
      "Competitor-free zone",
      "Advanced analytics"
    ],
    stats: {
      views: "+300%",
      clicks: "+400%",
      leads: "+250%"
    }
  },
  {
    name: "Premium Campaign",
    icon: Megaphone,
    description: "Complete marketing solution with maximum exposure",
    price: "$599/month",
    benefits: [
      "All Featured benefits",
      "All Sponsored benefits",
      "Email marketing inclusion",
      "Social media promotion",
      "Blog feature article",
      "Video showcase",
      "Dedicated account manager"
    ],
    stats: {
      views: "+500%",
      clicks: "+600%",
      leads: "+400%"
    }
  }
];

const features = [
  {
    icon: Eye,
    title: "Maximum Visibility",
    description: "Get seen by thousands of patients actively searching for treatments"
  },
  {
    icon: Target,
    title: "Targeted Reach",
    description: "Appear to patients searching for your specific services and location"
  },
  {
    icon: MousePointer,
    title: "Higher Click Rates",
    description: "Featured listings get 3x more clicks than standard listings"
  },
  {
    icon: Users,
    title: "Quality Traffic",
    description: "Connect with pre-qualified patients ready to book"
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Monitor views, clicks, and conversions in real-time"
  },
  {
    icon: Shield,
    title: "Brand Authority",
    description: "Build trust with verified and featured status badges"
  }
];

const stats = {
  monthlySearches: "500K+",
  activeUsers: "200K+",
  averageROI: "450%",
  conversionRate: "12%"
};

export default function AdvertisePage() {
  const heroStyle = vertical.branding?.gradients?.primary
    ? { background: vertical.branding.gradients.primary }
    : {};

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20" style={heroStyle}>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-white/20 text-white">
              <Sparkles className="mr-1 h-3 w-3" />
              Grow Your Practice
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Advertise Your MedSpa to Thousands of Patients
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Boost your visibility with featured listings and sponsored placements. 
              Reach patients actively searching for aesthetic treatments in your area.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                Get Featured Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y bg-gradient-to-br from-purple-50 to-pink-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-3xl font-bold text-purple-600">{stats.monthlySearches}</div>
              <div className="mt-1 text-sm text-gray-600">Monthly Searches</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">{stats.activeUsers}</div>
              <div className="mt-1 text-sm text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">{stats.averageROI}</div>
              <div className="mt-1 text-sm text-gray-600">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">{stats.conversionRate}</div>
              <div className="mt-1 text-sm text-gray-600">Conversion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Advertising Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Choose Your Advertising Package</h2>
            <p className="mt-4 text-lg text-gray-600">
              Flexible options to fit your marketing goals and budget
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            {advertisingOptions.map((option, idx) => (
              <Card key={idx} className={idx === 1 ? "relative border-purple-400 shadow-xl" : ""}>
                {idx === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <option.icon className="h-10 w-10 text-purple-600" />
                  <CardTitle className="mt-4 text-2xl">{option.name}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-purple-600">{option.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="mb-3 text-sm font-semibold">Performance Boost:</p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="rounded bg-purple-50 p-2">
                        <p className="text-xs text-gray-600">Views</p>
                        <p className="font-bold text-purple-600">{option.stats.views}</p>
                      </div>
                      <div className="rounded bg-purple-50 p-2">
                        <p className="text-xs text-gray-600">Clicks</p>
                        <p className="font-bold text-purple-600">{option.stats.clicks}</p>
                      </div>
                      <div className="rounded bg-purple-50 p-2">
                        <p className="text-xs text-gray-600">Leads</p>
                        <p className="font-bold text-purple-600">{option.stats.leads}</p>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {option.benefits.map((benefit, benefitIdx) => (
                      <li key={benefitIdx} className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-purple-600" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className={`mt-6 w-full ${
                      idx === 1
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        : "bg-purple-600 hover:bg-purple-700"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Why Advertise on Atlasly?</h2>
            <p className="mt-4 text-lg text-gray-600">
              The most effective way to reach aesthetic treatment seekers
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <Card key={idx} className="border-purple-200">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-purple-600" />
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Example */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">See the Difference</h2>
            <p className="mt-4 text-lg text-gray-600">
              How featured listings stand out from standard listings
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            {/* Standard Listing Example */}
            <div>
              <h3 className="mb-4 text-center font-semibold">Standard Listing</h3>
              <Card className="opacity-75">
                <CardContent className="p-6">
                  <div className="mb-4 h-32 rounded bg-gray-200" />
                  <h4 className="font-semibold">Your MedSpa Name</h4>
                  <p className="mt-1 text-sm text-gray-500">Basic information visible</p>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" variant="outline">View</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Featured Listing Example */}
            <div>
              <h3 className="mb-4 text-center font-semibold">Featured Listing</h3>
              <Card className="border-purple-400 shadow-xl">
                <CardContent className="p-6">
                  <div className="relative mb-4 h-32 overflow-hidden rounded bg-gradient-to-br from-purple-100 to-pink-100">
                    <Badge className="absolute right-2 top-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      <Star className="mr-1 h-3 w-3" />
                      Featured
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-purple-600">Your MedSpa Name</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Enhanced details, photos, special offers visible
                  </p>
                  <div className="mt-2 flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm">(342 reviews)</span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Book Now
                    </Button>
                    <Button size="sm" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Success Stories</h2>
            <p className="mt-4 text-lg text-gray-600">
              MedSpas seeing real results with featured listings
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                name: "Elite Aesthetics NYC",
                result: "+320% increase in appointment bookings",
                testimonial: "Featured listings transformed our online presence. We're now booked solid for weeks.",
                metric: "3.2x ROI"
              },
              {
                name: "Beverly Hills MedSpa",
                result: "+450% more profile views",
                testimonial: "The visibility boost was immediate. Our phone hasn't stopped ringing.",
                metric: "4.5x ROI"
              },
              {
                name: "Miami Beach Wellness",
                result: "+180% new patient inquiries",
                testimonial: "Best marketing investment we've made. The quality of leads is exceptional.",
                metric: "2.8x ROI"
              }
            ].map((story, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <Badge className="mb-2 w-fit bg-green-100 text-green-700">
                    {story.metric}
                  </Badge>
                  <CardTitle className="text-lg">{story.name}</CardTitle>
                  <CardDescription className="text-purple-600 font-semibold">
                    {story.result}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm italic text-gray-600">"{story.testimonial}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-gradient-to-br from-purple-600 to-pink-600 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <Award className="mx-auto mb-4 h-12 w-12" />
          <h2 className="text-3xl font-bold">Ready to Grow Your Practice?</h2>
          <p className="mt-4 text-lg text-white/90">
            Join 500+ successful MedSpas already benefiting from featured listings
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
              Get Featured Today
            </Button>
            <Link href="/claim">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Claim Your Free Listing
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-white/80">
            No contracts • Cancel anytime • 100% satisfaction guaranteed
          </p>
        </div>
      </section>
    </>
  );
}