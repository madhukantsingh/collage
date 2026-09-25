import React from 'react';
import {
  ShoppingCart,
  DollarSign,
  Truck,
  Heart,
  BookOpen,
  Package,
  UserPlus,
  Share2,
  Cloud,
  Layers
} from 'lucide-react';

export default function SlideStopTodoApps() {
  const domains = [
    { title: "E-commerce", icon: <ShoppingCart />, bgClass: "bg-blue" },
    { title: "FinTech", icon: <DollarSign />, bgClass: "bg-green" },
    { title: "Food Delivery", icon: <Truck />, bgClass: "bg-orange" },
    { title: "Healthcare", icon: <Heart />, bgClass: "bg-red" },
    { title: "Education", icon: <BookOpen />, bgClass: "bg-purple" },
    { title: "Logistics", icon: <Package />, bgClass: "bg-teal" },
    { title: "HR / Recruitment", icon: <UserPlus />, bgClass: "bg-pink" },
    { title: "Social Platforms", icon: <Share2 />, bgClass: "bg-cyan" },
    { title: "SaaS Applications", icon: <Cloud />, bgClass: "bg-yellow" },
    { title: "Inventory Management", icon: <Layers />, bgClass: "bg-green" }
  ];

  return (
    <div className="slide-content">
      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', textAlign: 'center' }}>
        Your portfolio should show that you can solve real problems.
      </p>
      <div className="domain-grid">
        {domains.map((item, idx) => (
          <div key={idx} className="domain-tag">
            <div className={`icon-badge ${item.bgClass}`}>{item.icon}</div>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
