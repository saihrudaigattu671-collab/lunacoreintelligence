// components/site-shell.tsx
import Link from 'next/link'

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-wrapper">
      {/* HEADER */}
      <header className="site-header">
        <div className="shell header-inner">
          <Link href="/" className="brand-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Enlarged logo box */}
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#000',
              color: '#fff',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.25rem'
            }}>
              L
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--fg-main)' }}>
              Lunacore Intelligence
            </span>
          </Link>

          <nav className="site-nav">
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/security">Security</Link>
            <Link href="/contact" className="btn-primary-sm">Book Demo</Link>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      {children}

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="shell footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', padding: '3rem 0' }}>
          <div>
            <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Lunacore Intelligence</h3>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Custom AI assistants built around your exact business policies.
            </p>
          </div>

          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/security">Security</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Office Contact</h4>
            <p style={{ fontSize: '0.875rem', margin: '0 0 0.5rem 0' }}>
              <strong>Email:</strong>{' '}
              <a href="mailto:saihrudaigattu671@gmail.com" style={{ textDecoration: 'underline' }}>
                saihrudaigattu671@gmail.com
              </a>
            </p>
            <p style={{ fontSize: '0.875rem', margin: 0 }}>
              <strong>Phone:</strong>{' '}
              <a href="tel:+917674095537" style={{ textDecoration: 'underline' }}>
                +91 76740 95537
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom" style={{ textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '1.5rem', fontSize: '0.75rem', color: '#9ca3af' }}>
          © {new Date().getFullYear()} Lunacore Intelligence. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export function WeeklyPerformanceChart() {
  return (
    <div style={{ padding: '1.5rem', background: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
      <h4 style={{ margin: '0 0 1rem 0', fontSize: '0.875rem', fontWeight: 600 }}>Weekly Resolution Speed</h4>
      <div style={{ height: '120px', display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
        <div style={{ height: '40%', width: '100%', background: '#e5e7eb', borderRadius: '4px' }}></div>
        <div style={{ height: '60%', width: '100%', background: '#e5e7eb', borderRadius: '4px' }}></div>
        <div style={{ height: '50%', width: '100%', background: '#e5e7eb', borderRadius: '4px' }}></div>
        <div style={{ height: '85%', width: '100%', background: '#e5e7eb', borderRadius: '4px' }}></div>
        <div style={{ height: '100%', width: '100%', background: '#000', borderRadius: '4px' }}></div>
      </div>
    </div>
  )
}
