import { useRef } from 'react'
const Bar = ({ w, c = 'bg-line' }) => <i className={`block h-1.5 rounded ${c}`} style={{ width: w }} />
function Browser({ children, url }) {
  return <div className="overflow-hidden rounded-md border border-line bg-bg"><div className="flex items-center gap-1.5 border-b border-line px-3 py-2">{[0, 1, 2].map(i => <i key={i} className="h-2 w-2 rounded-full bg-line" />)}<span className="tag ml-3 truncate">{url}</span></div>{children}</div>
}
function JobMock() {
  return <Browser url="localhost:5173/jobs"><div className="grid gap-2 p-4">
    <div className="mb-1 flex justify-between"><Bar w="30%" c="bg-ink/40" /><Bar w="18%" c="bg-acc" /></div>
    {[['55%', 'Applied'], ['42%', 'Reviewing'], ['62%', 'Open']].map(([w, s]) => <div key={w} className="flex items-center justify-between rounded border border-line p-3">
      <div className="space-y-2" style={{ width: '60%' }}><Bar w={w} c="bg-ink/30" /><Bar w="35%" /></div><span className="font-mono text-[10px] text-acc">{s}</span></div>)}</div></Browser>
}
function EbookMock() {
  return <Browser url="localhost:5173/editor"><div className="grid grid-cols-[28%_1fr]">
    <div className="space-y-2 border-r border-line p-3">{['80%', '60%', '70%', '50%'].map((w, i) => <Bar key={i} w={w} c={i === 1 ? 'bg-acc' : 'bg-line'} />)}</div>
    <div className="space-y-2 p-4"><Bar w="45%" c="bg-ink/40" />{['100%', '92%', '97%', '60%'].map((w, i) => <Bar key={i} w={w} />)}
      <span className="mt-2 inline-block rounded border border-acc/50 px-2 py-0.5 font-mono text-[10px] text-acc">Generate with AI</span></div></div></Browser>
}
export default function ProjectCard({ p, onOpen }) {
  const el = useRef(), pv = useRef()
  const move = e => { const r = el.current.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5
    el.current.style.transform = `perspective(1100px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`; pv.current.style.transform = 'perspective(900px) rotateY(-8deg) rotateX(3deg) translateZ(30px)' }
  const leave = () => { el.current.style.transform = ''; pv.current.style.transform = 'perspective(900px) rotateY(-8deg) rotateX(3deg)' }
  return (<article ref={el} onMouseMove={move} onMouseLeave={leave} onClick={onOpen} onKeyDown={e => e.key === 'Enter' && onOpen()} tabIndex={0}
    className="group grid cursor-pointer gap-8 rounded-lg border border-line bg-surf p-6 transition-[transform,border-color] duration-300 hover:border-mute/60 md:grid-cols-[1fr_1.1fr] md:p-9">
    <div className="flex flex-col">
      <p className="tag">{p.kind}</p><h3 className="mt-2 text-3xl tracking-tight">{p.name}</h3>
      <p className="mt-4 text-sm leading-relaxed text-mute">{p.desc}</p>
      <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink/80">{p.features.slice(0, 5).map(f => <li key={f}>{f}</li>)}</ul>
      <div className="mt-6 flex flex-wrap gap-2">{p.tech.map(t => <span key={t} className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-mute">{t}</span>)}</div>
      <div className="mt-auto flex items-center gap-5 pt-8 text-sm">
        <a href={p.demo} onClick={e => e.stopPropagation()} className="text-acc">Live Demo →</a>
        <a href={p.github} onClick={e => e.stopPropagation()} className="text-ink hover:text-acc">GitHub →</a>
        <span className="ml-auto text-mute opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">View project →</span></div></div>
    <div ref={pv} className="self-center transition-transform duration-300" style={{ transform: 'perspective(900px) rotateY(-8deg) rotateX(3deg)' }}>{p.mock === 'job' ? <JobMock /> : <EbookMock />}</div>
  </article>)
}
