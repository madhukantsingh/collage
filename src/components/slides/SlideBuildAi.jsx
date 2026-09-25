import React from 'react';
import { MessageSquare, Cpu, Monitor, ArrowRight } from 'lucide-react';

export default function SlideBuildAi() {
  return (
    <div className="slide-content">
      <div className="demo-flow">
        <div className="demo-step">
          <div className="icon-badge bg-green" style={{ width: '48px', height: '48px', borderRadius: '0.85rem' }}>
            <MessageSquare size={24} />
          </div>
          <h3>Prompt</h3>
        </div>

        <ArrowRight className="demo-arrow" size={28} />

        <div className="demo-step">
          <div className="icon-badge bg-cyan" style={{ width: '48px', height: '48px', borderRadius: '0.85rem' }}>
            <Cpu size={24} />
          </div>
          <h3>AI</h3>
        </div>

        <ArrowRight className="demo-arrow" size={28} />

        <div className="demo-step">
          <div className="icon-badge bg-purple" style={{ width: '48px', height: '48px', borderRadius: '0.85rem' }}>
            <Monitor size={24} />
          </div>
          <h3>Working Prototype</h3>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
          Example: “Student Event Management Dashboard”
        </p>
        <div className="slide-quote" style={{ display: 'inline-block', maxWidth: '550px', borderLeftColor: 'var(--accent-secondary)' }}>
          “If this is possible today, I need to learn how to work WITH AI.”
        </div>
      </div>
    </div>
  );
}
