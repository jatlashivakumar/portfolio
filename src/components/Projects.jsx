import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from './Layout'

const C = [
  {bg:'rgba(34,96,255,0.12)',text:'#6699ff',border:'rgba(34,96,255,0.22)'},
  {bg:'rgba(0,229,255,0.08)',text:'#00e5ff',border:'rgba(0,229,255,0.18)'},
  {bg:'rgba(124,58,237,0.12)',text:'#a78bfa',border:'rgba(124,58,237,0.22)'},
  {bg:'rgba(255,107,43,0.1)',text:'#ff6b2b',border:'rgba(255,107,43,0.22)'},
  {bg:'rgba(34,197,94,0.08)',text:'#4ade80',border:'rgba(34,197,94,0.18)'},
]

const projects = [
  {
    id:'flowdesk', name:'FlowDesk', tag:'Enterprise Work OS · Linear / Jira-style',
    desc:'Full-stack TypeScript monorepo — PostgreSQL + Prisma, Redis + BullMQ real-time workers, typed Socket.IO events, optimistic concurrency control, cursor pagination, AWS S3 presigned uploads. Containerised with Docker Compose, Nginx reverse proxy, and GitHub Actions CI/CD.',
    techs:['React.js','TypeScript','Node.js','PostgreSQL','Prisma','Redis','BullMQ','Socket.IO','AWS S3','Docker','Nginx','GitHub Actions'],
    ci:[ 0,1,2,3,4,0,1,2,3,4,0,1],
    github:'https://github.com/jatlashivakumar/flowdesk-collaborative-platform',
    color:'#00e5ff', visual:'flowdesk', featured:true
  },
  {
    id:'nexus', name:'Nexus', tag:'Large-Scale Full-Stack Platform',
    desc:'Production-grade distributed platform engineered end-to-end — microservice architecture, real-time data pipelines, and a high-performance React frontend. Every layer built for scale and reliability.',
    techs:['React','Node.js','PostgreSQL','Redis','TypeScript'],
    ci:[0,1,2,3,4],
    github:'https://github.com/jatlashivakumar',
    color:'#2260ff', visual:'nexus', featured:true
  },
  {
    id:'pulse', name:'Pulse', tag:'Real-Time Monitoring Dashboard',
    desc:'WebSocket-driven analytics platform for live operational insights. Low-latency data ingestion with a reactive frontend keeping everything in real-time sync across all connected clients.',
    techs:['Next.js','Socket.IO','MongoDB','Tailwind','Redux'],
    ci:[3,1,4,0,2],
    github:'https://github.com/jatlashivakumar',
    color:'#ff6b2b', visual:'pulse', featured:true
  },
  {
    id:'ecomm', name:'MERN Ecommerce', tag:'Full-Stack E-Commerce',
    desc:'Complete MERN stack e-commerce with cart, JWT auth, payment flow, and admin dashboard. Full product lifecycle from browsing to checkout with role-based access.',
    techs:['MongoDB','Express','React','Node.js','JWT'],
    ci:[4,0,1,2,3],
    github:'https://github.com/jatlashivakumar',
    color:'#7c3aed', visual:'grid', featured:false
  },
  {
    id:'ubereats', name:'Uber Eats Clone', tag:'Food Delivery UI Clone',
    desc:'Pixel-perfect Uber Eats UI clone with restaurant listing, cart management, and responsive design. Built to master component architecture and Context API state management patterns.',
    techs:['React','Tailwind CSS','Context API','REST API'],
    ci:[0,3,1,4],
    github:'https://github.com/jatlashivakumar',
    color:'#00e5ff', visual:'grid', featured:false
  },
  {
    id:'weather', name:'Weather App', tag:'Real-Time Weather Dashboard',
    desc:'Location-based weather app with OpenWeatherMap API, geolocation detection, 7-day forecast, and dynamic UI that adapts to current weather conditions.',
    techs:['React','OpenWeather API','Geolocation','CSS3'],
    ci:[1,0,2,4],
    github:'https://github.com/jatlashivakumar',
    color:'#7c3aed', visual:'grid', featured:false
  },
]

