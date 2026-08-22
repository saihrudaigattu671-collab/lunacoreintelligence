import Link from 'next/link'
import { ArrowRight, ShieldCheck, UserCheck, BarChart2, Zap } from 'lucide-react'
import { SiteShell, WeeklyPerformanceChart } from '@/components/site-shell'

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        {/* HERO SECTION (Full width dark banner) */}
        <section className="hero-banner">
          <div className="shell hero">
            <div className="hero-copy">
              <div className="announcement-badge">
                <Zap size={14} /> 7-Day Risk-Free Customized Trial
              </div>

              <h1>Build an AI workforce around how your business works.</h1>

              <p>
                Lunacore configures custom AI assistants trained on your specific business rules, approval limits, and support policies. Test your custom assistant live before making any commitment.
              </p>

              <div className="hero-actions">
                <Link href="/contact" className="btn-primary">
                  Book a Demo <ArrowRight size={16} />
                </Link>
                <Link href="/features" className="btn-secondary">
                  See How It Works
                </Link>
              </div>

              <div className="hero-meta">
                <span>✓ You Set Spending Rules</span>
                <span>✓ Zero Guesswork</span>
              </div>
            </div>

            {/* Local Website Graphic */}
            <div className="hero-graphic">
              <img 
                src="/website-graphic.png" 
                alt="Lunacore System Graphic" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
            </div>
          </div>
        </section>

        {/* WORKFLOW DEMO SECTION */}
        <section className="section">
          <div className="shell">
            <div className="section-title">
              <h2>How Lunacore Handles Work Safely</h2>
              <p>Your AI assistant evaluates every customer request against your exact store policies.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
              <div className="workflow-steps">
                <div className="workflow-step">
                  <div className="step-num">1</div>
                  <div>
                    <h3 style={{ fontSize: '1rem' }}>Customer Submits Request</h3>
                    <p style={{ fontSize: '0.875rem' }}>"My order arrived damaged. I want a replacement."</p>
                  </div>
                </div>

                <div className="workflow-step">
                  <div className="step-num">2</div>
                  <div>
                    <h3 style={{ fontSize: '1rem' }}>System Checks Your Rules</h3>
                    <p style={{ fontSize: '0.875rem' }}>Confirms purchase history, return window, and stock level.</p>
                  </div>
                </div>

                <div className="workflow-step" style={{ borderColor: 'var(--primary)' }}>
                  <div className="step-num" style={{ background: 'var(--primary)', color: '#fff' }}>3</div>
                  <div>
                    <h3 style={{ fontSize: '1rem' }}>Safe Execution or Escalation</h3>
                    <p style={{ fontSize: '0.875rem' }}>Creates return shipment automatically or alerts human managers for sign-off.</p>
                  </div>
                </div>
              </div>

              <div>
                <WeeklyPerformanceChart />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="section">
          <div className="shell">
            <div className="section-title">
              <h2>Full Management Control</h2>
              <p>Built to ensure your business operations remain safe without unauthorized decisions.</p>
            </div>

            <div className="feature-grid">
              <div className="feature-card">
                <div className="card-icon"><ShieldCheck size={20} /></div>
                <h3>Custom Rules</h3>
                <p>Hard-code your exact return, warranty, and pricing rules directly into the system.</p>
              </div>

              <div className="feature-card">
                <div className="card-icon"><UserCheck size={20} /></div>
                <h3>Manager Approvals</h3>
                <p>Set explicit spending limits. High-value refunds or special cases require quick 1-click human approval.</p>
              </div>

              <div className="feature-card">
                <div className="card-icon"><BarChart2 size={20} /></div>
                <h3>Weekly Reporting</h3>
                <p>Receive weekly management reports tracking SLA resolution speeds and recurring customer friction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="section" style={{ background: '#0f172a', color: '#fff', borderTop: 'none' }}>
          <div className="shell" style={{ textAlign: 'center', maxWidth: '700px' }}>
            <h2 style={{ color: '#fff' }}>Ready to test your custom AI workforce?</h2>
            <p style={{ marginBottom: '1.5rem', color: '#94a3b8' }}>
              We map out your rules and build a custom demo. Test the assistant on real customer requests for 7 days risk-free.
            </p>
            <Link href="/contact" className="btn-primary">
              Request Your 7-Day Demo <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="section" style={{ background: '#f8fafc', borderTop: '1px solid var(--border-color)' }}>
          <div className="shell" style={{ textAlign: 'center', maxWidth: '700px' }}>
            <h2>Ready to test your custom AI workforce?</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We map out your rules and build a custom demo. Test the assistant on real customer requests for 7 days risk-free.
            </p>
            <Link href="/contact" className="btn-primary">
              Request Your 7-Day Demo <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
