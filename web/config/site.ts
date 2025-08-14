import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";
import { getCurrentVertical } from "./verticals";

const site_url = env.NEXT_PUBLIC_APP_URL;
const vertical = getCurrentVertical();

export const siteConfig: SiteConfig = {
  name: vertical.name || "Atlasly Directory",
  description: vertical.seo.description || "Find and connect with top-rated local businesses. Browse reviews, compare services, and discover the best businesses in your area.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com/atlasly",
    github: "https://github.com/atlasly",
  },
  mailSupport: "support@atlasly.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "For Businesses",
    items: [
      { title: "Claim Your Listing", href: "/pricing" },
      { title: "Advertise With Us", href: "/pricing" },
      { title: "Business Dashboard", href: "/dashboard" },
      { title: "Success Stories", href: "#" },
    ],
  },
  {
    title: "Explore",
    items: [
      { title: "Browse Directory", href: "/directory" },
      { title: "Popular Categories", href: "/directory" },
      { title: "Recent Reviews", href: "#" },
      { title: "Top Rated", href: "#" },
    ],
  },
  {
    title: "Support",
    items: [
      { title: "Help Center", href: "#" },
      { title: "Contact Us", href: "#" },
      { title: "Terms of Service", href: "/terms" },
      { title: "Privacy Policy", href: "/privacy" },
    ],
  },
];
