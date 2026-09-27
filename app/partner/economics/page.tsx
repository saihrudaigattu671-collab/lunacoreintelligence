import React from 'react'
import { PartnersHeader } from './../components/PartnersHeader'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function PartnerEconomicsPage() {
  return (
    <div style={{ minHeight: '80vh', paddingBottom: '4rem' }}>
      <PartnersHeader />
      
      <div className="shell" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ background: 'var(--card-bg, #ffffff)', border: '1px solid var(--border, #e2e8f0)', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main, #0f172a)' }}>
            Partner Economics & Pricing Structure
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted, #475569)', lineHeight: '1.6', marginBottom: '2rem' }}>
            Transparent financial models built for B2B agency partners. All commercial terms are quoted in Indian Rupees (INR).
          </p>

          <div style={{ padding: '1.5rem', borderRadius: '8px', background: 'var(--background, #f8fafc)', border: '1px solid var(--border, #e2e8f0)', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>Discount Policy Note</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted, #64748b)', margin: 0 }}>
              Promotional partner discounts apply exclusively to recurring monthly bot subscriptions rather than setup fees.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/partner" className="nav-link" style={{ fontSize: '0.9rem' }}>← Back to Overview</Link>
            <Link href="/partner/process" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Explore Integration Process <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
