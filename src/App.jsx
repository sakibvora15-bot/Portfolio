import { useActiveSection } from "./hooks/useAnimations";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [active, setActive] = useActiveSection();

  return (
    <div style={{ background: "#0a0a12", minHeight: "100vh" }}>
      <Nav active={active} setActive={setActive} />
      <Hero setActive={setActive} />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
