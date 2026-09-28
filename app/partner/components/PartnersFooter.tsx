import React from 'react'
import Link from 'next/link'

// Asset references matching main site config
export const markUrl = '/logo-mark.png'

export function PartnersFooter() {
  return (
    <footer style={{ background: '#0f172a', color: '#cbd5e1', padding: '4rem 2rem 2rem 2rem', marginTop: 'auto', borderTop: '1px solid #1e293b' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        
        {/* Company Overview & Compliance */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <img src={markUrl} alt="Lunacore Logo" style={{ height: '36px', width: 'auto' }} />
            <span style={{ fontWeight: 700, fontSize: '1rem', color: '#ffffff', lineHeight: 1.2 }}>
              LUNACORE INTELLIGENCE (OPC) PVT. LTD.
            </span>
          </div>
          <p style={{ fontSize: '0.875rem', marginBottom: '1rem', lineHeight: '1.5', color: '#94a3b8' }}>
            Building customized AI assistants tailored directly to your business rules and workflows.
          </p>
          <div style={{ fontSize: '0.75rem', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <span>CIN: U58202TS2026OPC221341</span>
            <span>DPIIT Startup Recognition: DIPP281409</span>
          </div>
        </div>

        {/* Product / Portal Links */}
        <div>
          <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>Partner Portal</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
            <Link href="/partner" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>Overview & About</Link>
            <Link href="/partner/economics" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>Economics & Tiers</Link>
            <Link href="/partner/process" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>Onboarding Process</Link>
            <Link href="/partner/contact" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>Partner Contact</Link>
          </div>
        </div>

        {/* Main Company Links & Profiles */}
        <div>
          <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>Company</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
            <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Main Website</Link>
            <Link href="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Book Demo</Link>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.25rem' }}>
              <a 
                href="https://www.linkedin.com/company/lunacore-intelligence/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.50rem', fontSize: '0.8125rem', color: '#94a3b8', textDecoration: 'none' }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', borderRadius: '4px', background: '#1e293b', color: '#ffffff' }}>
                  <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </span>
                Company Profile
              </a>

              <a 
                href="https://www.linkedin.com/in/sai-hrudai-gattu-6b1427384" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.50rem', fontSize: '0.8125rem', color: '#94a3b8', textDecoration: 'none' }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', borderRadius: '4px', background: '#1e293b', color: '#ffffff' }}>
                  <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </span>
                Founder's Profile
              </a>
            </div>
          </div>
        </div>

        {/* Office Contact Info */}
        <div>
          <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>Office Contact</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
            <div>
              <span style={{ display: 'block', color: '#64748b', fontSize: '0.8125rem' }}>Email:</span>
              <a href="mailto:saihrudaigattu@lunacoreintelligence.com" style={{ color: '#94a3b8', textDecoration: 'none', wordBreak: 'break-all' }}>
                saihrudaigattu@lunacoreintelligence.com
              </a>
            </div>
            <div>
              <span style={{ display: 'block', color: '#64748b', fontSize: '0.8125rem', marginTop: '0.25rem' }}>Phone:</span>
              <a href="tel:+917674095537" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                +91 76740 95537
              </a>
            </div>
            <p style={{ margin: '0.25rem 0 0 0', color: '#64748b', fontSize: '0.8125rem' }}>
              Hyderabad, Telangana, India
            </p>
          </div>
        </div>

      </div>

      {/* Copyright & Bottom Bar */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', borderTop: '1px solid #1e293b', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', color: '#64748b' }}>
        <span>© {new Date().getFullYear()} Lunacore Intelligence (OPC) Private Limited. All rights reserved.</span>
        <span>Compliance Verified: MCA / DPIIT</span>
      </div>
    </footer>
  )
}
