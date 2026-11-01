import { useEffect } from 'react'
import Lenis from 'lenis'
import Cursor from './components/Cursor'
import ThreeScene from './components/ThreeScene'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration:1.4, easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)), smoothWheel:true })
    const raf = time => { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)

    const els = document.querySelectorAll('.reveal, .reveal-left')
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e,i) => { if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('in'),i*80); obs.unobserve(e.target) } })
    }, {threshold:.1})
    els.forEach(el=>obs.observe(el))

    return () => { lenis.destroy(); obs.disconnect() }
  }, [])

  return (
    <>
      <Cursor/>
      <div className="fixed inset-0 pointer-events-none" style={{zIndex:0}}>
        <div style={{position:'absolute',width:700,height:700,background:'rgba(34,96,255,0.07)',borderRadius:'50%',filter:'blur(90px)',top:-200,right:-150,animation:'floatBob 10s ease-in-out infinite'}}/>
        <div style={{position:'absolute',width:500,height:500,background:'rgba(0,229,255,0.05)',borderRadius:'50%',filter:'blur(90px)',bottom:'5%',left:-100,animation:'floatBob 13s ease-in-out infinite reverse'}}/>
        <div style={{position:'absolute',width:400,height:400,background:'rgba(124,58,237,0.05)',borderRadius:'50%',filter:'blur(90px)',top:'40%',right:'15%',animation:'floatBob 9s ease-in-out infinite 2s'}}/>
      </div>
      <ThreeScene/>
      <div style={{position:'relative',zIndex:2}}>
        <NavBar/>
        <main>
          <Hero/>
          <About/>
          <Projects/>
          <Experience/>
          <Contact/>
        </main>
      </div>
    </>
  )
}
