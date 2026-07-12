"use client";
import { siteConfig, stats } from "@/data/projects";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-deco" />
      <div className="hero-deco2" />
      <p className="hero-eyebrow">
        {siteConfig.available ? "open to work /available for freelance" : "currently unavailable"}
      </p>
      <h1 className="hero-name">
        {siteConfig.name.split(" ")[0]}<br />
        <span className="outline">{siteConfig.name.split(" ").slice(1).join(" ")}</span>
      </h1>
      <div className="hero-roles">
        <span className="role-tag active">Fullstack Dev</span>
        <span className="role-tag active">Creative</span>
        <span className="role-tag active">Data Science</span>
        <span className="role-tag">UI/UX</span>
      </div>
      <p className="hero-desc">
        Merancang dan membangun pengalaman digital — dari baris kode pertama sampai frame terakhir.
        Based di {siteConfig.location}, open untuk kolaborasi global.
      </p>
      <div className="hero-actions">
        <a href="#work" className="btn-primary">Lihat karya →</a>
        <a href="#contact" className="btn-ghost">Hubungi saya</a>
      </div>

      <div className="stats-bar">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .hero {
          min-height: auto;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 5rem 2.5rem 0;
          position: relative;
          overflow: hidden;
        }
        .hero-deco {
          position: absolute;
          top: 10%; right: -5%;
          width: 420px; height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232,201,106,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-deco2 {
          position: absolute;
          bottom: 5%; right: 15%;
          width: 240px; height: 240px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(106,187,232,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-eyebrow {
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .hero-eyebrow::before {
          content: '';
          display: inline-block;
          width: 24px; height: 1px;
          background: var(--accent);
          flex-shrink: 0;
        }
        .hero-name {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(2.25rem, 8vw, 5rem);
          line-height: 0.95;
          letter-spacing: -0.03em;
          margin-bottom: 1.25rem;
        }
        .outline {
          -webkit-text-stroke: 1px var(--text);
          color: transparent;
        }
        .hero-roles {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .role-tag {
          background: var(--bg3);
          border: 1px solid var(--border);
          padding: 0.35rem 0.85rem;
          border-radius: 2px;
          font-size: 11px;
          letter-spacing: 0.06em;
          color: var(--muted);
        }
        .role-tag.active {
          border-color: var(--accent2);
          color: var(--accent2);
          background: rgba(106,187,232,0.06);
        }
        .hero-desc {
          max-width: 480px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        .hero-actions {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
        }
        .btn-primary {
          background: var(--accent);
          color: #0a0a0b;
          padding: 0.75rem 1.5rem;
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.08em;
          border-radius: 3px;
          text-decoration: none;
          transition: opacity 0.2s;
          white-space: nowrap;
        }
        .btn-primary:hover { opacity: 0.85; }
        .btn-ghost {
          background: transparent;
          color: var(--muted);
          border: 1px solid var(--border);
          padding: 0.75rem 1.5rem;
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.08em;
          border-radius: 3px;
          text-decoration: none;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .btn-ghost:hover { color: var(--text); border-color: rgba(255,255,255,0.2); }

        /* Stats */
        .stats-bar {
          border-top: 1px solid var(--border);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 1.75rem 0;
          margin-top: 2.5rem;
        }
        .stat {
          padding: 0 1rem;
          border-right: 1px solid var(--border);
        }
        .stat:first-child { padding-left: 0; }
        .stat:last-child { border-right: none; }
        .stat-num {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(1.25rem, 4vw, 2rem);
          color: var(--text);
          line-height: 1;
          margin-bottom: 0.25rem;
        }
        .stat-label {
          font-size: 10px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--muted);
        }

        @media (max-width: 480px) {
          .hero { padding: 2.5rem 1.5rem 0; }
          .stats-bar { grid-template-columns: repeat(2, 1fr); padding: 0; margin-top: 1.5rem; }
          .stat { padding: 1rem; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); }
          .stat:nth-child(2) { border-right: none; }
          .stat:nth-child(3) { border-bottom: none; }
          .stat:nth-child(4) { border-right: none; border-bottom: none; }
        }
      `}</style>
    </section>
  );
}
