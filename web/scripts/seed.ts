import { PrismaClient, ClaimStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'restaurants' },
      update: {},
      create: {
        slug: 'restaurants',
        label: 'Restaurants',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'services' },
      update: {},
      create: {
        slug: 'services',
        label: 'Services',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'health' },
      update: {},
      create: {
        slug: 'health',
        label: 'Health & Wellness',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'retail' },
      update: {},
      create: {
        slug: 'retail',
        label: 'Retail',
      },
    }),
  ]);

  console.log(`✅ Created ${categories.length} categories`);

  // Create sample listings
  const listings = [
    {
      slug: 'elite-wellness-center',
      name: 'Elite Wellness Center',
      description: 'Premium health and wellness services including massage therapy, acupuncture, and holistic treatments.',
      website: 'https://example.com',
      phone: '(555) 123-4567',
      email: 'info@elitewellness.com',
      address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      country: 'US',
      lat: 40.7128,
      lng: -74.0060,
      rating: 4.8,
      reviewCount: 234,
      brands: ['Wellness Pro', 'Health Plus'],
      financing: ['Insurance', 'Payment Plans'],
      planCode: 'SPONSORED',
      planWeight: 100,
      claimStatus: 'VERIFIED' as ClaimStatus,
    },
    {
      slug: 'gourmet-kitchen-bar',
      name: 'Gourmet Kitchen & Bar',
      description: 'Fine dining experience with locally sourced ingredients and craft cocktails.',
      website: 'https://example.com',
      phone: '(555) 234-5678',
      email: 'reservations@gourmetkitchen.com',
      address: '456 Oak Avenue',
      city: 'Los Angeles',
      state: 'CA',
      postalCode: '90001',
      country: 'US',
      lat: 34.0522,
      lng: -118.2437,
      rating: 4.6,
      reviewCount: 189,
      brands: [],
      financing: [],
      planCode: 'FEATURED',
      planWeight: 50,
      claimStatus: 'VERIFIED' as ClaimStatus,
    },
    {
      slug: 'tech-solutions-pro',
      name: 'Tech Solutions Pro',
      description: 'Complete IT services for businesses including network setup, cybersecurity, and cloud solutions.',
      website: 'https://example.com',
      phone: '(555) 345-6789',
      email: 'support@techsolutions.com',
      address: '789 Tech Drive',
      city: 'Chicago',
      state: 'IL',
      postalCode: '60601',
      country: 'US',
      lat: 41.8781,
      lng: -87.6298,
      rating: 4.9,
      reviewCount: 156,
      brands: ['Microsoft', 'Cisco'],
      financing: ['Net 30', 'Monthly Billing'],
      planCode: 'FEATURED',
      planWeight: 50,
      claimStatus: 'VERIFIED' as ClaimStatus,
    },
    {
      slug: 'green-garden-market',
      name: 'Green Garden Market',
      description: 'Organic grocery store featuring local produce, artisanal goods, and eco-friendly products.',
      website: 'https://example.com',
      phone: '(555) 456-7890',
      email: 'hello@greengardenmarket.com',
      address: '321 Market Street',
      city: 'Houston',
      state: 'TX',
      postalCode: '77001',
      country: 'US',
      lat: 29.7604,
      lng: -95.3698,
      rating: 4.5,
      reviewCount: 98,
      brands: ['Organic Valley', 'Local Harvest'],
      financing: [],
      planCode: 'BASIC',
      planWeight: 10,
      claimStatus: 'UNCLAIMED' as ClaimStatus,
    },
    {
      slug: 'city-fitness-club',
      name: 'City Fitness Club',
      description: '24/7 gym with state-of-the-art equipment, personal training, and group fitness classes.',
      website: 'https://example.com',
      phone: '(555) 567-8901',
      email: 'join@cityfitness.com',
      address: '555 Fitness Way',
      city: 'Phoenix',
      state: 'AZ',
      postalCode: '85001',
      country: 'US',
      lat: 33.4484,
      lng: -112.0740,
      rating: 4.7,
      reviewCount: 312,
      brands: ['Life Fitness', 'Peloton'],
      financing: ['Monthly Membership', 'Annual Plans'],
      planCode: null,
      planWeight: 0,
      claimStatus: 'UNCLAIMED' as ClaimStatus,
    },
  ];

  // Create listings with category relationships
  for (const listingData of listings) {
    const { slug, ...data } = listingData;
    
    // Determine categories based on the listing
    let categoryConnections: { category: { connect: { slug: string } } }[] = [];
    if (listingData.name.toLowerCase().includes('wellness') || listingData.name.toLowerCase().includes('fitness')) {
      categoryConnections.push({ category: { connect: { slug: 'health' } } });
    }
    if (listingData.name.toLowerCase().includes('kitchen') || listingData.name.toLowerCase().includes('gourmet')) {
      categoryConnections.push({ category: { connect: { slug: 'restaurants' } } });
    }
    if (listingData.name.toLowerCase().includes('tech') || listingData.name.toLowerCase().includes('solutions')) {
      categoryConnections.push({ category: { connect: { slug: 'services' } } });
    }
    if (listingData.name.toLowerCase().includes('market') || listingData.name.toLowerCase().includes('garden')) {
      categoryConnections.push({ category: { connect: { slug: 'retail' } } });
    }

    await prisma.listing.upsert({
      where: { slug },
      update: {},
      create: {
        ...data,
        slug,
        categories: {
          create: categoryConnections,
        },
      },
    });
  }

  console.log(`✅ Created ${listings.length} listings`);

  // Create sample leads
  const leads = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '(555) 111-2222',
      zip: '10001',
      interest: 'Wellness Services',
      timeline: 'Within 2 weeks',
      budget: '$500-$1000',
      consentTs: new Date(),
      ip: '192.168.1.1',
      utm: { source: 'google', medium: 'cpc', campaign: 'wellness' },
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '(555) 333-4444',
      zip: '90001',
      interest: 'Restaurant Reservation',
      timeline: 'This week',
      budget: '$100-$200',
      consentTs: new Date(),
      ip: '192.168.1.2',
      utm: { source: 'facebook', medium: 'social', campaign: 'dining' },
    },
  ];

  for (const leadData of leads) {
    await prisma.lead.create({
      data: leadData,
    });
  }

  console.log(`✅ Created ${leads.length} sample leads`);

  console.log('✅ Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });