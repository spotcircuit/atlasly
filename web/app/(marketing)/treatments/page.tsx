import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  TrendingUp, 
  Clock, 
  DollarSign,
  CheckCircle,
  Info,
  ArrowRight,
  Star,
  Users,
  Award,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCurrentVertical } from "@/config/verticals";

const vertical = getCurrentVertical();

export const metadata: Metadata = {
  title: "MedSpa Treatments Guide | Popular Aesthetic Procedures & Prices",
  description: "Comprehensive guide to popular MedSpa treatments including Botox, dermal fillers, laser treatments, and more. Learn about procedures, costs, recovery times, and find providers near you.",
  keywords: "medspa treatments, botox, dermal fillers, laser treatments, chemical peels, microneedling, body contouring, aesthetic procedures",
  openGraph: {
    title: "Complete Guide to MedSpa Treatments",
    description: "Explore popular aesthetic treatments, compare prices, and find qualified providers in your area.",
    type: "website",
  },
};

const treatmentCategories = [
  {
    id: "injectables",
    name: "Injectables",
    description: "Non-surgical facial rejuvenation",
    treatments: [
      {
        name: "Botox & Dysport",
        slug: "botox-dysport",
        description: "Reduce wrinkles and fine lines by temporarily relaxing facial muscles",
        priceRange: "$200-800",
        duration: "3-4 months",
        downtime: "None",
        popularity: 95,
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop",
        benefits: ["Reduces crow's feet", "Softens forehead lines", "Minimizes frown lines", "Prevents new wrinkles"],
        idealFor: "Dynamic wrinkles, preventative aging, excessive sweating"
      },
      {
        name: "Dermal Fillers",
        slug: "dermal-fillers",
        description: "Restore volume and enhance facial contours with hyaluronic acid fillers",
        priceRange: "$600-1200",
        duration: "6-18 months",
        downtime: "Minimal",
        popularity: 88,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
        benefits: ["Plumps lips", "Fills nasolabial folds", "Enhances cheeks", "Smooths under-eye hollows"],
        idealFor: "Volume loss, lip enhancement, facial contouring"
      },
      {
        name: "Sculptra",
        slug: "sculptra",
        description: "Stimulate collagen production for gradual, natural-looking results",
        priceRange: "$800-2000",
        duration: "2+ years",
        downtime: "Minimal",
        popularity: 72,
        benefits: ["Long-lasting results", "Natural collagen building", "Full face rejuvenation"],
        idealFor: "Overall facial volume loss, skin laxity"
      },
      {
        name: "Kybella",
        slug: "kybella",
        description: "Permanently reduce submental fat (double chin) without surgery",
        priceRange: "$1200-1800",
        duration: "Permanent",
        downtime: "1-2 weeks",
        popularity: 65,
        benefits: ["Permanent fat reduction", "Non-surgical", "Improved jawline definition"],
        idealFor: "Double chin, submental fullness"
      }
    ]
  },
  {
    id: "laser",
    name: "Laser & Light",
    description: "Advanced skin resurfacing and rejuvenation",
    treatments: [
      {
        name: "IPL Photofacial",
        slug: "ipl-photofacial",
        description: "Target sun damage, age spots, and redness with intense pulsed light",
        priceRange: "$300-600",
        duration: "Annual maintenance",
        downtime: "None",
        popularity: 82,
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
        benefits: ["Reduces sun damage", "Evens skin tone", "Minimizes redness", "Improves texture"],
        idealFor: "Sun damage, rosacea, age spots, broken capillaries"
      },
      {
        name: "Laser Hair Removal",
        slug: "laser-hair-removal",
        description: "Permanent hair reduction for smooth, hair-free skin",
        priceRange: "$200-500/session",
        duration: "Permanent reduction",
        downtime: "None",
        popularity: 90,
        benefits: ["Permanent hair reduction", "Smooth skin", "No more shaving", "Cost-effective long-term"],
        idealFor: "Unwanted body or facial hair"
      },
      {
        name: "CO2 Laser Resurfacing",
        slug: "co2-laser",
        description: "Dramatic skin rejuvenation for wrinkles, scars, and sun damage",
        priceRange: "$2000-5000",
        duration: "5-10 years",
        downtime: "1-2 weeks",
        popularity: 68,
        benefits: ["Dramatic results", "Treats deep wrinkles", "Improves scars", "Skin tightening"],
        idealFor: "Deep wrinkles, acne scars, significant sun damage"
      },
      {
        name: "Clear + Brilliant",
        slug: "clear-brilliant",
        description: "Gentle laser treatment for preventative aging and glow",
        priceRange: "$400-600",
        duration: "3-6 months",
        downtime: "1-2 days",
        popularity: 75,
        benefits: ["Prevents aging", "Improves texture", "Enhances glow", "Minimal downtime"],
        idealFor: "Early signs of aging, dull skin, maintenance"
      }
    ]
  },
  {
    id: "skin",
    name: "Skin Treatments",
    description: "Professional-grade skin therapies",
    treatments: [
      {
        name: "Chemical Peels",
        slug: "chemical-peels",
        description: "Exfoliate and renew skin with medical-grade acid solutions",
        priceRange: "$150-400",
        duration: "Monthly",
        downtime: "3-7 days",
        popularity: 78,
        image: "https://images.unsplash.com/photo-1508835277982-1c1b0e205603?w=400&h=300&fit=crop",
        benefits: ["Improves texture", "Reduces pigmentation", "Minimizes pores", "Brightens complexion"],
        idealFor: "Acne, hyperpigmentation, fine lines, dull skin"
      },
      {
        name: "Microneedling",
        slug: "microneedling",
        description: "Stimulate collagen with controlled micro-injuries to the skin",
        priceRange: "$300-500",
        duration: "3-6 sessions",
        downtime: "1-2 days",
        popularity: 85,
        benefits: ["Improves scars", "Reduces pores", "Enhances texture", "Builds collagen"],
        idealFor: "Acne scars, large pores, fine lines, stretch marks"
      },
      {
        name: "HydraFacial",
        slug: "hydrafacial",
        description: "Deep cleansing and hydration treatment for instant glow",
        priceRange: "$150-300",
        duration: "Monthly",
        downtime: "None",
        popularity: 92,
        benefits: ["Instant results", "Deep cleansing", "Hydration boost", "No downtime"],
        idealFor: "All skin types, special events, regular maintenance"
      },
      {
        name: "PRP Facial",
        slug: "prp-facial",
        description: "Use your own platelet-rich plasma for natural rejuvenation",
        priceRange: "$600-1000",
        duration: "3-4 months",
        downtime: "2-3 days",
        popularity: 70,
        benefits: ["Natural results", "Improves texture", "Reduces fine lines", "Enhances healing"],
        idealFor: "Natural anti-aging, texture improvement, acne scars"
      }
    ]
  },
  {
    id: "body",
    name: "Body Contouring",
    description: "Non-invasive fat reduction and skin tightening",
    treatments: [
      {
        name: "CoolSculpting",
        slug: "coolsculpting",
        description: "Freeze away stubborn fat without surgery or downtime",
        priceRange: "$750-1500/area",
        duration: "Permanent",
        downtime: "None",
        popularity: 80,
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6daf33?w=400&h=300&fit=crop",
        benefits: ["Permanent fat reduction", "No surgery", "No downtime", "Natural-looking results"],
        idealFor: "Stubborn fat pockets, love handles, double chin"
      },
      {
        name: "Emsculpt",
        slug: "emsculpt",
        description: "Build muscle and burn fat with electromagnetic technology",
        priceRange: "$750-1000/session",
        duration: "6 months+",
        downtime: "None",
        popularity: 75,
        benefits: ["Builds muscle", "Burns fat", "Improves core strength", "No downtime"],
        idealFor: "Abs, buttocks, arms, calves toning"
      },
      {
        name: "Morpheus8",
        slug: "morpheus8",
        description: "Radiofrequency microneedling for skin tightening and contouring",
        priceRange: "$800-1500",
        duration: "1-2 years",
        downtime: "2-3 days",
        popularity: 77,
        benefits: ["Skin tightening", "Fat reduction", "Improves texture", "Minimal downtime"],
        idealFor: "Loose skin, jowls, neck, body contouring"
      },
      {
        name: "Ultherapy",
        slug: "ultherapy",
        description: "Non-invasive ultrasound lifting for face, neck, and décolletage",
        priceRange: "$1500-4500",
        duration: "1-2 years",
        downtime: "None",
        popularity: 73,
        benefits: ["Non-surgical lifting", "Collagen stimulation", "Natural results", "No downtime"],
        idealFor: "Sagging skin, brow lift, neck tightening"
      }
    ]
  }
];

