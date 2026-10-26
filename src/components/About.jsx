import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Layout from './Layout'

const skills = [
  {name:'React.js / Next.js',pct:95,color:'#2260ff'},
  {name:'TypeScript',pct:90,color:'#00e5ff'},
  {name:'Node.js / Express',pct:85,color:'#4ade80'},
  {name:'PostgreSQL / Prisma',pct:82,color:'#7c3aed'},
  {name:'Ag-Grid / TanStack Query',pct:92,color:'#ff6b2b'},
  {name:'Docker / DevOps',pct:75,color:'#00e5ff'},
]

const frontendChips = ['React.js','Next.js','TypeScript','Redux Toolkit','TanStack Query','Zustand','Tailwind CSS','ShadCN UI','Material UI','Ag-Grid','Framer Motion','React Hook Form']
const backendChips  = ['Node.js','Express.js','PostgreSQL','MongoDB','Prisma ORM','Redis','Socket.IO','BullMQ','JWT','OAuth 2.0','Zod','REST APIs']
const devopsChips   = ['Docker','Nginx','GitHub Actions','AWS S3','Vite','Turborepo','Git','Linux']

function Bar({name,pct,color,i}) {
  const ref = useRef(null)
  useEffect(()=>{
    const el=ref.current; if(!el) return
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.style.width=pct+'%';obs.disconnect()}},{threshold:.3})
    obs.observe(el); return()=>obs.disconnect()
  },[pct])
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium text-sm" style={{fontFamily:'Space Grotesk',color:'#eef0ff'}}>{name}</span>
        <span style={{fontFamily:'JetBrains Mono',fontSize:'.68rem',color:'rgba(238,240,255,0.6)'}}>{pct}%</span>
      </div>
      <div className="h-1 rounded-full overflow-hidden" style={{background:'rgba(238,240,255,0.08)'}}>
        <div ref={ref} className="skill-bar-fill h-full rounded-full" style={{background:`linear-gradient(90deg,${color},${color}88)`,transitionDelay:`${i*80}ms`}}/>
      </div>
    </div>
  )
}

function ChipGroup({title,chips,colors}) {
  return (
    <div className="mb-5">
      <div className="mb-2 uppercase" style={{fontFamily:'JetBrains Mono',fontSize:'.6rem',color:'rgba(238,240,255,0.3)',letterSpacing:'.12em'}}>{title}</div>
      <div className="flex flex-wrap gap-2">
        {chips.map((t,i)=>{
          const c=colors[i%colors.length]
          return <span key={t} className="inline-flex items-center px-3 py-1 rounded-full" style={{fontFamily:'JetBrains Mono',fontSize:'.63rem',background:c.bg,color:c.text,border:`1px solid ${c.border}`}}>{t}</span>
        })}
      </div>
    </div>
  )
}

const C = [
  {bg:'rgba(34,96,255,0.12)',text:'#6699ff',border:'rgba(34,96,255,0.22)'},
  {bg:'rgba(0,229,255,0.08)',text:'#00e5ff',border:'rgba(0,229,255,0.18)'},
  {bg:'rgba(124,58,237,0.12)',text:'#a78bfa',border:'rgba(124,58,237,0.22)'},
  {bg:'rgba(255,107,43,0.1)',text:'#ff6b2b',border:'rgba(255,107,43,0.22)'},
  {bg:'rgba(34,197,94,0.08)',text:'#4ade80',border:'rgba(34,197,94,0.18)'},
]

export default function About() {
  return (
    <section id="about" className="py-28">
      <Layout>
        <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.8}} className="mb-16">
          <div className="flex items-center gap-2.5 mb-4" style={{fontFamily:'JetBrains Mono',fontSize:'.68rem',color:'#00e5ff',letterSpacing:'.2em',textTransform:'uppercase'}}>
            <span style={{width:28,height:1,background:'#00e5ff',display:'block',flexShrink:0}}/>About Me
          </div>
          <h2 className="font-bold leading-tight" style={{fontFamily:'Space Grotesk',fontSize:'clamp(2rem,4vw,3.2rem)',letterSpacing:'-0.04em',color:'#eef0ff'}}>
            Full-stack by nature,<br/><span className="grad-text">product-minded by craft.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.8}}>
            <p className="leading-[1.8] mb-5" style={{fontSize:'1rem',color:'rgba(238,240,255,0.6)'}}>
              I'm a <strong style={{color:'#eef0ff'}}>Full Stack Developer</strong> based in Hyderabad, India with <strong style={{color:'#00e5ff'}}>3+ years</strong> of experience building enterprise and government-grade applications. Currently at <strong style={{color:'#00e5ff'}}>Real Variable</strong>, architecting modular React + Node.js systems used by 100+ users across Admin, OEM, and Supplier roles.
            </p>
            <p className="leading-[1.8] mb-5" style={{fontSize:'1rem',color:'rgba(238,240,255,0.6)'}}>
              I've shipped production systems like the <strong style={{color:'#eef0ff'}}>AP Civil Supplies Government Portal</strong> and the <strong style={{color:'#eef0ff'}}>Control Tower Supply Chain Management</strong> platform — handling tens of thousands of rows of live data with full RBAC, real-time updates, and Excel/PDF exports.
            </p>
            <p className="leading-[1.8] mb-8" style={{fontSize:'1rem',color:'rgba(238,240,255,0.6)'}}>
              Outside work I build <strong style={{color:'#00e5ff'}}>FlowDesk</strong> — a full-stack TypeScript monorepo (Linear/Jira-style OS) with PostgreSQL, Redis, Socket.IO, Docker, and GitHub Actions CI/CD.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[['Role','Full Stack Developer'],['Location','Hyderabad, India'],['Email','jatlashiva75@gmail.com'],['Degree','B.Tech CSE · 7.6 CGPA']].map(([k,v])=>(
                <div key={k} className="rounded-2xl p-4 backdrop-blur-sm" style={{background:'rgba(255,255,255,0.025)',border:'1px solid rgba(255,255,255,0.06)'}}>
                  <div className="mb-1 uppercase" style={{fontFamily:'JetBrains Mono',fontSize:'.6rem',color:'#00e5ff',letterSpacing:'.12em'}}>{k}</div>
                  <div className="font-medium text-sm" style={{color:'#eef0ff'}}>{v}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.8,delay:.1}}>
            <div className="flex flex-col gap-4 mb-8">
              {skills.map((s,i)=><Bar key={s.name} {...s} i={i}/>)}
            </div>
            <ChipGroup title="Frontend" chips={frontendChips} colors={C}/>
            <ChipGroup title="Backend & Database" chips={backendChips} colors={C}/>
            <ChipGroup title="DevOps & Tools" chips={devopsChips} colors={C}/>
          </motion.div>
        </div>
      </Layout>
    </section>
  )
}
