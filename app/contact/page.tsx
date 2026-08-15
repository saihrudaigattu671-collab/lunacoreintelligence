'use client'

import { useState } from 'react'
import { SiteShell } from '@/components/site-shell'
import { CheckCircle2, Search, TrendingUp, Cpu } from 'lucide-react'

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    formData.append('access_key', '835c4b5e-2686-4402-bd95-7c34b103d90e')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()
      if (result.success) {
        setSubmitted(true)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Network error. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <SiteShell>
      <main className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="shell" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
            
            {/* Left Section: Discovery Session Info */}
            <div>
              <span style={{ color: 'var(--primary, #6366f1)', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Book a Demo
              </span>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0.5rem 0 1rem', lineHeight: 1.2 }}>
                Your 30-minute discovery session
              </h1>
              <p style={{ color: 'var(--text-muted, #9ca3af)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                No slide-decks, no fluff. A focused working session to identify where autonomous agents move the needle for your business.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Point 1 */}
                <div style={{ background: 'var(--bg-card, #111827)', border: '1px solid var(--border-color, #1f2937)', padding: '1.25rem', borderRadius: '12px', display: 'flex', gap: '1rem' }}>
                  <div style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary, #6366f1)', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', shrink: 0 }}>
                    <Search size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, margin: '0 0 0.25rem 0' }}>01 Workflow Audit</h4>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted, #9ca3af)', margin: 0, lineHeight: 1.5 }}>
                      We map your current processes and pinpoint exactly where AI agents create leverage.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div style={{ background: 'var(--bg-card, #111827)', border: '1px solid var(--border-color, #1f2937)', padding: '1.25rem', borderRadius: '12px', display: 'flex', gap: '1rem' }}>
                  <div style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary, #6366f1)', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', shrink: 0 }}>
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, margin: '0 0 0.25rem 0' }}>02 ROI Blueprint</h4>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted, #9ca3af)', margin: 0, lineHeight: 1.5 }}>
                      A clear, numbers-first projection of time saved and revenue impact for your business.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div style={{ background: 'var(--bg-card, #111827)', border: '1px solid var(--border-color, #1f2937)', padding: '1.25rem', borderRadius: '12px', display: 'flex', gap: '1rem' }}>
                  <div style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary, #6366f1)', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', shrink: 0 }}>
                    <Cpu size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, margin: '0 0 0.25rem 0' }}>03 Custom PoC</h4>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted, #9ca3af)', margin: 0, lineHeight: 1.5 }}>
                      Walk away with a tailored proof of concept scoped to your industry and tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section: Form Container */}
            <div style={{ background: 'var(--bg-card, #0f172a)', border: '1px solid var(--border-color, #1e293b)', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)' }}>
              {!submitted ? (
                <>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.25rem 0' }}>Reserve your session</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted, #9ca3af)', margin: '0 0 1.5rem 0' }}>
                    We'll confirm your slot within 2 business hours.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, marginBottom: '0.375rem', color: 'var(--text-main, #f3f4f6)' }}>
                        Full Name <span style={{ color: 'var(--primary, #6366f1)' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Jane Doe"
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color, #374151)', background: 'var(--bg-secondary, #111827)', color: '#fff', fontSize: '0.875rem', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, marginBottom: '0.375rem', color: 'var(--text-main, #f3f4f6)' }}>
                        Work Email <span style={{ color: 'var(--primary, #6366f1)' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="jane@company.com"
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color, #374151)', background: 'var(--bg-secondary, #111827)', color: '#fff', fontSize: '0.875rem', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, marginBottom: '0.375rem', color: 'var(--text-main, #f3f4f6)' }}>
                        Phone Number <span style={{ color: 'var(--primary, #6366f1)' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 90000 00000"
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color, #374151)', background: 'var(--bg-secondary, #111827)', color: '#fff', fontSize: '0.875rem', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, marginBottom: '0.375rem', color: 'var(--text-main, #f3f4f6)' }}>
                        Selected Plan <span style={{ color: 'var(--primary, #6366f1)' }}>*</span>
                      </label>
                      <select
                        name="selected_plan"
                        required
                        defaultValue=""
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color, #374151)', background: 'var(--bg-secondary, #111827)', color: '#fff', fontSize: '0.875rem', outline: 'none' }}
                      >
                        <option value="" disabled>Select an option</option>
                        <option value="Tier 1: Informative Bot (₹5,000/mo)">Tier 1: Informative Bot (₹5,000/mo)</option>
                        <option value="Tier 2: Autonomous Support (₹12,000/mo)">Tier 2: Autonomous Support (₹12,000/mo)</option>
                        <option value="Tier 3: Hybrid Support (₹30,000/mo)">Tier 3: Hybrid Support (₹30,000/mo)</option>
                        <option value="Tier 4: Full AI Workforce (₹60,000/mo)">Tier 4: Full AI Workforce (₹60,000/mo)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      style={{ width: '100%', padding: '0.875rem', borderRadius: '8px', background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)', color: '#fff', fontWeight: 600, fontSize: '0.875rem', border: 'none', cursor: 'pointer', marginTop: '0.5rem' }}
                    >
                      {loading ? 'Submitting...' : 'Book My Discovery Session'}
                    </button>
                  </form>
                </>
              ) : (
                /* Success State matching Image 3 */
                <div style={{ textAlign: 'center', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ color: '#06b6d4', marginBottom: '1rem' }}>
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.5rem 0' }}>Submission Received!</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted, #9ca3af)', margin: '0 0 1.5rem 0' }}>
                    Our team will reach out within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    style={{ padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid var(--border-color, #374151)', background: 'transparent', color: 'var(--text-main, #fff)', fontSize: '0.8125rem', cursor: 'pointer' }}
                  >
                    Submit another request
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </main>
    </SiteShell>
  )
}
