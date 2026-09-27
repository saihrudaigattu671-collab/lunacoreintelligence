import React from 'react'
import { PartnersHeader } from '../components/PartnersHeader'
import { PartnersFooter } from '../components/PartnersFooter'

export default function PartnerProcessPage() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', background: '#f8fafc' }}>
      <PartnersHeader />
      
      <div className="shell" style={{ maxWidth: '950px', margin: '0 auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem', padding: '0 1rem' }}>
        
        {/* Section: Onboarding Flow */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: '#0f172a' }}>Onboarding & Execution Process</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
              <div style={{ color: '#2563eb', fontWeight: 800, marginBottom: '0.5rem', fontSize: '1.25rem' }}>01. Contact Us</div>
              <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0 }}>Reach out via our partner contact form to submit your agency profile.</p>
            </div>
            
            <div style={{ padding: '1.5rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
              <div style={{ color: '#2563eb', fontWeight: 800, marginBottom: '0.5rem', fontSize: '1.25rem' }}>02. Sign Contract</div>
              <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0 }}>Review terms, commission structures, and sign the Agency Partner Agreement.</p>
            </div>

            <div style={{ padding: '1.5rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
              <div style={{ color: '#2563eb', fontWeight: 800, marginBottom: '0.5rem', fontSize: '1.25rem' }}>03. Send Customer</div>
              <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0 }}>Introduce AI during discovery and submit client business guidelines/knowledge bases.</p>
            </div>

            <div style={{ padding: '1.5rem', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px' }}>
              <div style={{ color: '#1e40af', fontWeight: 800, marginBottom: '0.5rem', fontSize: '1.25rem' }}>04. Get Commission</div>
              <p style={{ fontSize: '0.9rem', color: '#1e3a8a', margin: 0 }}>Receive base 15% commissions and hit volume accelerators for 8% bonuses.</p>
            </div>
          </div>
        </div>

        {/* Section: Operational Division */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: '#0f172a' }}>Operational Workflow & Technical Division</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Agency Side */}
            <div style={{ borderTop: '4px solid #94a3b8', paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a' }}>Agency Partner Responsibilities</h3>
              <ul style={{ paddingLeft: '1.2rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', margin: 0 }}>
                <li>Gather primary business requirements and client knowledge-base materials.</li>
                <li>Introduce Lunacore AI capability during client web/software discovery.</li>
                <li>Embed the Lunacore single-line script snippet into client frontend layouts.</li>
                <li>Maintain overall account management and client relationship ownership.</li>
              </ul>
            </div>

            {/* Lunacore Side */}
            <div style={{ borderTop: '4px solid #2563eb', paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a' }}>Lunacore Intelligence Responsibilities</h3>
              <ul style={{ paddingLeft: '1.2rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', margin: 0 }}>
                <li>Handle 100% of prompt engineering, model tuning, and zero-hallucination pipelines.</li>
                <li>Configure custom API orchestrations, webhooks, and backend data connectors.</li>
                <li>Manage ongoing LLM infrastructure, token costs, and model maintenance.</li>
                <li>Provide 2nd-level technical support for integration anomalies.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <PartnersFooter />
    </div>
  )
}
