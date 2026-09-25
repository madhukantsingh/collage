import React from 'react';
import { Linkedin, Github, FileText } from 'lucide-react';

export default function SlideIdentity() {
  const cards = [
    {
      title: "LinkedIn",
      icon: <Linkedin size={28} />,
      bgClass: "bg-blue",
      desc: "Build your professional network and showcase your achievements."
    },
    {
      title: "GitHub",
      icon: <Github size={28} />,
      bgClass: "bg-purple",
      desc: "Show your actual code, open source commits, and real projects."
    },
    {
      title: "Resume",
      icon: <FileText size={28} />,
      bgClass: "bg-green",
      desc: "Show measurable impact, problem solving, not just list of technologies."
    }
  ];

  return (
    <div className="slide-content">
      <div className="identity-cards">
        {cards.map((c, idx) => (
          <div key={idx} className="identity-card">
            <div className={`icon-badge ${c.bgClass}`} style={{ width: '56px', height: '56px', borderRadius: '1rem' }}>
              {c.icon}
            </div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
