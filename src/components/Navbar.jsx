import { useState } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%',
      background: dark ? 'linear-gradient(90deg, #0d0221ee, #0a0a2eee)' : '#f1f5f9ee',
      backdropFilter: 'blur(10px)',
      color: dark ? 'white' : '#0f172a',
      padding: '16px 32px',
      display: 'flex',
      justifyContent: 'space-between', alignItems: 'center',
      zIndex: 50, transition: 'all 0.3s',
      borderBottom: '1px solid #a855f733',
      flexWrap: 'wrap'
    }}>
      <a href="#" style={{ textDecoration: 'none' }}>
        <h1 style={{
          fontSize: '1.5rem', fontWeight: 'bold',
          background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Kavindi
        </h1>
      </a>

      {/* Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none', border: 'none',
          color: '#a855f7', fontSize: '1.8rem',
          cursor: 'pointer',
          '@media (max-width: 768px)': { display: 'block' }
        }}
        className="hamburger"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`} style={{
        display: 'flex', gap: '20px',
        listStyle: 'none', margin: 0, padding: 0, alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        {['About', 'Projects', 'Skills', 'Certificates', 'Contact'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: dark ? 'white' : '#0f172a',
                textDecoration: 'none', fontSize: '0.95rem',
              }}
              onMouseEnter={e => e.target.style.color = '#a855f7'}
              onMouseLeave={e => e.target.style.color = dark ? 'white' : '#0f172a'}
            >{item}</a>
          </li>
        ))}
        <li>
          <a href="https://github.com/Kavindi82" target="_blank" rel="noreferrer" style={{
            background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            textDecoration: 'none', fontWeight: 'bold'
          }}>GitHub</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/kavindi-sandaruwani" target="_blank" rel="noreferrer" style={{
            background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            textDecoration: 'none', fontWeight: 'bold'
          }}>LinkedIn</a>
        </li>
        <li>
          <button onClick={() => setDark(!dark)} style={{
            background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
            color: 'white', border: 'none',
            borderRadius: '9999px',
            padding: '6px 16px', cursor: 'pointer', fontSize: '0.9rem'
          }}>
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </li>
      </ul>
    </nav>
  );
}