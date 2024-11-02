import About from "../components/ui/About";
import Contact from "../components/ui/Contact/Contact";
import Experience from "../components/ui/Experience/Experience";
import Hero from "../components/ui/Hero";
import Projects from "../components/ui/Projects/Projects";
import Skills from "../components/ui/Skills/Skills";

export default function Profile() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full p-0">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      {/* <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact /> */}
    </main>
  )
}