"use client";
import { siteConfig } from "@/data/projects";

export default function Contact() {
  const links = [
    {
      icon: "✉",
      label: "Email",
      sub: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: "in",
      label: "LinkedIn",
      sub: `linkedin.com/in/${siteConfig.linkedin}`,
      href: `https://linkedin.com/in/${siteConfig.linkedin}`,
    },
    {
      icon: "◎",
      label: "Instagram",
      sub: siteConfig.instagram,
      href: `https://instagram.com/${siteConfig.instagram.replace("@", "")}`,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="contact-grid">
        <div className="contact-text">
          <h3>
            Mari <span className="accent">berkolaborasi</span> — ada proyek?
          </h3>
          <p>
            Terbuka untuk freelance, kolaborasi kreatif, maupun proyek jangka panjang.
            Hubungi lewat media sosial manapun.
          </p>
        </div>
        <div className="contact-links">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="contact-link" target="_blank" rel="noopener noreferrer">
              <div className="contact-link-left">
                <span className="contact-link-icon">{link.icon}</span>
                <div>
                  <div className="contact-link-label">{link.label}</div>
                  <div className="contact-link-sub">{link.sub}</div>
                </div>
              </div>
              <span className="contact-link-arrow">→</span>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: 5rem 2.5rem;
          border-bottom: 1px solid var(--border);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
        }
        .contact-text h3 {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 2rem;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }
        .accent { color: var(--accent); }
        .contact-text p { color: var(--muted); font-size: 13px; line-height: 1.7; }
        .contact-links { display: flex; flex-direction: column; gap: 1rem; }
        .contact-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          background: var(--bg3);
          border: 1px solid var(--border);
          border-radius: 4px;
          text-decoration: none;
          color: var(--text);
          transition: all 0.2s;
        }
        .contact-link:hover {
          border-color: rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.04);
        }
        .contact-link-left { display: flex; align-items: center; gap: 0.75rem; }
        .contact-link-icon { font-size: 1rem; color: var(--muted); }
        .contact-link-label { font-size: 12px; letter-spacing: 0.04em; }
        .contact-link-sub { font-size: 11px; color: var(--muted); }
        .contact-link-arrow { font-size: 1rem; color: var(--muted); }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
