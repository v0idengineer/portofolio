"use client";
import { siteConfig } from "@/data/projects";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        {siteConfig.initials.slice(0, -1)}
        <span>{siteConfig.initials.slice(-1)}</span>
      </div>
      <ul className="nav-links">
        <li><a href="#work">work</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
      <a href={`mailto:${siteConfig.email}`} className="nav-cta">
        hire me ↗
      </a>

      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2.5rem;
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          background: rgba(10, 10, 11, 0.92);
          backdrop-filter: blur(12px);
          z-index: 100;
        }
        .logo {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: -0.02em;
          color: var(--text);
        }
        .logo span { color: var(--accent); }
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        .nav-links a {
          color: var(--muted);
          text-decoration: none;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.2s;
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
        }
        .nav-cta:hover { opacity: 0.85; }
      `}</style>
    </nav>
  );
}
