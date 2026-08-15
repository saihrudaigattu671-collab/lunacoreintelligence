// app/contact/page.tsx
'use client'

import { useState } from 'react'
import { SiteShell } from '@/components/site-shell'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [msg, setMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    formData.append('access_key', '835c4b5e-2686-4402-bd95-7c34b103d90e')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setMsg('Thank you! Your submission has been received.')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setStatus('error')
        setMsg(data.message || 'Submission failed. Please try again.')
      }
    } catch {
      setStatus('error')
      setMsg('Failed to send message. Please check your connection.')
    }
  }

  return (
    <SiteShell>
      <main className="section">
        <div className="shell" style={{ maxWidth: '550px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1>Book a Demo</h1>
            <p style={{ color: '#6b7280' }}>
              Submit your request to set up your 7-day risk-free customized trial.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: '#fff', padding: '2rem', borderRadius: '1rem', border: '1px solid #e5e7eb' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>Business Details / Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us about your store policies or support volume..."
                style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', outline: 'none' }}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary"
              style={{ width: '100%', opacity: status === 'loading' ? 0.6 : 1 }}
            >
              {status === 'loading' ? 'Sending...' : 'Submit Request'}
            </button>

            {status === 'success' && (
              <div style={{ padding: '0.75rem', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', color: '#047857', borderRadius: '0.5rem', fontSize: '0.875rem', textAlign: 'center' }}>
                {msg}
              </div>
            )}
            {status === 'error' && (
              <div style={{ padding: '0.75rem', backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', borderRadius: '0.5rem', fontSize: '0.875rem', textAlign: 'center' }}>
                {msg}
              </div>
            )}
          </form>
        </div>
      </main>
    </SiteShell>
  )
}
