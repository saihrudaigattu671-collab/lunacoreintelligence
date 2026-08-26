import type { Metadata } from 'next'
export default function HomePage()

export const metadata: Metadata = {
  title: 'Autonomous AI Workforces & Zoho Automation',
  description:
    'Lunacore Intelligence builds autonomous AI workforces, multi-agent AI assistants, policy enforcement systems, and custom Zoho automation solutions for modern businesses.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Autonomous AI Workforces & Zoho Automation',
    description:
      'Deploy autonomous AI assistants and intelligent Zoho automation workflows with Lunacore Intelligence.',
    url: 'https://lunacoreintelligence.com/',
    type: 'website',
    images: [
      {
        url: '/website-graphic.png',
        width: 1200,
        height: 630,
        alt: 'Lunacore Intelligence',
      },
    ],
  },
}
