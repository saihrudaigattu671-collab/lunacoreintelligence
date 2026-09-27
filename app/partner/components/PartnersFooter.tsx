import React from 'react'
import Link from 'next/link'

export function PartnersFooter() {
  return (
    <footer style={{ background: '#eef2f6', borderTop: '1px solid #cbd5e1', padding: '4rem 0 2rem 0', color: '#0f172a', marginTop: '4rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          
          {/* Column 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '36px', height: '36px', background: '#cbd5e1', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

        </div>
      </div>
    </footer>
  )
}
