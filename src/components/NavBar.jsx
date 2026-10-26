import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from './Layout'

const links = ['Home','About','Projects','Experience','Contact']

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)
  const [active,   setActive]   = useState('Home')

  useEffect(() => {
    // FIX 2: always show a subtle bg so nav never bleeds into hero text
    const fn = () => setScrolled(window.scrollY > 20)
    fn()
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = id => {
    setActive(id)
    setOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: .8, delay: .2, ease: [.16,1,.3,1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          padding:       scrolled ? '14px 0' : '18px 0',
          /* FIX 2: always has a background — no more text bleed-through */
          background:    scrolled
            ? 'rgba(2,2,7,0.92)'
            : 'rgba(2,2,7,0.65)',
          backdropFilter: 'blur(20px)',
          borderBottom:  '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <Layout className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => go('Home')} className="cursor-none bg-transparent border-none p-0">
            <span style={{ fontFamily:'Space Grotesk', fontWeight:700, fontSize:'1.15rem', letterSpacing:'-0.04em', color:'#eef0ff' }}>
              JS<span style={{ color:'#00e5ff' }}>.</span>
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
            {links.map(l => (
              <li key={l}>
                <button
                  onClick={() => go(l)}
                  className="cursor-none bg-transparent border-none relative pb-1 transition-colors duration-200"
                  style={{ fontFamily:'JetBrains Mono', fontSize:'.73rem', letterSpacing:'.07em', color: active===l ? '#eef0ff' : 'rgba(238,240,255,0.45)' }}
                >
                  {l}
                  {active === l && (
                    <motion.div layoutId="nav-ul" className="absolute -bottom-1 left-0 right-0 h-px bg-[#00e5ff]" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* FIX 3: Resume button REMOVED — replaced with LinkedIn link */}
          <a
            href="https://linkedin.com/in/shivajatla"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-none hidden md:inline-flex items-center gap-2 rounded-lg font-semibold no-underline hover:-translate-y-0.5 transition-all duration-200"
            style={{ fontFamily:'Space Grotesk', fontSize:'.82rem', padding:'10px 22px', background:'rgba(255,255,255,0.06)', color:'#eef0ff', border:'1px solid rgba(255,255,255,0.1)' }}
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden cursor-none bg-transparent border-none flex flex-col gap-1 p-1">
            {[0,1,2].map(i => (
              <div key={i} className="w-5 h-0.5 transition-all duration-300" style={{ background:'rgba(238,240,255,0.6)' }} />
            ))}
          </button>
        </Layout>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ background:'rgba(2,2,7,0.97)', backdropFilter:'blur(20px)' }}
          >
            {links.map((l,i) => (
              <motion.button
                key={l}
                initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:i*.07 }}
                onClick={() => go(l)}
                className="cursor-none bg-transparent border-none font-bold"
                style={{ fontFamily:'Space Grotesk', fontSize:'2.5rem', letterSpacing:'-0.03em', color:'rgba(238,240,255,0.6)' }}
              >
                {l}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