function FlowdeskVis() {
  return (
    <div className="w-full h-full flex items-center justify-center relative" style={{background:'radial-gradient(ellipse at 50% 50%,rgba(0,229,255,.12),transparent 70%)'}}>
      <div className="relative flex gap-3 items-end">
        {[['#2260ff','To Do',3],['#00e5ff','In Progress',2],['#4ade80','Done',4]].map(([color,label,count])=>(
          <div key={label} className="flex flex-col gap-1.5">
            <div style={{fontFamily:'JetBrains Mono',fontSize:'.55rem',color:'rgba(238,240,255,0.4)',textTransform:'uppercase',letterSpacing:'.08em',marginBottom:4}}>{label}</div>
            {Array.from({length:count}).map((_,i)=>(
              <div key={i} className="rounded-md" style={{width:60,height:20,background:`${color}20`,border:`1px solid ${color}40`}}/>
            ))}
          </div>
        ))}
        <div className="absolute -top-3 -right-3 rounded-full" style={{width:10,height:10,background:'#00e5ff',boxShadow:'0 0 12px #00e5ff',animation:'pulseRing 2s ease-out infinite'}}/>
      </div>
    </div>
  )
}
function NexusVis() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{background:'radial-gradient(ellipse at 60% 40%,rgba(34,96,255,.18),transparent 70%)'}}>
      <div className="relative" style={{width:110,height:110}}>
        <div className="absolute inset-0 rounded-full" style={{background:'conic-gradient(from 0deg,#2260ff,#00e5ff,#2260ff)',animation:'spinSlow 4s linear infinite',boxShadow:'0 0 50px rgba(34,96,255,.5)'}}/>
        <div className="absolute rounded-full" style={{inset:10,background:'#0c0c1a'}}/>
        <div className="absolute rounded-full" style={{inset:22,background:'radial-gradient(circle,rgba(34,96,255,.5),transparent)'}}/>
      </div>
    </div>
  )
}
function PulseVis() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{background:'radial-gradient(ellipse at 50%,rgba(255,107,43,.14),transparent 70%)'}}>
      <div className="relative flex items-center justify-center" style={{width:110,height:110}}>
        {[0,1,2,3].map(i=><div key={i} className="absolute rounded-full" style={{width:26+i*20,height:26+i*20,border:'1px solid rgba(255,107,43,0.65)',animation:'pulseRing 2.4s ease-out infinite',animationDelay:`${i*.6}s`}}/>)}
        <div className="rounded-full" style={{width:16,height:16,background:'#ff6b2b',boxShadow:'0 0 20px #ff6b2b,0 0 40px rgba(255,107,43,.4)',position:'relative',zIndex:1}}/>
      </div>
    </div>
  )
}
function GridVis({color}) {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{background:`radial-gradient(ellipse,${color}18,transparent 70%)`}}>
      <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="4" stroke={color} strokeWidth="1.5" opacity=".8"/>
        <rect x="36" y="4" width="24" height="24" rx="4" stroke={color} strokeWidth="1.5" opacity=".4"/>
        <rect x="4" y="36" width="24" height="24" rx="4" stroke={color} strokeWidth="1.5" opacity=".4"/>
        <rect x="36" y="36" width="24" height="24" rx="4" stroke={color} strokeWidth="1.5" opacity=".8"/>
      </svg>
    </div>
  )
}

