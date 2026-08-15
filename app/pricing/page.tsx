import Link from 'next/link'
import { SiteShell } from '@/components/site-shell'
import { Check, ArrowRight, Shield } from 'lucide-react'

export default function PricingPage() {
  return (
    <SiteShell>
      <main>
        {/* Header */}
        <section className="shell" style={{ padding: '4rem 1.5rem 2rem', textAlign: 'center', maxWidth: '750px' }}>
          <h1>Executive Pricing Structure</h1>
          <p style={{ marginTop: '0.75rem', fontSize: '1.125rem' }}>
            Autonomous AI workforces built for your exact business rules. All plans include GST tax invoicing.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="section">
          <div className="shell">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
              
              {/* Tier 1 */}
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem' }}>Tier 1: Informative Bot</h3>
                  <p style={{ fontSize: '0.875rem', margin: '0.5rem 0 1.5rem', minHeight: '40px' }}>
                    Small businesses and startups needing 24/7 basic lead capture and standard FAQ handling.
                  </p>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                    ₹5,000 <span style={{ fontSize: '0.875rem', fontWeight: 400, color: 'var(--text-muted)' }}>/ month</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '1.5rem' }}>
                    + ₹10,000 One-Time Setup Fee
                  </span>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)', shrink: 0 }} /> Single Informative AI Agent</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)', shrink: 0 }} /> Dynamic Website Chat Widget</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)', shrink: 0 }} /> Instant Email Notifications</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)', shrink: 0 }} /> Standard Knowledge Ingestion</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)', shrink: 0 }} /> Monthly Performance Summary</li>
                  </ul>
                </div>

                <Link href="/contact" className="btn-secondary" style={{ marginTop: '2rem', textAlign: 'center', width: '100%', justifyContent: 'center' }}>
                  Get Started
                </Link>
              </div>

              {/* Tier 2 (Highlighted) */}
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--primary)', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: '#fff', fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '12px', fontWeight: 600 }}>
                  MOST POPULAR
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem' }}>Tier 2: Autonomous Support</h3>
                  <p style={{ fontSize: '0.875rem', margin: '0.5rem 0 1.5rem', minHeight: '40px' }}>
                    Mid-size businesses seeking 100% automated support with 0 human staff required.
                  </p>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                    ₹12,000 <span style={{ fontSize: '0.875rem', fontWeight: 400, color: 'var(--text-muted)' }}>/ month</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '1.5rem' }}>
                    + ₹10,000 One-Time Setup Fee
                  </span>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)', shrink: 0 }} /> Multi-Agent Framework</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)', shrink: 0 }} /> Tool & API Integrations</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)', shrink: 0 }} /> Custom Dynamic Knowledge Base</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)', shrink: 0 }} /> 📊 Weekly Performance Report</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)', shrink: 0 }} /> ⚠️ Weekly Customer Friction Report</li>
                  </ul>
                </div>

                <Link href="/contact" className="btn-primary" style={{ marginTop: '2rem', textAlign: 'center', width: '100%', justifyContent: 'center' }}>
                  Get Started <ArrowRight size={16} />
                </Link>
              </div>

              {/* Tier 3 */}
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem' }}>Tier 3: Hybrid Support</h3>
                  <p style={{ fontSize: '0.875rem', margin: '0.5rem 0 1.5rem', minHeight: '40px' }}>
                    Growing support teams requiring AI automation with live human takeover.
                  </p>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                    ₹30,000 <span style={{ fontSize: '0.875rem', fontWeight: 400, color: 'var(--text-muted)' }}>/ month</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '1.5rem' }}>
                    + ₹10,000 One-Time Setup Fee
                  </span>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)', shrink: 0 }} /> Everything in Tier 2</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)', shrink: 0 }} /> 1 Human Agent Workspace Seat</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)', shrink: 0 }} /> Context-Preserving Handoff</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)', shrink: 0 }} /> Human SLA Escalation Triggers</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)', shrink: 0 }} /> Multi-Channel Handoff Support</li>
                  </ul>
                </div>

                <Link href="/contact" className="btn-secondary" style={{ marginTop: '2rem', textAlign: 'center', width: '100%', justifyContent: 'center' }}>
                  Get Started
                </Link>
              </div>

              {/* Tier 4 */}
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem' }}>Tier 4: Full AI Workforce</h3>
                  <p style={{ fontSize: '0.875rem', margin: '0.5rem 0 1.5rem', minHeight: '40px' }}>
                    Enterprise operations requiring full automation and deep Zoho/Deluge engineering.
                  </p>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                    ₹60,000 <span style={{ fontSize: '0.875rem', fontWeight: 400, color: 'var(--text-muted)' }}>/ month</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '1.5rem' }}>
                    + ₹10,000 One-Time Setup Fee
                  </span>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)', shrink: 0 }} /> Everything in Tier 3</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)', shrink: 0 }} /> 2 Human Agent Workspace Seats</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)', shrink: 0 }} /> Zoho CRM & Deluge Engineering</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)', shrink: 0 }} /> Custom API & Webhook Builds</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)', shrink: 0 }} /> Dedicated Automation Engineer</li>
                  </ul>
                </div>

                <Link href="/contact" className="btn-secondary" style={{ marginTop: '2rem', textAlign: 'center', width: '100%', justifyContent: 'center' }}>
                  Contact Sales
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Setup Fee Notice */}
        <section className="section" style={{ background: 'var(--bg-secondary)', padding: '3rem 0' }}>
          <div className="shell" style={{ textAlign: 'center', maxWidth: '650px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem', color: 'var(--text-accent)' }}>
              <Shield size={24} />
            </div>
            <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Setup & Onboarding Policy</h3>
            <p style={{ fontSize: '0.875rem' }}>
              Every plan includes a flat ₹10,000 one-time setup fee covering prompt engineering, custom knowledge base ingestion, and backend API routing. GST tax invoicing is available for all plans.
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
