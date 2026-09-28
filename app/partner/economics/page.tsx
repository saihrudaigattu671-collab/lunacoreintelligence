import React from 'react'
import { PartnersHeader } from '../components/PartnersHeader'
import { PartnersFooter } from '../components/PartnersFooter'
import { IndianRupee, ShieldAlert, Award, CheckCircle2, Clock, Zap } from 'lucide-react'

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
              Structured around high upfront compensation funded by monthly subscription revenue, while the one-time setup fee remains completely separate as a non-negotiable technical deployment charge .
            </p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '2rem', backdropFilter: 'blur(10px)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#34d399', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={20} /> Commercial Highlights
            </h3>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
              <li>Promotional discounts apply exclusively to monthly bot subscriptions.</li>
              <li>Setup fees are non-negotiable and strictly excluded from commission pools .</li>
              <li>Base 15% upfront payouts paid immediately upon client contract signature & initial payment clearance .</li>
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
                15% of Monthly Subscription Fee (Strictly excludes setup fee) .
              </p>
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem', fontSize: '0.85rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#10b981" /> Paid immediately upon client contract signature & initial payment clearing .
              </div>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ background: '#ecfdf5', color: '#059669', fontSize: '0.75rem', fontWeight: 700, padding: '0.3rem 0.75rem', borderRadius: '50px', textTransform: 'uppercase' }}>Volume Accelerator</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#059669' }}>+8%</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>60-Day Volume Accelerator</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Extra 8% Bonus on Sum of Subscription Fees (Strictly excludes setup fees) .
              </p>
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem', fontSize: '0.85rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#10b981" /> Triggered retroactively upon closing 15+ (Tier 2, 3 & 4) contracts within 60 days .
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
                  <tr style={{ borderBottom: '1px solid #f1f5f9', background: '#f8fafc' }}>
                    <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600 }}>Tier 2: Autonomous Support</td>
                    <td style={{ padding: '1.25rem 1.5rem', color: '#475569' }}>SMBs, E-Commerce, High-Intent Lead Sites </td>
                    <td style={{ padding: '1.25rem 1.5rem' }}>₹10,000 </td>
                    <td style={{ padding: '1.25rem 1.5rem' }}>₹12,000 /mo </td>
                    <td style={{ padding: '1.25rem 1.5rem', fontWeight: 700, color: '#2563eb' }}>₹1,800 </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600 }}>Tier 3: Hybrid Support Agent</td>
                    <td style={{ padding: '1.25rem 1.5rem', color: '#475569' }}>Mid-Market, High-Volume Support (1 Human) </td>
                    <td style={{ padding: '1.25rem 1.5rem' }}>₹10,000 </td>
                    <td style={{ padding: '1.25rem 1.5rem' }}>₹30,000 /mo </td>
                    <td style={{ padding: '1.25rem 1.5rem', fontWeight: 700, color: '#2563eb' }}>₹4,500 </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600 }}>Tier 4: Enterprise AI Workforce</td>
                    <td style={{ padding: '1.25rem 1.5rem', color: '#475569' }}>Enterprise Operations (2 Dedicated Humans) </td>
                    <td style={{ padding: '1.25rem 1.5rem' }}>₹10,000 </td>
                    <td style={{ padding: '1.25rem 1.5rem' }}>₹60,000 /mo </td>
                    <td style={{ padding: '1.25rem 1.5rem', fontWeight: 700, color: '#2563eb' }}>₹9,000 </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Section 3: 60-Day Volume Accelerator Rules & Example */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#2563eb', color: '#fff', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem' }}>3</div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>The 60-Day Volume Accelerator Program & Calculation Example</h2>
          </div>

          {/* Explanation First */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2rem', marginBottom: '2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={20} color="#2563eb" /> How the 60-Day Rolling Window Works
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.6', marginBottom: '1rem' }}>
              The 60-day volume accelerator timeline begins on the exact day the formal contract is signed between Lunacore and your company . 
            </p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
              <li><strong>Timeline Window:</strong> From the contract signed date (e.g., August 10th), a 60-day window runs (e.g., until October 10th). If Lunacore signs <strong>15 or more contracts</strong> from your agency side across Tier 2, Tier 3, and Tier 4 within this period, an extra 8% commission on the sum of subscription fees (excluding setup fees) is approved and credited .</li>
              <li><strong>Rolling Cycles:</strong> If the target of 15 contracts is not met within the current 60-day timeline window, the milestone resets and the next 60-day timeline window starts fresh from zero (meaning the 8% bonus will not be approved for that cycle).</li>
            </ul>
          </div>

          {/* Example Breakdown After */}
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>Example Breakdown: Successfully Achieving 20 Contracts in 60 Days</h3>
          <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Suppose within the 60-day time period, Lunacore signs 20 contracts through your company: 12 Tier-2 contracts (₹12,000/mo), 5 Tier-3 contracts (₹30,000/mo), and 3 Tier-4 contracts (₹60,000/mo) . Here is how the earnings calculate:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.75rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Combined Revenue</span>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0' }}>₹4,74,000 </div>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>Total monthly subscriptions</p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.75rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase' }}>15% Commission</span>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#2563eb', margin: '0.5rem 0' }}>₹71,100 </div>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>Base payout total</p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.75rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase' }}>8% Volume Bonus</span>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#059669', margin: '0.5rem 0' }}>₹37,920 </div>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>Accelerator bonus</p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)', color: '#fff', borderRadius: '16px', padding: '1.75rem', boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#bfdbfe', textTransform: 'uppercase' }}>Total Agency Earnings</span>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', margin: '0.5rem 0' }}>₹1,09,020 </div>
              <p style={{ fontSize: '0.85rem', color: '#bfdbfe', margin: 0 }}>Combined total payout</p>
            </div>
          </div>
          <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '1rem' }}>
            *Note: The ₹10,000 setup fee per contract (₹2,00,000 total across 20 deals) is collected separately as Lunacore's technical deployment charge .
          </div>
        </div>

        {/* Section 4: Policy Guardrails */}
        <div style={{ background: '#fffbeb', border: '1px solid #fef3c7', borderRadius: '16px', padding: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
          <div style={{ background: '#f59e0b', color: '#fff', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <ShieldAlert size={22} />
          </div>
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#92400e', marginBottom: '0.5rem' }}>Important Commercial Policy & Discounts</h4>
            <p style={{ fontSize: '0.95rem', color: '#b45309', lineHeight: '1.6', margin: 0 }}>
              Promotional discounts apply <strong>exclusively to monthly bot subscription prices</strong> and never to setup fees . All commercial agreements and calculations are processed strictly in Indian Rupees (₹) .
            </p>
          </div>
        </div>

      </div>

      <PartnersFooter />
    </div>
  )
}
