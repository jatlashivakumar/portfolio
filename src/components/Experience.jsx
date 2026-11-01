import { motion } from 'framer-motion'
import Layout from './Layout'

const chipColors = [
  { bg: 'rgba(34,96,255,0.12)', text: '#6699ff', border: 'rgba(34,96,255,0.22)' },
  { bg: 'rgba(0,229,255,0.08)', text: '#00e5ff', border: 'rgba(0,229,255,0.18)' },
  { bg: 'rgba(124,58,237,0.12)', text: '#a78bfa', border: 'rgba(124,58,237,0.22)' },
  { bg: 'rgba(255,107,43,0.1)', text: '#ff9a70', border: 'rgba(255,107,43,0.22)' },
  { bg: 'rgba(34,197,94,0.08)', text: '#4ade80', border: 'rgba(34,197,94,0.18)' },
]

const experiences = [
  {
    company: 'Real Variable Digital Asset Services Pvt Ltd',
    role: 'System Analyst (Full Stack Developer)',
    period: 'Dec 2024 – Present',
    type: 'Full-Time',
    color: '#00e5ff',
    chipStyle: { background: 'rgba(34,197,94,0.08)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.18)' },
    summary: 'Building enterprise applications across frontend architecture, backend API integration, authentication and role-based access control.',
    projects: [
      {
        name: 'Control Tower — Supply Chain Management',
        stack: 'React.js · TypeScript · Node.js · Express.js · MongoDB · Redux Toolkit · TanStack Query · Tailwind CSS · ShadCN UI',
        points: [
          'Built 8+ enterprise modules, including Purchase Orders, Manufacturing, Shipping, Delivery, BOM Timeline and Risk Management, helping replace manual Excel-based tracking for 1,000+ supply chain users.',
          'Developed Supplier RAG/RICS reporting with dual risk scoring and one-click Excel/PDF export to give project managers visibility into at-risk suppliers.',
          'Engineered schedule cascade logic that propagates a date change across downstream stages to help prevent missed SLA deadlines.',
          'Contributed Node.js/Express REST APIs with JWT authentication and MongoDB, enforcing role boundaries at the API level.',
        ],
      },
      {
        name: 'AP Civil Supplies Portal — Andhra Pradesh Government',
        stack: 'React.js · TypeScript · Ag-Grid · TanStack Query · React Hook Form · Tailwind CSS · ShadCN UI',
        points: [
          'Built analytics dashboards with Ag-Grid for 300+ government users across AP districts, handling tens of thousands of rows of PDS and commodity price data.',
          'Implemented sorting, filtering and custom cell renderers for data-intensive government dashboards.',
          'Developed price monitoring, market intervention and consumer awareness modules to help district administrators identify price anomalies.',
          'Built reusable React components, reducing duplicate UI code by approximately 30% across portal modules.',
        ],
      },
    ],
    bullets: [
      'Mentored 2 junior developers through code reviews and pair programming, helping establish shared coding standards and improve team consistency.',
      'Reduced initial application load time by 40% through Vite code-splitting and lazy loading.',
      'Implemented end-to-end RBAC using protected React routes, permission-based UI rendering and Express/MongoDB API middleware for oem_admin, oem_user and supplier_user roles.',
      'Added Error Boundaries and Suspense for production stability and containerised services with Docker.',
    ],
    stack: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS', 'ShadCN UI', 'Ag-Grid', 'Docker', 'JWT', 'REST APIs', 'Vite'],
  },
  {
    company: 'Mak Arena Solutions Pvt Limited',
    role: 'Full Stack Developer Intern',
    period: 'Dec 2023 – Nov 2024',
    type: 'Internship',
    color: '#a78bfa',
    chipStyle: { background: 'rgba(124,58,237,0.12)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.22)' },
    summary: 'Developed responsive React interfaces and contributed to REST API integration and backend development.',
    projects: [],
    bullets: [
      'Built responsive React and Tailwind CSS components from Figma designs.',
      'Integrated REST APIs using Axios and contributed Node.js/Express endpoints with MongoDB queries and server-side validation.',
      'Migrated legacy CSS to Tailwind CSS, achieving a 20% bundle size reduction and improving mobile responsiveness.',
    ],
    stack: ['React.js', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Axios', 'REST APIs', 'Git'],
  },
]

const edu = [
  {
    inst: "St. Martin's Engineering College",
    degree: 'B.Tech — Computer Science Engineering',
    period: 'June 2019 – July 2023',
    detail: 'CGPA: 7.6',
    color: '#ff6b2b',
  },
  {
    inst: 'Narayana Junior College',
    degree: 'Intermediate (MPC) — Class 12',
    period: '2017 – 2019',
    detail: 'Percentage: 94.5%',
    color: '#2260ff',
  },
  {
    inst: 'St. Don Bosco High School',
    degree: 'SSC — Class 10',
    period: '2016 – 2017',
    detail: 'Percentage: 92%',
    color: '#7c3aed',
  },
]

function SkillTags({ items }) {
  return (
    <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {items.map((tag, index) => {
        const color = chipColors[index % chipColors.length]
        return (
          <span key={tag} className="inline-flex items-center px-2.5 py-1 rounded-full" style={{ fontFamily: 'JetBrains Mono', fontSize: '.6rem', background: color.bg, color: color.text, border: `1px solid ${color.border}` }}>
            {tag}
          </span>
        )
      })}
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <Layout>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-14">
          <div className="flex items-center gap-2.5 mb-4" style={{ fontFamily: 'JetBrains Mono', fontSize: '.68rem', color: '#00e5ff', letterSpacing: '.2em', textTransform: 'uppercase' }}>
            <span style={{ width: 28, height: 1, background: '#00e5ff', display: 'block', flexShrink: 0 }} />Professional Experience
          </div>
          <h2 className="font-bold leading-tight" style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2rem,4vw,3.2rem)', letterSpacing: '-0.04em', color: '#eef0ff' }}>
            Where I've<br /><span className="grad-cyan">built and shipped.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6 mb-16">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderLeft: `2px solid ${experience.color}` }}
            >
              <header className="flex flex-wrap items-start justify-between gap-4" style={{ padding: '28px 32px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-bold tracking-tight" style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.05rem,2vw,1.3rem)', color: '#eef0ff' }}>{experience.company}</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full" style={{ fontFamily: 'JetBrains Mono', fontSize: '.63rem', ...experience.chipStyle }}>{experience.type}</span>
                  </div>
                  <div className="font-medium mb-1" style={{ fontFamily: 'Space Grotesk', fontSize: '1rem', color: experience.color }}>{experience.role}</div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '.68rem', color: 'rgba(238,240,255,0.5)', letterSpacing: '.08em' }}>{experience.period}</div>
                </div>
                <div className="flex items-center justify-center rounded-xl flex-shrink-0" style={{ width: 44, height: 44, background: `${experience.color}15`, border: `1px solid ${experience.color}30` }}>
                  <svg width="20" height="20" fill="none" stroke={experience.color} strokeWidth="1.8" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                </div>
              </header>

              <div className="px-8 pt-5 pb-2">
                <p className="leading-relaxed" style={{ fontSize: '.88rem', color: 'rgba(238,240,255,0.58)' }}>{experience.summary}</p>
              </div>

              {experience.projects.map(project => (
                <div key={project.name} style={{ padding: '20px 32px', borderBottom: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.01)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: experience.color }} />
                    <h4 className="font-semibold" style={{ fontFamily: 'Space Grotesk', fontSize: '.94rem', color: '#eef0ff' }}>{project.name}</h4>
                  </div>
                  <div className="mb-3" style={{ fontFamily: 'JetBrains Mono', fontSize: '.6rem', lineHeight: 1.8, color: 'rgba(238,240,255,0.38)', paddingLeft: '1.1rem' }}>{project.stack}</div>
                  <ul className="flex flex-col gap-2 list-none p-0" style={{ paddingLeft: '1.1rem' }}>
                    {project.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex gap-2.5 leading-[1.65]" style={{ fontSize: '.84rem', color: 'rgba(238,240,255,0.62)' }}>
                        <span className="flex-shrink-0 mt-1" style={{ color: experience.color }}>▸</span><span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div style={{ padding: '20px 32px 24px' }}>
                <h4 className="mb-3 uppercase" style={{ fontFamily: 'JetBrains Mono', fontSize: '.6rem', letterSpacing: '.12em', color: 'rgba(238,240,255,0.4)' }}>
                  {experience.type === 'Internship' ? 'Responsibilities' : 'Additional Contributions'}
                </h4>
                <ul className="flex flex-col gap-2 mb-5 list-none p-0">
                  {experience.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex gap-2.5 leading-[1.65]" style={{ fontSize: '.84rem', color: 'rgba(238,240,255,0.58)' }}>
                      <span className="flex-shrink-0 mt-1" style={{ color: experience.color, opacity: 0.75 }}>▹</span><span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <SkillTags items={experience.stack} />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="flex items-center gap-2.5 mb-6" style={{ fontFamily: 'JetBrains Mono', fontSize: '.68rem', color: '#00e5ff', letterSpacing: '.2em', textTransform: 'uppercase' }}>
            <span style={{ width: 28, height: 1, background: '#00e5ff', display: 'block', flexShrink: 0 }} />Education
          </div>
          <div className="flex flex-col gap-4">
            {education.map(item => (
              <div key={item.institution} className="rounded-2xl flex flex-wrap items-center gap-6 justify-between" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderLeft: `2px solid ${item.color}`, padding: '20px 28px' }}>
                <div className="flex gap-4 items-center">
                  <div className="flex items-center justify-center rounded-xl flex-shrink-0" style={{ width: 42, height: 42, background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                    <svg width="18" height="18" fill="none" stroke={item.color} strokeWidth="1.8" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-0.5" style={{ fontFamily: 'Space Grotesk', fontSize: '1rem', color: '#eef0ff' }}>{item.institution}</h4>
                    <div className="font-medium mb-0.5" style={{ fontSize: '.84rem', color: item.color }}>{item.degree}</div>
                    <div style={{ fontFamily: 'JetBrains Mono', fontSize: '.63rem', color: 'rgba(238,240,255,0.5)' }}>{item.period}</div>
                  </div>
                </div>
                <div className="rounded-lg px-5 py-2.5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span className="font-semibold" style={{ fontFamily: 'Space Grotesk', fontSize: '.95rem', color: '#eef0ff' }}>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Layout>
    </section>
  )
}
