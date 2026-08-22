import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lunacore Intelligence | Autonomous AI Workforces & Zoho Automation',
  description: 'Engineered multi-agent AI workforces, certified Deluge scripting, and Zoho ecosystem automation.',
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
  return (
    <html lang="en">
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
