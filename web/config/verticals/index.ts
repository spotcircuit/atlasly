import { VerticalConfig } from "./types";
import { medspaConfig } from "./medspa";

// Map of all available vertical configurations
const verticals: Record<string, VerticalConfig> = {
  medspa: medspaConfig,
  // Add more vertical configs here as they're created
  // restaurant: restaurantConfig,
  // contractor: contractorConfig,
  // etc.
};

// Get the current vertical from environment or default
export function getCurrentVertical(): VerticalConfig {
  const verticalId = process.env.NEXT_PUBLIC_VERTICAL || "medspa";
  return verticals[verticalId] || medspaConfig;
}

// Get a specific vertical by ID
export function getVertical(id: string): VerticalConfig | undefined {
  return verticals[id];
}

// Get all available verticals
export function getAllVerticals(): VerticalConfig[] {
  return Object.values(verticals);
}

// Export types
export type { VerticalConfig } from "./types";