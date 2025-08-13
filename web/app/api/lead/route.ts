import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';

const LeadSchema = z.object({
  listingSlug: z.string().optional(),
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(5),
  zip: z.string().min(3),
  interest: z.string().min(1),
  timeline: z.string().min(1),
  budget: z.string().optional(),
  consent: z.literal(true),
  utm: z.record(z.string()).optional(),
});

function getIP(req: Request) {
  // Vercel/Next headers
  const xfwd = req.headers.get('x-forwarded-for');
  if (xfwd) return xfwd.split(',')[0].trim();
  return req.headers.get('x-real-ip') || undefined;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = LeadSchema.parse(body);

    let listingId: string | undefined;
    if (data.listingSlug) {
      const listing = await prisma.listing.findUnique({ where: { slug: data.listingSlug }, select: { id: true } });
      listingId = listing?.id;
    }

    await prisma.lead.create({
      data: {
        listingId,
        name: data.name,
        email: data.email,
        phone: data.phone,
        zip: data.zip,
        interest: data.interest,
        timeline: data.timeline,
        budget: data.budget,
        consentTs: new Date(),
        ip: getIP(req),
        utm: (data.utm as any) ?? undefined,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || 'Invalid payload' }, { status: 400 });
  }
}
