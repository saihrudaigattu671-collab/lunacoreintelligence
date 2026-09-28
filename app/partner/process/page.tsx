import React from 'react'
import { PartnersHeader } from '../components/PartnersHeader'
import { PartnersFooter } from '../components/PartnersFooter'
import { CheckCircle2, ArrowRight, UserCheck, FileText, Send, PhoneCall, Award, Layers } from 'lucide-react'

export default function PartnerProcessPage() {
  const steps = [
    {
      number: '01',
      title: 'Contact Us',
      description: 'Reach out via our partner contact form to submit your initial agency profile.',
      icon: <Send size={20} color="#2563eb" />
    },
    {
      number: '02',
      title: 'Our Team Gets Back to You',
      description: 'Our partnership team reviews your application and reaches out promptly.',
      icon: <PhoneCall size={20} color="#2563eb" />
    },
    {
      number: '03',
      title: 'Understand Process & Terms',
      description: 'Review and understand the complete operational process and commercial terms of partnership.',
      icon: <FileText size={20} color="#2563eb" />
    },
    {
      number: '04',
      title: 'Contract Signing',
      description: 'Sign the official Agency Partner Agreement to formalize the partnership.',
      icon: <UserCheck size={20} color="#2563eb" />
    },
    {
      number: '05',
      title: 'You Send Customers',
      description: 'Introduce AI capabilities during your client discovery and submit client business guidelines/knowledge bases.',
      icon: <Layers size={20} color="#2563eb" />
    },
    {
      number: '06',
      title: 'We Contact & Explain Offerings',
      description: 'Lunacore connects with the referred client to demonstrate and explain our technical AI offerings.',
      icon: <PhoneCall size={20} color="#2563eb" />
    },
    {
      number: '07',
      title: 'Client Contract Signing',
      description: 'Final agreement and contract signing are completed with the client sent by your company.',
      icon: <CheckCircle2 size={20} color="#10b981" />
    },
    {
      number: '08',
      title: '15% Base Commission Payout',
      description: 'Base 15% partner commission is promptly calculated and sent to you upon initial payment clearing.',
      icon: <Award size={20} color="#2563eb" />
    },
    {
      number: '09',
      title: '60-Day Window & 8% Bonus',
      description: 'Track progress across the 60-day rolling window. Upon closing 15+ contracts, the 8% volume accelerator bonus is disbursed.',
      icon: <ArrowRight size={20} color="#059669" />
    }
  ]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f8fafc', color: '#0f172a' }}>
      <PartnersHeader />
      
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#ffffff', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(37, 99, 235, 0.2)', color: '#60a5fa', padding: '0.35rem 0.85rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.25rem', border: '1px solid rgba(37, 99, 235, 0.3)' }}>
            Operational Framework
          </div>
          <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem', color: '#ffffff' }}>
            Onboarding & <span style={{ color: '#60a5fa' }}>Execution Process</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.6', maxWidth: '800px', marginBottom: '0' }}>
            A streamlined 9-step partnership journey designed to ensure flawless execution, transparent commission payouts, and complete technical alignment between your agency and Lunacore Intelligence.
          </p>
        </div>
      </section>

      {/* Main Content Container (Full Width Optimized) */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '4rem 2rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Onboarding Steps Grid */}
        <div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '2rem' }}>Partnership Onboarding Lifecycle</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {steps.map((step, index) => (
              <div key={index} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)', position: 'relative', overflow: 'hidden' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#cbd5e1' }}>{step.number}</span>
                    <div style={{ background: '#eff6ff', padding: '0.75rem', borderRadius: '12px' }}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6', margin: 0 }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Workflow & Technical Division Section */}
        <div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '2rem' }}>Operational Workflow & Technical Division</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
            
            {/* Agency Responsibilities */}
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#eff6ff', color: '#2563eb', padding: '0.75rem', borderRadius: '12px', fontWeight: 700 }}>
                  Agency
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>Agency Partner Responsibilities</h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                <li>Introduce Lunacore AI capability during client web/software discovery.</li>
                <li>Gather primary business requirements and client knowledge-base materials[cite: 12].</li>
                <li>Embed the Lunacore single-line script snippet into client frontend layouts[cite: 12].</li>
                <li>Maintain overall account management and client relationship ownership[cite: 12].</li>
              </ul>
            </div>

            {/* Lunacore Responsibilities */}
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#ecfdf5', color: '#059669', padding: '0.75rem', borderRadius: '12px', fontWeight: 700 }}>
                  Lunacore
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>Lunacore Intelligence Responsibilities</h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                <li>Handle 100% of prompt engineering, model tuning, and zero-hallucination pipelines[cite: 12].</li>
                <li>Configure custom API orchestrations, webhooks, and backend data connectors[cite: 12].</li>
                <li>Manage ongoing LLM infrastructure, token costs, and model maintenance[cite: 12].</li>
                <li>Provide 2nd-level technical support for integration anomalies[cite: 12].</li>
              </ul>
            </div>

          </div>
        </div>

      </div>

      <PartnersFooter />
    </div>
  )
}
