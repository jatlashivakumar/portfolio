import { motion } from 'framer-motion'
import Layout from './Layout'

const skillGroups = [
  {
    title: 'Languages',
    chips: ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend Development',
    chips: ['React.js', 'Next.js', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS', 'ShadCN UI', 'Ag-Grid', 'Framer Motion', 'React Hook Form', 'Vitest', 'React Testing Library'],
  },
  {
    title: 'Backend & Databases',
    chips: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'PostgreSQL', 'Prisma ORM', 'Redis', 'Socket.IO', 'BullMQ', 'JWT', 'OAuth 2.0', 'Zod'],
  },
  {
    title: 'DevOps & Tools',
    chips: ['Docker', 'Nginx', 'GitHub Actions', 'AWS S3', 'Git', 'GitHub', 'Vite', 'Turborepo', 'Postman', 'SonarQube', 'Linux'],
  },
  {
    title: 'Engineering Practices',
    chips: ['Component Architecture', 'State Management', 'RBAC', 'System Design', 'Microservices', 'Design Patterns', 'Performance Optimization', 'Agile / Scrum'],
  },
]

const colors = [
  { bg: 'rgba(34,96,255,0.12)', text: '#6699ff', border: 'rgba(34,96,255,0.22)' },
  { bg: 'rgba(0,229,255,0.08)', text: '#00e5ff', border: 'rgba(0,229,255,0.18)' },
  { bg: 'rgba(124,58,237,0.12)', text: '#a78bfa', border: 'rgba(124,58,237,0.22)' },
  { bg: 'rgba(255,107,43,0.1)', text: '#ff9a70', border: 'rgba(255,107,43,0.22)' },
  { bg: 'rgba(34,197,94,0.08)', text: '#4ade80', border: 'rgba(34,197,94,0.18)' },
]

function ChipGroup({ title, chips, index }) {
  const color = colors[index % colors.length]

  return (
    <div className="mb-6">
      <h3 className="mb-3 uppercase" style={{ fontFamily: 'JetBrains Mono', fontSize: '.62rem', color: '#00e5ff', letterSpacing: '.12em' }}>
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {chips.map(chip => (
          <span
            key={chip}
            className="inline-flex items-center px-3 py-1.5 rounded-full"
            style={{ fontFamily: 'JetBrains Mono', fontSize: '.63rem', background: color.bg, color: color.text, border: `1px solid ${color.border}` }}
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  )
}

const profileDetails = [
  ['Role', 'Full Stack Developer'],
  ['Location', 'Hyderabad, India'],
  ['Email', 'jatlashiva75@gmail.com'],
  ['Education', 'B.Tech CSE · 7.6 CGPA'],
]

export default function About() {
  return (
    <section id="about" className="py-28">
      <Layout>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2.5 mb-4" style={{ fontFamily: 'JetBrains Mono', fontSize: '.68rem', color: '#00e5ff', letterSpacing: '.2em', textTransform: 'uppercase' }}>
            <span style={{ width: 28, height: 1, background: '#00e5ff', display: 'block', flexShrink: 0 }} />About Me
          </div>
          <h2 className="font-bold leading-tight" style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2rem,4vw,3.2rem)', letterSpacing: '-0.04em', color: '#eef0ff' }}>
            Full-stack by nature,<br /><span className="grad-text">product-minded by craft.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="leading-[1.8] mb-5" style={{ fontSize: '1rem', color: 'rgba(238,240,255,0.68)' }}>
              I'm a <strong style={{ color: '#eef0ff' }}>Full Stack Developer</strong> based in Hyderabad, India, with <strong style={{ color: '#00e5ff' }}>3 years of experience including an internship</strong>. I currently work at <strong style={{ color: '#00e5ff' }}>Real Variable Digital Asset Services Pvt Ltd</strong>, building enterprise applications using React, TypeScript and backend technologies.
            </p>
            <p className="leading-[1.8] mb-5" style={{ fontSize: '1rem', color: 'rgba(238,240,255,0.68)' }}>
              My professional experience includes the <strong style={{ color: '#eef0ff' }}>Control Tower Supply Chain Management</strong> platform and the <strong style={{ color: '#eef0ff' }}>AP Civil Supplies Portal</strong>. I've worked on enterprise modules, data-intensive dashboards, role-based access control, REST API integration, reporting and frontend performance improvements.
            </p>
            <p className="leading-[1.8] mb-8" style={{ fontSize: '1rem', color: 'rgba(238,240,255,0.68)' }}>
              Alongside professional work, I build personal projects such as <strong style={{ color: '#00e5ff' }}>FlowDesk</strong> and <strong style={{ color: '#00e5ff' }}>Nexus</strong> to strengthen my experience with full-stack architecture, PostgreSQL, Prisma, Redis, real-time communication, Docker and CI/CD.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profileDetails.map(([label, value]) => (
                <div key={label} className="rounded-2xl p-4 backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="mb-1 uppercase" style={{ fontFamily: 'JetBrains Mono', fontSize: '.6rem', color: '#00e5ff', letterSpacing: '.12em' }}>{label}</div>
                  <div className="font-medium text-sm break-words" style={{ color: '#eef0ff' }}>{value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
            <div className="mb-6">
              <h3 className="font-semibold mb-2" style={{ fontFamily: 'Space Grotesk', fontSize: '1.15rem', color: '#eef0ff' }}>Technical Skills</h3>
              <p className="leading-relaxed" style={{ fontSize: '.86rem', color: 'rgba(238,240,255,0.48)' }}>
                Technologies and engineering practices I use across frontend, backend and application delivery.
              </p>
            </div>
            {skillGroups.map((group, index) => (
              <ChipGroup key={group.title} title={group.title} chips={group.chips} index={index} />
            ))}
          </motion.div>
        </div>
      </Layout>
    </section>
  )
}
