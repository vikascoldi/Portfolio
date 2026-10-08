import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile as p } from '../data/profile'
const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact']
export default function Navbar() {
  const [solid, setSolid] = useState(false), [open, setOpen] = useState(false)
  useEffect(() => { const f = () => setSolid(scrollY > 24); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  const a = 'text-sm text-mute hover:text-ink transition-colors'
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${solid || open ? 'bg-bg/85 backdrop-blur border-line' : 'border-transparent'}`}>
      <div className="wrap flex h-14 items-center justify-between">
        <a href="#home" className="flex items-baseline gap-2"><span className="font-mono font-medium text-acc">VY</span><span className="text-xs text-mute">Vikas Yadav</span></a>
        <nav className="hidden lg:flex gap-7">{links.map(l => <a key={l} href={`#${l.toLowerCase()}`} className={a}>{l}</a>)}</nav>
        <div className="hidden lg:flex items-center gap-5">
          <a className={a} href={p.github}>GitHub</a><a className={a} href={p.linkedin}>LinkedIn</a>
          <a className="text-sm text-acc border border-acc/40 px-3 py-0.5 rounded hover:bg-acc/10 transition-colors" href={p.resume}>Resume</a>
        </div>
        <button className="lg:hidden text-ink" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
      {open && <nav className="lg:hidden wrap flex flex-col gap-4 pb-6 pt-2">
        {[...links, 'GitHub', 'LinkedIn', 'Resume'].map(l => <a key={l} onClick={() => setOpen(false)} className="text-ink"
          href={links.includes(l) ? `#${l.toLowerCase()}` : p[l.toLowerCase()]}>{l}</a>)}</nav>}
    </header>)
}
