"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import CurrentProject from "@/components/CurrentProject";
import LiveProjects from "@/components/LiveProjects";
import RevealSection from "@/components/RevealSection";
import OverlapPanel from "@/components/OverlapPanel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <OverlapPanel z={1} bg="var(--bg)" first>
          <Hero />
        </OverlapPanel>
        <OverlapPanel z={2} bg="var(--bg2)">
          <RevealSection>
            <Skills />
          </RevealSection>
        </OverlapPanel>
        <OverlapPanel z={3} bg="var(--bg)">
          <RevealSection delay={0.1}>
            <LiveProjects />
          </RevealSection>
        </OverlapPanel>
        <OverlapPanel z={4} bg="var(--bg2)">
          <RevealSection delay={0.1}>
            <CurrentProject />
          </RevealSection>
        </OverlapPanel>
        <OverlapPanel z={5} bg="var(--bg)">
          <RevealSection delay={0.1}>
            <Projects />
          </RevealSection>
        </OverlapPanel>
        <OverlapPanel z={6} bg="var(--bg2)">
          <RevealSection delay={0.1}>
            <Contact />
          </RevealSection>
        </OverlapPanel>
      </main>
      <OverlapPanel z={7} bg="var(--bg)">
        <Footer />
      </OverlapPanel>
    </>
  );
}