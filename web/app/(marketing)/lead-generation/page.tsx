import { Metadata } from "next";
import Link from "next/link";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Mail, 
  Phone,
  MessageSquare,
  BarChart3,
  Shield,
  Zap,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getCurrentVertical } from "@/config/verticals";

const vertical = getCurrentVertical();

export const metadata: Metadata = {
  title: "MedSpa Lead Generation | Get Qualified Patient Leads | Atlasly",
  description: "Generate high-quality leads for your MedSpa. Connect with patients actively searching for aesthetic treatments. Pay only for qualified leads with verified contact information.",
  keywords: "medspa leads, aesthetic clinic leads, patient acquisition, medspa marketing, lead generation, medical spa advertising",
  openGraph: {
    title: "MedSpa Lead Generation - Grow Your Practice",
    description: "Connect with thousands of patients actively searching for aesthetic treatments in your area.",
    type: "website",
  },
};

const features = [
  {
    icon: Target,
    title: "Qualified Leads Only",
    description: "Receive leads from patients actively searching for your specific treatments"
  },
  {
    icon: Shield,
    title: "Verified Contact Info",
    description: "All leads include verified phone numbers and email addresses"
  },
  {
    icon: Clock,
    title: "Real-Time Delivery",
    description: "Get leads instantly as patients submit inquiries"
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Monitor lead quality, conversion rates, and ROI in real-time"
  },
  {
    icon: Users,
    title: "Exclusive Territory",
    description: "Leads are shared with maximum 3 providers in your area"
  },
  {
    icon: Zap,
    title: "Instant Notifications",
    description: "Receive SMS and email alerts for new patient inquiries"
  }
];

const leadTypes = [
  {
    name: "Consultation Requests",
    description: "Patients ready to book consultations",
    conversionRate: "45%",
    pricePerLead: "$25-40"
  },
  {
    name: "Treatment Inquiries",
    description: "Specific treatment interest with timeline",
    conversionRate: "35%",
    pricePerLead: "$20-35"
  },
  {
    name: "Price Quotes",
    description: "Patients comparing prices and options",
    conversionRate: "25%",
    pricePerLead: "$15-25"
  },
  {
    name: "General Interest",
    description: "Early-stage research and education",
    conversionRate: "15%",
    pricePerLead: "$10-20"
  }
];

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    practice: "Manhattan Aesthetics",
    text: "Atlasly leads have transformed our practice. We're seeing 40% more new patients per month.",
    rating: 5,
    increase: "+40% patients"
  },
  {
    name: "Dr. Michael Ross",
    practice: "Beverly Hills MedSpa",
    text: "The quality of leads is exceptional. Our conversion rate has doubled since partnering with Atlasly.",
    rating: 5,
    increase: "2x conversion"
  },
  {
    name: "Jennifer Martinez",
    practice: "Miami Beauty Clinic",
    text: "Best ROI we've seen from any marketing channel. Highly qualified leads that actually convert.",
    rating: 5,
    increase: "350% ROI"
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for new practices",
    features: [
      "Up to 20 leads/month",
      "Basic lead filtering",
      "Email notifications",
      "Monthly reporting",
      "Standard support"
    ],
    popular: false
  },
  {
    name: "Growth",
    price: "$599",
    period: "/month",
    description: "For established practices",
    features: [
      "Up to 50 leads/month",
      "Advanced filtering",
      "SMS + Email alerts",
      "Real-time dashboard",
      "Priority support",
      "Lead scoring",
      "CRM integration"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For multi-location practices",
    features: [
      "Unlimited leads",
      "Custom filtering",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "Exclusive territories",
      "Advanced analytics",
      "White-label options"
    ],
    popular: false
  }
];

