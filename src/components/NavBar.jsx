import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from './Layout'

const links = ['Home', 'About', 'Experience', 'Projects', 'Contact']

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          padding: scrolled ? '14px 0' : '18px 0',
          background: scrolled ? 'rgba(2,2,7,0.92)' : 'rgba(2,2,7,0.65)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <Layout className="flex items-center justify-between">
          <button onClick={() => go('Home')} className="cursor-none bg-transparent border-none p-0" aria-label="Go to home">
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.04em', color: '#eef0ff' }}>
              JS<span style={{ color: '#00e5ff' }}>.</span>
            </span>
          </button>

          <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
            {links.map(link => (
              <li key={link}>
                <button
                  onClick={() => go(link)}
                  className="cursor-none bg-transparent border-none relative pb-1 transition-colors duration-200"
                  style={{ fontFamily: 'JetBrains Mono', fontSize: '.73rem', letterSpacing: '.07em', color: active === link ? '#eef0ff' : 'rgba(238,240,255,0.45)' }}
                >
                  {link}
                  {active === link && <motion.div layoutId="nav-ul" className="absolute -bottom-1 left-0 right-0 h-px bg-[#00e5ff]" />}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="/resumes/Jatla_Shivakumar_FullStack_Resume.pdf"
            download
            className="cursor-none hidden md:inline-flex items-center gap-2 rounded-lg font-semibold no-underline hover:-translate-y-0.5 transition-all duration-200"
            style={{ fontFamily: 'Space Grotesk', fontSize: '.82rem', padding: '10px 18px', background: 'rgba(34,96,255,0.16)', color: '#eef0ff', border: '1px solid rgba(34,96,255,0.35)' }}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><path d="m7 10 5 5 5-5M12 15V3" /></svg>
            Full Stack Resume
          </a>

          <button onClick={() => setOpen(current => !current)} className="md:hidden cursor-none bg-transparent border-none flex flex-col gap-1 p-1" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open}>
            {[0, 1, 2].map(item => <span key={item} className="w-5 h-0.5 transition-all duration-300" style={{ background: 'rgba(238,240,255,0.75)' }} />)}
          </button>
        </Layout>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ background: 'rgba(2,2,7,0.97)', backdropFilter: 'blur(20px)' }}
          >
            {links.map((link, index) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                onClick={() => go(link)}
                className="cursor-none bg-transparent border-none font-bold"
                style={{ fontFamily: 'Space Grotesk', fontSize: '2.5rem', letterSpacing: '-0.03em', color: 'rgba(238,240,255,0.7)' }}
              >
                {link}
              </motion.button>
            ))}
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
