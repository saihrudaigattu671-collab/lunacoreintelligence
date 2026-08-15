// app/pricing/page.tsx
import Link from 'next/link'
import { SiteShell } from '@/components/site-shell'

export default function PricingPage() {
  const plans = [
    {
      name: 'Tier 1: Informative Bot',
      price: '₹5,000',
      period: '/ month',
      setup: '+ ₹10,000 One-Time Setup',
      description: 'Small businesses and startups needing 24/7 basic lead capture and standard FAQ handling.',
      features: [
        'Single Informative AI Agent',
        'Dynamic Website Chat Widget',
        'Instant Email Notifications',
        'Standard Knowledge Base Ingestion',
        'Monthly Performance Summary',
      ],
      popular: false,
    },
    {
      name: 'Tier 2: Autonomous Support',
      price: '₹12,000',
      period: '/ month',
      setup: '+ ₹10,000 One-Time Setup',
      description: 'Mid-size businesses seeking 100% automated support with 0 human staff required.',
      features: [
        'Multi-Agent Collaborative Framework',
        'Tool & API Integrations (Calendar, Webhooks)',
        'Custom Dynamic Knowledge Base',
        '📊 Weekly Performance & SLA Report',
        '⚠️ Weekly Customer Friction & Issues Report',
      ],
      popular: true,
    },
    {
      name: 'Tier 3: Hybrid Support',
      price: '₹30,000',
      period: '/ month',
      setup: '+ ₹10,000 One-Time Setup',
      description: 'Growing support teams requiring full AI automation with live human takeover capabilities.',
      features: [
        'Everything in Tier 2',
        '1 Human Agent Workspace Seat',
        'Context-Preserving Handoff',
        'Human SLA Escalation Triggers',
        'Multi-Channel Handoff Support',
      ],
      popular: false,
    },
    {
      name: 'Tier 4: Full AI Workforce',
      price: '₹60,000',
      period: '/ month',
      setup: '+ ₹10,000 One-Time Setup',
      description: 'Established operations needing enterprise workflows and deep Zoho/Deluge engineering.',
      features: [
        'Everything in Tier 3',
        '2 Human Agent Workspace Seats',
        'Zoho CRM & Deluge Workflow Engineering',
        'Custom API & Complex Webhook Builds',
        'Dedicated Automation Engineer',
        'Priority SLA Support',
      ],
      popular: false,
    },
  ]

  return (
    <SiteShell>
      <main className="section">
        <div className="shell" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1>Executive Pricing Structure</h1>
            <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
              Autonomous AI workforces built for your exact business rules. GST tax invoicing available.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {plans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '1rem',
                  border: plan.popular ? '2px solid #000' : '1px solid #e5e7eb',
                  padding: '1.5rem',
                  backgroundColor: '#fff',
                }}
              >
                {plan.popular && (
                  <span style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#000',
                    color: '#fff',
                    fontSize: '0.75rem',
                    padding: '2px 12px',
                    borderRadius: '9999px',
                    fontWeight: 600,
                  }}>
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{plan.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '0.25rem', minHeight: '45px' }}>
                    {plan.description}
                  </p>
                  
                  <div style={{ margin: '1.25rem 0 0.5rem 0' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 800 }}>{plan.price}</span>
                    <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>{plan.period}</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#4b5563', marginBottom: '1.25rem' }}>
                    {plan.setup}
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.825rem', color: '#374151' }}>
                    {plan.features.map((feature, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ fontWeight: 700, color: '#000', shrink: 0 }}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={plan.popular ? 'btn-primary' : 'btn-secondary'}
                  style={{ textAlign: 'center', width: '100%', display: 'block' }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </SiteShell>
  )
}
