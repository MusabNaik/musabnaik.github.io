import React from 'react';

const contactItems = [
  { icon: 'fa-solid fa-envelope', label: 'Email', value: 'musab944@gmail.com', href: 'mailto:musab944@gmail.com' },
  { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', value: '/in/Musab-Naik', href: 'https://www.linkedin.com/in/Musab-Naik' },
  { icon: 'fa-brands fa-github', label: 'GitHub', value: '/MusabNaik', href: 'https://github.com/MusabNaik' },
  { icon: 'fa-solid fa-map-pin', label: 'Location', value: 'Canada', href: null },
];

const Contact = () => {
  return (
    <div className="page-section">
      <div className="container">
        <h1 className="section-title animate-in">Contact</h1>
        <p className="section-subtitle animate-in delay-1">
          Have a question, a project idea, or just want to connect? I'd love to hear from you.
        </p>

        <div className="contact-grid animate-in delay-2">
          {/* Contact Details */}
          <div className="contact-info-list">
            {contactItems.map((item, index) => (
              <div className="contact-item" key={index}>
                <div className="contact-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="contact-item-content">
                  <div className="contact-item-label">{item.label}</div>
                  <div className="contact-item-value">
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              {contactItems.slice(0, 3).map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={item.label}
                  title={item.label}
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="contact-cta">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              <i className="fa-regular fa-paper-plane" style={{ color: 'var(--primary)' }}></i>
            </div>
            <h3>Let's Work Together</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Whether you need data analysis, visualization, 
              or a full-stack data solution — let's talk.
            </p>
            <a href="mailto:musab944@gmail.com" className="btn-primary-custom" style={{ display: 'inline-flex' }}>
              <i className="fa-solid fa-envelope"></i> Send an Email
            </a>
            <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Or reach out on <a href="https://www.linkedin.com/in/Musab-Naik" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
