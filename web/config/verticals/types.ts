import type { LucideIcon } from "lucide-react";

export interface VerticalConfig {
  id: string;
  name: string;
  slug: string;
  
  description: string;
  
  // SEO Configuration
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
    favicon?: string;
    appleTouchIcon?: string;
  };
  
  // Branding & Styling
  branding: {
    // Logo & Icons
    logo?: {
      light: string;  // Logo for light mode
      dark: string;   // Logo for dark mode
      width?: number;
      height?: number;
    };
    favicon?: string;
    
    // Color System
    colors: {
      // Primary brand colors
      primary: {
        50: string;   // Lightest
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;  // Main primary color
        600: string;
        700: string;
        800: string;
        900: string;  // Darkest
        950: string;
      };
      // Secondary/Accent colors
      secondary?: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      // Semantic colors
      success?: string;
      warning?: string;
      error?: string;
      info?: string;
      
      // UI colors
      background?: string;
      foreground?: string;
      muted?: string;
      mutedForeground?: string;
      card?: string;
      cardForeground?: string;
      border?: string;
      
      // Badge colors for plans
      badges?: {
        sponsored?: { bg: string; text: string };
        featured?: { bg: string; text: string };
        basic?: { bg: string; text: string };
      };
    };
    
    // Typography
    fonts: {
      // Font families
      sans?: string;
      serif?: string;
      mono?: string;
      heading?: string;
      
      // Font sizes (optional overrides)
      sizes?: {
        xs?: string;
        sm?: string;
        base?: string;
        lg?: string;
        xl?: string;
        '2xl'?: string;
        '3xl'?: string;
        '4xl'?: string;
        '5xl'?: string;
      };
      
      // Font weights
      weights?: {
        thin?: number;
        light?: number;
        normal?: number;
        medium?: number;
        semibold?: number;
        bold?: number;
        extrabold?: number;
      };
    };
    
    // Gradient definitions
    gradients?: {
      primary?: string;
      secondary?: string;
      dark?: string;
      light?: string;
      [key: string]: string | undefined;
    };
    
    // Border radius values
    radius?: {
      none?: string;
      sm?: string;
      base?: string;
      md?: string;
      lg?: string;
      xl?: string;
      '2xl'?: string;
      full?: string;
    };
    
    // Spacing scale (optional overrides)
    spacing?: {
      xs?: string;
      sm?: string;
      base?: string;
      lg?: string;
      xl?: string;
    };
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    backgroundImage?: string;
    backgroundGradient?: string;
    textColor?: string;
    showStats?: boolean;
    showCategories?: boolean;
    showFeaturedListings?: boolean;
    customCTA?: {
      text: string;
      href: string;
      variant?: 'primary' | 'secondary' | 'outline';
    };
  };
  
  // Categories specific to this vertical
  categories: Array<{
    slug: string;
    label: string;
    icon?: LucideIcon;
    description?: string;
    keywords?: string[];
    image?: string;
    color?: string; // Category-specific accent color
  }>;
  
  // Search Facets (filters)
  facets: Array<{
    key: string;
    label: string;
    type: "select" | "multi-select" | "range" | "boolean" | "price" | "rating";
    options?: Array<{ value: string; label: string }>;
    min?: number;
    max?: number;
    step?: number;
    icon?: LucideIcon;
    showInQuickFilters?: boolean; // Show in main search bar
    showInSidebar?: boolean;      // Show in filter sidebar
  }>;
  
  // Lead Form Configuration
  leadForm: {
    title: string;
    subtitle: string;
    image?: string;
    fields: Array<{
      name: string;
      label: string;
      type: "text" | "email" | "phone" | "select" | "textarea" | "checkbox" | "radio" | "date";
      required: boolean;
      placeholder?: string;
      options?: Array<{ value: string; label: string }>;
      validation?: {
        pattern?: string;
        minLength?: number;
        maxLength?: number;
        min?: number;
        max?: number;
      };
    }>;
    consentText: string;
    privacyText?: string;
    submitButtonText?: string;
    successMessage: string;
    redirectUrl?: string;
  };
  
  // Cities/Locations
  locations: Array<{
    slug: string;
    name: string;
    state?: string;
    country?: string;
    coordinates?: { lat: number; lng: number };
    timezone?: string;
    featured?: boolean; // Show in homepage quick links
  }>;
  
  // Business Plans/Tiers
  plans: Array<{
    id: string;
    name: string;
    description: string;
    features: string[];
    monthlyPrice: number;
    yearlyPrice?: number;
    yearlyDiscount?: string; // e.g., "Save 20%"
    weight: number; // for search ranking
    popular?: boolean; // Show "Most Popular" badge
    badge?: {
      text: string;
      color: string;
      gradient?: string;
    };
    cta?: {
      text: string;
      variant?: 'primary' | 'secondary' | 'outline';
    };
  }>;
  
  // Content Templates
  content: {
    // Homepage sections
    homepage?: {
      showHero?: boolean;
      showSearchBar?: boolean;
      showCategories?: boolean;
      showFeaturedListings?: boolean;
      showRecentListings?: boolean;
      showStats?: boolean;
      showTestimonials?: boolean;
      showFAQ?: boolean;
      showCTA?: boolean;
      customSections?: Array<{
        id: string;
        component: string;
        props?: Record<string, any>;
      }>;
    };
    
    // Claim banner on listing pages
    claimBanner: {
      title: string;
      subtitle: string;
      buttonText: string;
      backgroundColor?: string;
      textColor?: string;
    };
    
    // Trust badges/signals
    trustBadges: string[];
    
    // Feature highlights
    features: Array<{
      title: string;
      description: string;
      icon?: LucideIcon;
      image?: string;
    }>;
    
    // Testimonials
    testimonials?: Array<{
      name: string;
      role?: string;
      company?: string;
      content: string;
      rating?: number;
      image?: string;
    }>;
    
    // FAQ
    faq?: Array<{
      question: string;
      answer: string;
      category?: string;
    }>;
    
    // Footer content
    footer?: {
      description?: string;
      showNewsletter?: boolean;
      newsletterTitle?: string;
      newsletterPlaceholder?: string;
      copyrightText?: string;
      links?: Array<{
        title: string;
        items: Array<{
          label: string;
          href: string;
          external?: boolean;
        }>;
      }>;
      socialLinks?: Array<{
        platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube' | 'tiktok';
        url: string;
        label?: string;
      }>;
    };
  };
  
  // Email templates
  emails?: {
    fromName?: string;
    fromEmail?: string;
    replyTo?: string;
    templates?: {
      leadNotification?: {
        subject: string;
        preheader?: string;
      };
      claimConfirmation?: {
        subject: string;
        preheader?: string;
      };
      welcomeBusiness?: {
        subject: string;
        preheader?: string;
      };
    };
  };
  
  // Advanced settings
  settings?: {
    // Search settings
    search?: {
      defaultRadius?: number; // in miles
      maxRadius?: number;
      defaultSort?: 'relevance' | 'distance' | 'rating' | 'featured';
      resultsPerPage?: number;
      enableAutocomplete?: boolean;
      enableInstantSearch?: boolean;
    };
    
    // Map settings
    map?: {
      defaultZoom?: number;
      minZoom?: number;
      maxZoom?: number;
      style?: string; // Mapbox style URL
      showClusters?: boolean;
      clusterRadius?: number;
    };
    
    // Business rules
    business?: {
      requireApproval?: boolean; // Require admin approval for new listings
      allowSelfSignup?: boolean; // Allow businesses to sign up themselves
      trialPeriodDays?: number;  // Free trial for paid plans
      gracePeriodDays?: number;  // Grace period after subscription ends
    };
    
    // Feature flags
    features?: {
      enableReviews?: boolean;
      enableMessaging?: boolean;
      enableAppointments?: boolean;
      enableAnalytics?: boolean;
      enableAPI?: boolean;
      enableBlog?: boolean;
      enableEvents?: boolean;
    };
    
    // Localization
    locale?: {
      defaultLanguage?: string;
      supportedLanguages?: string[];
      currency?: string;
      currencySymbol?: string;
      dateFormat?: string;
      timeFormat?: string;
    };
  };
}