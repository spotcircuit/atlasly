import Link from "next/link";
import { getCurrentVertical } from "@/config/verticals";
import type { LucideIcon } from "lucide-react";

interface CategoryGridProps {
  title?: string;
  subtitle?: string;
  defaultCity?: string;
}

export default function CategoryGrid({
  title = "Browse by Category",
  subtitle = "Find businesses by type",
  defaultCity = "new-york"
}: CategoryGridProps) {
  const vertical = getCurrentVertical();
  
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {vertical.categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.slug}
                href={`/directory/${defaultCity}/${category.slug}`}
                className="group relative overflow-hidden rounded-lg border bg-white p-4 transition-all hover:shadow-md"
              >
                <div className="flex items-start space-x-3">
                  <div 
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    {IconComponent && (
                      <IconComponent 
                        className="h-5 w-5"
                        style={{ color: category.color }}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-purple-600">
                      {category.label}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      {category.description}
                    </p>
                    <p className="mt-2 text-xs font-medium text-purple-600">
                      Browse listings →
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}