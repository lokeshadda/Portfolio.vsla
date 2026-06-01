import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/ui/ScrollProgress";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Education from "../components/sections/Education";
import Contact from "../components/sections/Contact";
import { sectionStack } from "../lib/styles";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <div className={`portfolio-sections ${sectionStack}`}>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
