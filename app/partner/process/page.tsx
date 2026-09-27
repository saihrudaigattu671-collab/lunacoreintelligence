import React from 'react'
import { PartnersHeader } from './../components/PartnersHeader'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PartnerProcessPage() {
  return (
    <div style={{ minHeight: '80vh', paddingBottom: '4rem' }}>
      <PartnersHeader />
      
      <div className="shell" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ background: 'var(--card-bg, #ffffff)', border: '1px solid var(--border, #e2e8f0)', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main, #0f172a)' }}>
            Onboarding & Execution Process
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted, #475569)', lineHeight: '1.6', marginBottom: '2rem' }}>
            Step-by-step framework to get your clients integrated with custom AI assistants seamlessly.
          </p>

          <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted, #475569)', marginBottom: '2.5rem' }}>
            <li style={{ lineHeight: '1.5' }}><strong style={{ color: 'var(--text-main)' }}>Discovery:</strong> Submit client business guidelines and specific automation requirements.</li>
            <li style={{ lineHeight: '1.5' }}><strong style={{ color: 'var(--text-main)' }}>Configuration:</strong> Our engineering pipeline builds and tests the customized conversational assistant.</li>
            <li style={{ lineHeight: '1.5' }}><strong style={{ color: 'var(--text-main)' }}>Deployment:</strong> Embed code snippet or link direct demo schedules for your clients.</li>
          </ol>

          <div>
            <Link href="/partner/economics" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
              <ArrowLeft size={16} /> Back to Economics
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
