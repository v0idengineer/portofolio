"use client";
import { skills } from "@/data/projects";

export default function Skills() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <span className="section-num">// 01</span>
        <h2 className="section-title">Skills</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <div className="skill-category">{skill.category}</div>
            <div className="skill-name">{skill.name}</div>
            <p className="skill-desc">{skill.desc}</p>
            <div className="skill-tags">
              {skill.tags.map((tag) => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>
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
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 4px;
          overflow: hidden;
        }
        .skill-card {
          background: var(--bg2);
          padding: 1.5rem;
          transition: background 0.2s;
        }
        .skill-card:hover { background: var(--bg3); }
        .skill-icon {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          display: block;
        }
        .skill-category {
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }
        .skill-name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
        .skill-desc {
          font-size: 12px;
          color: var(--muted);
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.75rem;
        }
        .skill-tag {
          font-size: 10px;
          color: var(--muted);
          background: rgba(255,255,255,0.04);
          padding: 0.2rem 0.5rem;
          border-radius: 2px;
          letter-spacing: 0.04em;
        }
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
