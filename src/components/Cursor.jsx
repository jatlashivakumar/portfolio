import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot  = useRef(null)
  const ring = useRef(null)
  const pos  = useRef({ x:0, y:0, rx:0, ry:0 })

  useEffect(() => {
    const onMove = e => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px'
        dot.current.style.top  = e.clientY + 'px'
      }
    }

    // Hover detection — add class to body for CSS to pick up
    const onEnter = e => {
      const el = e.target
      if (el.closest('a, button, [data-cursor], input, textarea, select, label')) {
        document.body.classList.add('cursor-hover')
      }
    }
    const onLeave = e => {
      const el = e.target
      if (el.closest('a, button, [data-cursor], input, textarea, select, label')) {
        document.body.classList.remove('cursor-hover')
      }
    }
    const onDown = () => document.body.classList.add('cursor-click')
    const onUp   = () => document.body.classList.remove('cursor-click')

    document.addEventListener('mousemove',  onMove)
    document.addEventListener('mouseover',  onEnter)
    document.addEventListener('mouseout',   onLeave)
    document.addEventListener('mousedown',  onDown)
    document.addEventListener('mouseup',    onUp)

    let raf
    const animate = () => {
      pos.current.rx += (pos.current.x - pos.current.rx) * 0.1
      pos.current.ry += (pos.current.y - pos.current.ry) * 0.1
      if (ring.current) {
        ring.current.style.left = pos.current.rx + 'px'
        ring.current.style.top  = pos.current.ry + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      document.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mouseover',  onEnter)
      document.removeEventListener('mouseout',   onLeave)
      document.removeEventListener('mousedown',  onDown)
      document.removeEventListener('mouseup',    onUp)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div id="cursor-dot"  ref={dot}  />
      <div id="cursor-ring" ref={ring} />
    </>
  )
}
