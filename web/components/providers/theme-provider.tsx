"use client";

import { useEffect } from "react";
import { getCurrentVertical } from "@/config/verticals";

export function VerticalThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const vertical = getCurrentVertical();
    const root = document.documentElement;
    
    // Apply primary colors if defined
    if (vertical.branding?.colors?.primary) {
      const primary = vertical.branding.colors.primary;
      root.style.setProperty("--primary-50", primary["50"]);
      root.style.setProperty("--primary-100", primary["100"]);
      root.style.setProperty("--primary-200", primary["200"]);
      root.style.setProperty("--primary-300", primary["300"]);
      root.style.setProperty("--primary-400", primary["400"]);
      root.style.setProperty("--primary-500", primary["500"]);
      root.style.setProperty("--primary-600", primary["600"]);
      root.style.setProperty("--primary-700", primary["700"]);
      root.style.setProperty("--primary-800", primary["800"]);
      root.style.setProperty("--primary-900", primary["900"]);
      root.style.setProperty("--primary-950", primary["950"]);
    }
    
    // Apply secondary colors if defined
    if (vertical.branding?.colors?.secondary) {
      const secondary = vertical.branding.colors.secondary;
      root.style.setProperty("--secondary-50", secondary["50"]);
      root.style.setProperty("--secondary-100", secondary["100"]);
      root.style.setProperty("--secondary-200", secondary["200"]);
      root.style.setProperty("--secondary-300", secondary["300"]);
      root.style.setProperty("--secondary-400", secondary["400"]);
      root.style.setProperty("--secondary-500", secondary["500"]);
      root.style.setProperty("--secondary-600", secondary["600"]);
      root.style.setProperty("--secondary-700", secondary["700"]);
      root.style.setProperty("--secondary-800", secondary["800"]);
      root.style.setProperty("--secondary-900", secondary["900"]);
      root.style.setProperty("--secondary-950", secondary["950"]);
    }
    
    // Apply fonts if defined
    if (vertical.branding?.fonts?.sans) {
      root.style.setProperty("--font-sans", vertical.branding.fonts.sans);
    }
    if (vertical.branding?.fonts?.heading) {
      root.style.setProperty("--font-heading", vertical.branding.fonts.heading);
    }
    
    // Apply border radius if defined
    if (vertical.branding?.radius) {
      const radius = vertical.branding.radius;
      if (radius.base) root.style.setProperty("--radius", radius.base);
    }
  }, []);
  
  return <>{children}</>;
}