import Link from 'next/link'
import { SiteShell } from '@/components/site-shell'
import { Check, ArrowRight, Shield } from 'lucide-react'

export default function PricingPage() {
  return (
    <SiteShell>
      <main>
        {/* Header */}
        <section className="shell" style={{ padding: '4rem 1.5rem 2rem', textAlign: 'center', maxWidth: '700px' }}>
          <h1>Simple, Transparent Pricing</h1>
          <p style={{ marginTop: '0.75rem', fontSize: '1.125rem' }}>
            Start with a 7-day custom trial. Upgrade to dedicated managed plans built around your exact order volumes.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="section">
          <div className="shell">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'stretch' }}>
              
              {/* Starter Plan */}
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem' }}>Starter</h3>
                  <p style={{ fontSize: '0.875rem', margin: '0.5rem 0 1.5rem' }}>Ideal for growing businesses testing automated operations.</p>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                    ₹24,999 <span style={{ fontSize: '0.875rem', fontWeight: 400, color: 'var(--text-muted)' }}>/ month</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '1.5rem' }}>+ 18% GST • One-time setup fee applies</span>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)' }} /> Up to 1,000 automated tasks/mo</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)' }} /> 1 Custom business workflow</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)' }} /> Email & Webchat integration</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)' }} /> Standard manager approval limits</li>
                  </ul>
                </div>

                <Link href="/contact" className="btn-secondary" style={{ marginTop: '2rem', textAlign: 'center', width: '100%', justifyContent: 'center' }}>
                  Start 7-Day Trial
                </Link>
              </div>

              {/* Growth Plan (Highlighted) */}
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--primary)', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: '#fff', fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '12px', fontWeight: 600 }}>
                  MOST POPULAR
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem' }}>Growth</h3>
                  <p style={{ fontSize: '0.875rem', margin: '0.5rem 0 1.5rem' }}>For scaling brands requiring multi-channel automation.</p>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                    ₹49,999 <span style={{ fontSize: '0.875rem', fontWeight: 400, color: 'var(--text-muted)' }}>/ month</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '1.5rem' }}>+ 18% GST • Free initial sandbox setup</span>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)' }} /> Up to 5,000 automated tasks/mo</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)' }} /> 3 Custom business workflows</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)' }} /> WhatsApp, Email & Webchat</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)' }} /> 1-Click manager escalation dashboard</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)' }} /> Weekly executive reporting</li>
                  </ul>
                </div>

                <Link href="/contact" className="btn-primary" style={{ marginTop: '2rem', textAlign: 'center', width: '100%', justifyContent: 'center' }}>
                  Request Growth Demo <ArrowRight size={16} />
                </Link>
              </div>

              {/* Custom Enterprise Plan */}
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem' }}>Enterprise</h3>
                  <p style={{ fontSize: '0.875rem', margin: '0.5rem 0 1.5rem' }}>Custom SLAs, dedicated servers, and tailor-made workflows.</p>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                    Custom Quote
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '1.5rem' }}>Billed annually or quarterly</span>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)' }} /> Unlimited automated volume</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)' }} /> Unlimited custom integrations</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)' }} /> Dedicated account manager</li>
                    <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}><Check size={16} style={{ color: 'var(--success)' }} /> On-premise or isolated cloud deployment</li>
                  </ul>
                </div>

                <Link href="/contact" className="btn-secondary" style={{ marginTop: '2rem', textAlign: 'center', width: '100%', justifyContent: 'center' }}>
                  Contact Sales
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Financial Disclosures Notice */}
        <section className="section" style={{ background: 'var(--bg-secondary)', padding: '3rem 0' }}>
          <div className="shell" style={{ textAlign: 'center', maxWidth: '650px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem', color: 'var(--text-accent)' }}>
              <Shield size={24} />
            </div>
            <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>7-Day Trial Terms</h3>
            <p style={{ fontSize: '0.875rem' }}>
              Your initial 7-day sandbox trial is completely free with zero credit card required. Applicable taxes (+18% GST) and one-time initial integration fees are presented in your custom proposal prior to live deployment.
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
