import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const siteUrl = 'https://lunacoreintelligence.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Lunacore Intelligence | Autonomous AI Workforces & Zoho Automation',
    template: '%s | Lunacore Intelligence',
  },

  description:
    'Lunacore Intelligence builds autonomous AI workforces, multi-agent AI assistants, and custom Zoho automation solutions for modern businesses.',

  applicationName: 'Lunacore Intelligence',

  authors: [
    {
      name: 'Lunacore Intelligence',
      url: siteUrl,
    },
  ],

  creator: 'Lunacore Intelligence',
  publisher: 'Lunacore Intelligence',

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Lunacore Intelligence',
    title: 'Lunacore Intelligence | Autonomous AI Workforces & Zoho Automation',
    description:
      'Build autonomous AI workforces, multi-agent assistants, and intelligent Zoho automation workflows with Lunacore Intelligence.',
    images: [
      {
        url: '/website-graphic.png',
        width: 1200,
        height: 630,
        alt: 'Lunacore Intelligence - Autonomous AI Workforces and Zoho Automation',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Lunacore Intelligence | Autonomous AI Workforces',
    description:
      'Enterprise-grade multi-agent AI assistants and custom Zoho automation solutions.',
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
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lunacore Intelligence',
    url: siteUrl,
    logo: `${siteUrl}/logo-mark.png`,
    description:
      'Lunacore Intelligence builds autonomous AI workforces, multi-agent AI assistants, and custom Zoho automation solutions.',
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lunacore Intelligence',
    url: siteUrl,
    description:
      'Autonomous AI workforces, multi-agent AI assistants, and Zoho automation solutions.',
    publisher: {
      '@type': 'Organization',
      name: 'Lunacore Intelligence',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo-mark.png`,
      },
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>

      <body>
        {children}

        <Script
          src="https://agents.zoho.in/resources/addon-chat/assets/js/agents-chat-sdk.js"
          strategy="afterInteractive"
        />

        <div
          dangerouslySetInnerHTML={{
            __html: `<agents-chatkit ziaAgents='{"orgId":"60078514038", "entityId":"2957000000093057"}'></agents-chatkit>`,
          }}
        />
      </body>
    </html>
  )
}
