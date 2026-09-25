import React from 'react';
import { Layout, Server, Cpu, Wrench, Bug, TrendingUp, Database, Zap } from 'lucide-react';

export default function SlideCareerPaths() {
  const paths = [
    { title: "Frontend Developer", icon: <Layout />, bgClass: "bg-blue", start: "HTML, CSS, JavaScript, React" },
    { title: "Backend Developer", icon: <Server />, bgClass: "bg-purple", start: "Python / Java / Node.js, SQL, APIs" },
    { title: "AI/ML Engineer", icon: <Cpu />, bgClass: "bg-cyan", start: "Python, Statistics, ML Fundamentals" },
    { title: "DevOps Engineer", icon: <Wrench />, bgClass: "bg-orange", start: "Linux, Networking, Git, Docker, Cloud" },
    { title: "QA / Test Automation", icon: <Bug />, bgClass: "bg-red", start: "Testing Concepts, SQL, Automation" },
    { title: "Data Analyst", icon: <TrendingUp />, bgClass: "bg-green", start: "Excel, SQL, Python, Power BI" },
    { title: "Data Scientist", icon: <Database />, bgClass: "bg-pink", start: "Python, Statistics, SQL, Machine Learning" },
    { title: "Data Engineer", icon: <Zap />, bgClass: "bg-teal", start: "Python/SQL, Databases, ETL/ELT, Cloud" }
  ];

  return (
    <div className="slide-content">
      <table className="career-table">
        <thead>
          <tr>
            <th>CAREER PATH</th>
            <th>START WITH</th>
          </tr>
        </thead>
        <tbody>
          {paths.map((p, i) => (
            <tr key={i}>
              <td>
                <div className={`icon-badge ${p.bgClass}`} style={{ width: '28px', height: '28px', borderRadius: '0.35rem' }}>
                  {p.icon}
                </div>
                {p.title}
              </td>
              <td>{p.start}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="slide-quote" style={{ marginTop: '0.75rem', textAlign: 'center' }}>
        You can explore later. But build depth first.
      </div>
    </div>
  );
}
