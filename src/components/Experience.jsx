import { motion } from 'framer-motion'
import Layout from './Layout'

const C=[
  {bg:'rgba(34,96,255,0.12)',text:'#6699ff',border:'rgba(34,96,255,0.22)'},
  {bg:'rgba(0,229,255,0.08)',text:'#00e5ff',border:'rgba(0,229,255,0.18)'},
  {bg:'rgba(124,58,237,0.12)',text:'#a78bfa',border:'rgba(124,58,237,0.22)'},
  {bg:'rgba(255,107,43,0.1)',text:'#ff6b2b',border:'rgba(255,107,43,0.22)'},
  {bg:'rgba(34,197,94,0.08)',text:'#4ade80',border:'rgba(34,197,94,0.18)'},
]

const exp = [
  {
    company:'Real Variable', role:'Full Stack Developer', period:'Dec 2024 – Present', type:'Full-Time',
    chipStyle:{background:'rgba(34,197,94,0.08)',color:'#4ade80',border:'1px solid rgba(34,197,94,0.18)'}, color:'#00e5ff',
    summary:'Architecting modular, scalable enterprise systems with React, TypeScript, Node.js, and MongoDB.',
    projects:[
      {
        name:'Control Tower — Supply Chain Management',
        stack:'React.js · TypeScript · Node.js · Express · MongoDB · Redux Toolkit · TanStack Query · ShadCN UI · Tailwind CSS · ExcelJS · jsPDF',
        points:[
          'Developed 8+ enterprise modules — Purchase Orders, Technical Submittals, Manufacturing, Packaging & Shipping, Delivery, Data Workflow, BOM Timeline, and Risk Management',
          'Built Supplier RAG/RICS reporting with risk scoring and one-click Excel/PDF export — reducing reliance on external reporting workflows',
          'Engineered schedule cascade logic and Node.js/Express REST APIs with JWT auth and role boundaries for oem_admin, oem_user, and supplier_user',
          'Designed scalable React + TypeScript architecture supporting 100+ users across Admin, OEM, and Supplier roles',
        ]
      },
      {
        name:'AP Civil Supplies Portal — Andhra Pradesh Government',
        stack:'React.js · TypeScript · Ag-Grid · TanStack Query · React Hook Form · Tailwind CSS · ShadCN UI',
        points:[
          'Built government-grade dashboards with Ag-Grid — rendering tens of thousands of rows of district-level PDS and commodity price data with sorting, filtering, and custom cell renderers',
          'Implemented price monitoring, market intervention, and consumer awareness modules — enabling admins to track price fluctuations and detect anomalies across AP districts in real time',
        ]
      }
    ],
    bullets:[
      'Applied System Design and Microservices principles — designing loosely coupled service boundaries, RESTful API contracts, and role-aware data flows',
      'Reduced initial load time by 40% via Vite code-splitting, dynamic imports, and lazy loading; containerised services using Docker',
      'Implemented end-to-end RBAC — protected React routes, permission-based UI rendering, and Express + MongoDB API middleware',
    ],
    stack:['React.js','TypeScript','Node.js','Express','MongoDB','Redux Toolkit','TanStack Query','Tailwind CSS','ShadCN UI','Ag-Grid','Docker','JWT','REST APIs','Vite'],
  },
  {
    company:'Mak Arena Solutions Pvt Ltd', role:'Full Stack Developer (Intern)', period:'Dec 2023 – Nov 2024', type:'Internship',
    chipStyle:{background:'rgba(124,58,237,0.12)',color:'#a78bfa',border:'1px solid rgba(124,58,237,0.22)'}, color:'#7c3aed',
    summary:'Built responsive frontend components and contributed Node.js/Express backend endpoints.',
    projects:[],
    bullets:[
      'Built responsive React + Tailwind CSS components from Figma designs with pixel-perfect accuracy',
      'Integrated REST APIs via Axios and contributed Node.js/Express endpoints with MongoDB queries and server-side validation',
      'Migrated legacy CSS to Tailwind CSS — achieving 20% CSS bundle size reduction and improving mobile responsiveness across all layouts',
    ],
    stack:['React.js','Tailwind CSS','Node.js','Express','MongoDB','Axios','Figma','Git','REST APIs'],
  },
]

