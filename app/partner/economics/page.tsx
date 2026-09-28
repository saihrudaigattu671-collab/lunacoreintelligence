import React from 'react'
import { PartnersHeader } from '../components/PartnersHeader'
import { PartnersFooter } from '../components/PartnersFooter'
import { IndianRupee, TrendingUp, ShieldAlert, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function PartnerEconomicsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f8fafc', color: '#0f172a' }}>
      <PartnersHeader />
      
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#ffffff', padding: '4rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', padding: '0.35rem 0.85rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.25rem', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              <IndianRupee size={14} /> Partner Channel Economics (INR)
            </div>
            <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem', color: '#ffffff' }}>
              Lucrative Payouts & <span style={{ color: '#34d399' }}>Transparent Terms</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '0' }}>
              Structured around high upfront compensation funded by monthly subscription revenue, keeping setup fees strictly separate as non-negotiable technical deployment charges.
            </p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '2rem', backdropFilter: 'blur(10px)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#34d399', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={20} /> Commercial Highlights
            </h3>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
              <li>Discounts apply exclusively to monthly bot subscriptions (20% promo eligible).</li>
              <li>Setup fees are non-negotiable and excluded from commission pools.</li>
              <li>Base 15% upfront payouts paid immediately upon client payment clearance.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '4rem 2rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Section 1: Base Commission Structure */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#2563eb', color: '#fff', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem' }}>1</div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>Base Commission Structure</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ background: '#eff6ff', color: '#2563eb', fontSize: '0.75rem', fontWeight: 700, padding: '0.3rem 0.75rem', borderRadius: '50px', textTransform: 'uppercase' }}>Standard Payout</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2563eb' }}>15%</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>Base Partner Commission</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Calculated strictly from Monthly Subscription Fees (excludes setup fees).
              </p>
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem', fontSize: '0.85rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#10b981" /> Paid immediately upon client contract signature & initial payment clearance.
              </div>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ background: '#ecfdf5', color: '#059669', fontSize: '0.75rem', fontWeight: 700, padding: '0.3rem 0.75rem', borderRadius: '50px', textTransform: 'uppercase' }}>Volume Accelerator</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#059669' }}>+8%</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>60-Day Volume Bonus</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Extra bonus on sum of subscription fees for rapid scale (excludes setup fees).
              </p>
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem', fontSize: '0.85rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#10b981" /> Triggered retroactively upon closing 15+ contracts within 60 days.
              </div>
            </div>

          </div>
        </div>

        {/* Section 2: Eligible Service Tiers & Pricing Floor */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#2563eb', color: '#fff', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem' }}>2</div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>Eligible Service Tiers & Pricing Floor (INR)</h2>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <th style={{ padding: '1.25rem 1.5rem', fontWeight: 700 }}>Tier Level</th>
                    <th style={{ padding: '1.25rem 1.5rem', fontWeight: 700 }}>Target Client Profile</th>
                    <th style={{ padding: '1.25rem 1.5rem', fontWeight: 700 }}>Setup Fee (Separate)</th>
                    <th style={{ padding: '1.25rem 1.5rem', fontWeight: 700 }}>Monthly Subscription</th>
                    <th style={{ padding: '1.25rem 1.5rem', fontWeight: 700, color: '#2563eb' }}>Base 15% Payout</th>
                  </tr>
                </thead>
                <tbody style={{ color: '#0f172a' }}>
                  
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600 }}>Tier 1: Basic Utility Bot</td>
                    <td style={{ padding: '1.25rem 1.5rem', color: '#475569' }}>Entry-level routing agents</td>
                    <td style={{ padding: '1.25rem 1.5rem' }}>₹5,000</td>
                    <td style={{ padding: '1.25rem 1.5rem' }}>₹5,000 /mo</td>
                    <td style={{ padding: '1.25rem 1.5rem', fontWeight: 700, color: '#64748b' }}>₹0 (Excluded)</td>
                  </tr>

                  <tr style={{ borderBottom: '1px solid #f1f5f9', background: '#f8fafc' }}>
                    <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600 }}>Tier 2: Autonomous Support</td>
                    <td style={{ padding: '1.25rem 1.5rem', color: '#475569' }}>SMBs, E-Commerce, High-Intent Leads</td>
                    <td style={{ padding: '1.25rem 1.5rem' }}>₹10,000</td>
                    <td style={{ padding: '1.25rem 1.5rem' }}>₹12,000 /mo</td>
                    <td style={{ padding: '1.25rem 1.5rem', fontWeight: 700, color: '#2563eb' }}>₹1,800</td>
                  </tr>

                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600 }}>Tier 3: Hybrid Agent</td>
                    <td style={{ padding: '1.25rem 1.5rem', color: '#475569' }}>Mid-Market Volume Support (+1 Human)</td>
                    <td style={{ padding: '1.25rem 1.5rem' }}>₹25,000</td>
                    <td style={{ padding: '1.25rem 1.5rem' }}>₹30,000 /mo</td>
                    <td style={{ padding: '1.25rem 1.5rem', fontWeight: 700, color: '#2563eb' }}>₹4,500</td>
                  </tr>

                  <tr>
                    <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600 }}>Tier 4: Enterprise Workforce</td>
                    <td style={{ padding: '1.25rem 1.5rem', color: '#475569' }}>Full Enterprise Operations (+2 Humans)</td>
                    <td style={{ padding: '1.25rem 1.5rem' }}>₹50,000</td>
                    <td style={{ padding: '1.25rem 1.5rem' }}>₹75,000 /mo</td>
                    <td style={{ padding: '1.25rem 1.5rem', fontWeight: 700, color: '#2563eb' }}>₹11,250</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Section 3: Policy Guardrails */}
        <div style={{ background: '#fffbeb', border: '1px solid #fef3c7', borderRadius: '16px', padding: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
          <div style={{ background: '#f59e0b', color: '#fff', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <ShieldAlert size={22} />
          </div>
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#92400e', marginBottom: '0.5rem' }}>Important Commercial Policy & Discounts</h4>
            <p style={{ fontSize: '0.95rem', color: '#b45309', lineHeight: '1.6', margin: 0 }}>
              Promotional discounts (such as the active 20% partner discount) apply <strong>exclusively to monthly bot subscription prices</strong> and never to setup fees. All commercial agreements and calculations are processed strictly in Indian Rupees (₹).
            </p>
          </div>
        </div>

      </div>

      <PartnersFooter />
    </div>
  )
}
