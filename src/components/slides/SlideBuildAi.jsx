import React from 'react';
import { Rocket, Bug, ShieldCheck, Database, Zap, Code2 } from 'lucide-react';

export default function SlideBuildAi() {
  const tools = [
    {
      icon: <Rocket size={24} />,
      bgClass: 'bg-cyan',
      tag: 'PROTOTYPING',
      title: 'Rapid MVPs & Components',
      desc: 'Transform raw ideas, designs, and UI specs into functional MVPs and full-stack modules in hours instead of weeks.'
    },
    {
      icon: <Bug size={24} />,
      bgClass: 'bg-red',
      tag: 'DEBUGGING',
      title: 'Deep Error & Log Analysis',
      desc: 'Paste complex stack traces, memory leak logs, and cryptic errors to isolate root causes and fix bugs instantly.'
    },
    {
      icon: <ShieldCheck size={24} />,
      bgClass: 'bg-green',
      tag: 'REFACTORING',
      title: 'Test Suites & Code Cleanup',
      desc: 'Auto-generate comprehensive unit tests, cover edge cases, and refactor legacy code into clean, scalable functions.'
    },
    {
      icon: <Database size={24} />,
      bgClass: 'bg-purple',
      tag: 'ARCHITECTURE',
      title: 'API & Data Schema Design',
      desc: 'Architect relational database schemas, optimize SQL queries, and build seamless third-party API integrations.'
    }
  ];

  return (
    <div className="slide-content">
      <div className="ai-tools-grid">
        {tools.map((t, idx) => (
          <div key={idx} className="ai-tool-card">
            <div className="ai-tool-header">
              <div className={`icon-badge ${t.bgClass}`}>
                {t.icon}
              </div>
              <span className="ai-tool-tag">{t.tag}</span>
            </div>
            <h3 className="ai-tool-title">{t.title}</h3>
            <p className="ai-tool-desc">{t.desc}</p>
          </div>
        ))}
      </div>

      <div className="ai-bottom-section">
        <div className="ai-comparison-bar">
          <span className="ai-pill ai-pill-ai">⚡ AI handles syntax & boilerplate</span>
          <span className="ai-pill-divider">+</span>
          <span className="ai-pill ai-pill-human">🧠 Humans lead architecture & security</span>
        </div>
        <div className="slide-quote ai-quote">
          “AI gives you a 10x speed boost — but YOU are responsible for understanding every line of code.”
        </div>
      </div>
    </div>
  );
}

