# Atlasly - MedSpa Directory Platform

<p align="center">
  <strong>A modern, SEO-optimized directory platform for Medical Spas and Aesthetic Clinics</strong>
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#installation"><strong>Installation</strong></a> ·
  <a href="#project-status"><strong>Project Status</strong></a> ·
  <a href="#configuration"><strong>Configuration</strong></a>
</p>
<br/>

## 🎯 Overview

Atlasly is a comprehensive directory platform specifically designed for Medical Spas and Aesthetic Clinics. It features a modern purple-to-pink gradient theme, advanced search capabilities, lead generation, and a complete business management system.

### 🌟 Key Features

- **Directory System**: Browse MedSpas by location, treatment type, and various filters
- **SEO Optimized**: Every page includes proper metadata, OpenGraph tags, and semantic HTML
- **Lead Generation**: Comprehensive lead capture and management system
- **Business Tools**: Claim listings, advertise, and manage business profiles
- **Review System**: Authentic patient reviews and ratings
- **Treatment Guide**: Detailed information about aesthetic treatments
- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Vertical Configuration**: Easily adaptable to other business verticals

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or pnpm
- PostgreSQL database (Neon recommended)

### Steps

1. Clone the repository:
```bash
git clone https://github.com/yourusername/atlasly.git
cd atlasly/web
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Copy `.env.example` to `.env.local` and update the variables:
```bash
cp .env.example .env.local
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Seed the database with MedSpa data:
```bash
npm run seed:medspa
```

6. Start the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 🚀 Project Status

### ✅ Completed Features
- [x] Homepage with search hero section
- [x] Directory browsing (/directory)
- [x] City-specific pages (/directory/[city])
- [x] Category filtering (/directory/[city]/[category])
- [x] Individual listing detail pages (/listing/[slug])
- [x] Treatment guide (/treatments)
- [x] Review system (/reviews)
- [x] Lead generation page (/lead-generation)
- [x] Claim listing page (/claim)
- [x] Advertise/Featured listings (/advertise)
- [x] Add business page (/add-business)
- [x] Purple-to-pink gradient theme throughout
- [x] SEO optimization on all pages
- [x] Responsive design
- [x] Vertical configuration system

### 🔄 In Progress
- [ ] Database seeding (Windows environment issue)
- [ ] Email notification system
- [ ] Payment integration for premium listings
- [ ] Admin dashboard
- [ ] Analytics dashboard for businesses

### 📋 TODO
- [ ] User authentication flow
- [ ] Business owner dashboard
- [ ] Appointment booking system
- [ ] Advanced search filters
- [ ] Mobile app (React Native)
- [ ] API documentation
- [ ] Multi-language support

## 🛠 Tech Stack

### Core Framework
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Prisma](https://www.prisma.io/)** - Type-safe ORM
- **[Neon](https://neon.tech/)** - Serverless PostgreSQL

### UI & Styling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Shadcn/ui](https://ui.shadcn.com/)** - High-quality React components
- **[Lucide Icons](https://lucide.dev/)** - Beautiful icon library
- **Custom Theme** - Purple-to-pink gradient design system

### Features
- **[Auth.js v5](https://authjs.dev/)** - Authentication system
- **[Stripe](https://stripe.com/)** - Payment processing
- **[Resend](https://resend.com/)** - Email delivery
- **[React Email](https://react.email/)** - Email templates
- **[Mapbox GL](https://www.mapbox.com/)** - Interactive maps
- **[Typesense](https://typesense.org/)** - Search engine

### Development
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Vercel](https://vercel.com/)** - Deployment platform

## 🎨 Theme Configuration

The platform uses a sophisticated purple-to-pink gradient theme defined in `/config/verticals/medspa.ts`:

### Color Palette
- **Primary**: Purple shades (#a855f7 base)
- **Secondary**: Pink shades (#ec4899 base)
- **Gradients**:
  - Primary: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
  - Secondary: `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`

### Key Design Elements
- Rounded corners with various radius options
- Consistent spacing and typography
- Responsive breakpoints
- Dark/light mode support (ready for implementation)

## 📁 Project Structure

```
web/
├── app/                    # Next.js App Router pages
│   ├── (marketing)/       # Public pages
│   ├── (auth)/           # Authentication pages
│   ├── (protected)/      # Protected dashboard pages
│   ├── api/              # API routes
│   ├── directory/        # Directory pages
│   └── listing/          # Individual listing pages
├── components/           # React components
│   ├── ui/              # Shadcn UI components
│   ├── sections/        # Page sections
│   └── layout/          # Layout components
├── config/              # Configuration files
│   └── verticals/       # Vertical-specific configs
├── lib/                 # Utility functions
├── prisma/              # Database schema
├── public/              # Static assets
└── styles/              # Global styles
```

## 🔧 Configuration

### Vertical System
The platform is built with a vertical configuration system that makes it easy to adapt for different business types. The main configuration is in `/config/verticals/medspa.ts`.

### Environment Variables
Required environment variables in `.env.local`:
```env
# Database
DATABASE_URL="postgresql://..."

# Auth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="..."

# Email
RESEND_API_KEY="..."

# Stripe
STRIPE_API_KEY="..."
STRIPE_WEBHOOK_SECRET="..."

# Search (Optional)
TYPESENSE_API_KEY="..."
```

## 📈 SEO Features

- **Metadata**: Dynamic page titles and descriptions
- **OpenGraph**: Social media sharing optimization
- **Sitemap**: Auto-generated sitemap
- **Schema.org**: Structured data ready
- **Performance**: Core Web Vitals optimized
- **Mobile-First**: Responsive design

## 🚦 What's Next?

### Immediate Priorities
1. **Fix database seeding** - Resolve Windows environment issues
2. **Complete authentication flow** - User registration and login
3. **Payment integration** - Stripe for premium listings
4. **Email notifications** - Lead alerts and confirmations

### Future Enhancements
1. **Business Dashboard** - Analytics and lead management
2. **Advanced Search** - Filters, sorting, and instant search
3. **Booking System** - Direct appointment scheduling
4. **Review Moderation** - Admin tools for content management
5. **API Development** - RESTful API for mobile apps
6. **Internationalization** - Multi-language support

## 📝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

Built on top of the excellent Next.js SaaS Starter by [@miickasmt](https://twitter.com/miickasmt)
