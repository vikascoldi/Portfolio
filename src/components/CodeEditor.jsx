import { useState } from 'react'
const files = {
  'App.jsx': `import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Jobs />} />
      <Route element={<ProtectedRoute role="recruiter" />}>
        <Route path="/post-job" element={<PostJob />} />
      </Route>
    </Routes>
  );
}`,
  'server.js': `const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

// start only after the database is ready
connectDB().then(() => {
  app.listen(process.env.PORT);
});`,
  'db.js': `import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected");
};`,
}
const re = /(\/\/.*|"[^"]*"|\b(?:const|import|from|export|default|function|return|async|await|new)\b|<\/?[A-Z]\w*)/
const hl = s => s.split(re).map((t, i) => t.startsWith('//') ? <span key={i} className="text-mute/70">{t}</span>
  : t.startsWith('"') ? <span key={i} className="text-acc">{t}</span>
  : /^(const|import|from|export|default|function|return|async|await|new)$/.test(t) ? <span key={i} className="text-[#9aa6b2]">{t}</span>
  : t.startsWith('<') ? <span key={i} className="text-ink">{t}</span> : t)
export default function CodeEditor() {
  const [f, setF] = useState('server.js')
  return (<section className="wrap pb-28"><div className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-line bg-surf">
    <div role="tablist" className="flex border-b border-line">{Object.keys(files).map(n => <button key={n} role="tab" aria-selected={f === n} onClick={() => setF(n)}
      className={`border-r border-line px-4 py-2.5 font-mono text-xs transition-colors ${f === n ? 'bg-bg text-ink' : 'text-mute hover:text-ink'}`}>{n}</button>)}</div>
    <pre className="overflow-x-auto bg-bg p-5 font-mono text-[13px] leading-6 text-ink/80">{files[f].split('\n').map((l, i) =>
      <div key={f + i} className="flex"><span className="mr-5 w-5 select-none text-right text-line">{i + 1}</span><span>{hl(l)}</span></div>)}</pre>
  </div></section>)
}
