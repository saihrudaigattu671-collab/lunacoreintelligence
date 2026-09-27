import React from 'react'
import { PartnersHeader } from '@/app/partner/components/PartnersHeader'
import { PartnersFooter } from '@/app/partner/components/PartnersFooter'
import { Zap, TrendingUp, ShieldCheck, Server } from 'lucide-react'

export default function PartnerHomePage() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', background: '#f8fafc' }}>
      <PartnersHeader />
      
      <div className="shell" style={{ maxWidth: '950px', margin: '0 auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem', padding: '0 1rem' }}>
        
        {/* Section: About Partnership */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a' }}>About Partnership</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Lunacore Intelligence provides autonomous AI systems designed to integrate seamlessly into client web builds and software applications. We handle 100% of the technical AI fulfillment so your agency can offer advanced enterprise automation without internal R&D overhead.
          </p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#0f172a' }}>The Four Service Tiers</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: '#f1f5f9', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <strong style={{ display: 'block', color: '#2563eb', marginBottom: '0.25rem' }}>Tier 1: Basic Utility Bot</strong>
              <span style={{ fontSize: '0.875rem', color: '#475569' }}>Entry-level routing agents (Excluded from partner commission pool).</span>
            </div>
            <div style={{ padding: '1rem', background: '#f1f5f9', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <strong style={{ display: 'block', color: '#2563eb', marginBottom: '0.25rem' }}>Tier 2: Autonomous Support</strong>
              <span style={{ fontSize: '0.875rem', color: '#475569' }}>For SMBs and E-Commerce requiring 24/7 lead qualification.</span>
            </div>
            <div style={{ padding: '1rem', background: '#f1f5f9', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <strong style={{ display: 'block', color: '#2563eb', marginBottom: '0.25rem' }}>Tier 3: Hybrid Agent</strong>
              <span style={{ fontSize: '0.875rem', color: '#475569' }}>Mid-market volume support integrated with 1 human fallback.</span>
            </div>
            <div style={{ padding: '1rem', background: '#f1f5f9', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <strong style={{ display: 'block', color: '#2563eb', marginBottom: '0.25rem' }}>Tier 4: Enterprise Workforce</strong>
              <span style={{ fontSize: '0.875rem', color: '#475569' }}>Full enterprise AI operations integrated with 2 dedicated humans.</span>
            </div>
          </div>
        </div>

        {/* Section: Why Partner with Lunacore? */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: '#0f172a' }}>Why Partner with Lunacore?</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Zap style={{ color: '#2563eb', flexShrink: 0 }} />
              <div>
                <strong style={{ fontSize: '1.05rem', color: '#0f172a' }}>Drive Higher Client Sales & Conversion Speed</strong>
                <p style={{ fontSize: '0.95rem', color: '#475569', margin: '0.25rem 0 0 0' }}>Standard static contact forms lose up to 40% of leads. Lunacore autonomous agents engage visitors 24/7, answer questions, qualify intent, and schedule demos in under 30 seconds.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <TrendingUp style={{ color: '#2563eb', flexShrink: 0 }} />
              <div>
                <strong style={{ fontSize: '1.05rem', color: '#0f172a' }}>Align Your Agency With Market Trends</strong>
                <p style={{ fontSize: '0.95rem', color: '#475569', margin: '0.25rem 0 0 0' }}>Move from a commoditized design shop to an AI-enabled technical agency, commanding higher project valuations and winning competitive client bids.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <ShieldCheck style={{ color: '#2563eb', flexShrink: 0 }} />
              <div>
                <strong style={{ fontSize: '1.05rem', color: '#0f172a' }}>Smart, Cost-Reducing Customer Support</strong>
                <p style={{ fontSize: '0.95rem', color: '#475569', margin: '0.25rem 0 0 0' }}>Agents resolve up to 80% of routine support queries by connecting directly to client CRMs and inventories, slashing client staffing overhead.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Server style={{ color: '#2563eb', flexShrink: 0 }} />
              <div>
                <strong style={{ fontSize: '1.05rem', color: '#0f172a' }}>Zero R&D Expense & High-Margin Revenue</strong>
                <p style={{ fontSize: '0.95rem', color: '#475569', margin: '0.25rem 0 0 0' }}>Act as your plug-and-play AI department. Unlock uncapped earnings with 15% upfront payouts on every Tier 2+ subscription and an exclusive 8% volume accelerator.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <PartnersFooter />
    </div>
  )
}
