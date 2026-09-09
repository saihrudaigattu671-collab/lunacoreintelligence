'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { ArrowUpRight } from 'lucide-react'

// Local assets stored in public/ folder (Zero Vercel dependencies)
export const markUrl = '/logo-mark.png'
export const lockupUrl = '/website-graphic.png'

export function SiteHeader() {
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Security', href: '/security' },
  ]

  return (
    <header className="site-header">
      <div className="shell nav-row">
        <Link href="/" className="logo-container" style={{ gap: '1rem' }}>
          <img src={markUrl} alt="Lunacore Logo" className="brand-logo" style={{ height: '50px', width: 'auto' }} />
          <span style={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.01em', color: 'var(--text-main)' }}>
            LUNACORE INTELLIGENCE
          </span>
        </Link>

        <nav className="desktop-nav" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                style={{
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--text-main, #0f172a)' : 'var(--text-muted, #64748b)',
                  borderBottom: isActive ? '2px solid var(--primary, #2563eb)' : '2px solid transparent',
                  paddingBottom: '0.25rem',
                  transition: 'all 0.2s ease',
                }}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="/contact" className="btn-primary">
            Request Demo <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid" style={{ gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr' }}>
        <div>
          <div className="logo-container" style={{ marginBottom: '1rem', gap: '0.75rem' }}>
            <img src={markUrl} alt="Lunacore Logo" className="brand-logo" style={{ height: '40px', width: 'auto' }} />
            <span style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--text-main)' }}>LUNACORE INTELLIGENCE (OPC) PVT. LTD.</span>
          </div>
          <p style={{ maxWidth: '320px', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: '1.5' }}>
            Building customized AI assistants tailored directly to your business rules and workflows.
          </p>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted, #94a3b8)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <span>CIN: U58202TS2026OPC221341</span>
            <span>DPIIT Startup Recognition: DIPP281409</span>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '0.9375rem', marginBottom: '1rem' }}>Product</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link href="/features" className="nav-link">Workflows</Link>
            <Link href="/pricing" className="nav-link">Pricing Plans</Link>
            <Link href="/security" className="nav-link">Data Protection</Link>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '0.9375rem', marginBottom: '1rem' }}>Company</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link href="/contact" className="nav-link">Book Demo</Link>
            <Link href="/security" className="nav-link">Safety Standards</Link>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', alignItems: 'center' }}>
              <a 
                href="https://www.linkedin.com/company/lunacore-intelligence/" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Lunacore Intelligence Company Page"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '6px', background: 'var(--card-bg, #f1f5f9)', color: 'var(--text-main, #0f172a)', transition: 'background 0.2s' }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/sai-hrudai-gattu-6b1427384" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Founder: Sai Hrudai Gattu"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '6px', background: 'var(--card-bg, #f1f5f9)', color: 'var(--text-main, #0f172a)', transition: 'background 0.2s' }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted, #64748b)' }}>LinkedIn</span>
            </div>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '0.9375rem', marginBottom: '1rem' }}>Office Contact</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
            <div style={{ margin: 0 }}>
              <span style={{ display: 'block', color: 'var(--text-muted, #64748b)', fontSize: '0.8125rem' }}>Email:</span>
              <a href="mailto:saihrudaigattu@lunacoreintelligence.com" className="nav-link" style={{ display: 'block', overflowWrap: 'break-word', wordBreak: 'break-all' }}>
                saihrudaigattu@lunacoreintelligence.com
              </a>
            </div>
            <div style={{ margin: 0 }}>
              <span style={{ display: 'block', color: 'var(--text-muted, #64748b)', fontSize: '0.8125rem' }}>Phone:</span>
              <a href="tel:+917674095537" className="nav-link" style={{ display: 'inline' }}>
                +91 76740 95537
              </a>
            </div>
            <p style={{ margin: 0, color: 'var(--text-muted, #94a3b8)' }}>
              Hyderabad, Telangana, India
            </p>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Lunacore Intelligence (OPC) Private Limited. All rights reserved.</span>
        <span>Compliance Verified: MCA / DPIIT</span>
      </div>
    </footer>
  )
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )
}

// Local interactive resolution chart
export function WeeklyPerformanceChart() {
  return (
    <div className="chart-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1rem' }}>Weekly Resolution Rate</h3>
          <p style={{ fontSize: '0.8125rem' }}>Automated Customer Tasks Handled</p>
        </div>
        <span style={{ color: 'var(--success)', fontWeight: 600, fontSize: '0.875rem' }}>94.2% Auto-Resolved</span>
      </div>

      <div className="bar-chart-container">
        <div className="chart-bar-wrap">
          <div className="chart-bar" style={{ height: '50%' }}></div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mon</span>
        </div>
        <div className="chart-bar-wrap">
          <div className="chart-bar" style={{ height: '65%' }}></div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Tue</span>
        </div>
        <div className="chart-bar-wrap">
          <div className="chart-bar" style={{ height: '80%' }}></div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Wed</span>
        </div>
        <div className="chart-bar-wrap">
          <div className="chart-bar highlight" style={{ height: '95%' }}></div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Thu</span>
        </div>
        <div className="chart-bar-wrap">
          <div className="chart-bar" style={{ height: '75%' }}></div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Fri</span>
        </div>
      </div>
    </div>
  )
}
