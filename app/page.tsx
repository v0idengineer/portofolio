"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { siteConfig } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
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