const edu = [
  {inst:"St. Martin's Engineering College",degree:'B.Tech — Computer Science Engineering',period:'June 2019 – July 2023',detail:'CGPA: 7.6',color:'#ff6b2b'},
  {inst:'Sri Chaitanya Junior College',degree:'Intermediate (MPC) — Class 12',period:'2017 – 2019',detail:'Score: 93%',color:'#2260ff'},
  {inst:'Narayana High School',degree:'SSC — Class 10',period:'2016 – 2017',detail:'GPA: 9.2',color:'#7c3aed'},
]

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <Layout>
        <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.8}} className="mb-14">
          <div className="flex items-center gap-2.5 mb-4" style={{fontFamily:'JetBrains Mono',fontSize:'.68rem',color:'#00e5ff',letterSpacing:'.2em',textTransform:'uppercase'}}>
            <span style={{width:28,height:1,background:'#00e5ff',display:'block',flexShrink:0}}/>Experience
          </div>
          <h2 className="font-bold leading-tight" style={{fontFamily:'Space Grotesk',fontSize:'clamp(2rem,4vw,3.2rem)',letterSpacing:'-0.04em',color:'#eef0ff'}}>
            Where I've<br/><span className="grad-cyan">shipped code.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6 mb-16">
          {exp.map((e,i)=>(
            <motion.div key={e.company} initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
              transition={{duration:.8,delay:i*.12,ease:[.16,1,.3,1]}}
              className="rounded-2xl overflow-hidden" style={{background:'rgba(255,255,255,0.025)',border:'1px solid rgba(255,255,255,0.06)',borderLeft:`2px solid ${e.color}`}}>
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4" style={{padding:'28px 32px 20px',borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold tracking-tight" style={{fontFamily:'Space Grotesk',fontSize:'1.3rem',color:'#eef0ff'}}>{e.company}</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full" style={{fontFamily:'JetBrains Mono',fontSize:'.63rem',...e.chipStyle}}>{e.type}</span>
                  </div>
                  <div className="font-medium mb-1" style={{fontFamily:'Space Grotesk',fontSize:'1rem',color:e.color}}>{e.role}</div>
                  <div style={{fontFamily:'JetBrains Mono',fontSize:'.68rem',color:'rgba(238,240,255,0.5)',letterSpacing:'.08em'}}>{e.period}</div>
                </div>
                <div className="flex items-center justify-center rounded-xl flex-shrink-0" style={{width:44,height:44,background:`${e.color}15`,border:`1px solid ${e.color}30`}}>
                  <svg width="20" height="20" fill="none" stroke={e.color} strokeWidth="1.8" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
              </div>
              {/* Key projects */}
              {e.projects.map(proj=>(
                <div key={proj.name} style={{padding:'20px 32px',borderBottom:'1px solid rgba(255,255,255,0.04)',background:'rgba(255,255,255,0.01)'}}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background:e.color}}/>
                    <span className="font-semibold" style={{fontFamily:'Space Grotesk',fontSize:'.92rem',color:'#eef0ff'}}>{proj.name}</span>
                  </div>
                  <div className="mb-3" style={{fontFamily:'JetBrains Mono',fontSize:'.6rem',color:'rgba(238,240,255,0.35)',letterSpacing:'.03em',paddingLeft:'1.1rem'}}>{proj.stack}</div>
                  <ul className="flex flex-col gap-2 list-none p-0" style={{paddingLeft:'1.1rem'}}>
                    {proj.points.map((p,j)=>(
                      <li key={j} className="flex gap-2.5 leading-[1.6]" style={{fontSize:'.84rem',color:'rgba(238,240,255,0.6)'}}>
                        <span className="flex-shrink-0 mt-1" style={{color:e.color}}>▸</span><span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {/* General bullets */}
              <div style={{padding:'20px 32px 24px'}}>
                <ul className="flex flex-col gap-2 mb-5 list-none p-0">
                  {e.bullets.map((b,j)=>(
                    <li key={j} className="flex gap-2.5 leading-[1.6]" style={{fontSize:'.84rem',color:'rgba(238,240,255,0.55)'}}>
                      <span className="flex-shrink-0 mt-1" style={{color:e.color,opacity:.6}}>▹</span><span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4" style={{borderTop:'1px solid rgba(255,255,255,0.05)'}}>
                  {e.stack.map((t,j)=>{const c=C[j%5];return<span key={t} className="inline-flex items-center px-2.5 py-0.5 rounded-full" style={{fontFamily:'JetBrains Mono',fontSize:'.6rem',background:c.bg,color:c.text,border:`1px solid ${c.border}`}}>{t}</span>})}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.8,delay:.2}}>
          <div className="flex items-center gap-2.5 mb-6" style={{fontFamily:'JetBrains Mono',fontSize:'.68rem',color:'#00e5ff',letterSpacing:'.2em',textTransform:'uppercase'}}>
            <span style={{width:28,height:1,background:'#00e5ff',display:'block',flexShrink:0}}/>Education
          </div>
          <div className="flex flex-col gap-4">
            {edu.map((e,i)=>(
              <motion.div key={e.inst} initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.7,delay:i*.1}}
                className="rounded-2xl flex flex-wrap items-center gap-6 justify-between" style={{background:'rgba(255,255,255,0.025)',border:'1px solid rgba(255,255,255,0.06)',borderLeft:`2px solid ${e.color}`,padding:'20px 28px'}}>
                <div className="flex gap-4 items-center">
                  <div className="flex items-center justify-center rounded-xl flex-shrink-0" style={{width:42,height:42,background:`${e.color}15`,border:`1px solid ${e.color}30`}}>
                    <svg width="18" height="18" fill="none" stroke={e.color} strokeWidth="1.8" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-0.5" style={{fontFamily:'Space Grotesk',fontSize:'1rem',color:'#eef0ff'}}>{e.inst}</h4>
                    <div className="font-medium mb-0.5" style={{fontSize:'.84rem',color:e.color}}>{e.degree}</div>
                    <div style={{fontFamily:'JetBrains Mono',fontSize:'.63rem',color:'rgba(238,240,255,0.5)'}}>{e.period}</div>
                  </div>
                </div>
                <div className="rounded-lg px-5 py-2.5" style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)'}}>
                  <span className="font-semibold" style={{fontFamily:'Space Grotesk',fontSize:'.95rem',color:'#eef0ff'}}>{e.detail}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Layout>
    </section>
  )
}
