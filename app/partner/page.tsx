import React from 'react'
import { PartnersHeader } from './components/PartnersHeader'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function PartnerHomePage() {
  return (
    <div style={{ minHeight: '80vh', paddingBottom: '4rem' }}>
      <PartnersHeader />
      
      <div className="shell" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ background: 'var(--card-bg, #ffffff)', border: '1px solid var(--border, #e2e8f0)', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main, #0f172a)' }}>
            Scale Your Agency with On-Demand AI Solutions
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted, #475569)', lineHeight: '1.6', marginBottom: '2rem' }}>
            Partner with Lunacore Intelligence (OPC) Private Limited to deliver tailored AI automation assistants to your clients without building an in-house machine learning engineering team.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.25rem', borderRadius: '8px', background: 'var(--background, #f8fafc)', border: '1px solid var(--border, #e2e8f0)' }}>
              <CheckCircle2 size={20} style={{ color: 'var(--primary, #2563eb)', marginBottom: '0.5rem' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.3rem' }}>Custom Agent Deployments</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted, #64748b)' }}>Built precisely around your clients' workflows and business guidelines.</p>
            </div>
            <div style={{ padding: '1.25rem', borderRadius: '8px', background: 'var(--background, #f8fafc)', border: '1px solid var(--border, #e2e8f0)' }}>
              <CheckCircle2 size={20} style={{ color: 'var(--primary, #2563eb)', marginBottom: '0.5rem' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.3rem' }}>Dedicated Support</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted, #64748b)' }}>Full backend stability backed by DPIIT recognized startup engineering.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link href="/partner/economics" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View Partner Economics <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
