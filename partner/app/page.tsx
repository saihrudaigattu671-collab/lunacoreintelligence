import React from 'react'
import Link from 'next/link'
import { PartnersHeader } from '../components/PartnersHeader'
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Zap } from 'lucide-react'

export default function PartnerOverviewPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#ffffff', color: '#0f172a' }}>
      <PartnersHeader />

      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <section style={{ padding: '5rem 0 3rem 0', textAlign: 'center', background: 'linear-gradient(to bottom, #f0fdf4, #ffffff)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 0.875rem', borderRadius: '50px', background: '#dcfce7', color: '#059669', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1.5rem' }}>
              <Zap size={14} /> Agency Partner Program
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1.25rem', color: '#0f172a' }}>
              Are you a software or web development agency? Want to increase your clients? Here is the solution.
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#475569', lineHeight: 1.6, marginBottom: '2rem' }}>
              Empower your agency to offer 24/7 AI customer support agents and informative website bots to your clients without any technical or development overhead.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/partner/economics" style={{ background: '#059669', color: '#ffffff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                View Partner Economics <ArrowRight size={16} />
              </Link>
              <Link href="/partner/process" style={{ border: '2px solid #059669', color: '#059669', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
                Explore Workflow
              </Link>
            </div>
          </div>
        </section>

        {/* What Lunacore Brings */}
        <section style={{ padding: '4rem 0', borderTop: '1px solid #f1f5f9' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>
              What Lunacore Brings to Your Client Proposals
            </h2>
            <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
              Lunacore Intelligence builds custom AI customer support agents and automated information bots tailored directly to your clients' business rules.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              <div style={{ padding: '1.5rem', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Instant Visitor Engagement</h3>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.5 }}>
                  Our bots answer visitor questions instantly, handle routine support inquiries, and guide users through website info 24/7.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Automated Demo Bookings</h3>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.5 }}>
                  Qualify inbound leads in under 30 seconds and automatically schedule meetings or product demos directly into your clients' calendars.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner with Lunacore */}
        <section style={{ padding: '4rem 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '2.5rem', textAlign: 'center' }}>
              Why Partner With Lunacore?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ color: '#059669', flexShrink: 0 }}><CheckCircle2 size={24} /></div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>Instant Customer Support</h3>
                  <p style={{ fontSize: '0.875rem', color: '#475569' }}>Help your clients automate up to 80% of routine support queries and eliminate long response delays.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ color: '#059669', flexShrink: 0 }}><TrendingUp size={24} /></div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>Grow Your Agency Revenue</h3>
                  <p style={{ fontSize: '0.875rem', color: '#475569' }}>Add a high-margin recurring revenue stream to every website build or software project you deliver.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ color: '#059669', flexShrink: 0 }}><ShieldCheck size={24} /></div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>Zero Technical Overhead</h3>
                  <p style={{ fontSize: '0.875rem', color: '#475569' }}>Your team handles discovery and script embedding; Lunacore handles 100% of the AI development and maintenance.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ color: '#059669', flexShrink: 0 }}><Zap size={24} /></div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>Stand Out From Competitors</h3>
                  <p style={{ fontSize: '0.875rem', color: '#475569' }}>Transform your agency from a standard design shop into an AI-enabled technical digital partner.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
