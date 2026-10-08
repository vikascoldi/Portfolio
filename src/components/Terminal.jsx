import { useEffect, useRef, useState } from 'react'
import { profile as p } from '../data/profile'
const cmds = {
  help: 'commands: help about skills projects experience contact whoami role stack status clear',
  whoami: p.name, role: p.role, stack: 'React | Node | Express | MongoDB', status: 'Available for opportunities',
  about: 'Full Stack Developer building MERN apps: React UIs, Express APIs, MongoDB data.',
  skills: 'React, Next.js, Tailwind, Node, Express, JWT, MongoDB, Mongoose, PostgreSQL, Git, Postman',
  projects: '1. Job Portal (MERN)\n2. AI eBook Creator (MERN + AI)',
  experience: 'Full Stack Developer Intern (MERN), i-DigiTech Skills & Solution, Mar–Aug 2026',
  contact: `email: ${p.email}\ngithub: ${p.github}\nlinkedin: ${p.linkedin}`,
}
export default function Terminal() {
  const [log, setLog] = useState([['', 'type "help" to list commands']]), [v, setV] = useState(''), end = useRef()
  useEffect(() => { end.current.scrollTop = end.current.scrollHeight }, [log])
  const run = e => { e.preventDefault(); const c = v.trim().toLowerCase(); setV(''); if (!c) return
    if (c === 'clear') return setLog([]); setLog(l => [...l, [c, cmds[c] ?? `command not found: ${c}. try "help"`]]) }
  return (<section className="wrap py-24"><div className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-line bg-surf">
    <div className="border-b border-line px-4 py-2.5"><span className="tag text-ink/80">vikas@portfolio:~$</span></div>
    <div ref={end} className="h-60 overflow-y-auto p-4 font-mono text-[13px] leading-6" onClick={e => e.currentTarget.querySelector('input').focus()}>
      {log.map(([c, o], i) => <div key={i}>{c && <div><span className="text-acc">$</span> {c}</div>}<div className="whitespace-pre-wrap text-mute">{o}</div></div>)}
      <form onSubmit={run} className="flex gap-2"><span className="text-acc">$</span><input value={v} onChange={e => setV(e.target.value)} aria-label="terminal input" autoComplete="off" spellCheck="false" className="flex-1 bg-transparent text-ink outline-none" /></form></div>
  </div></section>)
}
