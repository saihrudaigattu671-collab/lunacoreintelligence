'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { LayoutDashboard, TrendingUp, Workflow } from 'lucide-react'

export function PartnersHeader() {
  const pathname = usePathname()

  const partnerNav = [
    { name: 'Overview', href: '/partner', icon: LayoutDashboard },
    { name: 'Economics', href: '/partner/economics', icon: TrendingUp },
    { name: 'Process', href: '/partner/process', icon: Workflow },
  ]

  return (
    <div style={{ background: 'var(--card-bg, #f8fafc)', borderBottom: '1px solid var(--border, #e2e8f0)', padding: '1rem 0', marginBottom: '2rem' }}>
      <div className="shell" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary, #2563eb)', fontWeight: 700 }}>
            Lunacore Partnership
          </span>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0.2rem 0 0 0', color: 'var(--text-main, #0f172a)' }}>
            Partner Portal
          </h1>
        </div>

        <nav style={{ display: 'flex', gap: '0.5rem', background: 'var(--background, #ffffff)', padding: '0.35rem', borderRadius: '8px', border: '1px solid var(--border, #e2e8f0)' }}>
          {partnerNav.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  background: isActive ? 'var(--primary, #2563eb)' : 'transparent',
                  color: isActive ? '#ffffff' : 'var(--text-muted, #64748b)',
                  transition: 'all 0.2s ease',
                }}
              >
                <Icon size={16} /> {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
