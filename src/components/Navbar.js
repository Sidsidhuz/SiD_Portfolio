import React from 'react';

function Navbar() {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="nav-shell">
      <div className="nav-inner">
        <a className="brand" href="#home" aria-label="Home">
          <span className="brand-mark">ST</span>
          <span>Sidharth T.V.</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;