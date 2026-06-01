import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Collapse navbar on route change (mobile)
  useEffect(() => {
    setExpanded(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/certification', label: 'Certification' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`header${scrolled ? ' header-scrolled' : ''}`}>
      <nav className="navbar navbar-expand-lg" role="navigation" aria-label="Main navigation">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Musab<span className="brand-highlight">.</span>Naik
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-controls="navbarNav"
            aria-expanded={expanded}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse${expanded ? ' show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navItems.map((item) => (
                <li className="nav-item" key={item.path}>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link nav-link-custom${isActive ? ' active' : ''}`
                    }
                    to={item.path}
                    end={item.path === '/'}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