export default function LeadGenerationPage() {
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
              #1 Lead Generation Platform for MedSpas
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Get Qualified Patient Leads for Your MedSpa
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Connect with patients actively searching for aesthetic treatments. 
              Pay only for qualified leads with verified contact information.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                Start Getting Leads
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Pricing
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/80">
              Join 500+ MedSpas growing with Atlasly leads
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y bg-gradient-to-br from-purple-50 to-pink-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-3xl font-bold text-purple-600">50K+</div>
              <div className="mt-1 text-sm text-gray-600">Monthly Leads Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">35%</div>
              <div className="mt-1 text-sm text-gray-600">Average Conversion Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">$28</div>
              <div className="mt-1 text-sm text-gray-600">Average Cost Per Lead</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">4.9</div>
              <div className="mt-1 text-sm text-gray-600">Provider Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">How Lead Generation Works</h2>
            <p className="mt-4 text-lg text-gray-600">
              Simple, transparent, and effective patient acquisition
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { step: "1", title: "Patients Search", desc: "Patients search for treatments in your area" },
                { step: "2", title: "Submit Inquiry", desc: "They submit contact forms with treatment interest" },
                { step: "3", title: "You Get Lead", desc: "Receive verified lead instantly with all details" },
                { step: "4", title: "Convert Patient", desc: "Contact patient and book consultation" }
              ].map((item, idx) => (
                <div key={idx} className="relative text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-2xl font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                  {idx < 3 && (
                    <ArrowRight className="absolute -right-4 top-8 hidden h-6 w-6 text-purple-300 md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Why MedSpas Choose Atlasly</h2>
            <p className="mt-4 text-lg text-gray-600">
              Industry-leading features for maximum ROI
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

      {/* Lead Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Types of Leads We Generate</h2>
            <p className="mt-4 text-lg text-gray-600">
              Different lead types to match your practice goals
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {leadTypes.map((type, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{type.name}</CardTitle>
                      <CardDescription>{type.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{type.pricePerLead}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span>{type.conversionRate} conversion</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-purple-600" />
                      <span>Per lead pricing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Success Stories</h2>
            <p className="mt-4 text-lg text-gray-600">
              See how MedSpas are growing with our leads
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="mb-2 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Award key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.practice}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">
                      {testimonial.increase}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose the plan that fits your practice
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, idx) => (
              <Card key={idx} className={plan.popular ? "relative border-purple-400 shadow-xl" : ""}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-purple-600" />
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
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Calculator */}
      <section className="border-t bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Calculate Your ROI</CardTitle>
              <CardDescription>
                See how much revenue you could generate with our leads
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="leads">Leads per month</Label>
                    <Input id="leads" type="number" placeholder="50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="conversion">Conversion rate (%)</Label>
                    <Input id="conversion" type="number" placeholder="35" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="value">Avg patient value</Label>
                    <Input id="value" type="number" placeholder="1500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cost">Cost per lead</Label>
                    <Input id="cost" type="number" placeholder="28" />
                  </div>
                </div>
                
                <div className="rounded-lg bg-purple-100 p-4">
                  <div className="grid gap-4 text-center sm:grid-cols-3">
                    <div>
                      <p className="text-sm text-gray-600">Monthly Revenue</p>
                      <p className="text-2xl font-bold text-purple-600">$26,250</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Monthly Cost</p>
                      <p className="text-2xl font-bold text-purple-600">$1,400</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">ROI</p>
                      <p className="text-2xl font-bold text-green-600">1,775%</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Start Getting Leads
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Get Started with Lead Generation</CardTitle>
              <CardDescription>
                Tell us about your practice and we'll create a custom lead generation plan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fname">First Name</Label>
                    <Input id="fname" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lname">Last Name</Label>
                    <Input id="lname" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="practice">Practice Name</Label>
                  <Input id="practice" placeholder="Your MedSpa Name" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@medspa.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="New York" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="treatments">Primary Treatments</Label>
                  <Select>
                    <SelectTrigger id="treatments">
                      <SelectValue placeholder="Select your main treatments" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="botox">Botox & Injectables</SelectItem>
                      <SelectItem value="laser">Laser Treatments</SelectItem>
                      <SelectItem value="body">Body Contouring</SelectItem>
                      <SelectItem value="skin">Skin Treatments</SelectItem>
                      <SelectItem value="all">All Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goals">Monthly Lead Goal</Label>
                  <Select>
                    <SelectTrigger id="goals">
                      <SelectValue placeholder="How many leads do you want?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="20">Up to 20 leads</SelectItem>
                      <SelectItem value="50">20-50 leads</SelectItem>
                      <SelectItem value="100">50-100 leads</SelectItem>
                      <SelectItem value="100+">100+ leads</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea id="message" placeholder="Tell us about your lead generation needs..." />
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Get Custom Lead Plan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}