import React from 'react';

const socialLinks = [
  { icon: 'fa-brands fa-github', url: 'https://github.com/MusabNaik', label: 'GitHub' },
  { icon: 'fa-brands fa-linkedin-in', url: 'https://www.linkedin.com/in/Musab-Naik', label: 'LinkedIn' },
  { icon: 'fa-solid fa-envelope', url: 'mailto:musab944@gmail.com', label: 'Email' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-text">
            &copy; {year} <span className="footer-brand">Musab Naik</span>. Built with React &middot; Powered by data.
          </div>
          <div className="footer-links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                aria-label={link.label}
                title={link.label}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
