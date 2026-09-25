import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function SlideQA() {
  const tags = ["Career", "Development", "AI", "Projects", "IT Industry"];

  return (
    <div className="slide-content">
      <div className="qa-content">
        <div className="icon-badge bg-cyan" style={{ width: '64px', height: '64px', borderRadius: '1rem' }}>
          <MessageSquare size={32} />
        </div>
        <div className="qa-title">Your Turn.</div>
        <div className="qa-subtitle">Ask Anything.</div>
        <div className="qa-tags">
          {tags.map((t, idx) => (
            <span key={idx} className="qa-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
