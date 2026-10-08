import { useState } from 'react'
import { profile as p } from '../data/profile'
export default function Contact() {
  const [d, setD] = useState({ name: '', email: '', message: '' }), [err, setErr] = useState({}), [sent, setSent] = useState(false)
  const submit = e => { e.preventDefault(); const x = {}
    if (d.name.trim().length < 2) x.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(d.email)) x.email = 'Enter a valid email address.'
    if (d.message.trim().length < 10) x.message = 'Write at least 10 characters.'
    setErr(x); if (Object.keys(x).length) return
    location.href = `mailto:${p.email}?subject=${encodeURIComponent('Portfolio message from ' + d.name)}&body=${encodeURIComponent(d.message + '\n\n' + d.email)}`; setSent(true) }
  const f = (k, label, area) => { const C = area ? 'textarea' : 'input'; return <label className="block"><span className="tag">{label}</span>
    <C value={d[k]} rows={area ? 4 : undefined} onChange={e => setD({ ...d, [k]: e.target.value })} aria-invalid={!!err[k]}
      className="mt-1.5 w-full rounded border border-line bg-surf px-3 py-2.5 text-sm outline-none transition-colors focus:border-acc" />
    {err[k] && <span className="mt-1 block text-xs text-red-400">{err[k]}</span>}</label> }
  return (<section id="contact" className="border-t border-line py-28"><div className="wrap grid gap-14 lg:grid-cols-2">
    <div><h2 className="text-3xl font-medium tracking-tight">Have something worth building?</h2><p className="mt-3 text-xl text-acc">Let's build it.</p>
      <div className="mt-8 space-y-2 font-mono text-sm">{[['Email', `mailto:${p.email}`, p.email], ['GitHub', p.github, 'github'], ['LinkedIn', p.linkedin, 'linkedin']].map(([k, h, t]) =>
        <a key={k} href={h} className="flex gap-4 text-ink/85 transition-colors hover:text-acc"><span className="w-16 text-mute">{k}</span>{t}</a>)}</div></div>
    <form onSubmit={submit} noValidate className="space-y-5">{f('name', 'name')}{f('email', 'email')}{f('message', 'message', true)}
      <button className="rounded bg-acc px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-px">Send Message →</button>
      {sent && <p className="text-xs text-mute">Opening your email app to send this.</p>}</form>
  </div></section>)
}
