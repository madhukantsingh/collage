import React from 'react';
import { BookOpen, Target, Code2, Cpu, Zap } from 'lucide-react';

export default function SlideFiveThings() {
  const items = [
    { num: 1, icon: <BookOpen />, bgClass: "bg-purple", text: "Learn fundamentals" },
    { num: 2, icon: <Target />, bgClass: "bg-blue", text: "Pick one direction" },
    { num: 3, icon: <Code2 />, bgClass: "bg-cyan", text: "Build real projects" },
    { num: 4, icon: <Cpu />, bgClass: "bg-green", text: "Learn to use AI effectively" },
    { num: 5, icon: <Zap />, bgClass: "bg-orange", text: "Start before you feel ready" }
  ];

  return (
    <div className="slide-content">
      <div className="five-grid">
        {items.map((item) => (
          <div key={item.num} className="five-card">
            <span className="five-num">{item.num}</span>
            <div className={`icon-badge ${item.bgClass}`} style={{ width: '48px', height: '48px', borderRadius: '0.85rem' }}>
              {item.icon}
            </div>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
        Don’t wait for the industry to teach you.<br />Start preparing for it now.
      </div>
    </div>
  );
}
