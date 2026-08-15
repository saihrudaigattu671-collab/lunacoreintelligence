import Link from 'next/link'
import { SiteShell } from '@/components/site-shell'
import { ShieldCheck, UserCheck, Layers, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function FeaturesPage() {
  return (
    <SiteShell>
      <main>
        {/* Header */}
        <section className="shell" style={{ padding: '4rem 1.5rem 2rem', textAlign: 'center', maxWidth: '750px' }}>
          <h1>System Features & Capability Overview</h1>
          <p style={{ marginTop: '0.75rem', fontSize: '1.125rem' }}>
            Lunacore is built to handle customer operations automatically while preserving strict human oversight on sensitive decisions.
          </p>
        </section>

        {/* Core Capabilities */}
        <section className="section">
          <div className="shell">
            <div className="feature-grid">
              <div className="feature-card">
                <div className="card-icon"><ShieldCheck size={20} /></div>
                <h3>Custom Policy Enforcement</h3>
                <p>Hard-code your exact store rules into the AI model so it never offers unauthorized refunds, discounts, or replacements.</p>
              </div>

              <div className="feature-card">
                <div className="card-icon"><UserCheck size={20} /></div>
                <h3>1-Click Manager Sign-off</h3>
                <p>Set monetary thresholds (e.g., refunds over ₹2,000). The AI prepares the order summary and sends a single click approval alert to management.</p>
              </div>

              <div className="feature-card">
                <div className="card-icon"><Layers size={20} /></div>
                <h3>E-Commerce Platform Sync</h3>
                <p>Seamlessly integrates into Shopify, custom store databases, and logistics webhooks to check tracking numbers and inventory in real time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Workflow Graphic Section */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="shell">
            <div className="section-title">
              <h2>How Orders Move Through the System</h2>
              <p>Clear, traceable logic at every stage of execution.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <span style={{ color: 'var(--text-accent)', fontSize: '0.875rem', fontWeight: 600 }}>STAGE 1</span>
                <h3 style={{ fontSize: '1.125rem', margin: '0.5rem 0' }}>Request Verification</h3>
                <p style={{ fontSize: '0.875rem' }}>Identifies customer identity, order date, delivery confirmation, and current warranty eligibility.</p>
              </div>

              <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <span style={{ color: 'var(--text-accent)', fontSize: '0.875rem', fontWeight: 600 }}>STAGE 2</span>
                <h3 style={{ fontSize: '1.125rem', margin: '0.5rem 0' }}>Rule Evaluation</h3>
                <p style={{ fontSize: '0.875rem' }}>Compares request details against your preset store policies and checks available warehouse inventory.</p>
              </div>

              <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <span style={{ color: 'var(--text-accent)', fontSize: '0.875rem', fontWeight: 600 }}>STAGE 3</span>
                <h3 style={{ fontSize: '1.125rem', margin: '0.5rem 0' }}>Action Execution</h3>
                <p style={{ fontSize: '0.875rem' }}>Processes routine actions immediately or routes exceptional requests directly to your management dashboard.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature List */}
        <section className="section">
          <div className="shell" style={{ maxWidth: '800px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2.5rem' }}>Included Standard Capabilities</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Multi-channel Messaging</strong>
                  <p style={{ fontSize: '0.875rem' }}>Deploy on WhatsApp, Web Chat, Email, or custom internal dashboards.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Audit Log History</strong>
                  <p style={{ fontSize: '0.875rem' }}>Every conversation, rule check, and decision is stored with full time stamps.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Weekly Performance Summaries</strong>
                  <p style={{ fontSize: '0.875rem' }}>Receive email briefs summarizing task completion rates and escalation trends.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Data Privacy Controls</strong>
                  <p style={{ fontSize: '0.875rem' }}>Customer data is encrypted and never used for public AI training models.</p>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <Link href="/contact" className="btn-primary">
                Test Features in Demo <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
