export default function Layout({ children, className = '', style = {} }) {
  return (
    <div className={className} style={{ maxWidth:1200, margin:'0 auto', paddingLeft:'clamp(1.5rem,6vw,5rem)', paddingRight:'clamp(1.5rem,6vw,5rem)', ...style }}>
      {children}
    </div>
  )
}
