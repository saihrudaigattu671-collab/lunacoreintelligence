import React from 'react'
import Link from 'next/link'
import { PartnersHeader } from '../../components/PartnersHeader'
import { ArrowRight, DollarSign } from 'lucide-react'

export default function PartnerEconomicsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#ffffff', color: '#0f172a' }}>
      <PartnersHeader />

      <main style={{ flex: 1, padding: '4rem 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 0.875rem', borderRadius: '50px', background: '#dcfce7', color: '#059669', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1rem' }}>
              <DollarSign size={14} /> Partner Channel Economics
            </div>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              High-Margin Upfront Commissions & Volume Accelerators
            </h1>
            <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '650px', margin: '0 auto' }}>
              Earn predictable revenue by integrating Lunacore customer support agents and info bots into your client projects.
            </p>
          </div>

          {/* Base Partner Commission Section */}
          <div style={{ marginBottom: '3rem', padding: '2rem', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>1. Base Partner Commission (15%)</h2>
            <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>
              Partners earn a <strong>15% base commission</strong> on the monthly subscription fees for eligible client tiers (Tier 2, Tier 3, and Tier 4). Base commissions are paid out immediately within 5 business days of client funds clearing.
            </p>
            <p style={{ fontSize: '0.875rem', color: '#059669', background: '#f0fdf4', padding: '0.75rem 1rem', borderRadius: '8px', borderLeft: '4px solid #059669' }}>
              <strong>Setup Fee Notice:</strong> The ₹10,000 setup fee per contract is a separate technical deployment charge retained 100% by Lunacore and is strictly excluded from all commission calculations.
            </p>
          </div>

          {/* Service Tiers Table */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Eligible Service Tiers & Payouts</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#f1f5f9', borderBottom: '2px solid #cbd5e1' }}>
                    <th style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Service Tier</th>
                    <th style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Setup Fee (Separate)</th>
                    <th style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Monthly Subscription</th>
                    <th style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Base 15% Payout</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 500 }}>Tier 2: Autonomous Support</td>
                    <td style={{ padding: '0.75rem 1rem' }}>₹10,000</td>
                    <td style={{ padding: '0.75rem 1rem' }}>₹12,000 / mo</td>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#059669' }}>₹1,800 / mo</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 500 }}>Tier 3: Hybrid Support Agent</td>
                    <td style={{ padding: '0.75rem 1rem' }}>₹10,000</td>
                    <td style={{ padding: '0.75rem 1rem' }}>₹30,000 / mo</td>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#059669' }}>₹4,500 / mo</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 500 }}>Tier 4: Enterprise AI Workforce</td>
                    <td style={{ padding: '0.75rem 1rem' }}>₹10,000</td>
                    <td style={{ padding: '0.75rem 1rem' }}>₹60,000 / mo</td>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#059669' }}>₹9,000 / mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.5rem' }}>*Basic Tier 1 utility bots are excluded from commissions to ensure healthy partner payouts.</p>
          </div>

          {/* 60-Day Volume Accelerator */}
          <div style={{ padding: '2rem', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>2. 60-Day Volume Accelerator (Extra 8% Bonus)</h2>
            <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>
              Close 15 or more contracts (across Tiers 2, 3, and 4) within a strict 60-day rolling window to unlock an <strong>extra 8% retroactive bonus</strong> on the sum of all those subscription fees.
            </p>
            <div style={{ fontSize: '0.875rem', color: '#475569', background: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <strong>Example Volume Breakdown (20 Contracts):</strong>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <li>12 Tier 2 contracts (₹12,000/mo each) + 5 Tier 3 contracts (₹30,000/mo) + 3 Tier 4 contracts (₹60,000/mo)</li>
                <li>Total Monthly Subscriptions: ₹4,74,000</li>
                <li>Base Commission (15%): ₹71,100 | Volume Bonus (8%): ₹37,920</li>
                <li><strong>Total Agency Earnings: ₹1,09,020</strong> (plus separate setup fees handled per project)</li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/partner/process" style={{ background: '#059669', color: '#ffffff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View Partnership Process <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </main>
    </div>
  )
}
