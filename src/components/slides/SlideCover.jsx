import React from 'react';
import { Terminal, Code2 } from 'lucide-react';

export default function SlideCover() {
  return (
    <div className="cover-content">
      <div className="cover-left">
        <div className="cover-tag">&lt;/&gt; INDUSTRIAL VISIT</div>
        <h1 className="cover-title">FROM COLLEGE</h1>
        <h1 className="cover-title">TO CODE</h1>
        <div className="cover-accent">How Software Actually Gets Built</div>
        <div className="cover-line"></div>
        <div className="cover-sub">AN INSIDE LOOK AT THE IT INDUSTRY</div>
        <div className="cover-badges">
          <span className="cover-badge cover-badge-dark">Tekki Web Solutions</span>
          <span className="cover-badge cover-badge-accent">INDUSTRIAL VISIT PROGRAM</span>
        </div>
      </div>

      <div className="cover-right">
        <div className="terminal-box">
          <div className="terminal-dots">
            <span className="terminal-dot"></span>
            <span className="terminal-dot"></span>
            <span className="terminal-dot"></span>
          </div>
          <div className="term-line"><span className="term-cmd">&gt; whoami</span></div>
          <div className="term-line"><span className="term-out">future_developer</span></div>
          <div className="term-line" style={{ marginTop: '0.6rem' }}><span className="term-cmd">&gt; status</span></div>
          <div className="term-line"><span className="term-out">college == 100%</span></div>
          <div className="term-line"><span className="term-out">industry == 0%</span></div>
          <div className="term-line" style={{ marginTop: '0.6rem' }}><span className="term-cmd">&gt; loading</span></div>
          <div className="term-line"><span className="term-warn">reality_check.exe</span></div>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Code2 size={40} style={{ color: 'var(--accent-primary)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
