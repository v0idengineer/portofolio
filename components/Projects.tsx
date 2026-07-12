"use client";

import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
}

const GITHUB_USERNAME = "v0idengineer";

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data: Repo[]) => {
        const filtered = data.filter((r) => !r.name.includes("v0idengineer"));
        setRepos(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const langColor: Record<string, string> = {
    TypeScript: "#6abbe8",
    JavaScript: "#e8c96a",
    Python: "#6abbe8",
    CSS: "#c4a8e8",
    HTML: "#e8a06a",
  };

  return (
    <section id="work" className="section">
      <div className="section-header">
        <span className="section-num">// 03</span>
        <h2 className="section-title">Another Projects</h2>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="gh-link"
        >
          github ↗
        </a>
      </div>

      {loading ? (
        <div className="loading">
          <span>fetching repos</span>
          <span className="dots">...</span>
        </div>
      ) : (
        <div className="projects-list">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-item"
            >
              <div className="project-main">
                <div className="project-meta">
                  {repo.language && (
                    <span
                      className="project-lang"
                      style={{
                        color: langColor[repo.language] ?? "var(--muted)",
                        borderColor: `${langColor[repo.language] ?? "var(--muted)"}30`,
                        background: `${langColor[repo.language] ?? "var(--muted)"}10`,
                      }}
                    >
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="project-stars">
                      ★ {repo.stargazers_count}
                    </span>
                  )}
                  <span className="project-year">
                    {new Date(repo.updated_at).getFullYear()}
                  </span>
                </div>
                <div className="project-title">{repo.name}</div>
                <div className="project-desc">
                  {repo.description ?? "No description provided."}
                </div>
                {repo.topics.length > 0 && (
                  <div className="project-topics">
                    {repo.topics.slice(0, 4).map((t) => (
                      <span key={t} className="topic-tag">{t}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="project-arrow">→</div>
            </a>
          ))}
        </div>
      )}

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
          flex: 1;
        }
        .gh-link {
          font-size: 11px;
          color: var(--muted);
          text-decoration: none;
          letter-spacing: 0.08em;
          transition: color 0.2s;
        }
        .gh-link:hover { color: var(--text); }
        .loading {
          color: var(--muted);
          font-size: 13px;
          padding: 2rem 0;
          display: flex;
          gap: 0.25rem;
        }
        .dots {
          animation: blink 1.2s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 4px;
          overflow: hidden;
        }
        .project-item {
          background: var(--bg2);
          padding: 1.75rem;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 1rem;
          transition: background 0.2s;
          text-decoration: none;
          color: inherit;
        }
        .project-item:hover { background: var(--bg3); }
        .project-meta {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }
        .project-lang {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.2rem 0.6rem;
          border-radius: 2px;
          border: 1px solid;
        }
        .project-stars {
          font-size: 11px;
          color: var(--accent);
          letter-spacing: 0.04em;
        }
        .project-year {
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.06em;
        }
        .project-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 0.35rem;
          color: var(--text);
        }
        .project-desc {
          color: var(--muted);
          font-size: 12px;
          line-height: 1.5;
        }
        .project-topics {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.75rem;
        }
        .topic-tag {
          font-size: 10px;
          color: var(--muted);
          background: rgba(255,255,255,0.04);
          padding: 0.2rem 0.5rem;
          border-radius: 2px;
          letter-spacing: 0.04em;
        }
        .project-arrow {
          color: var(--muted);
          font-size: 1.25rem;
          transition: transform 0.2s, color 0.2s;
        }
        .project-item:hover .project-arrow {
          transform: translateX(4px);
          color: var(--text);
        }
      `}</style>
    </section>
  );
}
