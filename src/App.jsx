import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
const Terminal = lazy(() => import("./components/Terminal"));
const CodeEditor = lazy(() => import("./components/CodeEditor"));
const Contact = lazy(() => import("./components/Contact"));
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Suspense fallback={null}>
          <Terminal />
          <CodeEditor />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
