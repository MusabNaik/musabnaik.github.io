import React from 'react';

const projects = [
  {
    title: 'Python Web Scraper — Tim Hortons Interactive Store Locator Map',
    description:
      'Scraped detailed store info (addresses, hours, features) from the Tim Hortons website using Python. Built an interactive Folium map with zoom, scroll, and click-to-view popups for every store location.',
    image: 'https://raw.githubusercontent.com/MusabNaik/TimHortons-WebScraping/main/images/Tim_Hortons_Map.png',
    repo: 'https://github.com/MusabNaik/TimHortons-WebScraping',
    demo: 'https://timhortons-webscraping.streamlit.app/',
    tags: ['Python', 'Folium', 'Web Scraping', 'BeautifulSoup'],
  },
  {
    title: 'Interactive Map of Canadian Electricity Generation',
    description:
      'An interactive Streamlit + Plotly dashboard visualizing electricity generation sources across Canadian provinces. Filter by year, province, and generation type. Also features a complementary Tableau dashboard.',
    image: 'https://raw.githubusercontent.com/MusabNaik/Canada-Energy-Generation-Map-Streamlit/main/screenshot.png',
    repo: 'https://github.com/MusabNaik/Canada-Energy-Generation-Map-Streamlit',
    demo: 'https://canada-energy-generation-map-app.streamlit.app/',
    tags: ['Streamlit', 'Plotly', 'Python', 'Tableau'],
    extraLinks: [
      { label: 'Tableau Dashboard', url: 'https://public.tableau.com/app/profile/musab.naik/viz/ElectricityGenerationinCanada/Dashboard1/' },
    ],
  },
  {
    title: 'File Encryptor & Decryptor for Google Drive',
    description:
      'A client-side React app that encrypts and decrypts files using AES before uploading to Google Drive. No backend — your password and data never leave your machine. Supports PDFs, documents, images, and more.',
    image: 'https://raw.githubusercontent.com/MusabNaik/Encrypted-Drive/main/src/images/Encrypted%20Google%20Drive.png',
    repo: 'https://github.com/MusabNaik/Encrypted-Drive',
    demo: 'https://musabnaik.com/Encrypted-Drive/',
    tags: ['React', 'AES', 'CryptoJS', 'Google Drive API'],
  },
  {
    title: 'Data Visualization Dashboard for Sales Analysis',
    description:
      'Built interactive Power BI dashboards to analyze sales performance, identify trends, track KPIs, and uncover revenue growth opportunities across multiple regions and product categories.',
    image: null,
    repo: null,
    demo: null,
    tags: ['Power BI', 'DAX', 'Data Modeling', 'KPI Tracking'],
  },
  {
    title: 'Customer Segmentation using Machine Learning',
    description:
      'Applied unsupervised learning (K-Means, DBSCAN) to segment customers by purchasing behaviour and demographics. Delivered actionable marketing strategies for each segment with visual cluster analysis.',
    image: null,
    repo: null,
    demo: null,
    tags: ['Python', 'scikit-learn', 'Pandas', 'Matplotlib'],
  },
  {
    title: 'Market Basket Analysis for Retail Recommendation',
    description:
      'Conducted association rule mining (Apriori algorithm) on transaction data to identify product bundles. Delivered optimized cross-selling recommendations that improved basket size and customer experience.',
    image: null,
    repo: null,
    demo: null,
    tags: ['Python', 'Apriori', 'Association Rules', 'Retail Analytics'],
  },
];

const Portfolio = () => {
  return (
    <div className="page-section">
      <div className="container">
        <h1 className="section-title animate-in">Portfolio</h1>
        <p className="section-subtitle animate-in delay-1">
          A collection of projects showcasing my work in data analysis, development, and machine learning.
        </p>

        <div className="project-grid animate-in delay-2">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
              {/* Image */}
              <div className="project-card-image-wrapper">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="project-card-image"
                    loading="lazy"
                  />
                ) : (
                  <div
                    style={{
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-muted)',
                      fontSize: '2.5rem',
                    }}
                  >
                    <i className="fa-solid fa-chart-simple"></i>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="project-card-body">
                <h2 className="project-card-title">
                  {project.repo ? (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h2>

                <p className="project-card-text">{project.description}</p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 500,
                        color: 'var(--text-muted)',
                        background: 'var(--bg-elevated)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-card-links">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-card-link">
                      <i className="fa-brands fa-github"></i> Repository
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-card-link">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                    </a>
                  )}
                  {project.extraLinks?.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="project-card-link">
                      <i className="fa-solid fa-link"></i> {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
