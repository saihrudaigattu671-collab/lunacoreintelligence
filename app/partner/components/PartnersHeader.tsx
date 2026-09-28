'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Mail, BookOpen, TrendingUp, Workflow } from 'lucide-react'

// Asset references matching main site config
export const markUrl = '/logo-mark.png'

export function PartnersHeader() {
  const pathname = usePathname()

  const navItems = [
    { name: 'About', href: '/partner', icon: <BookOpen size={16} /> },
    { name: 'Economics', href: '/partner/economics', icon: <TrendingUp size={16} /> },
    { name: 'Process', href: '/partner/process', icon: <Workflow size={16} /> },
  ]

  return (
    <header style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'between', flexWrap: 'wrap', gap: '1rem' }}>
        
        {/* Left Branding: Logo + Company Name + Partner Portal Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <img src={markUrl} alt="Lunacore Logo" style={{ height: '42px', width: 'auto' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.01em', color: '#0f172a', lineHeight: 1.2 }}>
                LUNACORE INTELLIGENCE
              </span>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Partner Portal
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links with Active Zoom & Dark Border Effect */}
        <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginLeft: 'auto' }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.6rem 1.1rem',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#0f172a' : '#475569',
                  background: isActive ? '#f8fafc' : 'transparent',
                  border: isActive ? '2px solid #0f172a' : '2px solid transparent',
                  transform: isActive ? 'scale(1.05)' : 'scale(1)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 12px rgba(15, 23, 42, 0.08)' : 'none'
                }}
              >
                {item.icon}
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Increased Size Contact CTA Button */}
        <div>
          <Link 
            href="/partner/contact" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '10px',
              fontSize: '0.95rem',
              fontWeight: 700,
              background: '#2563eb',
              color: '#ffffff',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
              transition: 'all 0.2s ease'
            }}
          >
            <Mail size={18} /> Contact for Partnership
          </Link>
        </div>

      </div>
    </header>
  )
}
