'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export function PartnersHeader() {
  const pathname = usePathname()

  const tabs = [
    { name: 'Overview', href: '/partner' },
    { name: 'Economics', href: '/partner/economics' },
    { name: 'Process', href: '/partner/process' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <div style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc', padding: '0.75rem 0' }}>
      <div className="shell" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669', display: 'inline-block' }}></span>
          Agency Partner Portal
        </div>
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {tabs.map((tab) => {
            const isActive = pathname === tab.href
            return (
              <Link
                key={tab.href}
                href={tab.href}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#059669' : '#64748b',
                  textDecoration: 'none',
                  paddingBottom: '0.2rem',
                  borderBottom: isActive ? '2px solid #059669' : '2px solid transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
