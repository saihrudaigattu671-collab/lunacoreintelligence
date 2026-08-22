'use client'

import Link from 'next/link'
import React from 'react'
import { ArrowUpRight } from 'lucide-react'

// Local assets stored in public/ folder (Zero Vercel dependencies)
export const markUrl = '/logo-mark.png'
export const lockupUrl = '/website-graphic.png'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-row">
        <Link href="/" className="logo-container" style={{ gap: '1rem' }}>
          <img src={markUrl} alt="Lunacore Logo" className="brand-logo" style={{ height: '50px', width: 'auto' }} />
          <span style={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.01em', color: 'var(--text-main)' }}>
            LUNACORE INTELLIGENCE
          </span>
        </Link>

        <nav className="desktop-nav">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/features" className="nav-link">Features</Link>
          <Link href="/pricing" className="nav-link">Pricing</Link>
          <Link href="/security" className="nav-link">Security</Link>
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
      <div className="shell footer-grid">
        <div>
          <div className="logo-container" style={{ marginBottom: '1rem', gap: '0.75rem' }}>
            <img src={markUrl} alt="Lunacore Logo" className="brand-logo" style={{ height: '40px', width: 'auto' }} />
            <span style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--text-main)' }}>LUNACORE INTELLIGENCE</span>
          </div>
          <p style={{ maxWidth: '300px', fontSize: '0.875rem' }}>
            Building customized AI assistants tailored directly to your business rules and workflows.
          </p>
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
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '0.9375rem', marginBottom: '1rem' }}>Office Contact</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
            <p style={{ margin: 0 }}>
              Email:{' '}
              <a href="mailto:saihrudaigattu671@gmail.com" className="nav-link" style={{ display: 'inline' }}>
                saihrudaigattu671@gmail.com
              </a>
            </p>
            <p style={{ margin: 0 }}>
              Phone:{' '}
              <a href="tel:+917674095537" className="nav-link" style={{ display: 'inline' }}>
                +91 76740 95537
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Lunacore Intelligence. All rights reserved.</span>
        <span>Custom AI Workforce Solutions</span>
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
