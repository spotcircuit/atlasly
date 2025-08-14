import { Metadata } from "next";
import Link from "next/link";
import { Check, Building2, Shield, TrendingUp, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getCurrentVertical } from "@/config/verticals";

const vertical = getCurrentVertical();

export const metadata: Metadata = {
  title: "Claim Your MedSpa Listing | Atlasly",
  description: "Take control of your MedSpa's online presence. Claim and verify your business listing to manage your information and connect with customers.",
};

const benefits = [
  {
    icon: Building2,
    title: "Manage Your Business Info",
    description: "Update hours, services, photos, and contact details anytime",
  },
  {
    icon: Shield,
    title: "Get Verified Badge",
    description: "Build trust with a verified business badge on your listing",
  },
  {
    icon: TrendingUp,
    title: "Boost Your Visibility",
    description: "Verified listings rank higher and get more views",
  },
  {
    icon: Phone,
    title: "Receive Direct Leads",
    description: "Get inquiries directly from interested customers",
  },
];

const plans = [
  {
    name: "Basic Claim",
    price: "Free",
    description: "Essential features to manage your listing",
    features: [
      "Claim and verify your listing",
      "Update business information",
      "Add up to 5 photos",
      "Respond to reviews",
      "Basic analytics",
    ],
    cta: "Claim for Free",
    popular: false,
  },
  {
    name: "Premium",
    price: "$99",
    period: "/month",
    description: "Stand out and attract more customers",
    features: [
      "Everything in Basic",
      "Featured placement in search",
      "Unlimited photos & videos",
      "Advanced analytics dashboard",
      "Priority customer support",
      "Remove competitor ads",
      "Custom booking widget",
    ],
    cta: "Go Premium",
    popular: true,
  },
  {
    name: "Elite",
    price: "$299",
    period: "/month",
    description: "Maximum visibility and lead generation",
    features: [
      "Everything in Premium",
      "Homepage featured listing",
      "Category page spotlight",
      "Lead generation tools",
      "AI-powered insights",
      "Dedicated account manager",
      "Custom promotions",
      "API access",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function ClaimListingPage() {
  const heroStyle = vertical.branding?.gradients?.primary
    ? { background: vertical.branding.gradients.primary }
    : {};

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20" style={heroStyle}>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Claim Your MedSpa Listing
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Take control of your business presence on Atlasly. Manage your information, 
              respond to reviews, and connect with thousands of potential customers.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-white/90"
              >
                Search for Your Business
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Claim Your Listing?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of MedSpas already benefiting from claimed listings
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
                <CardHeader>
                  <benefit.icon className="h-10 w-10 text-purple-600" />
                  <CardTitle className="mt-4">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="border-y bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Find Your Business</CardTitle>
              <CardDescription>
                Search for your MedSpa to get started with the claim process
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="business-name">Business Name</Label>
                  <Input
                    id="business-name"
                    placeholder="Enter your MedSpa name"
                    className="focus:ring-purple-400"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      placeholder="City"
                      className="focus:ring-purple-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      placeholder="State"
                      className="focus:ring-purple-400"
                    />
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Search for My Business
                </Button>
              </form>

              <div className="mt-6 rounded-lg border border-purple-200 bg-purple-50 p-4">
                <p className="text-sm">
                  <strong>Can't find your business?</strong> No problem! You can{" "}
                  <Link href="/add-business" className="font-medium text-purple-600 underline">
                    add your MedSpa
                  </Link>{" "}
                  to our directory.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Choose Your Plan
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Select the perfect plan to maximize your MedSpa's online presence
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={plan.popular ? "relative border-purple-400 shadow-xl" : ""}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 text-sm font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 flex-shrink-0 text-purple-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`mt-6 w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        : "bg-purple-600 hover:bg-purple-700"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Claim Form */}
      <section className="border-t bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Quick Claim Request</CardTitle>
              <CardDescription>
                Can't find your listing? Submit a claim request and we'll help you get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" className="focus:ring-purple-400" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" className="focus:ring-purple-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Business Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@medspa.com"
                    className="focus:ring-purple-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Business Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="focus:ring-purple-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business">Business Name</Label>
                  <Input
                    id="business"
                    placeholder="Your MedSpa Name"
                    className="focus:ring-purple-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your MedSpa..."
                    className="focus:ring-purple-400"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Submit Claim Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 text-center md:grid-cols-4">
              <div>
                <div className="text-4xl font-bold text-purple-600">10K+</div>
                <div className="mt-2 text-sm text-muted-foreground">Active MedSpas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600">50K+</div>
                <div className="mt-2 text-sm text-muted-foreground">Monthly Searches</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600">85%</div>
                <div className="mt-2 text-sm text-muted-foreground">Increased Visibility</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600">24/7</div>
                <div className="mt-2 text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}