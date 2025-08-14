import Link from "next/link";
import { getCurrentVertical } from "@/config/verticals";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const vertical = getCurrentVertical();
  
  const popularTreatments = [
    { label: "Botox Injections", href: "/directory/new-york/botox-dysport" },
    { label: "Dermal Fillers", href: "/directory/los-angeles/dermal-fillers" },
    { label: "Laser Hair Removal", href: "/directory/miami/laser-treatments" },
    { label: "Chemical Peels", href: "/directory/chicago/chemical-peels" },
    { label: "Microneedling", href: "/directory/houston/microneedling" },
    { label: "CoolSculpting", href: "/directory/phoenix/body-contouring" },
  ];

  const topCities = [
    { label: "New York", href: "/directory/new-york" },
    { label: "Los Angeles", href: "/directory/los-angeles" },
    { label: "Miami", href: "/directory/miami" },
    { label: "Chicago", href: "/directory/chicago" },
    { label: "Houston", href: "/directory/houston" },
    { label: "Phoenix", href: "/directory/phoenix" },
  ];

  const resources = [
    { label: "Treatment Guide", href: "/guide" },
    { label: "Before & After Gallery", href: "/gallery" },
    { label: "Cost Calculator", href: "/calculator" },
    { label: "Find a Provider", href: "/directory" },
    { label: "Patient Reviews", href: "/reviews" },
    { label: "Blog", href: "/blog" },
  ];

  const business = [
    { label: "List Your MedSpa", href: "/pricing" },
    { label: "Claim Your Listing", href: "/claim" },
    { label: "Advertising", href: "/advertise" },
    { label: "Success Stories", href: "/success" },
    { label: "Partner Program", href: "/partners" },
    { label: "Business Login", href: "/dashboard" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white">
                {vertical.name}
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Your trusted guide to finding the best medical spas and aesthetic treatments.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Popular Treatments */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Popular Treatments</h4>
            <ul className="space-y-2">
              {popularTreatments.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Cities */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Top Cities</h4>
            <ul className="space-y-2">
              {topCities.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    MedSpas in {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Resources</h4>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Business */}
          <div>
            <h4 className="mb-4 font-semibold text-white">For Business</h4>
            <ul className="space-y-2">
              {business.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-lg font-semibold text-white">
              Stay Updated on MedSpa Trends
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Get the latest treatment innovations, special offers, and beauty tips delivered to your inbox.
            </p>
            <form className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 sm:max-w-xs"
              />
              <button
                type="submit"
                className="rounded-lg bg-purple-600 px-6 py-2 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-xs text-gray-500">
              © 2024 {vertical.name}. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-300">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-gray-500 hover:text-gray-300">
                Medical Disclaimer
              </Link>
              <Link href="/sitemap" className="text-gray-500 hover:text-gray-300">
                Sitemap
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-gray-600">
            <p>
              💉 Disclaimer: Information provided is for educational purposes only. 
              Always consult with a licensed medical professional before undergoing any aesthetic treatments.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}