function Card({p,index}) {
  const ref = useRef(null)
  const onMove = e => {
    const r=ref.current.getBoundingClientRect(), x=e.clientX-r.left, y=e.clientY-r.top
    ref.current.style.transform=`perspective(900px) rotateX(${(y-r.height/2)/r.height*-5}deg) rotateY(${(x-r.width/2)/r.width*5}deg) scale(1.015)`
    ref.current.style.transition='transform .08s ease'
    const gl=ref.current.querySelector('.glow')
    if(gl){gl.style.setProperty('--gx',(x/r.width*100)+'%');gl.style.setProperty('--gy',(y/r.height*100)+'%');gl.style.opacity='1'}
  }
  const onLeave = () => {
    ref.current.style.transform='perspective(900px) rotateX(0) rotateY(0) scale(1)'
    ref.current.style.transition='transform .5s cubic-bezier(.16,1,.3,1)'
    const gl=ref.current.querySelector('.glow'); if(gl) gl.style.opacity='0'
  }
  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      initial={{opacity:0,y:60}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
      transition={{duration:.8,delay:index*.08,ease:[.16,1,.3,1]}}
      className="tilt-card rounded-2xl overflow-hidden relative cursor-none"
      style={{background:'rgba(255,255,255,0.025)',border:'1px solid rgba(255,255,255,0.06)',transition:'border-color .3s'}}
      onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'}
      onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.06)'}>
      <div className="glow absolute inset-0 pointer-events-none" style={{opacity:0,background:`radial-gradient(circle at var(--gx,50%) var(--gy,50%),${p.color}12,transparent 55%)`,zIndex:0,transition:'opacity .3s'}}/>
      <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{height:1,zIndex:2}}>
        <div style={{height:'100%',background:`linear-gradient(90deg,transparent,${p.color},transparent)`,animation:'beamSlide 3.5s ease-in-out infinite'}}/>
      </div>
      <div style={{position:'relative',zIndex:1}}>
        <div className="overflow-hidden" style={{height:p.featured?190:155,borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
          {p.visual==='flowdesk'?<FlowdeskVis/>:p.visual==='nexus'?<NexusVis/>:p.visual==='pulse'?<PulseVis/>:<GridVis color={p.color}/>}
        </div>
        <div style={{padding:'22px 26px'}}>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {p.techs.map((t,i)=>{const c=C[p.ci[i]||i%5]; return <span key={t} className="inline-flex items-center px-2.5 py-0.5 rounded-full" style={{fontFamily:'JetBrains Mono',fontSize:'.6rem',background:c.bg,color:c.text,border:`1px solid ${c.border}`}}>{t}</span>})}
          </div>
          <h3 className="font-bold tracking-tight leading-tight mb-1" style={{fontFamily:'Space Grotesk',fontSize:p.featured?'1.5rem':'1.2rem',color:'#eef0ff'}}>{p.name}</h3>
          <p className="mb-3" style={{fontFamily:'JetBrains Mono',fontSize:'.62rem',color:p.color,letterSpacing:'.04em'}}>{p.tag}</p>
          <p className="leading-[1.65] mb-5" style={{fontSize:'.86rem',color:'rgba(238,240,255,0.6)'}}>{p.desc}</p>
          <div className="flex items-center justify-between">
            <a href={p.github} target="_blank" rel="noopener noreferrer"
              className="cursor-none inline-flex items-center gap-2 rounded-lg font-semibold no-underline hover:-translate-y-0.5 transition-transform"
              style={{fontFamily:'Space Grotesk',fontSize:'.8rem',padding:'9px 20px',background:'rgba(255,255,255,0.06)',color:'#eef0ff',border:'1px solid rgba(255,255,255,0.1)'}}>
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
              GitHub
            </a>
            <div className="flex items-center justify-center rounded-full" style={{width:32,height:32,border:'1px solid rgba(255,255,255,0.06)',color:'rgba(238,240,255,0.3)'}}>
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7,7 17,7 17,17"/></svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [filter,setFilter] = useState('All')
  const list = filter==='Featured'?projects.filter(p=>p.featured):projects
  return (
    <section id="projects" className="py-32 mt-8">
      <Layout>
        <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.8}} className="mb-16">
          <div className="flex items-center gap-2.5 mb-4" style={{fontFamily:'JetBrains Mono',fontSize:'.68rem',color:'#00e5ff',letterSpacing:'.2em',textTransform:'uppercase'}}>
            <span style={{width:28,height:1,background:'#00e5ff',display:'block',flexShrink:0}}/>Selected Work
          </div>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-bold leading-tight" style={{fontFamily:'Space Grotesk',fontSize:'clamp(2rem,4vw,3.2rem)',letterSpacing:'-0.04em',color:'#eef0ff'}}>
              Projects that<br/><span className="grad-text">push limits.</span>
            </h2>
            <div className="flex gap-2 flex-wrap">
              {['All','Featured'].map(f=>(
                <button key={f} onClick={()=>setFilter(f)} className="cursor-none px-4 py-2 rounded-full font-medium transition-all duration-200"
                  style={{fontFamily:'Space Grotesk',fontSize:'.78rem',background:filter===f?'#2260ff':'transparent',color:filter===f?'#fff':'rgba(238,240,255,0.6)',border:`1px solid ${filter===f?'#2260ff':'rgba(255,255,255,0.06)'}`}}>
                  {f}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        <AnimatePresence mode="wait">
          <div key={filter} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {list.map((p,i)=><Card key={p.id} p={p} index={i}/>)}
          </div>
        </AnimatePresence>
      </Layout>
    </section>
  )
}
