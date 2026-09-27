import React from 'react'
import { PartnersHeader } from '@/app/partner/components/PartnersHeader'
import { PartnersFooter } from '@/app/partner/components/PartnersFooter'

export default function PartnerEconomicsPage() {
  const tableHeaderStyle = { padding: '1rem', background: '#f1f5f9', borderBottom: '2px solid #cbd5e1', textAlign: 'left' as const, fontWeight: 700, color: '#0f172a' }
  const tableCellStyle = { padding: '1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '0.95rem' }

  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', background: '#f8fafc' }}>
      <PartnersHeader />
      
      <div className="shell" style={{ maxWidth: '950px', margin: '0 auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem', padding: '0 1rem' }}>
        
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>Partner Channel Economics</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.6', marginBottom: '2rem' }}>
            The program is structured around high upfront compensation funded by monthly subscription revenue, keeping setup fees completely separate as non-negotiable technical deployment charges.
          </p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#0f172a' }}>1. Base Commission Structure</h3>
          <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>Incentive Tier</th>
                  <th style={tableHeaderStyle}>Calculation Basis</th>
                  <th style={tableHeaderStyle}>Payout Execution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{...tableCellStyle, fontWeight: 600, color: '#2563eb'}}>Base Partner Commission</td>
                  <td style={tableCellStyle}>15% of Monthly Subscription Fee<br/><small>(Strictly excludes setup fee)</small></td>
                  <td style={tableCellStyle}>Paid immediately upon client contract signature & initial payment clearing.</td>
                </tr>
                <tr>
                  <td style={{...tableCellStyle, fontWeight: 600, color: '#2563eb'}}>60-Day Volume Accelerator</td>
                  <td style={tableCellStyle}>Extra 8% Bonus on Sum of Subscription Fees<br/><small>(Strictly excludes setup fees)</small></td>
                  <td style={tableCellStyle}>Triggered retroactively upon closing 15+ (Tier 2, 3 & 4) contracts within 60 days.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#0f172a' }}>2. Eligible Service Tiers & Pricing Floor</h3>
          <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e2e8f0' }}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>Tier Level</th>
                  <th style={tableHeaderStyle}>Target Client Profile</th>
                  <th style={tableHeaderStyle}>Setup Fee (Separate)</th>
                  <th style={tableHeaderStyle}>Monthly Subscription</th>
                  <th style={tableHeaderStyle}>Base 15% Payout</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{...tableCellStyle, fontWeight: 600}}>Tier 2: Autonomous Support</td>
                  <td style={tableCellStyle}>SMBs, E-Commerce, High-Intent Lead Sites</td>
                  <td style={tableCellStyle}>₹10,000</td>
                  <td style={tableCellStyle}>₹12,000/mo</td>
                  <td style={{...tableCellStyle, color: '#059669', fontWeight: 700}}>₹1,800</td>
                </tr>
                <tr>
                  <td style={{...tableCellStyle, fontWeight: 600}}>Tier 3: Hybrid Support Agent</td>
                  <td style={tableCellStyle}>Mid-Market, High-Volume Support (1 Human)</td>
                  <td style={tableCellStyle}>₹10,000</td>
                  <td style={tableCellStyle}>₹30,000/mo</td>
                  <td style={{...tableCellStyle, color: '#059669', fontWeight: 700}}>₹4,500</td>
                </tr>
                <tr>
                  <td style={{...tableCellStyle, fontWeight: 600}}>Tier 4: Enterprise AI Workforce</td>
                  <td style={tableCellStyle}>Enterprise Operations (2 Dedicated Humans)</td>
                  <td style={tableCellStyle}>₹10,000</td>
                  <td style={tableCellStyle}>₹60,000/mo</td>
                  <td style={{...tableCellStyle, color: '#059669', fontWeight: 700}}>₹9,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#0f172a' }}>3. The 60-Day Volume Accelerator Example</h3>
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '2.5rem' }}>
            <p style={{ margin: '0 0 1rem 0', color: '#475569', fontSize: '0.95rem' }}>
              Example: Closing 20 contracts within 60 days (12 Tier-2, 5 Tier-3, and 3 Tier-4 packages).
            </p>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
              <tbody>
                <tr><td style={tableCellStyle}><strong>Total Subscriptions</strong></td><td style={{...tableCellStyle, textAlign: 'right'}}>₹4,74,000</td></tr>
                <tr><td style={tableCellStyle}><strong>Base Commission (15%)</strong></td><td style={{...tableCellStyle, textAlign: 'right'}}>₹71,100</td></tr>
                <tr><td style={tableCellStyle}><strong>Volume Bonus (8% Sub)</strong></td><td style={{...tableCellStyle, textAlign: 'right'}}>₹37,920</td></tr>
                <tr><td style={{...tableCellStyle, fontWeight: 800, color: '#2563eb'}}>TOTAL AGENCY EARNINGS</td><td style={{...tableCellStyle, textAlign: 'right', fontWeight: 800, color: '#2563eb'}}>₹1,09,020</td></tr>
              </tbody>
            </table>
            <p style={{ margin: '1rem 0 0 0', fontSize: '0.8rem', color: '#64748b' }}>
              *Note: The ₹10,000 setup fee per contract (₹2,00,000 total) is collected separately and retained 100% by Lunacore as the technical deployment charge.
            </p>
          </div>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#0f172a' }}>4. Key Program Terms & Governing Rules</h3>
          <ul style={{ paddingLeft: '1.2rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
            <li><strong>Setup Fee Separation:</strong> Retained 100% by Lunacore to cover initial deployment and knowledge-base setup. Never discounted.</li>
            <li><strong>Currency Standard:</strong> All financial terms and calculations are strictly quoted in Indian Rupees (INR).</li>
            <li><strong>Payout Schedule:</strong> Base commissions are remitted within 5 business days of client funds clearing. Volume Accelerator bonuses are disbursed on day 61.</li>
            <li><strong>Client Ownership:</strong> The Agency Partner retains primary client relationship ownership; Lunacore operates exclusively as the technical backend.</li>
          </ul>

        </div>
      </div>

      <PartnersFooter />
    </div>
  )
}
