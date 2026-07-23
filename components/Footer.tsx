"use client";
import { siteConfig } from "@/data/projects";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function Footer() {
  const dim = useSectionInView("contact");

  return (
    <footer className={dim ? "footer footer-dim" : "footer"}>
      <span>© 2025 {siteConfig.name} — {siteConfig.location}</span>
      <span className="footer-tag">[ designed with intention ]</span>
      <style jsx>{`
        .footer {
          padding: 1.5rem 2.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--muted);
          font-size: 11px;
          letter-spacing: 0.06em;
          filter: blur(0) brightness(1);
          opacity: 1;
          transition: filter 0.5s ease, opacity 0.5s ease;
        }
        .footer-dim {
          filter: blur(3px) brightness(0.55);
          opacity: 0.85;
        }
        .footer-dim:hover {
          filter: blur(0) brightness(1);
          opacity: 1;
        }
        .footer-tag { color: rgba(255,255,255,0.12); }
      `}</style>
    </footer>
  );
}
