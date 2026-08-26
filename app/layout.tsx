import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://lunacoreintelligence.com'),
  title: {
    default: 'Lunacore Intelligence | Autonomous AI Workforces & Zoho Automation',
    template: '%s | Lunacore Intelligence',
  },
  description: 'Engineered multi-agent AI workforces, certified Deluge scripting, and Zoho ecosystem automation.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lunacore Intelligence | Autonomous AI Workforces',
    description: 'Scale your business operations 24/7 with zero hallucinations. Custom Zoho middleware and autonomous AI agents.',
    url: 'https://lunacoreintelligence.com',
    siteName: 'Lunacore Intelligence',
    images: [
      {
        url: '/website-graphic.png',
        width: 1200,
        height: 630,
        alt: 'Lunacore Intelligence Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lunacore Intelligence',
    description: 'Enterprise-grade multi-agent AI assistants and custom Zoho middleware.',
    images: ['/website-graphic.png'],
  },
  icons: {
    icon: '/logo-mark.png?v=2',
    shortcut: '/logo-mark.png?v=2',
    apple: '/logo-mark.png?v=2',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Organization JSON-LD Schema for Search Engine Recognition
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lunacore Intelligence',
    url: 'https://lunacoreintelligence.com',
    logo: 'https://lunacoreintelligence.com/logo-mark.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-76740-95537',
      contactType: 'customer support',
      email: 'saihrudaigattu671@gmail.com',
    },
    description: 'Enterprise-grade autonomous AI workforces and custom Zoho middleware.',
  };

  return (
    <html lang="en">
      <head>
        {/* JSON-LD Script injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        {children}

        {/* Zoho Chat SDK Script */}
        <Script
          src="https://agents.zoho.in/resources/addon-chat/assets/js/agents-chat-sdk.js"
          strategy="afterInteractive"
        />

        {/* Custom Zoho Chatkit Web Component */}
        <div
          dangerouslySetInnerHTML={{
            __html: `<agents-chatkit ziaAgents='{"orgId":"60078514038", "entityId":"2957000000051071"}'></agents-chatkit>`,
          }}
        />
      </body>
    </html>
  )
}
