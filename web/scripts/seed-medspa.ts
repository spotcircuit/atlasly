import { PrismaClient, ClaimStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting MedSpa seed...');

  // Create MedSpa categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'botox-dysport' },
      update: {},
      create: {
        slug: 'botox-dysport',
        label: 'Botox & Dysport',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'dermal-fillers' },
      update: {},
      create: {
        slug: 'dermal-fillers',
        label: 'Dermal Fillers',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'laser-treatments' },
      update: {},
      create: {
        slug: 'laser-treatments',
        label: 'Laser Treatments',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'chemical-peels' },
      update: {},
      create: {
        slug: 'chemical-peels',
        label: 'Chemical Peels',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'microneedling' },
      update: {},
      create: {
        slug: 'microneedling',
        label: 'Microneedling',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'body-contouring' },
      update: {},
      create: {
        slug: 'body-contouring',
        label: 'Body Contouring',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'skin-tightening' },
      update: {},
      create: {
        slug: 'skin-tightening',
        label: 'Skin Tightening',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'iv-therapy' },
      update: {},
      create: {
        slug: 'iv-therapy',
        label: 'IV Therapy',
      },
    }),
  ]);

  console.log(`✅ Created ${categories.length} MedSpa categories`);

  // Create sample MedSpa listings
  const medspas = [
    // New York MedSpas
    {
      slug: 'elite-aesthetics-ny',
      name: 'Elite Aesthetics New York',
      description: 'Premier medical spa offering cutting-edge aesthetic treatments including Botox, dermal fillers, laser therapies, and advanced skin rejuvenation. Our board-certified physicians and licensed aestheticians provide personalized treatment plans.',
      website: 'https://eliteaestheticsny.com',
      phone: '(212) 555-0100',
      email: 'info@eliteaestheticsny.com',
      address: '750 Park Avenue',
      city: 'new-york',
      state: 'NY',
      postalCode: '10021',
      country: 'US',
      lat: 40.7680,
      lng: -73.9654,
      rating: 4.9,
      reviewCount: 342,
      brands: ['Allergan', 'Galderma', 'Merz'],
      financing: ['CareCredit', 'Cherry', 'PatientFi'],
      planCode: 'SPONSORED',
      planWeight: 100,
      claimStatus: 'VERIFIED' as ClaimStatus,
      imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
    },
    {
      slug: 'manhattan-medspa',
      name: 'Manhattan Medical Spa',
      description: 'Luxury medical spa in the heart of Manhattan. Specializing in non-invasive cosmetic procedures, anti-aging treatments, and medical-grade skincare.',
      website: 'https://manhattanmedspa.com',
      phone: '(212) 555-0200',
      email: 'contact@manhattanmedspa.com',
      address: '1250 Broadway',
      city: 'new-york',
      state: 'NY',
      postalCode: '10001',
      country: 'US',
      lat: 40.7489,
      lng: -73.9880,
      rating: 4.7,
      reviewCount: 256,
      brands: ['Juvederm', 'Restylane', 'Sculptra'],
      financing: ['CareCredit', 'In-house payment plans'],
      planCode: 'FEATURED',
      planWeight: 50,
      claimStatus: 'VERIFIED' as ClaimStatus,
      imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop',
    },
    {
      slug: 'tribeca-wellness-spa',
      name: 'Tribeca Wellness & Beauty',
      description: 'Boutique medical spa offering personalized aesthetic treatments in a relaxing environment. Expert injectors and latest technology.',
      website: 'https://tribecawellness.com',
      phone: '(212) 555-0300',
      email: 'hello@tribecawellness.com',
      address: '88 Franklin Street',
      city: 'new-york',
      state: 'NY',
      postalCode: '10013',
      country: 'US',
      lat: 40.7178,
      lng: -74.0047,
      rating: 4.8,
      reviewCount: 189,
      brands: ['Botox', 'Xeomin', 'Radiesse'],
      financing: ['Cherry', 'Afterpay'],
      planCode: 'BASIC',
      planWeight: 10,
      claimStatus: 'VERIFIED' as ClaimStatus,
    },

    // Los Angeles MedSpas
    {
      slug: 'beverly-hills-medspa',
      name: 'Beverly Hills MedSpa',
      description: 'Celebrity-favorite medical spa offering the latest in aesthetic medicine. Specializing in natural-looking results with minimally invasive procedures.',
      website: 'https://beverlyhillsmedspa.com',
      phone: '(310) 555-0100',
      email: 'info@bhmedspa.com',
      address: '9500 Wilshire Boulevard',
      city: 'los-angeles',
      state: 'CA',
      postalCode: '90212',
      country: 'US',
      lat: 34.0658,
      lng: -118.4117,
      rating: 4.9,
      reviewCount: 521,
      brands: ['Allergan', 'Galderma', 'Revance'],
      financing: ['CareCredit', 'Cherry', 'PatientFi'],
      planCode: 'SPONSORED',
      planWeight: 100,
      claimStatus: 'VERIFIED' as ClaimStatus,
      imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
    },
    {
      slug: 'sunset-aesthetics',
      name: 'Sunset Aesthetics LA',
      description: 'Modern medical spa on Sunset Strip. Offering innovative treatments for face and body rejuvenation.',
      website: 'https://sunsetaesthetics.com',
      phone: '(323) 555-0200',
      email: 'book@sunsetaesthetics.com',
      address: '8800 Sunset Boulevard',
      city: 'los-angeles',
      state: 'CA',
      postalCode: '90069',
      country: 'US',
      lat: 34.0900,
      lng: -118.3847,
      rating: 4.6,
      reviewCount: 178,
      brands: ['Juvederm', 'Sculptra', 'Kybella'],
      financing: ['CareCredit', 'Monthly payment plans'],
      planCode: 'FEATURED',
      planWeight: 50,
      claimStatus: 'VERIFIED' as ClaimStatus,
    },
    {
      slug: 'westwood-laser-clinic',
      name: 'Westwood Laser & Skin Clinic',
      description: 'Advanced laser treatments and skin rejuvenation services. Board-certified dermatologists on staff.',
      website: 'https://westwoodlaser.com',
      phone: '(310) 555-0300',
      email: 'appointments@westwoodlaser.com',
      address: '10921 Wilshire Boulevard',
      city: 'los-angeles',
      state: 'CA',
      postalCode: '90024',
      country: 'US',
      lat: 34.0587,
      lng: -118.4430,
      rating: 4.7,
      reviewCount: 234,
      brands: ['Candela', 'Cynosure', 'Cutera'],
      financing: ['Cherry', 'Affirm'],
      planCode: 'BASIC',
      planWeight: 10,
      claimStatus: 'VERIFIED' as ClaimStatus,
    },

    // Miami MedSpas
    {
      slug: 'miami-beach-medspa',
      name: 'Miami Beach MedSpa',
      description: 'Oceanfront medical spa specializing in body contouring, skin tightening, and injectable treatments. Bilingual staff.',
      website: 'https://miamibeachmedspa.com',
      phone: '(305) 555-0100',
      email: 'info@miamibeachmedspa.com',
      address: '1500 Collins Avenue',
      city: 'miami',
      state: 'FL',
      postalCode: '33139',
      country: 'US',
      lat: 25.7907,
      lng: -80.1300,
      rating: 4.8,
      reviewCount: 412,
      brands: ['Allergan', 'Merz', 'Sinclair'],
      financing: ['CareCredit', 'Cherry', 'LendingUSA'],
      planCode: 'SPONSORED',
      planWeight: 100,
      claimStatus: 'VERIFIED' as ClaimStatus,
      imageUrl: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&h=600&fit=crop',
    },
    {
      slug: 'coral-gables-aesthetics',
      name: 'Coral Gables Aesthetic Center',
      description: 'Full-service medical spa offering the latest in aesthetic medicine and wellness treatments.',
      website: 'https://coralgablesaesthetics.com',
      phone: '(305) 555-0200',
      email: 'hello@cgaesthetics.com',
      address: '2000 Ponce de Leon',
      city: 'miami',
      state: 'FL',
      postalCode: '33134',
      country: 'US',
      lat: 25.7489,
      lng: -80.2578,
      rating: 4.7,
      reviewCount: 298,
      brands: ['Restylane', 'Radiesse', 'Belotero'],
      financing: ['PatientFi', 'United Medical Credit'],
      planCode: 'FEATURED',
      planWeight: 50,
      claimStatus: 'VERIFIED' as ClaimStatus,
    },
    {
      slug: 'brickell-beauty-clinic',
      name: 'Brickell Beauty & Wellness',
      description: 'Downtown Miami medical spa offering customized aesthetic treatments and wellness services.',
      website: 'https://brickellbeauty.com',
      phone: '(786) 555-0300',
      email: 'book@brickellbeauty.com',
      address: '1001 Brickell Bay Drive',
      city: 'miami',
      state: 'FL',
      postalCode: '33131',
      country: 'US',
      lat: 25.7617,
      lng: -80.1918,
      rating: 4.5,
      reviewCount: 167,
      brands: ['Dysport', 'RHA', 'Versa'],
      financing: ['Afterpay', 'Klarna'],
      planCode: 'BASIC',
      planWeight: 10,
      claimStatus: 'UNCLAIMED' as ClaimStatus,
    },

    // Chicago MedSpas
    {
      slug: 'chicago-aesthetic-institute',
      name: 'Chicago Aesthetic Institute',
      description: 'Leading medical spa in downtown Chicago offering comprehensive aesthetic treatments and plastic surgery consultations.',
      website: 'https://chicagoaesthetic.com',
      phone: '(312) 555-0100',
      email: 'info@chicagoaesthetic.com',
      address: '900 North Michigan Avenue',
      city: 'chicago',
      state: 'IL',
      postalCode: '60611',
      country: 'US',
      lat: 41.8988,
      lng: -87.6229,
      rating: 4.8,
      reviewCount: 376,
      brands: ['Allergan', 'Galderma', 'Merz'],
      financing: ['CareCredit', 'Alphaeon Credit'],
      planCode: 'FEATURED',
      planWeight: 50,
      claimStatus: 'VERIFIED' as ClaimStatus,
    },
    {
      slug: 'lincoln-park-medspa',
      name: 'Lincoln Park MedSpa',
      description: 'Neighborhood medical spa offering personalized treatments in a comfortable, welcoming environment.',
      website: 'https://lincolnparkmedspa.com',
      phone: '(773) 555-0200',
      email: 'appointments@lpmedspa.com',
      address: '2400 North Lincoln Avenue',
      city: 'chicago',
      state: 'IL',
      postalCode: '60614',
      country: 'US',
      lat: 41.9246,
      lng: -87.6492,
      rating: 4.6,
      reviewCount: 213,
      brands: ['Juvederm', 'Botox', 'Sculptra'],
      financing: ['Cherry', 'PatientFi'],
      planCode: 'BASIC',
      planWeight: 10,
      claimStatus: 'VERIFIED' as ClaimStatus,
    },
  ];

  // Create listings with categories
  for (const medspaData of medspas) {
    const listing = await prisma.listing.upsert({
      where: { slug: medspaData.slug },
      update: medspaData,
      create: medspaData,
    });

    // Assign categories based on the MedSpa type
    const categoryAssignments: { listingId: string; categoryId: string }[] = [];
    
    // Assign multiple relevant categories to each MedSpa
    if (medspaData.name.toLowerCase().includes('aesthetic') || medspaData.name.toLowerCase().includes('elite')) {
      categoryAssignments.push(
        { listingId: listing.id, categoryId: categories[0].id }, // Botox
        { listingId: listing.id, categoryId: categories[1].id }, // Fillers
        { listingId: listing.id, categoryId: categories[2].id }, // Laser
      );
    }
    
    if (medspaData.name.toLowerCase().includes('laser') || medspaData.name.toLowerCase().includes('skin')) {
      categoryAssignments.push(
        { listingId: listing.id, categoryId: categories[2].id }, // Laser
        { listingId: listing.id, categoryId: categories[3].id }, // Chemical Peels
        { listingId: listing.id, categoryId: categories[4].id }, // Microneedling
      );
    }
    
    if (medspaData.name.toLowerCase().includes('wellness') || medspaData.name.toLowerCase().includes('beauty')) {
      categoryAssignments.push(
        { listingId: listing.id, categoryId: categories[5].id }, // Body Contouring
        { listingId: listing.id, categoryId: categories[6].id }, // Skin Tightening
        { listingId: listing.id, categoryId: categories[7].id }, // IV Therapy
      );
    }
    
    // Default categories for all MedSpas
    if (categoryAssignments.length === 0) {
      categoryAssignments.push(
        { listingId: listing.id, categoryId: categories[0].id }, // Botox
        { listingId: listing.id, categoryId: categories[1].id }, // Fillers
      );
    }

    // Create category associations
    await prisma.listingCategory.createMany({
      data: categoryAssignments,
      skipDuplicates: true,
    });

    console.log(`✅ Created listing: ${listing.name} with ${categoryAssignments.length} categories`);
  }

  // Create sample leads
  const leads = [
    {
      listingId: medspas[0].slug,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      phone: '(555) 111-2222',
      zip: '10021',
      interest: 'Botox consultation',
      timeline: '<=14d',
      budget: '$500-1000',
      consentTs: new Date(),
      ip: '192.168.1.1',
    },
    {
      listingId: medspas[3].slug,
      name: 'Michael Chen',
      email: 'mchen@example.com',
      phone: '(555) 333-4444',
      zip: '90212',
      interest: 'Laser hair removal',
      timeline: '30d',
      budget: '$2000+',
      consentTs: new Date(),
      ip: '192.168.1.2',
    },
    {
      listingId: medspas[6].slug,
      name: 'Jessica Martinez',
      email: 'jmartinez@example.com',
      phone: '(555) 555-6666',
      zip: '33139',
      interest: 'Body contouring',
      timeline: 'research',
      budget: '$3000-5000',
      consentTs: new Date(),
      ip: '192.168.1.3',
    },
  ];

  // Get actual listing IDs for leads
  for (const leadData of leads) {
    const listing = await prisma.listing.findUnique({
      where: { slug: leadData.listingId },
    });
    
    if (listing) {
      await prisma.lead.create({
        data: {
          ...leadData,
          listingId: listing.id,
        },
      });
    }
  }

  console.log(`✅ Created ${leads.length} sample leads`);
  console.log('✨ MedSpa seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });