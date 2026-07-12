"use client";

export default function CurrentProject() {
  return (
    <section id="current" className="section">
      <div className="section-header">
        <span className="section-num">// 02</span>
        <h2 className="section-title">Current Project</h2>
      </div>

      <a href="https://kaseazy.com" target="_blank" rel="noopener noreferrer" className="project-card">
        <div className="preview">
          <div className="browser-bar">
            <div className="dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="url-bar">kaseazy.com</div>
          </div>
          <div className="preview-body">
            <div className="preview-nav">
              <div className="k-logo">K</div>
              <span className="k-name">KASEAZY <span>POS SYSTEM</span></span>
              <div className="nav-actions">
                <span className="nav-masuk">MASUK</span>
                <span className="nav-cta">COBA GRATIS</span>
              </div>
            </div>
            <div className="preview-hero">
              <div className="badge-pill">✦ GRATIS UNTUK 1 OUTLET</div>
              <div className="hero-h1">Kasir digital</div>
              <div className="hero-h1 orange">simpel &amp; murah</div>
              <p className="hero-desc">Kelola pesanan, stok, dan laporan cafe atau resto kamu dalam satu aplikasi.</p>
              <div className="hero-btns">
                <span className="btn-main">Mulai Gratis Sekarang →</span>
                <span className="btn-sec">Sudah punya akun</span>
              </div>
            </div>
            <div className="app-preview">
              <div className="app-window">
                <div className="app-nav">
                  <div className="k-logo small">K</div>
                  <span className="app-name">KASEAZY</span>
                  <div className="app-nav-pills">
                    <span className="pill" /><span className="pill" />
                  </div>
                </div>
                <div className="stats-row">
                  <div className="stat-card">
                    <div className="stat-val orange">Rp 1.2jt</div>
                    <div className="stat-lbl">Pendapatan</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-val">24 order</div>
                    <div className="stat-lbl">Pesanan</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-val orange">18 item</div>
                    <div className="stat-lbl">Stok OK</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-val">4.9 ★</div>
                    <div className="stat-lbl">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-info">
          <div className="live-badge"><span className="live-dot" />live &amp; active</div>
          <div className="card-title">Kaseazy</div>
          <div className="card-desc">Aplikasi kasir digital untuk UMKM — kelola pesanan, stok, dan laporan cafe atau resto dalam satu platform.</div>
          <div className="card-bottom">
            <div className="tags">
              <span className="tag">Next.js</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Vercel</span>
            </div>
            <div className="visit-btn">kaseazy.com ↗</div>
          </div>
        </div>
      </a>

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
        .section-num { font-size: 11px; color: var(--accent); letter-spacing: 0.12em; }
        .section-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.75rem;
          letter-spacing: -0.02em;
        }
        .project-card {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border);
          border-radius: 4px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          transition: border-color 0.2s;
        }
        .project-card:hover { border-color: rgba(255,255,255,0.15); }

        /* BROWSER PREVIEW */
        .preview { background: #f5f0e8; border-bottom: 1px solid var(--border); }
        .browser-bar {
          background: #e8e3db;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .dots { display: flex; gap: 5px; }
        .dot { width: 8px; height: 8px; border-radius: 50%; }
        .dot.red { background: #ff5f57; }
        .dot.yellow { background: #febc2e; }
        .dot.green { background: #28c840; }
        .url-bar {
          background: #fff;
          border-radius: 4px;
          padding: 0.2rem 0.75rem;
          font-size: 11px;
          color: #666;
          font-family: var(--font-mono);
          flex: 1;
          max-width: 200px;
        }
        .preview-body { padding: 2rem 2rem 0; }

        /* NAV */
        .preview-nav {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .k-logo {
          background: #c4622d;
          color: white;
          width: 28px; height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 14px;
          flex-shrink: 0;
        }
        .k-logo.small { width: 20px; height: 20px; font-size: 10px; border-radius: 4px; }
        .k-name { font-weight: 800; font-size: 12px; color: #2d1a0e; letter-spacing: 0.05em; }
        .k-name span { display: block; font-size: 8px; font-weight: 400; color: #888; letter-spacing: 0.1em; }
        .nav-actions { margin-left: auto; display: flex; gap: 0.5rem; align-items: center; flex-shrink: 0; }
        .nav-masuk { font-size: 10px; color: #2d1a0e; letter-spacing: 0.05em; }
        .nav-cta {
          background: #c4622d;
          color: white;
          padding: 0.3rem 0.75rem;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 600;
          white-space: nowrap;
        }

        /* HERO */
        .preview-hero { text-align: center; padding: 1.5rem 1rem 2rem; }
        .badge-pill {
          display: inline-block;
          border: 1px solid #c4622d40;
          color: #c4622d;
          font-size: 10px;
          letter-spacing: 0.1em;
          padding: 0.3rem 0.9rem;
          border-radius: 20px;
          margin-bottom: 1rem;
          background: #c4622d10;
        }
        .hero-h1 { font-family: 'Georgia', serif; font-size: 28px; color: #2d1a0e; line-height: 1.15; font-weight: 700; }
        .hero-h1.orange { color: #c4622d; }
        .hero-desc { font-size: 12px; color: #888; margin: 0.75rem 0 1.25rem; line-height: 1.6; }
        .hero-btns { display: flex; gap: 0.6rem; justify-content: center; flex-wrap: wrap; }
        .btn-main { background: #c4622d; color: white; padding: 0.55rem 1.25rem; border-radius: 6px; font-size: 11px; font-weight: 600; }
        .btn-sec { border: 1px solid #2d1a0e40; color: #2d1a0e; padding: 0.55rem 1.25rem; border-radius: 6px; font-size: 11px; }

        /* APP WINDOW */
        .app-preview { padding: 0 2rem 2rem; overflow: hidden; }
        .app-window { background: #2d2017; border-radius: 8px; overflow: hidden; }
        .app-nav {
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .app-name { font-size: 11px; color: white; font-weight: 700; letter-spacing: 0.08em; }
        .app-nav-pills { margin-left: auto; display: flex; gap: 0.4rem; }
        .pill { width: 28px; height: 14px; background: rgba(255,255,255,0.1); border-radius: 3px; }
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 1.25rem;
          gap: 0.75rem;
        }
        .stat-card { background: white; border-radius: 4px; padding: 0.9rem 0.6rem; text-align: center; min-width: 0; }
        .stat-val { font-size: 11px; font-weight: 700; color: #2d1a0e; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .stat-val.orange { color: #c4622d; }
        .stat-lbl { font-size: 8px; color: #aaa; margin-top: 3px; }

        /* CARD INFO */
        .card-info {
          background: var(--bg2);
          padding: 1.5rem;
        }
        .live-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.25rem 0.75rem;
          border-radius: 2px;
          color: var(--accent2);
          background: rgba(106,187,232,0.08);
          border: 1px solid rgba(106,187,232,0.15);
          margin-bottom: 0.75rem;
          white-space: nowrap;
        }
        .live-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent2);
          animation: pulse 1.5s infinite;
          flex-shrink: 0;
        }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .card-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--text);
          margin-bottom: 0.35rem;
        }
        .card-desc { font-size: 12px; color: var(--muted); line-height: 1.6; margin-bottom: 1rem; }
        .card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .tag {
          font-size: 10px;
          color: var(--muted);
          background: rgba(255,255,255,0.04);
          padding: 0.2rem 0.5rem;
          border-radius: 2px;
          letter-spacing: 0.04em;
        }
        .visit-btn {
          background: var(--accent);
          color: #0a0a0b;
          padding: 0.65rem 1.5rem;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          border-radius: 3px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .project-card:hover .visit-btn { opacity: 0.85; }

        @media (max-width: 480px) {
          .section { padding: 3rem 1.25rem; }
          .preview-body { padding: 0.75rem 1rem 0; }
          .app-preview { padding: 0 1rem; }
          .card-info { padding: 1.25rem; }
          .visit-btn { width: 100%; text-align: center; }
        }
      `}</style>
    </section>
  );
}
