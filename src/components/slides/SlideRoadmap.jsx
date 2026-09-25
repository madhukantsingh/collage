import React from 'react';
import {
  Target,
  BookOpen,
  Code2,
  Cpu,
  Github,
  Linkedin,
  FileText,
  MessageSquare,
  RefreshCw
} from 'lucide-react';

export default function SlideRoadmap() {
  const steps = [
    { num: 1, icon: <Target />, bgClass: "bg-blue", text: "Choose ONE career direction" },
    { num: 2, icon: <BookOpen />, bgClass: "bg-purple", text: "Learn fundamentals" },
    { num: 3, icon: <Code2 />, bgClass: "bg-cyan", text: "Build projects" },
    { num: 4, icon: <Cpu />, bgClass: "bg-green", text: "Use AI effectively" },
    { num: 5, icon: <Github />, bgClass: "bg-orange", text: "Put projects on GitHub" },
    { num: 6, icon: <Linkedin />, bgClass: "bg-blue", text: "Build LinkedIn presence" },
    { num: 7, icon: <FileText />, bgClass: "bg-pink", text: "Prepare resume" },
    { num: 8, icon: <MessageSquare />, bgClass: "bg-teal", text: "Practice interviews" },
    { num: 9, icon: <RefreshCw />, bgClass: "bg-yellow", text: "Apply → Interview → Learn → Repeat" }
  ];

  return (
    <div className="slide-content">
      <div className="roadmap-grid">
        {steps.map((step) => (
          <div key={step.num} className="roadmap-step">
            <span className="roadmap-num">{step.num}</span>
            <div className={`icon-badge ${step.bgClass}`} style={{ width: '32px', height: '32px', borderRadius: '0.4rem' }}>
              {step.icon}
            </div>
            <span>{step.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
