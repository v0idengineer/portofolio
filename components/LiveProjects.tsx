"use client";
import { liveProjects } from "@/data/projects";

export default function LiveProjects() {
  return (
    <section id="live" className="section">
      <div className="section-header">
        <span className="section-num">// 02</span>
        <h2 className="section-title">Live Projects</h2>
      </div>
      <div className="live-grid">
        {liveProjects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="live-card"
          >
            <div className="live-thumb">
              {p.image ? (
                <img src={p.image} alt={p.name} className="live-thumb-img" />
              ) : (
                <span className="live-thumb-placeholder">no preview</span>
              )}
            </div>
            <div className="live-body">
              <div className="live-top">
                <span className="live-badge">
                  <span className="live-dot" />
                  live
                </span>
                <span className="live-year">{p.year}</span>
              </div>
              <div className="live-title">{p.name}</div>
              <p className="live-desc">{p.description}</p>
              <div className="live-tags">
                {p.tags.map((t) => (
                  <span key={t} className="live-tag">{t}</span>
                ))}
              </div>
              <div className="live-visit">kunjungi ↗</div>
            </div>
          </a>
        ))}
      </div>

      <style jsx>{`
        .section {
          padding: 5rem 2.5rem;
          border-bottom: 1px solid var(--border);
        }
        .section-header {
          display: flex;
          align-items: baseline;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        .section-num {
          font-size: 11px;
          color: var(--accent);
          letter-spacing: 0.12em;
        }
        .section-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.75rem;
          letter-spacing: -0.02em;
        }
        .live-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 4px;
          overflow: hidden;
        }
        .live-card {
          background: var(--bg2);
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          transition: background 0.2s;
        }
        .live-card:hover { background: var(--bg3); }
        .live-thumb {
          aspect-ratio: 16 / 10;
          background: linear-gradient(160deg, var(--bg3), var(--bg2));
          border-bottom: 1px solid var(--border);
          overflow: hidden;
        }
        .live-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s;
        }
        .live-card:hover .live-thumb-img { transform: scale(1.04); }
        .live-thumb-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .live-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .live-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.9rem;
        }
        .live-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.2rem 0.6rem;
          border-radius: 2px;
          color: var(--accent2);
          background: rgba(106,187,232,0.08);
          border: 1px solid rgba(106,187,232,0.15);
        }
        .live-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent2);
          animation: pulse 1.5s infinite;
          flex-shrink: 0;
        }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .live-year {
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.06em;
        }
        .live-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: var(--text);
        }
        .live-desc {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.6;
          flex: 1;
        }
        .live-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin: 0.9rem 0;
        }
        .live-tag {
          font-size: 10px;
          color: var(--muted);
          background: rgba(255,255,255,0.04);
          padding: 0.2rem 0.5rem;
          border-radius: 2px;
          letter-spacing: 0.04em;
        }
        .live-visit {
          font-size: 11px;
          color: var(--accent);
          letter-spacing: 0.06em;
          transition: transform 0.2s;
        }
        .live-card:hover .live-visit { transform: translateX(3px); }

        @media (max-width: 768px) {
          .live-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .section { padding: 3rem 1.25rem; }
          .live-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
