import React from 'react';
import pl300 from './images/PL-300.png';
import ai900 from './images/AI-900.png';
import GDA from './images/GDA.png';

const certifications = [
  {
    title: 'Power BI Data Analyst Associate',
    issuer: 'Microsoft',
    image: pl300,
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/MusabNaik/2ED09E3FEB316342?sharingId=4E3BF16DC2BBFC3F',
    badge: 'PL-300',
    icon: 'fa-solid fa-chart-pie',
  },
  {
    title: 'Azure AI Fundamentals',
    issuer: 'Microsoft',
    image: ai900,
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/MusabNaik/2EFBFE1D4FD868D0?sharingId=4E3BF16DC2BBFC3F',
    badge: 'AI-900',
    icon: 'fa-solid fa-robot',
  },
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    image: GDA,
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/H82NZ45H8QQ2',
    badge: 'Professional',
    icon: 'fa-solid fa-chart-line',
  },
];

const Certification = () => {
  return (
    <div className="page-section">
      <div className="container">
        <h1 className="section-title animate-in">Certifications</h1>
        <p className="section-subtitle animate-in delay-1">
          Professional credentials that validate my expertise in data analytics and AI.
        </p>

        <div className="cert-grid animate-in delay-2">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              style={{ textDecoration: 'none' }}
            >
              <div className="cert-card-image-wrapper">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-card-image"
                  loading="lazy"
                />
              </div>
              <div className="cert-card-body">
                <div className="cert-card-title">{cert.title}</div>
                <div className="cert-card-issuer">{cert.issuer}</div>
                <span className="cert-card-badge">
                  <i className={cert.icon}></i> {cert.badge}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
