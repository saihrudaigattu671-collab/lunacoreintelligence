'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { Mail, BookOpen, TrendingUp, Workflow, X, Send } from 'lucide-react'

export const markUrl = '/logo-mark.png'

export function PartnersHeader() {
  const pathname = usePathname()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const navItems = [
    { name: 'About', href: '/partner', icon: <BookOpen size={16} /> },
    { name: 'Economics', href: '/partner/economics', icon: <TrendingUp size={16} /> },
    { name: 'Process', href: '/partner/process', icon: <Workflow size={16} /> },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setIsModalOpen(false)
        }, 3000)
      } else {
        alert("Something went wrong. Please try again or email us directly.")
      }
    } catch (error) {
      alert("Network error. Please check your connection.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <header style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          
          {/* Left Branding: Logo + Company Name + Partner Portal Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
              <img src={markUrl} alt="Lunacore Logo" style={{ height: '42px', width: 'auto' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.01em', color: '#0f172a', lineHeight: 1.2 }}>
                  LUNACORE INTELLIGENCE
                </span>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Partner Portal
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links with Active Zoom & Dark Border Effect */}
          <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginLeft: 'auto' }}>
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.6rem 1.1rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#0f172a' : '#475569',
                    background: isActive ? '#f8fafc' : 'transparent',
                    border: isActive ? '2px solid #0f172a' : '2px solid transparent',
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 4px 12px rgba(15, 23, 42, 0.08)' : 'none'
                  }}
                >
                  {item.icon}
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Trigger Button for Partnership Modal */}
          <div>
            <button 
              onClick={() => setIsModalOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '10px',
                fontSize: '0.95rem',
                fontWeight: 700,
                background: '#2563eb',
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
                transition: 'all 0.2s ease'
              }}
            >
              <Mail size={18} /> Contact for Partnership
            </button>
          </div>

        </div>
      </header>

      {/* Popup Modal Overlay */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '1rem'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '560px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            overflow: 'hidden',
            position: 'relative',
          }}>
            
            {/* Modal Header */}
            <div style={{ background: '#0f172a', color: '#ffffff', padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Agency Partnership Inquiry</h3>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>Submissions go directly to your mail inbox.</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#ffffff', padding: '0.5rem', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body / Form */}
            <div style={{ padding: '2rem' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Application Sent!</h4>
                  <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Thank you. Your inquiry has been delivered directly to your mail.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Web3Forms Configured Access Key */}
                  <input type="hidden" name="access_key" value="ff26aa54-52e3-417f-a8a4-70915623a3aa" />
                  <input type="hidden" name="subject" value="New Agency Partnership Inquiry - Partner Portal" />
                  <input type="hidden" name="from_name" value="Lunacore Partner Portal" />

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>Full Name *</label>
                    <input type="text" name="name" required placeholder="e.g. Rahul Sharma" style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', outline: 'none' }} />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>Agency Name *</label>
                    <input type="text" name="agency" required placeholder="e.g. Apex Digital Solutions" style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', outline: 'none' }} />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>Work Email *</label>
                      <input type="email" name="email" required placeholder="rahul@agency.com" style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>Phone / WhatsApp *</label>
                      <input type="tel" name="phone" required placeholder="+91 98765 43210" style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', outline: 'none' }} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>Expected Monthly Client Referrals</label>
                    <select name="referrals" style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', background: '#ffffff', outline: 'none' }}>
                      <option>1 - 3 clients / month</option>
                      <option>4 - 8 clients / month</option>
                      <option>9 - 15 clients / month</option>
                      <option>15+ clients / month (Volume Accelerator)</option>
                    </select>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      background: '#2563eb',
                      color: '#ffffff',
                      border: 'none',
                      cursor: 'pointer',
                      marginTop: '0.5rem',
                      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                      opacity: loading ? 0.7 : 1
                    }}
                  >
                    <Send size={16} /> {loading ? 'Sending...' : 'Submit Application'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  )
}
