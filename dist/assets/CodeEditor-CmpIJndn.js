import{r as a,j as t}from"./motion-2MP4wByn.js";const n={"App.jsx":`import { Routes, Route } from "react-router-dom";
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
}`,"server.js":`const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

// start only after the database is ready
connectDB().then(() => {
  app.listen(process.env.PORT);
});`,"db.js":`import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected");
};`},c=/(\/\/.*|"[^"]*"|\b(?:const|import|from|export|default|function|return|async|await|new)\b|<\/?[A-Z]\w*)/,l=o=>o.split(c).map((s,e)=>s.startsWith("//")?t.jsx("span",{className:"text-mute/70",children:s},e):s.startsWith('"')?t.jsx("span",{className:"text-acc",children:s},e):/^(const|import|from|export|default|function|return|async|await|new)$/.test(s)?t.jsx("span",{className:"text-[#9aa6b2]",children:s},e):s.startsWith("<")?t.jsx("span",{className:"text-ink",children:s},e):s);function i(){const[o,s]=a.useState("server.js");return t.jsx("section",{className:"wrap pb-28",children:t.jsxs("div",{className:"mx-auto max-w-3xl overflow-hidden rounded-lg border border-line bg-surf",children:[t.jsx("div",{role:"tablist",className:"flex border-b border-line",children:Object.keys(n).map(e=>t.jsx("button",{role:"tab","aria-selected":o===e,onClick:()=>s(e),className:`border-r border-line px-4 py-2.5 font-mono text-xs transition-colors ${o===e?"bg-bg text-ink":"text-mute hover:text-ink"}`,children:e},e))}),t.jsx("pre",{className:"overflow-x-auto bg-bg p-5 font-mono text-[13px] leading-6 text-ink/80",children:n[o].split(`
`).map((e,r)=>t.jsxs("div",{className:"flex",children:[t.jsx("span",{className:"mr-5 w-5 select-none text-right text-line",children:r+1}),t.jsx("span",{children:l(e)})]},o+r))})]})})}export{i as default};
