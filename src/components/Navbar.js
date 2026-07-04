import React from 'react';

function Navbar({ theme, toggleTheme }) {
  const links = [
    { label: 'HOME',     href: '#home' },
    { label: 'ABOUT',    href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CONTACT',  href: '#contact' },
    { label: 'RESUME',   href: '#' },
  ];

  return (
    <nav className="navbar">
      {/* Spacer to push pill center */}
      <div style={{ width: 44 }} />

      <div className="navbar-pill">
        {links.map(l => (
          <a key={l.href} href={l.href} className="nav-pill-link">
            {l.label}
          </a>
        ))}
      </div>

      <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? '☾' : '☼'}
      </button>
    </nav>
  );
}

export default Navbar;