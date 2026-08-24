import Link from 'next/link'
import { SiteShell } from '@/components/site-shell'
import { Bot, ArrowRight, ShieldCheck, Zap, Users, BarChart3, CheckCircle2, Calendar, PhoneCall, Search, RefreshCw, CreditCard, Rocket } from 'lucide-react'

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        {/* Hero Section */}
        <section className="shell" style={{ padding: '5rem 1.5rem 3rem', textAlign: 'center', maxWidth: '850px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-secondary)', padding: '0.375rem 0.875rem', borderRadius: '50px', fontSize: '0.875rem', fontWeight: 500, marginBottom: '1.5rem', border: '1px solid var(--border-color)' }}>
            <Zap size={16} style={{ color: 'var(--text-accent)' }} />
            <span>Autonomous AI Workforces & Custom Zoho Middleware</span>
          </div>
          <h1 style={{ fontSize: '3rem', lineHeight: 1.2, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            Scale Your Business Operations 24/7 with Zero Hallucinations
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            Lunacore Intelligence builds enterprise-grade multi-agent AI assistants, strict policy enforcement layers, and deep Zoho/Deluge workflow integrations.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ padding: '0.875rem 1.75rem', fontSize: '1rem' }}>
              Book a Demo <ArrowRight size={18} />
            </Link>
            <Link href="/features" className="btn-secondary" style={{ padding: '0.875rem 1.75rem', fontSize: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-main)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Explore Features
            </Link>
          </div>
        </section>

        {/* Core Value Pillars */}
        <section className="section" style={{ background: 'var(--bg-secondary)', padding: '4rem 0' }}>
          <div className="shell">
            <div className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2>Why Enterprise Leaders Choose Lunacore</h2>
              <p>Engineered for strict control, seamless integration, and complete operational clarity.</p>
            </div>

            <div className="feature-grid">
              <div className="feature-card" style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <div className="card-icon" style={{ marginBottom: '1rem' }}><Bot size={24} /></div>
                <h3>Autonomous Multi-Agent AI</h3>
                <p>Deploy a master coordinator agent backed by specialized sub-agents for complex troubleshooting, live database retrieval, and automated tool execution.</p>
              </div>

              <div className="feature-card" style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <div className="card-icon" style={{ marginBottom: '1rem' }}><ShieldCheck size={24} /></div>
                <h3>Strict Policy Enforcements</h3>
                <p>Lock your AI model directly to your exact store rules, pricing guidelines, and refund boundaries so it never makes unauthorized promises.</p>
              </div>

              <div className="feature-card" style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <div className="card-icon" style={{ marginBottom: '1rem' }}><BarChart3 size={24} /></div>
                <h3>Weekly Intelligence Reports</h3>
                <p>Receive automated executive reports every Monday detailing conversation metrics, lead conversion rates, and customer friction alerts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6-STEP CLIENT ONBOARDING JOURNEY */}
        <section className="section" style={{ padding: '5rem 0' }}>
          <div className="shell">
            <div className="section-title" style={{ textAlign: 'center', marginBottom: '3.5rem', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
              <span style={{ color: 'var(--text-accent)', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Seamless Onboarding</span>
              <h2 style={{ fontSize: '2.25rem', margin: '0.5rem 0 1rem' }}>Your Journey With Lunacore Intelligence</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
                From your initial demo booking to full-scale automated production—our transparent 6-step roadmap ensures zero friction.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              
              {/* Step 1 */}
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)', position: 'relative', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '1.25rem', border: '1px solid var(--border-color)' }}>
                  01
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <Calendar size={20} style={{ color: 'var(--text-accent)' }} />
                  <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Book a Demo</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                  Schedule your introductory session through our interactive portal to explore our AI capabilities live.
                </p>
              </div>

              {/* Step 2 */}
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)', position: 'relative', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '1.25rem', border: '1px solid var(--border-color)' }}>
                  02
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <PhoneCall size={20} style={{ color: 'var(--text-accent)' }} />
                  <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Team Contact</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                  Our technical project leads reach out promptly to discuss your communication channels and infrastructure.
                </p>
              </div>

              {/* Step 3 */}
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)', position: 'relative', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '1.25rem', border: '1px solid var(--border-color)' }}>
                  03
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <Search size={20} style={{ color: 'var(--text-accent)' }} />
                  <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Analyze Business</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                  We audit your current workflows, CRM setups (Zoho/SalesIQ/Desk), and operational bottlenecks.
                </p>
              </div>

              {/* Step 4 */}
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)', position: 'relative', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '1.25rem', border: '1px solid var(--border-color)' }}>
                  04
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <Bot size={20} style={{ color: 'var(--text-accent)' }} />
                  <h3 style={{ fontSize: '1.2rem', margin: 0 }}>7-Day Free Trial Bot</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                  We deploy a fully customized demo bot tailored to your exact business rules for a risk-free 7-day trial.
                </p>
              </div>

              {/* Step 5 */}
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)', position: 'relative', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '1.25rem', border: '1px solid var(--border-color)' }}>
                  05
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <RefreshCw size={20} style={{ color: 'var(--text-accent)' }} />
                  <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Review & Upgrades</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                  We analyze trial metrics together, fine-tune policies, and upgrade to multi-agent hierarchies or advanced workflows.
                </p>
              </div>

              {/* Step 6 */}
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)', position: 'relative', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '1.25rem', border: '1px solid var(--border-color)' }}>
                  06
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <Rocket size={20} style={{ color: 'var(--text-accent)' }} />
                  <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Launch & Grow</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                  Finalize secure payment, deploy your live AI workforce, and scale your business operations permanently.
                </p>
              </div>

            </div>

            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <Link href="/contact" className="btn-primary" style={{ padding: '0.875rem 2rem' }}>
                Start Your Onboarding Journey <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
