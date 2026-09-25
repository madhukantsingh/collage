import React from 'react';
import { Target, Layers, MessageSquare, Users, Cpu } from 'lucide-react';

export default function SlideSkills() {
  const skills = [
    {
      num: "01",
      icon: <Target />,
      bgClass: "bg-blue",
      title: "Problem Solving",
      desc: "Can you break a real problem into smaller problems?"
    },
    {
      num: "02",
      icon: <Layers />,
      bgClass: "bg-purple",
      title: "Strong Fundamentals",
      desc: "Programming, databases, APIs, networking, Git, etc."
    },
    {
      num: "03",
      icon: <MessageSquare />,
      bgClass: "bg-green",
      title: "Communication",
      desc: "Can you explain what you built — and why?"
    },
    {
      num: "04",
      icon: <Users />,
      bgClass: "bg-orange",
      title: "Teamwork",
      desc: "Real projects are built by teams, not individuals."
    },
    {
      num: "05",
      icon: <Cpu />,
      bgClass: "bg-cyan",
      title: "AI Literacy",
      desc: "Knowing how to use AI effectively is now a core skill."
    }
  ];

  return (
    <div className="slide-content">
      <div className="cards-grid cols-5">
        {skills.map((item) => (
          <div key={item.num} className="card">
            <span className="card-number">{item.num}</span>
            <div className={`icon-badge ${item.bgClass}`}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="slide-quote" style={{ marginTop: '1.25rem' }}>
        “Companies don’t just hire people who can code. They hire people who can solve problems.”
      </div>
    </div>
  );
}