export default function TreatmentsPage() {
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
              Comprehensive Treatment Guide
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Popular MedSpa Treatments
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Explore the most popular aesthetic treatments, understand the procedures, 
              compare costs, and find qualified providers in your area.
            </p>
            
            {/* Search Bar */}
            <div className="mx-auto mt-8 max-w-2xl">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-purple-400" />
                  <Input
                    type="text"
                    placeholder="Search treatments..."
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
      <section className="border-y bg-gradient-to-br from-purple-50 to-pink-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-3xl font-bold text-purple-600">30+</div>
              <div className="mt-1 text-sm text-gray-600">Treatment Types</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">10K+</div>
              <div className="mt-1 text-sm text-gray-600">Verified Providers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">4.8</div>
              <div className="mt-1 text-sm text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">500K+</div>
              <div className="mt-1 text-sm text-gray-600">Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Browse by Category</h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover treatments organized by type and purpose
            </p>
          </div>

          <Tabs defaultValue="injectables" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              {treatmentCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {treatmentCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold">{category.name}</h3>
                  <p className="mt-2 text-gray-600">{category.description}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {category.treatments.map((treatment) => (
                    <Card key={treatment.slug} className="overflow-hidden">
                      <div className="grid md:grid-cols-5">
                        {/* Image Column */}
                        {treatment.image && (
                          <div className="relative h-48 md:col-span-2 md:h-auto">
                            <Image
                              src={treatment.image}
                              alt={treatment.name}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute right-2 top-2">
                              <Badge className="bg-purple-600 text-white">
                                {treatment.popularity}% Popular
                              </Badge>
                            </div>
                          </div>
                        )}
                        
                        {/* Content Column */}
                        <div className={treatment.image ? "md:col-span-3" : "md:col-span-5"}>
                          <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                              {treatment.name}
                              <Badge variant="outline">{treatment.priceRange}</Badge>
                            </CardTitle>
                            <CardDescription>{treatment.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            {/* Quick Stats */}
                            <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-purple-600" />
                                <span>Duration: {treatment.duration}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-purple-600" />
                                <span>Downtime: {treatment.downtime}</span>
                              </div>
                            </div>

                            {/* Benefits */}
                            {treatment.benefits && (
                              <div className="mb-4">
                                <p className="mb-2 text-sm font-semibold">Benefits:</p>
                                <div className="flex flex-wrap gap-1">
                                  {treatment.benefits.slice(0, 3).map((benefit, idx) => (
                                    <Badge key={idx} variant="secondary" className="text-xs">
                                      <CheckCircle className="mr-1 h-3 w-3" />
                                      {benefit}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Ideal For */}
                            {treatment.idealFor && (
                              <p className="mb-4 text-sm text-gray-600">
                                <span className="font-medium">Best for:</span> {treatment.idealFor}
                              </p>
                            )}

                            {/* CTA */}
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="flex-1">
                                Learn More
                              </Button>
                              <Link href={`/directory?treatment=${treatment.slug}`} className="flex-1">
                                <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                                  Find Providers
                                </Button>
                              </Link>
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Popular Treatments Grid */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Most Popular Treatments</h2>
            <p className="mt-4 text-lg text-gray-600">
              The top treatments our users are searching for
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Botox", "Lip Fillers", "Laser Hair Removal", "HydraFacial", "Microneedling", "CoolSculpting", "Chemical Peel", "IPL"].map((treatment, idx) => (
              <Link key={treatment} href={`/directory?treatment=${treatment.toLowerCase().replace(' ', '-')}`}>
                <Card className="transition-all hover:shadow-lg hover:border-purple-300">
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <Award className="h-8 w-8 text-purple-600" />
                      <Badge variant="secondary">#{idx + 1}</Badge>
                    </div>
                    <h3 className="font-semibold">{treatment}</h3>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <Users className="mr-1 h-4 w-4" />
                      {Math.floor(Math.random() * 500 + 100)} providers
                    </div>
                    <div className="mt-3 flex items-center text-sm text-purple-600">
                      View providers
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "How do I choose the right treatment for me?",
                  a: "Start by identifying your specific concerns and goals. Consult with board-certified providers who can assess your skin and recommend personalized treatment plans."
                },
                {
                  q: "Are MedSpa treatments safe?",
                  a: "When performed by qualified professionals, MedSpa treatments are generally safe. Always verify credentials and choose licensed, experienced providers."
                },
                {
                  q: "How much do treatments typically cost?",
                  a: "Costs vary widely based on treatment type, provider expertise, and location. Most providers offer consultations to discuss pricing and payment options."
                },
                {
                  q: "What's the difference between a MedSpa and a day spa?",
                  a: "MedSpas offer medical-grade treatments under physician supervision, while day spas focus on relaxation and basic skincare services."
                },
                {
                  q: "How often should I get treatments?",
                  a: "Treatment frequency depends on the procedure and your goals. Many treatments require initial sessions followed by maintenance appointments."
                }
              ].map((faq, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="flex items-start gap-2 text-lg">
                      <Info className="mt-1 h-5 w-5 text-purple-600" />
                      {faq.q}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-gradient-to-br from-purple-600 to-pink-600 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Ready to Start Your Aesthetic Journey?</h2>
          <p className="mt-4 text-lg text-white/90">
            Find qualified MedSpa providers in your area and book your consultation today
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/directory">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                Find MedSpas Near You
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Treatment Guide
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}