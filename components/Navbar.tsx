"use client";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/projects";

export default function Navbar() {
  const [focusContact, setFocusContact] = useState(false);

  useEffect(() => {
    const target = document.getElementById("contact");
    if (!target) return;

    const io = new IntersectionObserver(
      ([entry]) => setFocusContact(entry.isIntersecting),
      { threshold: 0.35 }
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  return (
    <nav className={focusContact ? "navbar navbar-dim" : "navbar"}>
      <div className="logo">
        {siteConfig.initials.slice(0, -1)}
        <span>{siteConfig.initials.slice(-1)}</span>
      </div>
      <ul className="nav-links">
        <li><a href="#about">skills</a></li>
        <li><a href="#work">work</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
      <a href="mailto:riyadi256789@gmail.com" className="nav-cta">
        hire me ↗
      </a>

      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 2.5rem;
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          background: rgba(10, 10, 11, 0.92);
          backdrop-filter: blur(12px);
          z-index: 100;
          gap: 1rem;
          filter: blur(0) brightness(1);
          opacity: 1;
          transition: filter 0.5s ease, opacity 0.5s ease;
        }
        .navbar-dim {
          filter: blur(3px) brightness(0.55);
          opacity: 0.85;
        }
        .navbar-dim:hover {
          filter: blur(0) brightness(1);
          opacity: 1;
        }
        .logo {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: -0.02em;
          color: var(--text);
          flex-shrink: 0;
        }
        .logo span { color: var(--accent); }
        .nav-links {
          display: flex;
          gap: 1.25rem;
          list-style: none;
          flex-shrink: 0;
        }
        .nav-links a {
          color: var(--muted);
          text-decoration: none;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .nav-links a:hover { color: var(--text); }
        .nav-cta {
          background: var(--accent);
          color: #0a0a0b;
          border: none;
          padding: 0.5rem 1.25rem;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.05em;
          cursor: pointer;
          border-radius: 3px;
          text-decoration: none;
          transition: opacity 0.2s;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .nav-cta:hover { opacity: 0.85; }

        @media (max-width: 480px) {
          .navbar { padding: 1rem 1.25rem; }
          .nav-links { display: none; }
          .nav-cta { padding: 0.4rem 0.75rem; }
        }
      `}</style>
    </nav>
  );
}