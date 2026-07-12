"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { siteConfig } from "@/data/projects";
import CurrentProject from "@/components/CurrentProject";
import RevealSection from "@/components/RevealSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RevealSection>
          <Skills />
        </RevealSection>
        <RevealSection delay={0.1}>
          <CurrentProject />
        </RevealSection>
        <RevealSection delay={0.1}>
          <Projects />
        </RevealSection>
        <RevealSection delay={0.1}>
          <Contact />
        </RevealSection>
      </main>
      <footer>
        <span>© 2025 {siteConfig.name} — {siteConfig.location}</span>
        <span className="footer-tag">[ designed with intention ]</span>
        <style jsx>{`
          footer {
            padding: 1.5rem 2.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--muted);
            font-size: 11px;
            letter-spacing: 0.06em;
          }
          .footer-tag { color: rgba(255,255,255,0.12); }
        `}</style>
      </footer>
    </>
  );
}