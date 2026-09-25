import React from 'react';
import {
  MessageSquare,
  ClipboardList,
  Sliders,
  PenTool,
  Code2,
  Bug,
  Globe,
  Eye,
  Wrench,
  ArrowDown
} from 'lucide-react';

export default function SlideProjectExecution() {
  const phase1 = [
    { icon: <MessageSquare />, bgClass: "bg-green", title: "Client Idea", sub: "Where it all begins" },
    { icon: <ClipboardList />, bgClass: "bg-blue", title: "Requirements", sub: "What does the client need?" },
    { icon: <Sliders />, bgClass: "bg-purple", title: "Planning", sub: "How will we build it?" },
    { icon: <PenTool />, bgClass: "bg-pink", title: "UI/UX Design", sub: "What will the user see?" },
    { icon: <Code2 />, bgClass: "bg-cyan", title: "Development", sub: "Frontend + Backend + DB + APIs" }
  ];

  const phase2 = [
    { icon: <Bug />, bgClass: "bg-red", title: "Testing / QA", sub: "Does it actually work?" },
    { icon: <Globe />, bgClass: "bg-teal", title: "Deployment", sub: "Put it into the real world" },
    { icon: <Eye />, bgClass: "bg-yellow", title: "Monitoring", sub: "Is everything still working?" },
    { icon: <Wrench />, bgClass: "bg-orange", title: "Maintenance", sub: "Fix, improve, evolve" }
  ];

  return (
    <div className="slide-content">
      <div className="phases-container">
        <div className="phase">
          <div className="phase-title">PHASE 1 • PLAN & BUILD</div>
          {phase1.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="phase-step">
                <div className={`icon-badge ${step.bgClass}`} style={{ width: '32px', height: '32px', borderRadius: '0.4rem' }}>
                  {step.icon}
                </div>
                <div className="phase-step-text">
                  <h4>{step.title}</h4>
                  <p>{step.sub}</p>
                </div>
              </div>
              {idx < phase1.length - 1 && (
                <div className="phase-arrow">
                  <ArrowDown size={14} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="phase">
          <div className="phase-title">PHASE 2 • LAUNCH & GROW</div>
          {phase2.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="phase-step">
                <div className={`icon-badge ${step.bgClass}`} style={{ width: '32px', height: '32px', borderRadius: '0.4rem' }}>
                  {step.icon}
                </div>
                <div className="phase-step-text">
                  <h4>{step.title}</h4>
                  <p>{step.sub}</p>
                </div>
              </div>
              {idx < phase2.length - 1 && (
                <div className="phase-arrow">
                  <ArrowDown size={14} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
