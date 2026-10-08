import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
function Detail({ p, onClose }) {
  useEffect(() => { const k = e => e.key === 'Escape' && onClose(); addEventListener('keydown', k); document.body.style.overflow = 'hidden'; return () => { removeEventListener('keydown', k); document.body.style.overflow = '' } }, [])
  const S = ({ t, children }) => <div className="mt-8"><p className="tag mb-2">{t}</p>{children}</div>
  return (<motion.div className="fixed inset-0 z-[60] overflow-y-auto bg-bg/90 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
    <motion.div role="dialog" aria-label={p.name} onClick={e => e.stopPropagation()} initial={{ y: 20 }} animate={{ y: 0 }} className="mx-auto my-10 max-w-2xl rounded-lg border border-line bg-surf p-6 sm:p-9">
      <div className="flex items-start justify-between"><div><p className="tag">{p.kind}</p><h3 className="mt-1 text-2xl">{p.name}</h3></div><button onClick={onClose} aria-label="Close"><X size={18} /></button></div>
      <S t="overview"><p className="text-mute">{p.desc}</p></S>
      <S t="problem"><p className="text-mute">{p.problem}</p></S>
      <S t="solution"><p className="text-mute">{p.solution}</p></S>
      <S t="architecture"><div className="flex flex-col items-center font-mono text-xs">{p.architecture.map((n, i) => <div key={n} className="flex flex-col items-center">
        {i > 0 && <span className="h-5 w-px bg-line" />}<span className={`rounded border px-4 py-1.5 ${i === 0 ? 'border-acc text-acc' : 'border-line text-ink/85'}`}>{n}</span></div>)}</div></S>
      <S t="features"><div className="flex flex-wrap gap-2">{p.features.map(f => <span key={f} className="rounded border border-line px-2 py-1 text-xs text-ink/85">{f}</span>)}</div></S>
      <S t="tech stack"><p className="font-mono text-sm text-ink/85">{p.tech.join(' / ')}</p></S>
      <S t="challenges"><p className="text-mute">{p.challenges}</p></S>
      <S t="learning"><p className="text-mute">{p.learning}</p></S>
      <div className="mt-9 flex gap-5 text-sm"><a className="text-acc" href={p.demo}>Live Demo →</a><a className="text-ink hover:text-acc" href={p.github}>GitHub →</a></div>
    </motion.div></motion.div>)
}
export default function Projects() {
  const [open, setOpen] = useState(null)
  return (<section id="projects" className="border-t border-line py-28"><div className="wrap">
    <Reveal><h2 className="text-3xl font-medium tracking-tight">Projects</h2><p className="mt-3 text-mute">Two full-stack builds, both on the MERN stack.</p></Reveal>
    <div className="mt-14 space-y-8">{projects.map(p => <ProjectCard key={p.id} p={p} onOpen={() => setOpen(p)} />)}</div>
    <AnimatePresence>{open && <Detail p={open} onClose={() => setOpen(null)} />}</AnimatePresence></div></section>)
}
