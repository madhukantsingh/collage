import React from 'react';
import { Cpu, Zap } from 'lucide-react';

export default function SlideAiReplace() {
  return (
    <div className="slide-content">
      <div className="ai-content">
        <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--accent-primary)', textAlign: 'center' }}>
          Developers Using AI Will Move Faster.
        </h2>
        <div className="ai-icon-row">
          <div className="icon-badge bg-cyan" style={{ width: '56px', height: '56px', borderRadius: '1rem' }}>
            <Cpu size={28} />
          </div>
          <span style={{ fontSize: '2.2rem', color: 'var(--text-muted)', fontWeight: 800 }}>+</span>
          <div className="icon-badge bg-yellow" style={{ width: '56px', height: '56px', borderRadius: '1rem' }}>
            <Zap size={28} />
          </div>
        </div>
        <p className="ai-subtitle">
          Treat AI as a developer tool — an accelerator for understanding — not a replacement for it.
        </p>
      </div>
    </div>
  );
}
