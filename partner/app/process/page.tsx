import React from 'react'
import Link from 'next/link'
import { PartnersHeader } from '../../components/PartnersHeader'
import { ArrowRight, Workflow } from 'lucide-react'

export default function PartnerProcessPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#ffffff', color: '#0f172a' }}>
      <PartnersHeader />

      <main style={{ flex: 1, padding: '4rem 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 0.875rem', borderRadius: '50px', background: '#dcfce7', color: '#059669', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1rem' }}>
              <Workflow size={14} /> Operational Workflow
            </div>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Simple 5-Step Partnership Workflow
            </h1>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '650px', margin: '0 auto' }}>
              How we collaborate with your agency from initial client discovery to ongoing AI fulfillment and commission payouts.
            </p>
          </div>

          {/* 5-Step Flow */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
            <div style={{ padding: '1.5rem', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase' }}>Step 01</span>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: '0.5rem 0' }}>Contact Us</h3>
              <p style={{ fontSize: '0.875rem', color: '#475569' }}>Register as an agency partner or reach out to discuss your first client project.</p>
            </div>
            <div style={{ padding: '1.5rem', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase' }}>Step 02</span>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: '0.5rem 0' }}>We Reach Back</h3>
              <p style={{ fontSize: '0.875rem', color: '#475569' }}>Our team connects with you promptly to review technical requirements and onboarding details.</p>
            </div>
            <div style={{ padding: '1.5rem', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase' }}>Step 03</span>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: '0.5rem 0' }}>Terms & Process</h3>
              <p style={{ fontSize: '0.875rem', color: '#475569' }}>We align on service tiers, pricing floors, and commission structures.</p>
            </div>
            <div style={{ padding: '1.5rem', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase' }}>Step 04</span>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: '0.5rem 0' }}>Contract Signing</h3>
              <p style={{ fontSize: '0.875rem', color: '#475569' }}>Finalize the agency partnership agreement and get set up in our portal.</p>
            </div>
            <div style={{ padding: '1.5rem', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase' }}>Step 05</span>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: '0.5rem 0' }}>Send Customer & Earn</h3>
              <p style={{ fontSize: '0.875rem', color: '#475569' }}>Introduce AI during client discovery, embed our script snippet, and receive commissions.</p>
            </div>
          </div>

          {/* Technical Division */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
            <div style={{ padding: '2rem', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a' }}>Agency Partner Responsibilities</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1rem', fontSize: '0.875rem', color: '#475569' }}>
                <li>Introduce Lunacore AI capability during client web or software discovery.</li>
                <li>Gather primary business requirements and client knowledge-base materials.</li>
                <li>Embed the single-line Lunacore script snippet into client frontend layouts.</li>
                <li>Maintain overall account management and client relationship ownership.</li>
              </ul>
            </div>

            <div style={{ padding: '2rem', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a' }}>Lunacore Intelligence Responsibilities</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1rem', fontSize: '0.875rem', color: '#475569' }}>
                <li>Handle 100% of <strong>development, training, knowledge base prep</strong>, and zero-hallucination pipelines.</li>
                <li>Configure custom API orchestrations, webhooks, and backend data connectors.</li>
                <li>Manage ongoing LLM infrastructure, token costs, and model maintenance.</li>
                <li>Provide 2nd-level technical support for any integration anomalies.</li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/contact" style={{ background: '#059669', color: '#ffffff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Partner With Us Now <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </main>
    </div>
  )
}
