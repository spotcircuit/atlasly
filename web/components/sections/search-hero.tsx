"use client";

import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCurrentVertical } from "@/config/verticals";

const vertical = getCurrentVertical();

interface SearchHeroProps {
  title?: string;
  subtitle?: string;
  categories?: Array<{ value: string; label: string }>;
  cities?: Array<{ value: string; label: string }>;
}

export default function SearchHero({
  title = vertical.hero.title,
  subtitle = vertical.hero.subtitle,
  categories = vertical.categories.map(cat => ({
    value: cat.slug,
    label: cat.label
  })),
  cities = vertical.locations.filter(loc => loc.featured).map(loc => ({
    value: loc.slug,
    label: loc.name
  })),
}: SearchHeroProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCity && selectedCategory) {
      const params = new URLSearchParams();
      if (searchQuery) params.set("q", searchQuery);
      const queryString = params.toString();
      const url = `/directory/${selectedCity}/${selectedCategory}${
        queryString ? `?${queryString}` : ""
      }`;
      router.push(url);
    }
  };

  const heroStyle = vertical.hero.backgroundGradient 
    ? { background: vertical.hero.backgroundGradient }
    : {};

  return (
    <section 
      className="relative py-16 sm:py-20"
      style={heroStyle}
    >
      {vertical.hero.backgroundImage && (
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${vertical.hero.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base text-white/90 sm:text-lg">
            {subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="mx-auto mt-8 max-w-4xl sm:mt-10"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-purple-400" />
              <Input
                type="text"
                placeholder="Search for treatments or MedSpas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 border-white/30 bg-white/90 pl-10 text-sm backdrop-blur-sm placeholder:text-purple-300 focus:bg-white focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="h-12 w-full border-white/30 bg-white/90 backdrop-blur-sm sm:w-[180px] focus:bg-white focus:ring-2 focus:ring-purple-400">
                <MapPin className="mr-2 h-4 w-4 text-purple-600" />
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {cities.map((city) => (
                  <SelectItem key={city.value} value={city.value} className="text-gray-900 focus:bg-purple-50 focus:text-purple-900">
                    {city.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="h-12 w-full border-white/30 bg-white/90 backdrop-blur-sm sm:w-[180px] focus:bg-white focus:ring-2 focus:ring-purple-400">
                <SelectValue placeholder="Treatment type" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value} className="text-gray-900 focus:bg-purple-50 focus:text-purple-900">
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              type="submit"
              disabled={!selectedCity || !selectedCategory}
              className="h-12 bg-gradient-to-r from-purple-600 to-pink-600 px-8 font-semibold text-white shadow-lg transition-all hover:from-purple-700 hover:to-pink-700 hover:shadow-xl disabled:opacity-50"
            >
              <Search className="mr-2 h-4 w-4" />
              Find MedSpas
            </Button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-white/80">
            Popular searches:{" "}
            <button
              type="button"
              onClick={() => {
                setSelectedCity("new-york");
                setSelectedCategory("botox-dysport");
              }}
              className="font-medium text-white underline hover:text-white/90"
            >
              Botox in New York
            </button>
            {", "}
            <button
              type="button"
              onClick={() => {
                setSelectedCity("los-angeles");
                setSelectedCategory("dermal-fillers");
              }}
              className="font-medium text-white underline hover:text-white/90"
            >
              Dermal Fillers in Los Angeles
            </button>
            {", "}
            <button
              type="button"
              onClick={() => {
                setSelectedCity("miami");
                setSelectedCategory("laser-treatments");
              }}
              className="font-medium text-white underline hover:text-white/90"
            >
              Laser Treatments in Miami
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}