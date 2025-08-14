import { VerticalConfig } from "./types";
import Heart from "lucide-react/dist/esm/icons/heart";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import Shield from "lucide-react/dist/esm/icons/shield";
import Clock from "lucide-react/dist/esm/icons/clock";
import Star from "lucide-react/dist/esm/icons/star";
import Zap from "lucide-react/dist/esm/icons/zap";
import Users from "lucide-react/dist/esm/icons/users";
import Award from "lucide-react/dist/esm/icons/award";
import Phone from "lucide-react/dist/esm/icons/phone";
import CheckCircle from "lucide-react/dist/esm/icons/check-circle";
import TrendingUp from "lucide-react/dist/esm/icons/trending-up";

export const medspaConfig: VerticalConfig = {
  id: "medspa",
  name: "MedSpa Directory",
  slug: "medspa",
  description: "Find top-rated medical spas and aesthetic clinics",
  
  seo: {
    title: "Find Medical Spas Near You | MedSpa Directory & Reviews",
    description: "Discover top-rated medical spas, aesthetic clinics, and cosmetic treatment centers. Compare services, read reviews, and book consultations.",
    keywords: [
      "medical spa near me",
      "medspa directory",
      "botox clinics",
      "aesthetic treatments",
      "cosmetic procedures",
      "laser treatments",
      "dermal fillers",
      "skin rejuvenation"
    ],
  },
  
  branding: {
    colors: {
      // Purple to pink gradient theme
      primary: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",  // Main purple
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87",
        950: "#3b0764"
      },
      secondary: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899",  // Pink accent
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843",
        950: "#500724"
      },
      success: "#10b981",
      warning: "#f59e0b",
      error: "#ef4444",
      info: "#3b82f6",
      
      // Custom badge colors
      badges: {
        sponsored: { 
          bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", 
          text: "#ffffff" 
        },
        featured: { 
          bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", 
          text: "#ffffff" 
        },
        basic: { 
          bg: "#e0e7ff", 
          text: "#3730a3" 
        }
      }
    },
    
    fonts: {
      sans: "'Inter', system-ui, -apple-system, sans-serif",
      heading: "'Cal Sans', 'Inter', sans-serif",
      sizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem"
      }
    },
    
    gradients: {
      primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      secondary: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      dark: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
      light: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)"
    },
    
    radius: {
      none: "0",
      sm: "0.125rem",
      base: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      full: "9999px"
    }
  },
  
  hero: {
    title: "Find Trusted Medical Spas Near You",
    subtitle: "Discover top-rated aesthetic clinics for Botox, fillers, laser treatments, and more",
    searchPlaceholder: "Search treatments or clinics...",
    backgroundGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    showStats: true,
    showCategories: true,
    showFeaturedListings: true
  },
  
  categories: [
    {
      slug: "botox-dysport",
      label: "Botox & Dysport",
      icon: Sparkles,
      description: "Wrinkle reduction treatments",
      keywords: ["botox", "dysport", "xeomin", "wrinkle treatment"],
      color: "#a855f7"
    },
    {
      slug: "dermal-fillers",
      label: "Dermal Fillers",
      icon: Heart,
      description: "Volume restoration & contouring",
      keywords: ["juvederm", "restylane", "sculptra", "lip fillers"],
      color: "#ec4899"
    },
    {
      slug: "laser-treatments",
      label: "Laser Treatments",
      icon: Zap,
      description: "Skin resurfacing & hair removal",
      keywords: ["laser hair removal", "IPL", "fraxel", "co2 laser"],
      color: "#8b5cf6"
    },
    {
      slug: "body-contouring",
      label: "Body Contouring",
      icon: Users,
      description: "Non-surgical fat reduction",
      keywords: ["coolsculpting", "emsculpt", "body sculpting"],
      color: "#7c3aed"
    },
    {
      slug: "skin-treatments",
      label: "Skin Treatments",
      icon: Star,
      description: "Facials & chemical peels",
      keywords: ["hydrafacial", "chemical peel", "microneedling"],
      color: "#a78bfa"
    },
    {
      slug: "wellness",
      label: "Wellness & IV Therapy",
      icon: Shield,
      description: "IV drips & wellness services",
      keywords: ["iv therapy", "vitamin injections", "weight loss"],
      color: "#c084fc"
    }
  ],
  
  facets: [
    {
      key: "treatments",
      label: "Treatments Offered",
      type: "multi-select",
      icon: Sparkles,
      showInQuickFilters: true,
      showInSidebar: true,
      options: [
        { value: "botox", label: "Botox" },
        { value: "fillers", label: "Dermal Fillers" },
        { value: "laser", label: "Laser Treatments" },
        { value: "coolsculpting", label: "CoolSculpting" },
        { value: "hydrafacial", label: "HydraFacial" },
        { value: "prp", label: "PRP Therapy" },
        { value: "microneedling", label: "Microneedling" },
        { value: "chemical-peel", label: "Chemical Peels" }
      ]
    },
    {
      key: "brands",
      label: "Product Brands",
      type: "multi-select",
      showInSidebar: true,
      options: [
        { value: "allergan", label: "Allergan" },
        { value: "galderma", label: "Galderma" },
        { value: "merz", label: "Merz" },
        { value: "revance", label: "Revance" },
        { value: "sinclair", label: "Sinclair" }
      ]
    },
    {
      key: "financing",
      label: "Financing Options",
      type: "multi-select",
      showInSidebar: true,
      options: [
        { value: "carecredit", label: "CareCredit" },
        { value: "cherry", label: "Cherry" },
        { value: "alpheon", label: "Alpheon Credit" },
        { value: "payment-plans", label: "Payment Plans" }
      ]
    },
    {
      key: "insurance",
      label: "Insurance Accepted",
      type: "boolean",
      showInQuickFilters: true,
      options: [
        { value: "yes", label: "Accepts Insurance" },
        { value: "no", label: "Self-Pay Only" }
      ]
    },
    {
      key: "rating",
      label: "Minimum Rating",
      type: "rating",
      min: 1,
      max: 5,
      step: 0.5,
      icon: Star,
      showInQuickFilters: true,
      showInSidebar: true
    },
    {
      key: "price_range",
      label: "Price Range",
      type: "price",
      icon: TrendingUp,
      showInSidebar: true,
      options: [
        { value: "budget", label: "$" },
        { value: "moderate", label: "$$" },
        { value: "premium", label: "$$$" },
        { value: "luxury", label: "$$$$" }
      ]
    }
  ],
  
  leadForm: {
    title: "Request a Consultation",
    subtitle: "Get personalized treatment recommendations",
    submitButtonText: "Request Consultation",
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "John Doe",
        validation: {
          minLength: 2,
          maxLength: 100
        }
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        required: true,
        placeholder: "john@example.com",
        validation: {
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
        }
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "phone",
        required: true,
        placeholder: "(555) 123-4567",
        validation: {
          pattern: "^\\(?[0-9]{3}\\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$"
        }
      },
      {
        name: "treatment_interest",
        label: "Treatment Interest",
        type: "select",
        required: true,
        options: [
          { value: "botox", label: "Botox/Dysport" },
          { value: "fillers", label: "Dermal Fillers" },
          { value: "laser", label: "Laser Treatments" },
          { value: "body", label: "Body Contouring" },
          { value: "skin", label: "Skin Treatments" },
          { value: "multiple", label: "Multiple Treatments" },
          { value: "consultation", label: "General Consultation" }
        ]
      },
      {
        name: "timeline",
        label: "When are you looking to get treatment?",
        type: "select",
        required: true,
        options: [
          { value: "asap", label: "As soon as possible" },
          { value: "1-2weeks", label: "Within 1-2 weeks" },
          { value: "month", label: "Within a month" },
          { value: "research", label: "Just researching" }
        ]
      },
      {
        name: "message",
        label: "Additional Information",
        type: "textarea",
        required: false,
        placeholder: "Tell us more about your goals...",
        validation: {
          maxLength: 500
        }
      }
    ],
    consentText: "I consent to receive communications about treatments and special offers. I understand I can opt-out at any time.",
    privacyText: "Your information is secure and will never be shared with third parties.",
    successMessage: "Thank you! The clinic will contact you within 24 hours to schedule your consultation.",
    redirectUrl: "/thank-you"
  },
  
  locations: [
    { slug: "new-york", name: "New York", state: "NY", coordinates: { lat: 40.7128, lng: -74.0060 }, featured: true },
    { slug: "los-angeles", name: "Los Angeles", state: "CA", coordinates: { lat: 34.0522, lng: -118.2437 }, featured: true },
    { slug: "miami", name: "Miami", state: "FL", coordinates: { lat: 25.7617, lng: -80.1918 }, featured: true },
    { slug: "dallas", name: "Dallas", state: "TX", coordinates: { lat: 32.7767, lng: -96.7970 }, featured: true },
    { slug: "chicago", name: "Chicago", state: "IL", coordinates: { lat: 41.8781, lng: -87.6298 }, featured: true },
    { slug: "phoenix", name: "Phoenix", state: "AZ", coordinates: { lat: 33.4484, lng: -112.0740 } },
    { slug: "atlanta", name: "Atlanta", state: "GA", coordinates: { lat: 33.7490, lng: -84.3880 } },
    { slug: "seattle", name: "Seattle", state: "WA", coordinates: { lat: 47.6062, lng: -122.3321 } },
    { slug: "boston", name: "Boston", state: "MA", coordinates: { lat: 42.3601, lng: -71.0589 } },
    { slug: "houston", name: "Houston", state: "TX", coordinates: { lat: 29.7604, lng: -95.3698 } }
  ],
  
  plans: [
    {
      id: "basic",
      name: "Basic Listing",
      description: "Essential presence in the directory",
      features: [
        "Business profile page",
        "Contact information",
        "Service listings",
        "5 photos",
        "Patient reviews",
        "Basic analytics"
      ],
      monthlyPrice: 99,
      yearlyPrice: 990,
      yearlyDiscount: "Save $198",
      weight: 10,
      cta: {
        text: "Start Basic",
        variant: "outline"
      }
    },
    {
      id: "featured",
      name: "Featured Clinic",
      description: "Stand out with enhanced visibility",
      features: [
        "Everything in Basic",
        "Featured badge",
        "Priority in search results",
        "20 photos",
        "Before/after gallery",
        "Special offers section",
        "Lead notifications",
        "Advanced analytics"
      ],
      monthlyPrice: 299,
      yearlyPrice: 2990,
      yearlyDiscount: "Save $598",
      weight: 50,
      popular: true,
      badge: {
        text: "Featured",
        color: "amber",
        gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
      },
      cta: {
        text: "Go Featured",
        variant: "primary"
      }
    },
    {
      id: "sponsored",
      name: "Sponsored Premium",
      description: "Maximum exposure and leads",
      features: [
        "Everything in Featured",
        "Top placement in search",
        "Homepage featured section",
        "Unlimited photos",
        "Video profiles",
        "Priority lead routing",
        "Monthly analytics reports",
        "Dedicated account manager",
        "Custom promotions",
        "API access"
      ],
      monthlyPrice: 599,
      yearlyPrice: 5990,
      yearlyDiscount: "Save $1,198",
      weight: 100,
      badge: {
        text: "Sponsored",
        color: "purple",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      },
      cta: {
        text: "Go Premium",
        variant: "primary"
      }
    }
  ],
  
  content: {
    homepage: {
      showHero: true,
      showSearchBar: true,
      showCategories: true,
      showFeaturedListings: true,
      showStats: true,
      showTestimonials: true,
      showFAQ: true,
      showCTA: true
    },
    
    claimBanner: {
      title: "Is this your medical spa?",
      subtitle: "Claim your listing to manage your profile and connect with patients",
      buttonText: "Claim This MedSpa",
      backgroundColor: "#fef3c7",
      textColor: "#92400e"
    },
    
    trustBadges: [
      "Board Certified Providers",
      "FDA Approved Treatments",
      "Licensed Medical Facility",
      "Verified Patient Reviews",
      "HIPAA Compliant",
      "Insured & Bonded"
    ],
    
    features: [
      {
        title: "Verified Providers",
        description: "All medical spas are verified and licensed",
        icon: Shield
      },
      {
        title: "Real Patient Reviews",
        description: "Authentic reviews from verified patients",
        icon: Star
      },
      {
        title: "Instant Consultations",
        description: "Book consultations online instantly",
        icon: Clock
      },
      {
        title: "Compare Prices",
        description: "Transparent pricing from multiple clinics",
        icon: Award
      },
      {
        title: "Direct Contact",
        description: "Connect directly with clinics",
        icon: Phone
      },
      {
        title: "Quality Guaranteed",
        description: "Only certified and insured providers",
        icon: CheckCircle
      }
    ],
    
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "Patient",
        company: "Los Angeles, CA",
        content: "Found the perfect medspa through this directory. The reviews and pricing information made my decision so much easier!",
        rating: 5
      },
      {
        name: "Dr. Michael Chen",
        role: "Medical Director",
        company: "Elite Aesthetics NYC",
        content: "This platform has transformed how we connect with new patients. The quality of leads is exceptional.",
        rating: 5
      },
      {
        name: "Emily Rodriguez",
        role: "Patient",
        company: "Miami, FL",
        content: "Love being able to compare different clinics and treatments all in one place. Saved me so much time!",
        rating: 5
      }
    ],
    
    faq: [
      {
        question: "How do I know if a medspa is legitimate?",
        answer: "All medspas in our directory are verified for proper licensing and insurance. Look for the 'Verified' badge on listings.",
        category: "Safety"
      },
      {
        question: "Can I book appointments directly through the platform?",
        answer: "Yes! You can request consultations directly through our platform, and clinics will contact you within 24 hours.",
        category: "Booking"
      },
      {
        question: "Are the reviews real?",
        answer: "All reviews are from verified patients who have actually visited the clinics. We have strict measures to prevent fake reviews.",
        category: "Reviews"
      },
      {
        question: "How much do treatments typically cost?",
        answer: "Prices vary by treatment and location. Each listing shows price ranges, and you can filter by your budget.",
        category: "Pricing"
      }
    ],
    
    footer: {
      description: "The trusted directory for finding and comparing medical spas and aesthetic clinics.",
      showNewsletter: true,
      newsletterTitle: "Get beauty tips & exclusive offers",
      newsletterPlaceholder: "Enter your email",
      copyrightText: "© 2024 MedSpa Directory. All rights reserved.",
      links: [
        {
          title: "For Patients",
          items: [
            { label: "Find a MedSpa", href: "/directory" },
            { label: "Treatment Guide", href: "/treatments" },
            { label: "Before & After", href: "/gallery" },
            { label: "Patient Reviews", href: "/reviews" }
          ]
        },
        {
          title: "For Clinics",
          items: [
            { label: "List Your Practice", href: "/pricing" },
            { label: "Claim Your Listing", href: "/claim" },
            { label: "Advertising", href: "/advertise" },
            { label: "Success Stories", href: "/case-studies" }
          ]
        },
        {
          title: "Resources",
          items: [
            { label: "Treatment FAQs", href: "/faq" },
            { label: "Safety Guidelines", href: "/safety" },
            { label: "Blog", href: "/blog" },
            { label: "Contact Us", href: "/contact" }
          ]
        }
      ],
      socialLinks: [
        { platform: "instagram", url: "https://instagram.com/medspas", label: "Follow us on Instagram" },
        { platform: "facebook", url: "https://facebook.com/medspas", label: "Like us on Facebook" },
        { platform: "youtube", url: "https://youtube.com/medspas", label: "Watch on YouTube" }
      ]
    }
  },
  
  emails: {
    fromName: "MedSpa Directory",
    fromEmail: "hello@medspas.com",
    replyTo: "support@medspas.com",
    templates: {
      leadNotification: {
        subject: "New consultation request from {{patientName}}",
        preheader: "A patient is interested in your services"
      },
      claimConfirmation: {
        subject: "Welcome to MedSpa Directory!",
        preheader: "Your listing has been verified"
      },
      welcomeBusiness: {
        subject: "Get the most from your MedSpa listing",
        preheader: "Tips to attract more patients"
      }
    }
  },
  
  settings: {
    search: {
      defaultRadius: 25,
      maxRadius: 100,
      defaultSort: "featured",
      resultsPerPage: 20,
      enableAutocomplete: true,
      enableInstantSearch: true
    },
    
    map: {
      defaultZoom: 12,
      minZoom: 8,
      maxZoom: 18,
      showClusters: true,
      clusterRadius: 50
    },
    
    business: {
      requireApproval: true,
      allowSelfSignup: true,
      trialPeriodDays: 14,
      gracePeriodDays: 7
    },
    
    features: {
      enableReviews: true,
      enableMessaging: true,
      enableAppointments: true,
      enableAnalytics: true,
      enableAPI: false,
      enableBlog: true,
      enableEvents: false
    },
    
    locale: {
      defaultLanguage: "en",
      supportedLanguages: ["en", "es"],
      currency: "USD",
      currencySymbol: "$",
      dateFormat: "MM/DD/YYYY",
      timeFormat: "12h"
    }
  }
};