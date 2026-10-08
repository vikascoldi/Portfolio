import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Reveal from './Reveal'
const json = [['name', 'Vikas Yadav'], ['role', 'Full Stack Developer'], ['stack', 'MERN'], ['location', 'Mumbai, India'], ['experience', '6 months internship']]
const full = '{\n' + json.map(([k, v], i) => `  "${k}": "${v}"${i < json.length - 1 ? ',' : ''}`).join('\n') + '\n}'
function Profile() {
  const ref = useRef(), seen = useInView(ref, { once: true }), [n, setN] = useState(0)
  useEffect(() => { if (!seen) return; if (matchMedia('(prefers-reduced-motion:reduce)').matches) return setN(full.length)
    const id = setInterval(() => setN(x => { if (x >= full.length) { clearInterval(id); return x } return x + 2 }), 18); return () => clearInterval(id) }, [seen])
  return (<div ref={ref} className="rounded-lg border border-line bg-surf">
    <div className="border-b border-line px-4 py-2.5"><span className="tag text-ink/80">developer.json</span></div>
    <pre className="min-h-[170px] overflow-x-auto p-5 font-mono text-[13px] leading-6 text-mute">{full.slice(0, n).split('\n').map((l, i) => {
      const m = l.match(/^(\s+)"(\w+)": (.*)$/); return m ? <div key={i}>{m[1]}<span className="text-ink">"{m[2]}"</span>: <span className="text-acc">{m[3]}</span></div> : <div key={i}>{l}</div> })}</pre></div>)
}
export default function About() {
  return (<section id="about" className="py-28"><div className="wrap grid gap-14 lg:grid-cols-2">
    <Reveal><h2 className="text-3xl font-medium tracking-tight">Behind the code.</h2>
      <div className="mt-6 max-w-lg space-y-4 leading-relaxed text-mute">
        <p>I enjoy building applications where the frontend, backend and data layer work together as one system.</p>
        <p>My day-to-day is <span className="text-ink">React</span> on the client and <span className="text-ink">Node.js, Express and MongoDB</span> behind it: REST APIs, authentication, protected routes and reusable components I can drop into the next screen without rewriting.</p>
        <p>I care about performance too. I check Lighthouse, trim what the browser doesn't need, and keep the code easy to come back to.</p></div></Reveal>
    <Reveal><Profile /></Reveal></div></section>)
}
