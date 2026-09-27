import React from 'react'
import Link from 'next/link'
import { Linkedin } from 'lucide-react'

export function PartnersFooter() {
  return (
    <footer style={{ background: '#eef2f6', borderTop: '1px solid #cbd5e1', padding: '4rem 0 2rem 0', color: '#0f172a', marginTop: '4rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          
          {/* Column 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '36px', height: '36px', background: '#cbd5e1', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#1e293b' }}>
                LI
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, margin: 0, lineHeight: '1.2' }}>
                LUNACORE INTELLIGENCE<br />(OPC) PVT. LTD.
              </h4>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: '1.5', marginBottom: '1rem' }}>
              Building customized AI assistants tailored directly to your business rules and workflows.
            </p>
            <div style={{ fontSize: '0.75rem', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span>CIN: U58202TS2026OPC221341</span>
              <span>DPIIT Startup Recognition: DIPP281409</span>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h5 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a' }}>Product</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
              <li><Link href="/#workflows" style={{ color: '#475569', textDecoration: 'none' }}>Workflows</Link></li>
              <li><Link href="/#pricing" style={{ color: '#475569', textDecoration: 'none' }}>Pricing Plans</Link></li>
              <li><Link href="/#security" style={{ color: '#475569', textDecoration: 'none' }}>Data Protection</Link></li>
              <li><Link href="/partner" style={{ color: '#475569', textDecoration: 'none', fontWeight: 600 }}>Partner Portal</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h5 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a' }}>Company</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
              <li><Link href="/#demo" style={{ color: '#475569', textDecoration: 'none' }}>Book Demo</Link></li>
              <li><Link href="/#safety" style={{ color: '#475569', textDecoration: 'none' }}>Safety Standards</Link></li>
              <li>
                <a href="https://www.linkedin.com/in/sai-hrudai-gattu-6b1427384" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#475569', textDecoration: 'none' }}>
                  <Linkedin size={14} /> Company Profile
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sai-hrudai-gattu-6b1427384" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#475569', textDecoration: 'none' }}>
                  <Linkedin size={14} /> Founder&apos;s Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Office Contact */}
          <div>
            <h5 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a' }}>Office Contact</h5>
            <div style={{ fontSize: '0.875rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <strong style={{ display: 'block', color: '#334155', fontSize: '0.8rem' }}>Email:</strong>
                <a href="mailto:saihrudaigattu@lunacoreintelligence.com" style={{ color: '#2563eb', textDecoration: 'none', wordBreak: 'break-all' }}>
                  saihrudaigattu@lunacoreintelligence.com
                </a>
              </div>
              <div>
                <strong style={{ display: 'block', color: '#334155', fontSize: '0.8rem' }}>Phone:</strong>
                <span style={{ color: '#475569' }}>+91 76740 95537</span>
              </div>
              <div>
                <strong style={{ display: 'block', color: '#334155', fontSize: '0.8rem' }}>Location:</strong>
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid #cbd5e1', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', color: '#64748b' }}>
          <div>© 2026 Lunacore Intelligence (OPC) Private Limited. All rights reserved.</div>
          <div>Compliance Verified: MCA / DPIIT</div>
        </div>
      </div>
    </footer>
  )
}
