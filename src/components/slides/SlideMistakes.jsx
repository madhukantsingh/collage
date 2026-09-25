import React from 'react';
import { AlertCircle, BookOpen, Clock, Award } from 'lucide-react';

export default function SlideMistakes() {
  const mistakes = [
    {
      num: 1,
      icon: <AlertCircle />,
      bgClass: "bg-red",
      title: "Learning Too Many Technologies",
      desc: "React + Angular + Vue + Java + Python + .NET + AWS + ML + ...",
      highlight: "DON'T TRY TO BECOME EVERYTHING"
    },
    {
      num: 2,
      icon: <BookOpen />,
      bgClass: "bg-orange",
      title: "Watching Tutorials, Never Building",
      desc: "Tutorial → Tutorial → Tutorial → ∞ | Learn → Build → Break → Fix → ✓",
      highlight: "Skill comes from the second loop, not the first."
    },
    {
      num: 3,
      icon: <Clock />,
      bgClass: "bg-yellow",
      title: "Thinking “I Have Time”",
      desc: "4th Year → Placement → Graduation → Job",
      highlight: "START BEFORE YOU FEEL READY"
    },
    {
      num: 4,
      icon: <Award />,
      bgClass: "bg-purple",
      title: "Certificates Over Skills",
      desc: "10 Certificates ≠ 10 Projects. Certificates prove you completed something. Projects prove you can build something.",
      highlight: "PROVE WHAT YOU CAN BUILD"
    }
  ];

  return (
    <div className="slide-content" style={{ gap: '0.75rem', display: 'flex', flexDirection: 'column' }}>
      {mistakes.map((item) => (
        <div key={item.num} className="mistake-block">
          <span className="mistake-num">{item.num}</span>
          <div className={`icon-badge ${item.bgClass}`} style={{ width: '36px', height: '36px', borderRadius: '0.4rem' }}>
            {item.icon}
          </div>
          <div className="mistake-content">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            {item.highlight && <div className="highlight">{item.highlight}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}
