import { useState } from 'react'
import { skills } from '../data/skills'
import Reveal from './Reveal'
export default function Skills() {
  const [sel, setSel] = useState(['Frontend', 'React.js'])
  const note = skills.find(([g]) => g === sel[0])[1][sel[1]]
  return (<section id="skills" className="border-t border-line py-28"><div className="wrap">
    <Reveal><h2 className="text-3xl font-medium tracking-tight">Stack</h2><p className="mt-3 text-mute">What I reach for, grouped by layer. Click one for context.</p></Reveal>
    <div className="mt-12 grid gap-x-12 gap-y-9 md:grid-cols-2">
      {skills.map(([g, items], i) => (<div key={g}>
        <p className="tag mb-3">0{i + 1} / {g.toUpperCase()}</p>
        <div className="flex flex-wrap gap-2">{Object.keys(items).map(t => {
          const on = sel[0] === g && sel[1] === t
          return <button key={t} onClick={() => setSel([g, t])} aria-pressed={on}
            className={`rounded border px-2.5 py-1 font-mono text-xs transition-colors ${on ? 'border-acc bg-acc/5 text-acc' : 'border-line text-ink/80 hover:border-mute'}`}>{t}</button> })}</div></div>))}
    </div>
    <div className="mt-12 min-h-[64px] border-l border-acc pl-5" aria-live="polite">
      <p className="font-mono text-sm text-acc">{sel[1]}</p><p className="mt-1 max-w-lg text-sm text-mute">{note}</p></div>
  </div></section>)
}
