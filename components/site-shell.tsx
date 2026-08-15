import Link from 'next/link'

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="shell header-inner">
          <Link href="/" className="brand-logo">
            {/* Enlarged logo box */}
            <div style={{
              width: '36px',
              height: '36px',
              backgroundColor: '#fff',
              color: '#000',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.125rem'
            }}>
              L
            </div>
            <span>Lunacore Intelligence</span>
          </Link>

          <nav className="site-nav">
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/security">Security</Link>
            <Link href="/contact" className="btn-primary-sm">Book Demo</Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div>
            <h3>Lunacore Intelligence</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--fg-muted)' }}>
              Custom AI assistants built around your exact business rules.
            </p>
          </div>

          <div>
            <h4>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/security">Security</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Office Contact</h4>
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
        <div className="footer-bottom">
          © {new Date().getFullYear()} Lunacore Intelligence. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export function WeeklyPerformanceChart() {
  return (
    <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border)' }}>
      <h4 style={{ margin: '0 0 1rem 0', fontSize: '0.875rem', fontWeight: 600 }}>Weekly Resolution Speed</h4>
      <div style={{ height: '120px', display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
        <div style={{ height: '40%', width: '100%', background: 'var(--border)', borderRadius: '4px' }}></div>
        <div style={{ height: '60%', width: '100%', background: 'var(--border)', borderRadius: '4px' }}></div>
        <div style={{ height: '50%', width: '100%', background: 'var(--border)', borderRadius: '4px' }}></div>
        <div style={{ height: '85%', width: '100%', background: 'var(--border)', borderRadius: '4px' }}></div>
        <div style={{ height: '100%', width: '100%', background: 'var(--primary)', borderRadius: '4px' }}></div>
      </div>
    </div>
  )
}
