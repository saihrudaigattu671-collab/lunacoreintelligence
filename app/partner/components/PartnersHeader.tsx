'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { LayoutDashboard, TrendingUp, Workflow, Mail, X, CheckCircle2 } from 'lucide-react'

export function PartnersHeader() {
  const pathname = usePathname()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const partnerNav = [
    { name: 'About', href: '/partner', icon: LayoutDashboard },
    { name: 'Economics', href: '/partner/economics', icon: TrendingUp },
    { name: 'Process', href: '/partner/process', icon: Workflow },
  ]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg('')

    const formData = new FormData(e.currentTarget)
    formData.append('access_key', 'ff26aa54-52e3-417f-a8a4-70915623a3aa')
    formData.append('subject', 'New Agency Partnership Inquiry - Lunacore Partner Portal')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
      } else {
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setErrorMsg('Network error. Please check your connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div style={{ background: 'var(--card-bg, #ffffff)', borderBottom: '1px solid var(--border, #e2e8f0)', padding: '1rem 0', marginBottom: '2rem' }}>
        <div className="shell" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: 'var(--text-main, #0f172a)' }}>
              LUNACORE PARTNER PORTAL
            </h1>
          </div>

          <nav style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {partnerNav.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    background: isActive ? '#2563eb' : 'transparent',
                    color: isActive ? '#ffffff' : '#64748b',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Icon size={16} /> {item.name}
                </Link>
              )
            })}
            <button
              onClick={() => { setIsSubmitted(false); setIsModalOpen(true); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                background: '#2563eb',
                color: '#ffffff',
                border: 'none',
                marginLeft: '0.5rem',
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
              }}
            >
              <Mail size={16} /> Contact for Partnership
            </button>
          </nav>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)',
          display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '1rem'
        }}>
          <div style={{
            background: '#ffffff', borderRadius: '12px', width: '100%', maxWidth: '500px',
            padding: '2rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', position: 'relative'
          }}>
            <button 
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'transparent',
                border: 'none', cursor: 'pointer', color: '#64748b'
              }}
            >
              <X size={20} />
            </button>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
              Partner With Lunacore Intelligence
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' }}>
              Fill in your details below and our team will contact back within few hours.
            </p>

            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <CheckCircle2 size={48} style={{ color: '#10b981', margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Successfully Submitted!</h4>
                <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '1.5rem' }}>Our team will contact back within few hours.</p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '0.6rem 1.5rem', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.3rem' }}>Company Name *</label>
                  <input type="text" name="company_name" required placeholder="e.g., Apex Digital Agency" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.3rem' }}>Contact Number *</label>
                  <input type="tel" name="contact_number" required placeholder="+91 98765 43210" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.3rem' }}>Email Address *</label>
                  <input type="email" name="email" required placeholder="partner@agency.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.3rem' }}>Additional Details / Expected Client Volume</label>
                  <textarea name="additional_details" rows={3} placeholder="Tell us about your agency focus and anticipated monthly client volume..." style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', resize: 'vertical' }}></textarea>
                </div>

                {errorMsg && <p style={{ color: '#ef4444', fontSize: '0.85rem', margin: 0 }}>{errorMsg}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: '#2563eb', color: '#ffffff', border: 'none', padding: '0.75rem',
                    borderRadius: '6px', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer', marginTop: '0.5rem'
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Partnership Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
