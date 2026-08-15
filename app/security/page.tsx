import Link from 'next/link'
import { SiteShell } from '@/components/site-shell'
import { ShieldCheck, Lock, EyeOff, Server, ArrowRight } from 'lucide-react'

export default function SecurityPage() {
  return (
    <SiteShell>
      <main>
        {/* Header */}
        <section className="shell" style={{ padding: '4rem 1.5rem 2rem', textAlign: 'center', maxWidth: '750px' }}>
          <h1>Data Protection & Security Architecture</h1>
          <p style={{ marginTop: '0.75rem', fontSize: '1.125rem' }}>
            Your operational data and customer conversations remain strictly confidential and isolated.
          </p>
        </section>

        {/* Security Principles */}
        <section className="section">
          <div className="shell">
            <div className="feature-grid">
              
              <div className="feature-card">
                <div className="card-icon"><EyeOff size={20} /></div>
                <h3>Zero Public Model Training</h3>
                <p>Your store rules, support history, and customer communications are never fed back into public model training datasets.</p>
              </div>

              <div className="feature-card">
                <div className="card-icon"><Lock size={20} /></div>
                <h3>End-to-End Encryption</h3>
                <p>All stored data and API signals transmitted between your e-commerce platform and Lunacore use standard AES-256 and TLS 1.3 encryption.</p>
              </div>

              <div className="feature-card">
                <div className="card-icon"><Server size={20} /></div>
                <h3>Isolated Environments</h3>
                <p>Every enterprise tenant runs within isolated data boundaries, preventing cross-tenant data exposure.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Policy Verification & Safeguards */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="shell" style={{ maxWidth: '800px' }}>
            <div className="section-title">
              <h2>Execution Control Guardrails</h2>
              <p>How we ensure your business rules are safely enforced.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Strict Financial Limits</h3>
                <p style={{ fontSize: '0.9375rem' }}>
                  The AI cannot execute refunds or issue discount credits beyond the monetary ceiling configured by your management team. Anything exceeding your limit automatically pauses for human authorization.
                </p>
              </div>

              <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Audit Log & Trail Transparency</h3>
                <p style={{ fontSize: '0.9375rem' }}>
                  Every customer interaction records the specific store policy rule evaluated, the input data verified, and the resulting system decision.
                </p>
              </div>

              <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Role-Based Access Control</h3>
                <p style={{ fontSize: '0.9375rem' }}>
                  Control manager escalation access with role-based permissions, ensuring only designated team members can sign off on high-value exceptions.
                </p>
              </div>

            </div>

            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <Link href="/contact" className="btn-primary">
                Review Security in Demo <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </section>
      </main>
    </SiteShell>
  )
}
