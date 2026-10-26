import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Layout from './Layout'

const TECHS = ['React.js.','TypeScript.','Node.js.','PostgreSQL.','Next.js.','Redis.']
function RotatingWord() {
  const [i,setI]=useState(0),[vis,setVis]=useState(true)
  useEffect(()=>{ const iv=setInterval(()=>{ setVis(false); setTimeout(()=>{setI(p=>(p+1)%TECHS.length);setVis(true)},350) },2200); return()=>clearInterval(iv) },[])
  return <span style={{color:'#00e5ff',display:'inline-block',transition:'opacity .35s,transform .35s',opacity:vis?1:0,transform:vis?'translateY(0)':'translateY(10px)'}}>{TECHS[i]}</span>
}

const stagger={hidden:{},show:{transition:{staggerChildren:.1,delayChildren:.4}}}
const fadeUp={hidden:{opacity:0,y:50},show:{opacity:1,y:0,transition:{duration:.9,ease:[.16,1,.3,1]}}}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20">
      <Layout className="w-full">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={fadeUp} className="flex items-center gap-2.5 mb-8"
            style={{fontFamily:'JetBrains Mono',fontSize:'.68rem',color:'#00e5ff',letterSpacing:'.2em',textTransform:'uppercase'}}>
            <span style={{width:28,height:1,background:'#00e5ff',display:'block',flexShrink:0}}/>Full Stack Developer · Hyderabad, India
          </motion.div>
          <div className="overflow-hidden mb-4">
            <motion.h1 variants={fadeUp} className="font-bold leading-none" style={{fontFamily:'Space Grotesk',fontSize:'clamp(4rem,10vw,9rem)',letterSpacing:'-0.05em',color:'#eef0ff'}}>Jatla</motion.h1>
            <motion.h1 variants={fadeUp} className="font-bold leading-none outline-text" style={{fontFamily:'Space Grotesk',fontSize:'clamp(4rem,10vw,9rem)',letterSpacing:'-0.05em'}}>Shivakumar</motion.h1>
          </div>
          <motion.p variants={fadeUp} className="font-semibold mb-5" style={{fontFamily:'Space Grotesk',fontSize:'clamp(1.2rem,2.5vw,1.9rem)',color:'rgba(238,240,255,0.6)'}}>
            Building scalable systems with <RotatingWord/>
          </motion.p>
          <motion.p variants={fadeUp} className="leading-relaxed mb-10 max-w-xl" style={{fontSize:'1.02rem',color:'rgba(238,240,255,0.6)'}}>
            Full Stack Developer with <strong style={{color:'#eef0ff'}}>3+ years of experience</strong> building enterprise and government applications. Hands-on with <strong style={{color:'#00e5ff'}}>React, TypeScript, Node.js, PostgreSQL</strong>, and DevOps — currently at <strong style={{color:'#00e5ff'}}>Real Variable</strong>.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-16">
            <button onClick={()=>document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}
              className="cursor-none inline-flex items-center gap-2 rounded-lg text-white font-semibold border-none hover:-translate-y-0.5 transition-all duration-200"
              style={{fontFamily:'Space Grotesk',fontSize:'.9rem',padding:'13px 28px',background:'#2260ff',boxShadow:'0 6px 28px rgba(34,96,255,0.35)'}}>
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>View Projects
            </button>
            <button onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
              className="cursor-none inline-flex items-center gap-2 rounded-lg font-medium hover:-translate-y-0.5 transition-all duration-200"
              style={{fontFamily:'Space Grotesk',fontSize:'.9rem',padding:'13px 28px',background:'transparent',color:'#eef0ff',border:'1px solid rgba(255,255,255,0.06)'}}>
              Get In Touch →
            </button>
          </motion.div>
          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden" style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.06)',maxWidth:600}}>
            {[['3+','Years Exp'],['6+','Projects'],['40%','Load Cut'],['100+','Users Served']].map(([n,l])=>(
              <div key={l} className="py-5 px-4 text-center" style={{background:'#07070f'}}>
                <div className="font-bold leading-none mb-1.5" style={{fontFamily:'Space Grotesk',fontSize:'1.8rem',color:'#eef0ff'}}>
                  {n.replace(/[+%]/,'')}<span style={{color:'#00e5ff'}}>{n.match(/[+%]/)?.[0]||''}</span>
                </div>
                <div className="uppercase tracking-widest" style={{fontFamily:'JetBrains Mono',fontSize:'.56rem',color:'rgba(238,240,255,0.2)'}}>{l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Layout>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.5}} className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="uppercase tracking-[.18em]" style={{fontFamily:'JetBrains Mono',fontSize:'.58rem',color:'rgba(238,240,255,0.2)'}}>SCROLL</span>
        <motion.div animate={{y:[0,10,0]}} transition={{duration:1.6,repeat:Infinity}} className="w-px h-9" style={{background:'linear-gradient(to bottom,#00e5ff,transparent)'}}/>
      </motion.div>
    </section>
  )
}
