import React from 'react'
import { PartnersHeader } from './components/PartnersHeader'
import { PartnersFooter } from './components/PartnersFooter'
import { Zap, TrendingUp, ShieldCheck, Server, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function PartnerHomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f8fafc', color: '#0f172a' }}>
      <PartnersHeader />
      
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#ffffff', padding: '5rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '0.35rem 0.85rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.25rem', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
              <Zap size={14} /> Lunacore Agency Partner Program
            </div>
            <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem' }}>
              Scale Your Agency With <span style={{ color: '#60a5fa' }}>Autonomous AI</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '2rem' }}>
              Deliver advanced AI assistants and automated enterprise workflows to your clients without internal R&D overhead. You own the client relationship; we handle 100% of the technical AI fulfillment.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/partner/process" style={{ background: '#2563eb', color: '#ffffff', padding: '0.85rem 1.75rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)' }}>
                View Onboarding Process <ArrowRight size={16} />
              </Link>
              <Link href="/partner/economics" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', padding: '0.85rem 1.75rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                Explore Economics (₹)
              </Link>
            </div>
          </div>

          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop" 
              alt="Business Partners Shaking Hands" 
              style={{ width: '1005', height: '380px', objectFit: 'cover', display: 'block', filter: 'brightness(0.9)' }} 
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent)', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: '#2563eb', color: '#fff', padding: '0.5rem', borderRadius: '8px' }}>
                <CheckCircle2 size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>15% Base Payouts + 8% Volume Bonus</div>
                <div style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Built exclusively for high-performing technical agencies</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Container */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '4rem 2rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* About Partnership & Tiers */}
        <div>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}>About the Partnership</h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.6' }}>
              Lunacore Intelligence provides robust autonomous AI systems designed to integrate seamlessly into client web builds and software applications.
            </p>
          </div>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1e293b' }}>The Four Service Tiers</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.75rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Entry Level</span>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: '0.5rem 0 0.75rem 0' }}>Tier 1: Basic Utility Bot</h4>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.5', margin: 0 }}>Entry-level routing agents. (Excluded from partner commission pool).</p>
            </div>

            <div style={{ background: '#ffffff', border: '2px solid #2563eb', borderRadius: '12px', padding: '1.75rem', boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.1)', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '-12px', right: '1.5rem', background: '#2563eb', color: '#fff', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '50px' }}>POPULAR</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.05em' }}>SMB & E-Commerce</span>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: '0.5rem 0 0.75rem 0' }}>Tier 2: Autonomous Support</h4>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.5', margin: 0 }}>For SMBs and E-Commerce requiring 24/7 lead qualification and support.</p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.75rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mid-Market</span>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: '0.5rem 0 0.75rem 0' }}>Tier 3: Hybrid Agent</h4>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.5', margin: 0 }}>Mid-market volume support integrated with 1 human fallback operator.</p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.75rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Enterprise</span>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: '0.5rem 0 0.75rem 0' }}>Tier 4: Enterprise Workforce</h4>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.5', margin: 0 }}>Full enterprise AI operations integrated with 2 dedicated human supervisors.</p>
            </div>

          </div>
        </div>

        {/* Why Partner with Lunacore */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '3rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2.5rem', color: '#0f172a', textAlign: 'center' }}>Why Partner with Lunacore?</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <div style={{ background: '#eff6ff', color: '#2563eb', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Zap size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Higher Sales & Speed</h4>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.5', margin: 0 }}>Standard static forms lose leads. Lunacore agents engage visitors 24/7, answer questions, and schedule demos in seconds.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <div style={{ background: '#eff6ff', color: '#2563eb', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <TrendingUp size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Market Alignment</h4>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.5', margin: 0 }}>Move from a commoditized design shop to an AI-enabled technical agency, commanding higher project valuations.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <div style={{ background: '#eff6ff', color: '#2563eb', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Smart Support</h4>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.5', margin: 0 }}>Agents resolve up to 80% of routine support queries by connecting directly to client CRMs and inventories.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <div style={{ background: '#eff6ff', color: '#2563eb', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Server size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Zero R&D Expense</h4>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.5', margin: 0 }}>Act as your plug-and-play AI department. Unlock uncapped earnings with 15% upfront subscription payouts.</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <PartnersFooter />
    </div>
  )
}
