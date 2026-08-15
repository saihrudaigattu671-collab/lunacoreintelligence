import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lunacore Intelligence | Custom AI Workforce Systems',
  description: 'Build an AI workforce customized to your exact business rules, approval limits, and support policies. 7-Day Risk-Free Trial.',
  icons: {
    icon: '/logo-mark.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
