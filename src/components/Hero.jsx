import { lazy, Suspense, useEffect, useState } from 'react'
import { profile as p } from '../data/profile'
const Workstation3D = lazy(() => import('./Workstation3D'))
function Fallback() {
  return (<div className="mx-auto w-full max-w-sm rounded-lg border border-line bg-surf font-mono text-xs" style={{ transform: 'perspective(900px) rotateY(-14deg) rotateX(4deg)' }}>
    <div className="flex gap-1.5 border-b border-line p-3">{[0, 1, 2].map(i => <i key={i} className="h-2 w-2 rounded-full bg-line" />)}</div>
    <pre className="overflow-hidden p-4 leading-6 text-mute"><span className="text-acc">const</span> app = express()<br />app.use(express.json())<br />app.use(<span className="text-acc">"/api"</span>, routes)<span className="caret ml-1" /></pre></div>)
}
export default function Hero() {
  const [full, setFull] = useState(false)
  useEffect(() => { const m = matchMedia('(min-width:1024px) and (prefers-reduced-motion:no-preference)'); const f = () => setFull(m.matches); f(); m.addEventListener('change', f); return () => m.removeEventListener('change', f) }, [])
  return (
    <section id="home" className="flex min-h-screen items-center pt-24 pb-16">
      <div className="wrap grid w-full items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="tag mb-6">/ full stack developer</p>
          <h1 className="text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[56px]">Building useful things for the web.</h1>
          <p className="mt-5 text-xl text-ink">{p.name}</p>
          <p className="mt-4 max-w-md leading-relaxed text-mute">Full Stack Developer focused on building scalable, responsive and maintainable web applications.</p>
          <p className="tag mt-6 flex flex-wrap gap-x-3 text-ink/80">{['React.js', 'Node.js', 'Express.js', 'MongoDB'].map((t, i) => <span key={t}>{i > 0 && <span className="mr-3 text-acc">•</span>}{t}</span>)}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="rounded bg-acc px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-px">View Projects</a>
            <a href="#contact" className="rounded border border-line px-5 py-2.5 text-sm transition-colors hover:border-mute">Contact Me</a>
            <a href={p.resume} className="ml-2 text-sm text-mute transition-colors hover:text-acc">Download Resume →</a>
          </div>
        </div>
        <div className="h-[260px] lg:h-[480px]">{full ? <Suspense fallback={null}><Workstation3D /></Suspense> : <Fallback />}</div>
      </div>
    </section>)
}
