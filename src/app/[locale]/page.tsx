import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <TechStack />
      <About />
      <Contact />
    </main>
  );
}
