import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Download, 
  CheckCircle, 
  Star, 
  Clock,
  BookOpen,
  TrendingUp,
  Shield,
  Users,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "Free MedSpa Treatment Guide 2024 | Ultimate Beauty Investment Guide",
  description: "Download our comprehensive 47-page guide to MedSpa treatments. Learn costs, recovery times, results, and insider tips. Valued at $97 - Get it FREE today!",
  keywords: "free medspa guide, treatment guide, botox guide, filler guide, aesthetic treatments, medspa ebook",
  openGraph: {
    title: "FREE: The Ultimate MedSpa Treatment Guide ($97 Value)",
    description: "47-page comprehensive guide to aesthetic treatments. Download instantly!",
    type: "website",
  },
};

const guideContents = [
  "Complete breakdown of 30+ popular treatments",
  "Real cost analysis and price ranges",
  "Before & after expectations for each treatment",
  "Recovery times and aftercare instructions",
  "How to choose the right provider",
  "Questions to ask during consultations",
  "Financing options and payment plans",
  "Seasonal treatment recommendations",
  "Combination treatments for best results",
  "Red flags to avoid"
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "New York, NY",
    text: "This guide saved me thousands! I knew exactly what to ask and what prices were fair.",
    rating: 5
  },
  {
    name: "Jennifer L.",
    location: "Los Angeles, CA",
    text: "Finally, honest information about treatments without the sales pressure. Invaluable resource!",
    rating: 5
  },
  {
    name: "Amanda K.",
    location: "Miami, FL",
    text: "I wish I had this guide before my first treatment. Would have avoided so many mistakes!",
    rating: 5
  }
];

export default function FreeGuidePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Column - Content */}
            <div>
              <Badge className="mb-4 bg-yellow-400 text-gray-900">
                <Sparkles className="mr-1 h-3 w-3" />
                Limited Time: FREE Download
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                The Ultimate MedSpa Treatment Guide
              </h1>
              <p className="mt-6 text-xl text-white/90">
                Your comprehensive 47-page guide to making informed decisions about aesthetic treatments. 
                <span className="font-semibold"> Valued at $97 - Get it FREE today!</span>
              </p>
              
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Instant Download</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>47 Pages of Insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>2024 Pricing Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Expert Recommendations</span>
                </div>
              </div>

              {/* Download Form */}
              <Card className="mt-8 border-0 bg-white/10 backdrop-blur-lg">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="fname" className="text-white">
                          First Name
                        </Label>
                        <Input
                          id="fname"
                          placeholder="Jane"
                          className="mt-1 border-white/30 bg-white/20 text-white placeholder:text-white/60"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lname" className="text-white">
                          Last Name
                        </Label>
                        <Input
                          id="lname"
                          placeholder="Smith"
                          className="mt-1 border-white/30 bg-white/20 text-white placeholder:text-white/60"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jane@example.com"
                        className="mt-1 border-white/30 bg-white/20 text-white placeholder:text-white/60"
                        required
                      />
                    </div>
                    <Button 
                      size="lg"
                      className="w-full bg-white text-purple-600 hover:bg-white/90"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Send Me The Free Guide
                    </Button>
                    <p className="text-xs text-white/80">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Book Cover */}
            <div className="relative">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -right-4 -top-4 flex h-24 w-24 items-center justify-center rounded-full bg-yellow-400 text-gray-900">
                  <div className="text-center">
                    <div className="text-2xl font-bold">FREE</div>
                    <div className="text-xs">$97 Value</div>
                  </div>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-white shadow-2xl">
                  {/* Mock Book Cover */}
                  <div className="flex h-full flex-col bg-gradient-to-br from-purple-100 to-pink-100 p-8">
                    <Badge className="mb-4 w-fit bg-purple-600 text-white">2024 Edition</Badge>
                    <h2 className="text-2xl font-bold text-gray-900">
                      The Ultimate MedSpa Treatment Guide
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                      Everything You Need to Know Before Your First Treatment
                    </p>
                    <div className="mt-auto">
                      <BookOpen className="h-12 w-12 text-purple-600" />
                      <p className="mt-2 text-xs text-gray-500">47 Pages • PDF Format</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">What's Inside The Guide</h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to make informed decisions about aesthetic treatments
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="grid gap-4 md:grid-cols-2">
              {guideContents.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            <Card className="border-purple-200">
              <CardHeader>
                <Clock className="h-10 w-10 text-purple-600" />
                <CardTitle className="mt-4">Save Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Skip hours of research. Get all the information you need in one comprehensive guide.
                </p>
              </CardContent>
            </Card>
            <Card className="border-purple-200">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-purple-600" />
                <CardTitle className="mt-4">Save Money</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Know fair prices and avoid overpaying. Learn about financing options and deals.
                </p>
              </CardContent>
            </Card>
            <Card className="border-purple-200">
              <CardHeader>
                <Shield className="h-10 w-10 text-purple-600" />
                <CardTitle className="mt-4">Stay Safe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Learn red flags to avoid and how to choose qualified, licensed providers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">What Readers Are Saying</h2>
            <p className="mt-4 text-lg text-gray-600">
              Join 10,000+ people who've downloaded this guide
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic text-gray-600">"{testimonial.text}"</p>
                  <div className="mt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Is this really free?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes! This guide is 100% free with no hidden costs. We believe everyone should have access to 
                    reliable information about aesthetic treatments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What format is the guide in?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    The guide is a PDF that you can download instantly after signing up. 
                    You can read it on any device or print it out.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Will you spam me with emails?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    No! We'll send you the guide and occasional helpful tips about aesthetic treatments. 
                    You can unsubscribe at any time with one click.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Is the information up to date?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes! This is the 2024 edition with the latest pricing, treatments, and techniques. 
                    We update it annually.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t bg-gradient-to-br from-purple-600 to-pink-600 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <Users className="mx-auto mb-4 h-12 w-12" />
          <h2 className="text-3xl font-bold">Join 10,000+ Smart Consumers</h2>
          <p className="mt-4 text-lg text-white/90">
            Get your free guide and make informed decisions about your aesthetic treatments
          </p>
          <Link href="#download">
            <Button size="lg" className="mt-6 bg-white text-purple-600 hover:bg-white/90">
              Download Free Guide Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="mt-4 text-sm text-white/80">
            No credit card required • Instant download • Unsubscribe anytime
          </p>
        </div>
      </section>
    </>
  );
}