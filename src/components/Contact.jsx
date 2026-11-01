import { useState } from 'react'
import { motion } from 'framer-motion'
import Layout from './Layout'

const resumeLinks = [
  {
    label: 'Full Stack Developer Resume',
    href: '/resumes/Jatla_Shivakumar_FullStack_Resume.pdf',
    description: 'React · Node.js · PostgreSQL · MongoDB',
    primary: true,
  }
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('jatlashiva75@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = 'mailto:jatlashiva75@gmail.com'
    }
  }

  const links = [
    {
      label: 'GitHub',
      handle: '@jatlashivakumar',
      href: 'https://github.com/jatlashivakumar',
      color: '#6699ff',
      icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg>,
    },
    {
      label: 'LinkedIn',
      handle: 'shivajatla',
      href: 'https://linkedin.com/in/shivajatla',
      color: '#00e5ff',
      icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>,
    },
    {
      label: 'Phone',
      handle: '+91 9908327311',
      href: 'tel:+919908327311',
      color: '#4ade80',
      icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>,
    },
  ]

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute pointer-events-none" style={{ top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 400, background: 'radial-gradient(ellipse,rgba(34,96,255,0.08),transparent 70%)' }} />

      <div className="relative" style={{ zIndex: 1, maxWidth: 760, margin: '0 auto', paddingLeft: 'clamp(1.5rem,6vw,5rem)', paddingRight: 'clamp(1.5rem,6vw,5rem)', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
          <div className="flex items-center justify-center gap-2.5 mb-6" style={{ fontFamily: 'JetBrains Mono', fontSize: '.68rem', color: '#00e5ff', letterSpacing: '.2em', textTransform: 'uppercase' }}>
            <span style={{ width: 28, height: 1, background: '#00e5ff', display: 'block' }} />Get In Touch
          </div>

          <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2.5rem,5vw,4.5rem)', letterSpacing: '-0.04em', color: '#eef0ff' }}>
            Let's build something<br /><span className="grad-text">exceptional.</span>
          </h2>

          <p className="leading-[1.75] mb-8 max-w-md mx-auto" style={{ fontSize: '1rem', color: 'rgba(238,240,255,0.6)' }}>
            Open to full-time Full Stack Developer and Frontend Developer opportunities, as well as interesting engineering collaborations. Feel free to reach out.
          </p>

          <button onClick={copyEmail} className="cursor-none inline-flex items-center gap-2 rounded-xl text-white font-semibold mb-10 border-none hover:-translate-y-0.5 transition-all duration-200" style={{ fontFamily: 'Space Grotesk', fontSize: '1rem', padding: '16px 36px', background: '#2260ff', boxShadow: '0 6px 28px rgba(34,96,255,0.35)' }}>
            {copied ? '✓ Email copied!' : '📧 jatlashiva75@gmail.com'}
          </button>

          <div className="mb-12">
            <h3 className="font-semibold mb-4" style={{ fontFamily: 'Space Grotesk', fontSize: '1.05rem', color: '#eef0ff' }}>Download my resume</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {resumeLinks.map(resume => (
                <a
                  key={resume.label}
                  href={resume.href}
                  download
                  className="cursor-none flex flex-col gap-2 rounded-2xl no-underline transition-all duration-200 hover:-translate-y-0.5"
                  style={{ padding: '18px 20px', background: resume.primary ? 'rgba(34,96,255,0.12)' : 'rgba(255,255,255,0.025)', border: `1px solid ${resume.primary ? 'rgba(34,96,255,0.35)' : 'rgba(255,255,255,0.08)'}` }}
                >
                  <span className="font-semibold" style={{ fontFamily: 'Space Grotesk', fontSize: '.9rem', color: '#eef0ff' }}>{resume.label}</span>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '.61rem', color: 'rgba(238,240,255,0.48)' }}>{resume.description}</span>
                  <span className="mt-1" style={{ fontFamily: 'JetBrains Mono', fontSize: '.65rem', color: '#00e5ff' }}>↓ Download PDF</span>
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('tel:') ? undefined : '_blank'}
                rel={link.href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                className="cursor-none flex items-center gap-3.5 rounded-2xl no-underline transition-colors duration-200"
                style={{ padding: '20px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
                onMouseEnter={event => { event.currentTarget.style.borderColor = 'rgba(34,96,255,0.4)' }}
                onMouseLeave={event => { event.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)' }}
              >
                <div style={{ color: link.color, opacity: 0.85, flexShrink: 0 }}>{link.icon}</div>
                <div className="text-left min-w-0">
                  <div className="font-semibold mb-0.5" style={{ fontFamily: 'Space Grotesk', fontSize: '.88rem', color: '#eef0ff' }}>{link.label}</div>
                  <div className="truncate" style={{ fontFamily: 'JetBrains Mono', fontSize: '.62rem', color: 'rgba(238,240,255,0.6)' }}>{link.handle}</div>
                </div>
                <svg className="ml-auto flex-shrink-0" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: 'rgba(238,240,255,0.2)' }}><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7,7 17,7 17,17" /></svg>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <Layout className="mt-20 pt-8 flex flex-wrap items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '.65rem', color: 'rgba(238,240,255,0.35)' }}>© {new Date().getFullYear()} Jatla Shivakumar — Full Stack Developer</span>
        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '.65rem', color: 'rgba(238,240,255,0.35)' }}>Hyderabad, India 🇮🇳</span>
      </Layout>
    </section>
  )
}
