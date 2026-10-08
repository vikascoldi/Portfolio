import { profile as p } from '../data/profile'
export default function Footer() {
  return (<footer className="border-t border-line py-10"><div className="wrap flex flex-col justify-between gap-6 text-sm text-mute md:flex-row">
    <div><p className="text-ink">Vikas Yadav</p><p>Full Stack Developer</p><p className="tag mt-2">React • Node • Express • MongoDB</p><p className="tag">Mumbai, Maharashtra</p></div>
    <div className="flex gap-5 md:items-end"><a className="hover:text-acc" href={p.github}>GitHub</a><a className="hover:text-acc" href={p.linkedin}>LinkedIn</a><a className="hover:text-acc" href={`mailto:${p.email}`}>Email</a></div>
    <p className="tag md:self-end">© 2026 Vikas Yadav</p></div></footer>)
}
