import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteShell } from '@/components/site-shell'
import {
  ShieldCheck,
  UserCheck,
  Layers,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Bot,
  FileText,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Workforce Features & Capabilities',
  description:
    'Explore Lunacore Intelligence features including multi-agent AI systems, policy enforcement, Zoho integrations, automated reporting, and human oversight.',
  alternates: {
    canonical: '/features',
  },
  openGraph: {
    title: 'AI Workforce Features & Capabilities | Lunacore Intelligence',
    description:
      'Explore autonomous AI workforce capabilities, multi-agent orchestration, policy controls, Zoho integrations, and executive intelligence reports.',
    url: 'https://lunacoreintelligence.com/features',
    type: 'website',
    images: [
      {
        url: '/website-graphic.png',
        width: 1200,
        height: 630,
        alt: 'Lunacore Intelligence AI Workforce Features',
      },
    ],
  },
}

export default function FeaturesPage() {

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

        {/* Core Capabilities Grid */}
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

        {/* 1. SINGLE-AGENT SYSTEMS DEEP DIVE */}
        <section className="section" style={{ background: 'rgba(255, 255, 255, 0.4)' }}>
          <div className="shell">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <div className="card-icon" style={{ marginBottom: '1rem' }}><Bot size={20} /></div>
                <span style={{ color: 'var(--text-accent)', fontSize: '0.875rem', fontWeight: 600 }}>TIER 1 ARCHITECTURE</span>
                <h2 style={{ fontSize: '1.75rem', margin: '0.5rem 0 1rem' }}>Single-Agent Systems (Informative Bot)</h2>
                <p style={{ marginBottom: '1.25rem', fontSize: '0.9375rem' }}>
                  Designed for small businesses and startups needing 24/7 lead capture and standard FAQ handling[cite: 1]. A dedicated single AI agent instance works around the clock on your website.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Strict Rule Boundaries:</strong> Locked directly to your business guidelines to prevent unauthorized promises.</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Instant Lead Capture:</strong> Immediate email notifications triggered when prospective clients interact.</span>
                  </div>
                </div>
              </div>

              <div className="chart-card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Single-Agent Workflow</h3>
                <p style={{ fontSize: '0.875rem', marginBottom: '1.25rem' }}>Simple, direct, 24/7 automated support execution.</p>
                <div className="workflow-steps">
                  <div className="workflow-step">
                    <div className="step-num">1</div>
                    <div>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: 600 }}>24/7 Chat Ingestion</h4>
                      <p style={{ fontSize: '0.8125rem' }}>Captures incoming visitor inquiries instantly on your site widget.</p>
                    </div>
                  </div>
                  <div className="workflow-step">
                    <div className="step-num">2</div>
                    <div>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: 600 }}>Knowledge Base Match</h4>
                      <p style={{ fontSize: '0.8125rem' }}>Resolves standard questions using your pre-loaded company data.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. MULTI-AGENT SYSTEMS & HIERARCHY DEEP DIVE */}
        <section className="section">
          <div className="shell">
            <div className="section-title">
              <span style={{ color: 'var(--text-accent)', fontSize: '0.875rem', fontWeight: 600 }}>ADVANCED ORCHESTRATION</span>
              <h2>Multi-Agent Systems & Hierarchy</h2>
              <p>How Lunacore divides labor across specialized sub-agents to completely eliminate hallucinations.</p>
            </div>

            {/* Displaying the uploaded info.png hierarchy image */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem', marginBottom: '2.5rem', boxShadow: '0 10px 25px rgba(0,0,0,0.03)', textAlign: 'center' }}>
              <img 
                src="/info.png" 
                alt="Lunacore Multi-Agent Hierarchy Architecture" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} 
              />
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
                Architectural mesh: The Master Agent routes requests down to specialized sub-agents for complex troubleshooting, database retrieval, and tool execution.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <span style={{ color: 'var(--primary)', fontSize: '0.8125rem', fontWeight: 600 }}>MASTER AGENT</span>
                <h3 style={{ fontSize: '1.125rem', margin: '0.5rem 0' }}>Main Face Agent</h3>
                <p style={{ fontSize: '0.875rem' }}>Acts as the primary coordinator (integrated with Zoho) that interacts directly with users and routes payloads to sub-agents.</p>
              </div>

              <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <span style={{ color: 'var(--primary)', fontSize: '0.8125rem', fontWeight: 600 }}>SUB-AGENT 1</span>
                <h3 style={{ fontSize: '1.125rem', margin: '0.5rem 0' }}>Solve Complex Issues</h3>
                <p style={{ fontSize: '0.875rem' }}>Dedicated sub-agent handling intricate troubleshooting, multi-step policy rules, and edge-case exceptions.</p>
              </div>

              <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <span style={{ color: 'var(--primary)', fontSize: '0.8125rem', fontWeight: 600 }}>SUB-AGENTS 2 & 3</span>
                <h3 style={{ fontSize: '1.125rem', margin: '0.5rem 0' }}>Data & Tools Executors</h3>
                <p style={{ fontSize: '0.875rem' }}>Retriever agents query live databases/inventory, while Tool executors run webhooks and automate CRM updates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE TWO WEEKLY EXECUTIVE REPORTS DEEP DIVE */}
        <section className="section" style={{ background: 'rgba(255, 255, 255, 0.4)' }}>
          <div className="shell">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <div className="card-icon" style={{ marginBottom: '1rem' }}><FileText size={20} /></div>
                <span style={{ color: 'var(--text-accent)', fontSize: '0.875rem', fontWeight: 600 }}>EXECUTIVE INTELLIGENCE</span>
                <h2 style={{ fontSize: '1.75rem', margin: '0.5rem 0 1rem' }}>The Two Weekly Executive Reports</h2>
                <p style={{ marginBottom: '1.25rem', fontSize: '0.9375rem' }}>
                  Available on Tier 2 plans and above, management receives two automated AI intelligence reports every Monday to maintain absolute operational clarity.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                  <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-main)' }}>1. Bot Performance Metrics Report</strong>
                    <p style={{ fontSize: '0.8125rem', margin: 0 }}>Summarizes total conversation volume, lead conversion rates, autonomous resolution percentage, and operational hours saved.</p>
                  </div>
                  <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-main)' }}>2. Customer Friction & Issues Report[cite: 1]</strong>
                    <p style={{ fontSize: '0.8125rem', margin: 0 }}>Automated grouping of recurring complaints, early warnings on broken links or policy misunderstandings, and actionable operational advice.</p>
                  </div>
                </div>
              </div>

              <div className="chart-card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Weekly Resolution Rate</h3>
                <p style={{ fontSize: '0.875rem', marginBottom: '1.25rem' }}>Automated Customer Tasks Handled</p>
                <div className="bar-chart-container">
                  <div className="chart-bar-wrap">
                    <div className="chart-bar" style={{ height: '50%' }}></div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mon</span>
                  </div>
                  <div className="chart-bar-wrap">
                    <div className="chart-bar" style={{ height: '65%' }}></div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Tue</span>
                  </div>
                  <div className="chart-bar-wrap">
                    <div className="chart-bar" style={{ height: '80%' }}></div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Wed</span>
                  </div>
                  <div className="chart-bar-wrap">
                    <div className="chart-bar highlight" style={{ height: '95%' }}></div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Thu</span>
                  </div>
                  <div className="chart-bar-wrap">
                    <div className="chart-bar" style={{ height: '75%' }}></div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Fri</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Included Standard Capabilities & CTA */}
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
