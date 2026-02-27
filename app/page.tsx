"use client";
import React, { useEffect, useRef, useState } from 'react';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main
      className="min-h-screen font-sans selection:bg-blue-500/30"
      style={{
        background: '#060912',
        color: '#c8d3e8',
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;1,9..144,300&display=swap');

        * { box-sizing: border-box; }

        body { overflow-x: hidden; }

        .hero-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%);
          pointer-events: none;
          top: -100px;
          right: -100px;
          filter: blur(40px);
        }

        .accent-line {
          display: inline-block;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #2563eb, #06b6d4);
          margin-bottom: 16px;
          border-radius: 2px;
        }

        .nav-link {
          position: relative;
          color: #64748b;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #2563eb;
          transition: width 0.2s;
        }
        .nav-link:hover { color: #e2e8f0; }
        .nav-link:hover::after { width: 100%; }

        .project-card {
          background: rgba(15,20,35,0.8);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 36px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .project-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(37,99,235,0), rgba(37,99,235,0));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          transition: background 0.3s;
        }
        .project-card:hover {
          border-color: rgba(37,99,235,0.3);
          transform: translateY(-4px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.4), 0 0 40px rgba(37,99,235,0.08);
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 8px;
          background: rgba(15,20,35,0.9);
          border: 1px solid rgba(255,255,255,0.07);
          font-size: 13px;
          font-weight: 500;
          color: #94a3b8;
          transition: all 0.2s;
          cursor: default;
        }
        .skill-pill:hover {
          border-color: rgba(37,99,235,0.4);
          color: #e2e8f0;
          background: rgba(37,99,235,0.08);
        }

        .timeline-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #2563eb;
          box-shadow: 0 0 0 4px rgba(37,99,235,0.15), 0 0 16px rgba(37,99,235,0.4);
          flex-shrink: 0;
          margin-top: 6px;
        }
        .timeline-dot.secondary {
          background: #334155;
          box-shadow: 0 0 0 4px rgba(51,65,85,0.2);
        }

        .stat-card {
          padding: 28px 24px;
          background: rgba(15,20,35,0.6);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          text-align: center;
          transition: border-color 0.2s;
        }
        .stat-card:hover { border-color: rgba(37,99,235,0.25); }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: #2563eb;
          color: white;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 4px 24px rgba(37,99,235,0.3);
        }
        .btn-primary:hover {
          background: #1d4ed8;
          box-shadow: 0 8px 32px rgba(37,99,235,0.45);
          transform: translateY(-1px);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: rgba(255,255,255,0.04);
          color: #c8d3e8;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .btn-secondary:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.2);
        }

        .available-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(16,185,129,0.08);
          border: 1px solid rgba(16,185,129,0.2);
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          color: #34d399;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .available-badge .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #34d399;
          animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.8); }
        }

        .section-label {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #2563eb;
          font-weight: 500;
        }

        .gradient-text {
          background: linear-gradient(135deg, #ffffff 30%, #6ea8fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .noise-bg::after {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }

        .floating-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 70% 70% at 50% 0%, black 0%, transparent 100%);
          pointer-events: none;
        }

        .arch-tag {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(37,99,235,0.1);
          color: #6ea8fe;
          border: 1px solid rgba(37,99,235,0.2);
          font-weight: 500;
        }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
        }

        .impact-number {
          font-family: 'Fraunces', serif;
          font-size: 42px;
          font-weight: 700;
          line-height: 1;
          background: linear-gradient(135deg, #ffffff, #93c5fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Navigation */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 50,
          backdropFilter: 'blur(20px)',
          background: scrollY > 40 ? 'rgba(6,9,18,0.92)' : 'transparent',
          borderBottom: scrollY > 40 ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #2563eb, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontSize: '14px', fontWeight: '700', fontFamily: "'Fraunces', serif" }}>R</span>
            </div>
            <span style={{ fontSize: '15px', fontWeight: '600', color: '#e2e8f0', letterSpacing: '-0.02em' }}>
              P Raviteja
            </span>
          </div>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#journey" className="nav-link">Journey</a>
            <a
              href="mailto:ravitejap02529@gmail.com"
              style={{
                padding: '8px 18px',
                background: 'rgba(37,99,235,0.15)',
                border: '1px solid rgba(37,99,235,0.3)',
                borderRadius: '8px',
                color: '#6ea8fe',
                fontSize: '13px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background = 'rgba(37,99,235,0.25)'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background = 'rgba(37,99,235,0.15)'; }}
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header
        id="about"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '160px 24px 100px',
          position: 'relative',
        }}
      >
        <div className="floating-grid" />
        <div className="hero-glow" />

        <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr auto', gap: '64px', alignItems: 'center' }}>
          <div>
            <div style={{ marginBottom: '24px' }}>
              <div className="available-badge">
                <span className="dot"></span>
                Open to Full-Time Opportunities
              </div>
            </div>

            <h1 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(42px, 6vw, 72px)',
              fontWeight: '700',
              lineHeight: '1.08',
              letterSpacing: '-0.03em',
              color: '#f1f5f9',
              marginBottom: '8px',
            }}>
              Flutter Developer.
            </h1>
            <h1 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(42px, 6vw, 72px)',
              fontWeight: '300',
              lineHeight: '1.08',
              letterSpacing: '-0.03em',
              fontStyle: 'italic',
              marginBottom: '28px',
            }}>
              <span style={{ background: 'linear-gradient(135deg, #60a5fa, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                React Developer.
              </span>
            </h1>

            <p style={{ fontSize: '17px', lineHeight: '1.75', color: '#64748b', maxWidth: '520px', marginBottom: '40px' }}>
              I build cross-platform mobile applications with Flutter and modern web dashboards with React. Focused on writing clean code and creating seamless user experiences.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary">
                View Projects
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="https://github.com/Raviteja-p-05b4a42b5a0010014" target="_blank" rel="noreferrer" className="btn-secondary">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/raviteja-p-05b4a42b5" target="_blank" rel="noreferrer" className="btn-secondary">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile */}
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div style={{
              width: '280px',
              height: '280px',
              borderRadius: '24px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #1e293b, #0f172a)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 60px rgba(37,99,235,0.08)',
              position: 'relative',
            }}>
              <img
                src="/ravi.jpeg"
                alt="P Raviteja — Developer"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                onMouseEnter={e => { (e.target as HTMLElement).style.transform = 'scale(1.04)'; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.transform = 'scale(1)'; }}
              />
            </div>
            {/* Floating tech badge */}
            <div style={{
              position: 'absolute',
              bottom: '-16px',
              left: '-16px',
              background: 'rgba(6,9,18,0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              padding: '12px 16px',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}>
              <span style={{ fontSize: '20px' }}>📱</span>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#e2e8f0', fontFamily: "'DM Mono', monospace" }}>3+ Production Apps</div>
                <div style={{ fontSize: '10px', color: '#475569' }}>Flutter · React · Firebase</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Metrics */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="divider" style={{ marginBottom: '48px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {[
              { value: '3+', label: 'Production Apps', sub: 'Shipped to real users' },
              { value: '2', label: 'Platform Ecosystems', sub: 'Mobile + Web unified' },
              { value: '100%', label: 'Solo Development', sub: 'End-to-end ownership' },
              { value: 'Real-Time', label: 'Systems Built', sub: 'Firebase & live dispatch' },
            ].map((stat) => (
              <div className="stat-card" key={stat.label}>
                <div className="impact-number">{stat.value}</div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#cbd5e1', marginTop: '10px', marginBottom: '4px' }}>{stat.label}</div>
                <div style={{ fontSize: '11px', color: '#475569', fontFamily: "'DM Mono', monospace" }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '56px' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>// Featured Work</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: '700', color: '#f1f5f9', letterSpacing: '-0.02em', marginBottom: '16px' }}>
              Production Apps
            </h2>
            <p style={{ fontSize: '16px', color: '#475569', maxWidth: '560px', lineHeight: '1.7' }}>
              A selection of complete systems I have built — featuring mobile applications communicating with web admin panels and real-time backend infrastructure.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

            {/* Project 1 — Moksharide */}
            <div className="project-card" style={{ gridColumn: '1 / -1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div>
                  <span className="arch-tag" style={{ marginBottom: '12px', display: 'inline-block' }}>Full-Stack Ecosystem</span>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '28px', fontWeight: '700', color: '#f1f5f9', letterSpacing: '-0.02em' }}>
                    Moksharide — Ride-Hailing Platform
                  </h3>
                </div>
                <span style={{ fontSize: '11px', fontFamily: "'DM Mono', monospace", color: '#2563eb', background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.15)', padding: '6px 12px', borderRadius: '6px', whiteSpace: 'nowrap' }}>
                  Live · Production
                </span>
              </div>

              <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.75', maxWidth: '680px', marginBottom: '24px', marginTop: '12px' }}>
                Engineered a complete ride-hailing infrastructure from the ground up — including a <strong style={{ color: '#94a3b8' }}>Flutter User App</strong> (passenger-facing), a <strong style={{ color: '#94a3b8' }}>Flutter Driver App</strong> with real-time GPS tracking, and a <strong style={{ color: '#94a3b8' }}>React Admin Dashboard</strong> for dispatch, analytics, and fleet management. Integrated Firebase for real-time location sync and push notifications across both mobile platforms.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '28px', padding: '20px', background: 'rgba(0,0,0,0.2)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.04)' }}>
                {[
                  { icon: '📱', label: 'User App', desc: 'Flutter · Firebase · BLoC' },
                  { icon: '🚗', label: 'Driver App', desc: 'Flutter · GPS · Real-Time' },
                  { icon: '🖥️', label: 'Admin Panel', desc: 'React · REST API · Charts' },
                ].map(item => (
                  <div key={item.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '22px', marginBottom: '6px' }}>{item.icon}</div>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#cbd5e1', marginBottom: '4px' }}>{item.label}</div>
                    <div style={{ fontSize: '11px', color: '#475569', fontFamily: "'DM Mono', monospace" }}>{item.desc}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Flutter', 'Dart', 'React', 'Firebase', 'Real-Time GPS', 'BLoC', 'REST APIs', 'Push Notifications'].map(tag => (
                  <span key={tag} className="skill-pill" style={{ fontSize: '12px', padding: '5px 12px' }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Project 2 — Ambani Yatri */}
            <div className="project-card">
              <span className="arch-tag" style={{ marginBottom: '12px', display: 'inline-block' }}>Company Project</span>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: '700', color: '#f1f5f9', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                Mokshambani Tech Services PVT.LTD.
              </h3>
              <p style={{ fontSize: '12px', fontFamily: "'DM Mono', monospace", color: '#475569', marginBottom: '16px' }}>
                ambania2z · Service Discovery Platform
              </p>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.75', marginBottom: '24px' }}>
                Contributing as a key Flutter developer on a local service discovery application (JustDial-equivalent) at ambania2z. Building the mobile frontend from Figma designs to scalable production code — implementing complex state management, search algorithms, and multi-category service listing systems.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Flutter', 'Dart', 'State Management', 'Figma → Code', 'Search Algorithm'].map(tag => (
                  <span key={tag} className="skill-pill" style={{ fontSize: '12px', padding: '5px 12px' }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Project 3 — Online Exam System */}
            <div className="project-card">
              <span className="arch-tag" style={{ marginBottom: '12px', display: 'inline-block' }}>Academic Project</span>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: '700', color: '#f1f5f9', letterSpacing: '-0.02em', marginBottom: '16px' }}>
                Online Exam Management System
              </h3>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.75', marginBottom: '24px' }}>
                Designed and built a full-featured examination platform with role-based access control for students, faculty, and administrators. Implemented timed assessments, automated result processing, and a secure SQL-backed data layer.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Java', 'SQL', 'RBAC', 'Backend Setup'].map(tag => (
                  <span key={tag} className="skill-pill" style={{ fontSize: '12px', padding: '5px 12px' }}>{tag}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technical Arsenal */}
      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="divider" style={{ marginBottom: '64px' }} />
          <div className="section-label" style={{ marginBottom: '12px', textAlign: 'center' }}>// Technical Arsenal</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', color: '#f1f5f9', letterSpacing: '-0.02em', textAlign: 'center', marginBottom: '48px' }}>
            Skills by Domain
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {[
              {
                domain: 'Mobile Development',
                icon: '📱',
                skills: ['Flutter', 'Dart', 'BLoC Pattern', 'Provider', 'Cross-Platform App UI', 'UI/UX Implementation'],
                accent: '#2563eb',
              },
              {
                domain: 'Web & Frontend',
                icon: '🖥️',
                skills: ['React', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Admin Dashboards', 'Responsive Design', 'Figma to Code'],
                accent: '#06b6d4',
              },
              {
                domain: 'Backend & Cloud',
                icon: '⚡',
                skills: ['Firebase Realtime DB', 'Firestore', 'Push Notifications', 'REST API Integration', 'Cloud Security (ZSCALER)', 'SQL / Relational DBs'],
                accent: '#8b5cf6',
              },
              {
                domain: 'Tools & Workflow',
                icon: '🛠️',
                skills: ['Git / GitHub', 'Figma', 'VS Code', 'Android Studio', 'Agile / Scrum', 'Deployment'],
                accent: '#f59e0b',
              },
            ].map(group => (
              <div
                key={group.domain}
                className="project-card"
                style={{ padding: '28px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    background: `${group.accent}15`,
                    border: `1px solid ${group.accent}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '18px',
                  }}>
                    {group.icon}
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#e2e8f0' }}>{group.domain}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {group.skills.map(skill => (
                    <span key={skill} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>// Career Timeline</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', color: '#f1f5f9', letterSpacing: '-0.02em', marginBottom: '56px' }}>
            My Journey
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              {
                title: 'Flutter Developer',
                org: 'Mokshabani Tech Services Pvt. Ltd.',
                period: '2024 — Present',
                type: 'Full-Time',
                active: true,
                description: 'Building and shipping production-grade Flutter applications. Responsible for translating Figma designs into performant, testable Dart code. Developed the complete Moksharide ride-hailing ecosystem — User App, Driver App, and coordinated the React Admin Panel integration.',
                tags: ['Flutter', 'Dart', 'Firebase', 'React'],
              },
              {
                title: 'Full Stack & Cloud Security Intern',
                org: 'APSCHE & EduSkills (ZSCALER Partnership)',
                period: '2024',
                type: 'Dual Internship',
                active: false,
                description: 'Completed an intensive 8-week Full Stack Development bootcamp followed by a 3-month Cloud Security virtual internship with ZSCALER. Developed strong foundations in web technologies, secure networking principles, and data handling.',
                tags: ['Full Stack', 'Cloud Security', 'ZSCALER', 'Web Tech'],
              },
              {
                title: 'B.Tech — Computer Science & Engineering',
                org: 'Mother Theresa Institute of Engineering & Technology',
                period: '2021 — 2025',
                type: 'Education · 7.5 GPA',
                active: false,
                description: 'Graduated with a solid foundation in software engineering, data structures, and systems design. Independently built the Online Exam Management System as a capstone project, demonstrating full-stack capabilities.',
                tags: ['Java', 'SQL', 'DSA', 'Software Design'],
              },
            ].map((item, idx) => (
              <div key={item.title} style={{ display: 'flex', gap: '24px', paddingBottom: idx < 2 ? '40px' : '0' }}>
                {/* Timeline spine */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className={`timeline-dot ${item.active ? '' : 'secondary'}`} />
                  {idx < 2 && (
                    <div style={{
                      flex: 1,
                      width: '1px',
                      marginTop: '8px',
                      background: 'linear-gradient(to bottom, rgba(37,99,235,0.3), rgba(51,65,85,0.2))',
                    }} />
                  )}
                </div>
                {/* Content */}
                <div style={{
                  flex: 1,
                  background: 'rgba(15,20,35,0.6)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '12px',
                  padding: '24px',
                  marginTop: '-3px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px', flexWrap: 'wrap', gap: '8px' }}>
                    <h4 style={{ fontSize: '17px', fontWeight: '600', color: '#f1f5f9' }}>{item.title}</h4>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      {item.active && (
                        <span style={{ fontSize: '10px', fontWeight: '700', color: '#34d399', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', padding: '3px 8px', borderRadius: '100px', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: "'DM Mono', monospace" }}>
                          Active
                        </span>
                      )}
                      <span style={{ fontSize: '12px', color: '#475569', fontFamily: "'DM Mono', monospace" }}>{item.period}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', color: '#2563eb', fontWeight: '500', marginBottom: '4px' }}>{item.org}</p>
                  <p style={{ fontSize: '11px', color: '#334155', fontFamily: "'DM Mono', monospace", marginBottom: '14px' }}>{item.type}</p>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.7', marginBottom: '16px' }}>{item.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {item.tags.map(tag => (
                      <span key={tag} className="skill-pill" style={{ fontSize: '11px', padding: '4px 10px' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer
        id="contact"
        style={{
          padding: '80px 24px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(6,9,18,0.8)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute',
          bottom: '-80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>// Let's Connect</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: '700', color: '#f1f5f9', letterSpacing: '-0.03em', lineHeight: '1.1', marginBottom: '20px' }}>
            Ready to build<br/>
            <span style={{ fontStyle: 'italic', fontWeight: '300', color: '#6ea8fe' }}>something great?</span>
          </h2>
          <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', maxWidth: '460px', margin: '0 auto 40px' }}>
            I'm actively seeking full-time Flutter or React developer roles. Let's talk about what you're building.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:ravitejap02529@gmail.com" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              ravitejap02529@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/raviteja-p-05b4a42b5" target="_blank" rel="noreferrer" className="btn-secondary">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/Raviteja-p-05b4a42b5a0010014" target="_blank" rel="noreferrer" className="btn-secondary">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
              GitHub
            </a>
          </div>
          <p style={{ fontSize: '12px', color: '#1e293b', fontFamily: "'DM Mono', monospace", marginTop: '64px' }}>
            © {new Date().getFullYear()} P Raviteja · Mobile & Web Developer
          </p>
        </div>
      </footer>
    </main>
  );
}