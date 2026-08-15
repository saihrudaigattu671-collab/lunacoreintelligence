import { SiteShell } from '@/components/site-shell'
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <SiteShell>
      <main className="shell" style={{ padding: '4rem 1.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem' }}>
          <h1>Request a 7-Day Business Demo</h1>
          <p style={{ marginTop: '0.75rem', fontSize: '1.125rem' }}>
            We'll configure a custom AI assistant built around your specific workflow rules and test it on actual customer scenarios.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Contact Details & Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem' }}>How the trial works:</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--text-accent)', padding: '0.5rem 0.75rem', borderRadius: '6px', fontWeight: 600 }}>1</div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-main)' }}>Rule Mapping Call</strong>
                    <p style={{ fontSize: '0.875rem' }}>We review your return, refund, or operational workflows in a brief 20-minute discussion.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--text-accent)', padding: '0.5rem 0.75rem', borderRadius: '6px', fontWeight: 600 }}>2</div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-main)' }}>Assistant Sandbox Setup</strong>
                    <p style={{ fontSize: '0.875rem' }}>We build your custom assistant with exact spending limits and human approval thresholds.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--text-accent)', padding: '0.5rem 0.75rem', borderRadius: '6px', fontWeight: 600 }}>3</div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-main)' }}>7-Day Live Test</strong>
                    <p style={{ fontSize: '0.875rem' }}>Run real customer tasks through your customized environment with zero financial risk.</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-accent)' }}>
                <Clock size={18} />
                <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Turnaround Time: 24 to 48 Hours</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-accent)' }}>
                <Mail size={18} />
                <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Direct Support: intelligence@lunacore.ai</span>
              </div>
            </div>
          </div>

          {/* Web3Forms Lead Capture */}
          <form action="https://api.web3forms.com/submit" method="POST" style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <input type="hidden" name="access_key" value="835c4b5e-2686-4402-bd95-7c34b103d90e" />
            <input type="hidden" name="subject" value="New Lunacore Business Demo Request" />

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.375rem', fontWeight: 500 }}>Full Name *</label>
              <input type="text" name="name" required placeholder="e.g. Rahul Sharma" style={{ width: '100%', padding: '0.75rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff', fontSize: '0.9375rem' }} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.375rem', fontWeight: 500 }}>Business Email *</label>
              <input type="email" name="email" required placeholder="rahul@company.com" style={{ width: '100%', padding: '0.75rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff', fontSize: '0.9375rem' }} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.375rem', fontWeight: 500 }}>Phone / WhatsApp *</label>
              <input type="tel" name="phone" required placeholder="+91 98765 43210" style={{ width: '100%', padding: '0.75rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff', fontSize: '0.9375rem' }} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.375rem', fontWeight: 500 }}>Company Name *</label>
              <input type="text" name="company" required placeholder="e.g. Acro Commerce" style={{ width: '100%', padding: '0.75rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff', fontSize: '0.9375rem' }} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.375rem', fontWeight: 500 }}>What workflows do you want to automate?</label>
              <textarea name="message" rows={3} placeholder="e.g. Order updates, replacements, and routine customer inquiries..." style={{ width: '100%', padding: '0.75rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff', fontSize: '0.9375rem' }}></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.875rem', marginTop: '0.5rem' }}>
              Request Your 7-Day Demo <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  )
}
