import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book an AI Automation Demo',
  description:
    'Book a discovery session with Lunacore Intelligence to explore autonomous AI agents, Zoho automation, and custom AI workflows for your business.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Book an AI Automation Demo | Lunacore Intelligence',
    description:
      'Schedule a discovery session to explore autonomous AI agents, Zoho automation, and custom AI workflows for your business.',
    url: 'https://lunacoreintelligence.com/contact',
    type: 'website',
    images: [
      {
        url: '/website-graphic.png',
        width: 1200,
        height: 630,
        alt: 'Book a Lunacore Intelligence AI Automation Demo',
      },
    ],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
