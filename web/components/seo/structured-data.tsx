interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

// Helper function to generate LocalBusiness schema
export function generateLocalBusinessSchema({
  name,
  description,
  url,
  telephone,
  email,
  address,
  city,
  state,
  postalCode,
  country = "US",
  latitude,
  longitude,
  image,
  priceRange,
  rating,
  reviewCount,
  categories = [],
}: {
  name: string;
  description?: string;
  url?: string;
  telephone?: string;
  email?: string;
  address?: string;
  city: string;
  state: string;
  postalCode: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  image?: string;
  priceRange?: string;
  rating?: number;
  reviewCount?: number;
  categories?: string[];
}) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    description,
    url,
    telephone,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: city,
      addressRegion: state,
      postalCode,
      addressCountry: country,
    },
  };

  if (latitude && longitude) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude,
      longitude,
    };
  }

  if (image) {
    schema.image = image;
  }

  if (priceRange) {
    schema.priceRange = priceRange;
  }

  if (rating && reviewCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount,
    };
  }

  if (categories.length > 0) {
    schema.additionalType = categories.map(cat => 
      `https://schema.org/${cat.replace(/\s+/g, '')}`
    );
  }

  return schema;
}

// Helper function to generate BreadcrumbList schema
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Helper function to generate Organization schema
export function generateOrganizationSchema({
  name,
  url,
  logo,
  description,
  email,
  telephone,
  address,
  socialProfiles = [],
}: {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  email?: string;
  telephone?: string;
  address?: {
    street?: string;
    city: string;
    state: string;
    postalCode: string;
    country?: string;
  };
  socialProfiles?: string[];
}) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    description,
    email,
    telephone,
  };

  if (logo) {
    schema.logo = logo;
  }

  if (address) {
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: address.country || "US",
    };
  }

  if (socialProfiles.length > 0) {
    schema.sameAs = socialProfiles;
  }

  return schema;
}

// Helper function for FAQ schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Helper function for Review schema
export function generateReviewSchema({
  itemName,
  reviewerName,
  reviewBody,
  ratingValue,
  datePublished,
}: {
  itemName: string;
  reviewerName: string;
  reviewBody: string;
  ratingValue: number;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LocalBusiness",
      name: itemName,
    },
    author: {
      "@type": "Person",
      name: reviewerName,
    },
    reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue,
      bestRating: 5,
      worstRating: 1,
    },
    datePublished,
  };
}