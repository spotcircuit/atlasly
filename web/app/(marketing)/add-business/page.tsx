import { Metadata } from "next";
import { 
  Building2, 
  CheckCircle, 
  MapPin, 
  Phone, 
  Globe,
  Mail,
  Clock,
  DollarSign,
  Camera,
  FileText,
  Shield,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { getCurrentVertical } from "@/config/verticals";

const vertical = getCurrentVertical();

export const metadata: Metadata = {
  title: "Add Your MedSpa | Join Atlasly Directory",
  description: "Add your MedSpa to Atlasly's directory. Reach thousands of potential patients searching for aesthetic treatments. Free basic listing with premium options available.",
  keywords: "add medspa, list business, medspa directory listing, join directory, add medical spa",
  openGraph: {
    title: "Add Your MedSpa to Atlasly",
    description: "Join thousands of MedSpas connecting with patients on Atlasly.",
    type: "website",
  },
};

const benefits = [
  "Free basic listing with business information",
  "Appear in local search results",
  "Receive patient inquiries directly",
  "Showcase your treatments and services",
  "Build trust with verified status",
  "Access to analytics dashboard"
];

const steps = [
  {
    number: "1",
    title: "Basic Information",
    description: "Business name, contact details"
  },
  {
    number: "2",
    title: "Location & Hours",
    description: "Address and operating hours"
  },
  {
    number: "3",
    title: "Services & Details",
    description: "Treatments offered and specialties"
  },
  {
    number: "4",
    title: "Review & Submit",
    description: "Verify information and publish"
  }
];

export default function AddBusinessPage() {
  const heroStyle = vertical.branding?.gradients?.primary
    ? { background: vertical.branding.gradients.primary }
    : {};

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20" style={heroStyle}>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-white/20 text-white">
              <Building2 className="mr-1 h-3 w-3" />
              Free Basic Listing
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Add Your MedSpa to Atlasly
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Join thousands of MedSpas connecting with patients. 
              Get discovered by people searching for aesthetic treatments in your area.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-b bg-gradient-to-br from-purple-50 to-pink-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-2xl font-bold">Why List on Atlasly?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center justify-between">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white">
                      {step.number}
                    </div>
                    <p className="mt-2 text-sm font-medium">{step.title}</p>
                    <p className="text-xs text-gray-500">{step.description}</p>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="flex-1 border-t-2 border-gray-300 mx-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-4xl">
            <CardHeader>
              <CardTitle>Add Your MedSpa Information</CardTitle>
              <CardDescription>
                Fill in your business details to create your free listing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-8">
                {/* Basic Information */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Basic Information</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="business-name">
                        Business Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="business-name"
                        placeholder="Your MedSpa Name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Business Email <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="info@yourmedspa.com"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="website">Website</Label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <Input
                          id="website"
                          type="url"
                          placeholder="https://yourmedspa.com"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Location</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="address">
                        Street Address <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <Input
                          id="address"
                          placeholder="123 Main Street, Suite 100"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">
                        City <span className="text-red-500">*</span>
                      </Label>
                      <Input id="city" placeholder="New York" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">
                        State <span className="text-red-500">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger id="state">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="NY">New York</SelectItem>
                          <SelectItem value="CA">California</SelectItem>
                          <SelectItem value="FL">Florida</SelectItem>
                          <SelectItem value="IL">Illinois</SelectItem>
                          <SelectItem value="TX">Texas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">
                        ZIP Code <span className="text-red-500">*</span>
                      </Label>
                      <Input id="zip" placeholder="10001" required />
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Business Hours</h3>
                  <div className="space-y-3">
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                      <div key={day} className="grid grid-cols-3 gap-2 items-center">
                        <Label className="text-sm">{day}</Label>
                        <Input type="time" placeholder="Open" className="text-sm" />
                        <Input type="time" placeholder="Close" className="text-sm" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Services & Treatments</h3>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {vertical.categories.map((category) => (
                      <div key={category.slug} className="flex items-center space-x-2">
                        <Checkbox id={category.slug} />
                        <Label
                          htmlFor={category.slug}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {category.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Business Description</h3>
                  <div className="space-y-2">
                    <Label htmlFor="description">
                      Tell potential patients about your MedSpa
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your services, specialties, and what makes your MedSpa unique..."
                      className="min-h-[120px]"
                    />
                  </div>
                </div>

                {/* Product Brands */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Product Brands Used</h3>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {["Allergan", "Galderma", "Merz", "Revance", "Juvederm", "Restylane", "Sculptra", "Radiesse"].map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox id={brand} />
                        <Label
                          htmlFor={brand}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {brand}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Financing Options */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Financing Options</h3>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {["CareCredit", "Cherry", "PatientFi", "Afterpay", "In-house plans", "Insurance accepted"].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox id={option} />
                        <Label
                          htmlFor={option}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Photos */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Photos</h3>
                  <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
                    <Camera className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">
                      Drag and drop photos here, or click to browse
                    </p>
                    <Button variant="outline" className="mt-4">
                      Upload Photos
                    </Button>
                    <p className="mt-2 text-xs text-gray-500">
                      JPG, PNG up to 10MB each. Max 10 photos.
                    </p>
                  </div>
                </div>

                {/* Terms */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      I certify that I am authorized to create this listing and that all information provided is accurate
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="marketing" />
                    <Label htmlFor="marketing" className="text-sm">
                      Send me marketing tips and updates about growing my practice
                    </Label>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    Create Free Listing
                  </Button>
                  <Button type="button" variant="outline" className="flex-1">
                    Save as Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Upgrade CTA */}
          <Card className="mx-auto mt-8 max-w-4xl border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    Want More Visibility?
                  </CardTitle>
                  <CardDescription>
                    Upgrade to a featured listing and get 3x more patient inquiries
                  </CardDescription>
                </div>
                <Badge className="bg-purple-600 text-white">Premium</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="font-semibold">Featured Benefits:</p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Top placement in search</li>
                    <li>• Featured badge</li>
                    <li>• Priority support</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Sponsored Benefits:</p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Homepage placement</li>
                    <li>• Competitor-free zone</li>
                    <li>• Advanced analytics</li>
                  </ul>
                </div>
                <div className="flex items-center">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    View Premium Plans
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}