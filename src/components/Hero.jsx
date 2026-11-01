import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Layout from './Layout'

const TECHS = [
  'React.js.',
  'TypeScript.',
  'Node.js.',
  'Express.js.',
  'PostgreSQL.',
  'MongoDB.',
  'Redis.',
  'Docker.',
]

function RotatingWord() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      const timeout = setTimeout(() => {
        setIndex(current => (current + 1) % TECHS.length)
        setVisible(true)
      }, 350)
      return () => clearTimeout(timeout)
    }, 2200)

    return () => clearInterval(interval)
  }, [])

  return (
    <span
      style={{
        color: '#00e5ff',
        display: 'inline-block',
        transition: 'opacity .35s, transform .35s',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
      }}
    >
      {TECHS[index]}
    </span>
  )
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

const stats = [
  ['3', 'Years Experience'],
  ['8+', 'Enterprise Modules'],
  ['40%', 'Load Time Reduction'],
  ['1,000+', 'Supply Chain Users'],
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20">
      <Layout className="w-full">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2.5 mb-8"
            style={{ fontFamily: 'JetBrains Mono', fontSize: '.68rem', color: '#00e5ff', letterSpacing: '.2em', textTransform: 'uppercase' }}
          >
            <span style={{ width: 28, height: 1, background: '#00e5ff', display: 'block', flexShrink: 0 }} />
            Full Stack Developer · Hyderabad, India
          </motion.div>

          <div className="overflow-hidden mb-4">
            <motion.h1 variants={fadeUp} className="font-bold leading-none" style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(4rem,10vw,9rem)', letterSpacing: '-0.05em', color: '#eef0ff' }}>
              Jatla
            </motion.h1>
            <motion.h1 variants={fadeUp} className="font-bold leading-none outline-text" style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(4rem,10vw,9rem)', letterSpacing: '-0.05em' }}>
              Shivakumar
            </motion.h1>
          </div>

          <motion.p variants={fadeUp} className="font-semibold mb-5" style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.2rem,2.5vw,1.9rem)', color: 'rgba(238,240,255,0.6)' }}>
            Building scalable applications with <RotatingWord />
          </motion.p>

          <motion.p variants={fadeUp} className="leading-relaxed mb-10 max-w-xl" style={{ fontSize: '1.02rem', color: 'rgba(238,240,255,0.6)' }}>
            Full Stack Developer with <strong style={{ color: '#eef0ff' }}>3 years of experience</strong>, including an internship, building enterprise and government applications. Experienced in <strong style={{ color: '#00e5ff' }}>React, TypeScript, Node.js, Express, PostgreSQL and MongoDB</strong>, with hands-on work across REST APIs, authentication, role-based access control and DevOps. Currently at <strong style={{ color: '#00e5ff' }}>Real Variable Digital Asset Services</strong>.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="cursor-none inline-flex items-center gap-2 rounded-lg text-white font-semibold border-none hover:-translate-y-0.5 transition-all duration-200"
              style={{ fontFamily: 'Space Grotesk', fontSize: '.9rem', padding: '13px 28px', background: '#2260ff', boxShadow: '0 6px 28px rgba(34,96,255,0.35)' }}
            >
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
              View My Projects
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="cursor-none inline-flex items-center gap-2 rounded-lg font-medium hover:-translate-y-0.5 transition-all duration-200"
              style={{ fontFamily: 'Space Grotesk', fontSize: '.9rem', padding: '13px 28px', background: 'transparent', color: '#eef0ff', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              Get In Touch →
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)', maxWidth: 680 }}>
            {stats.map(([value, label]) => (
              <div key={label} className="py-5 px-4 text-center" style={{ background: '#07070f' }}>
                <div className="font-bold leading-none mb-1.5" style={{ fontFamily: 'Space Grotesk', fontSize: '1.55rem', color: '#eef0ff' }}>{value}</div>
                <div className="uppercase tracking-widest" style={{ fontFamily: 'JetBrains Mono', fontSize: '.54rem', color: 'rgba(238,240,255,0.4)' }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Layout>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="uppercase tracking-[.18em]" style={{ fontFamily: 'JetBrains Mono', fontSize: '.58rem', color: 'rgba(238,240,255,0.2)' }}>SCROLL</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.6, repeat: Infinity }} className="w-px h-9" style={{ background: 'linear-gradient(to bottom,#00e5ff,transparent)' }} />
      </motion.div>
    </section>
  )
}
