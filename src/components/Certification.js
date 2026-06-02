import React from 'react';

const certifications = [
  {
    id: 'dp-100',
    title: 'Azure Data Scientist Associate',
    fullTitle: 'Microsoft Certified: Azure Data Scientist Associate',
    issuer: 'Microsoft',
    badgeUrl: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
    earned: 'June 21, 2025',
    credentialId: '5D7498389DD6B9A9',
    certNumber: 'F0A34A-32DAEC',
    status: 'Active',
    verifyUrl: 'https://learn.microsoft.com/en-us/users/musabnaik/credentials/5d7498389dd6b9a9',
    accent: '#0078d4',
    category: 'associate',
  },
  {
    id: 'pl-300',
    title: 'Power BI Data Analyst Associate',
    fullTitle: 'Microsoft Certified: Power BI Data Analyst Associate',
    issuer: 'Microsoft',
    badgeUrl: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
    earned: 'May 4, 2024',
    credentialId: '2ED09E3FEB316342',
    certNumber: '134CA8-C9E04A',
    status: 'Active',
    verifyUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/MusabNaik/2ED09E3FEB316342?sharingId=4E3BF16DC2BBFC3F',
    accent: '#0078d4',
    category: 'associate',
  },
  {
    id: 'ai-900',
    title: 'Azure AI Fundamentals',
    fullTitle: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
    badgeUrl: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
    earned: 'September 2, 2023',
    credentialId: '2EFBFE1D4FD868D0',
    certNumber: 'EA48L1-969297',
    status: 'Active',
    verifyUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/MusabNaik/2EFBFE1D4FD868D0?sharingId=4E3BF16DC2BBFC3F',
    accent: '#0078d4',
    category: 'fundamentals',
  },
  {
    id: 'gda',
    title: 'Google Data Analytics',
    fullTitle: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    earned: 'November 2023',
    credentialId: 'H82NZ45H8QQ2',
    status: 'Active',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/H82NZ45H8QQ2',
    accent: '#4285f4',
    category: 'professional',
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
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="credential-card"
            >
              {/* Corner decorations */}
              <span className="credential-corner tl" />
              <span className="credential-corner tr" />
              <span className="credential-corner bl" />
              <span className="credential-corner br" />

              {/* Issuer header */}
              <div className="credential-header">
                {cert.issuer === 'Microsoft' ? (
                  <svg className="credential-issuer-logo" viewBox="0 0 21 21" width="18" height="18">
                    <path d="M0 0h10v10H0zm11 0h10v10H11zm0 11h10v10H11zM0 11h10v10H0z" />
                  </svg>
                ) : (
                  <i className="fa-brands fa-google credential-issuer-icon" />
                )}
                <span className="credential-issuer-name">{cert.issuer}</span>
              </div>

              {/* Badge */}
              <div className="credential-badge-area">
                {cert.badgeUrl ? (
                  <img
                    src={cert.badgeUrl}
                    alt=""
                    className="credential-badge"
                    loading="lazy"
                  />
                ) : (
                  <div className="credential-badge-fallback">
                    <i className="fa-solid fa-award" />
                  </div>
                )}
              </div>

              {/* Certificate body */}
              <div className="credential-body">
                <div className="credential-passed">
                  has successfully passed all requirements for
                </div>
                <h3 className="credential-title">{cert.fullTitle}</h3>

                {/* Status + Verify badge */}
                <div className="credential-status-row">
                  <span className="credential-verify-badge">
                    <i className="fa-solid fa-circle-check" />
                    Online Verifiable
                  </span>
                </div>

                {/* Meta details */}
                <div className="credential-details">
                  <div className="credential-detail">
                    <span className="credential-detail-label">Earned</span>
                    <span className="credential-detail-value">{cert.earned}</span>
                  </div>
                </div>

                {/* Credential info */}
                <div className="credential-id-row">
                  <span>ID: {cert.credentialId}</span>
                  {cert.certNumber && <span>Cert #: {cert.certNumber}</span>}
                </div>
              </div>

              {/* Footer with divider */}
              <div className="credential-footer">
                <div className="credential-footer-divider" />
                <div className="credential-footer-text">
                  <i className="fa-solid fa-up-right-from-square" />
                  {' '}Verify Credential
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
