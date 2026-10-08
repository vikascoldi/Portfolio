import { motion } from 'framer-motion'
import Reveal from './Reveal'
const items = ['20+ reusable React components', '15+ REST APIs', 'JWT authentication', 'Role-based access', 'CRUD modules', 'Git + GitHub workflow', 'Postman API testing']
export default function Experience() {
  return (<section id="experience" className="border-t border-line py-28"><div className="wrap">
    <Reveal><h2 className="text-3xl font-medium tracking-tight">Experience</h2></Reveal>
    <div className="mt-12 grid gap-6 md:grid-cols-[110px_1fr] md:gap-10">
      <p className="font-mono text-sm text-acc">2026</p>
      <div className="border-l border-line pl-6 md:pl-8"><Reveal>
        <h3 className="text-xl">i-DigiTech Skills &amp; Solution</h3>
        <p className="mt-1 text-mute">Full Stack Developer Intern (MERN)</p><p className="tag mt-1">March 2026 — August 2026</p>
        <ul className="mt-6 grid gap-x-8 gap-y-2 text-sm text-ink/85 sm:grid-cols-2">{items.map(i => <li key={i} className="before:mr-2 before:text-acc before:content-['+']">{i}</li>)}</ul></Reveal>
        <Reveal className="mt-12 max-w-md">
          <div className="flex items-end gap-4 font-mono"><span className="text-5xl text-mute">72</span>
            <div className="relative mb-3 h-px flex-1 bg-line"><motion.i className="absolute inset-y-0 left-0 bg-acc" initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 1, delay: .2 }} /></div>
            <span className="text-5xl text-acc">91</span></div>
          <p className="tag mt-3">Lighthouse Performance</p></Reveal>
      </div></div></div></section>)
}
