import React from 'react';
import { Link } from 'react-router-dom';

const skills = [
  { name: 'Python', icon: 'fa-brands fa-python' },
  { name: 'Power BI', icon: 'fa-solid fa-chart-bar' },
  { name: 'SQL', icon: 'fa-solid fa-database' },
  { name: 'Tableau', icon: 'fa-solid fa-chart-line' },
  { name: 'Machine Learning', icon: 'fa-solid fa-brain' },
  { name: 'Web Scraping', icon: 'fa-solid fa-spider' },
  { name: 'Data Visualization', icon: 'fa-solid fa-eye' },
  { name: 'Excel', icon: 'fa-solid fa-table' },
];

const socialLinks = [
  { icon: 'fa-brands fa-github', url: 'https://github.com/MusabNaik', label: 'GitHub' },
  { icon: 'fa-brands fa-linkedin-in', url: 'https://www.linkedin.com/in/Musab-Naik', label: 'LinkedIn' },
  { icon: 'fa-brands fa-x-twitter', url: 'https://twitter.com/MusabNaik', label: 'Twitter' },
  { icon: 'fa-solid fa-envelope', url: 'mailto:musab944@gmail.com', label: 'Email' },
];

const Home = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          {/* Hero Text */}
          <div className="col-lg-7 hero-content">
            <p className="hero-greeting animate-in">Hi there, I'm</p>
            <h1 className="hero-name animate-in delay-1">Musab Naik</h1>
            <h2 className="hero-title animate-in delay-2">
              A Data Analyst &middot; <span className="highlight">Insights Architect</span>
            </h2>
            <p className="hero-description animate-in delay-3">
              I turn raw data into actionable insights. With 4+ years of experience in 
              data manipulation, visualization, and machine learning, I help organizations 
              make data-driven decisions that matter.
            </p>

            <div className="hero-actions animate-in delay-4">
              <Link to="/portfolio" className="btn-primary-custom">
                <i className="fa-solid fa-folder-open"></i> View Portfolio
              </Link>
              <a
                href="https://github.com/MusabNaik"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-custom"
              >
                <i className="fa-brands fa-github"></i> GitHub Profile
              </a>
            </div>

            {/* Skills Cloud */}
            <div className="skills-cloud animate-in delay-4">
              {skills.map((skill) => (
                <span className="skill-tag" key={skill.name}>
                  <i className={skill.icon}></i>
                  {skill.name}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="social-links animate-in delay-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.label}
                  title={link.label}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="col-lg-5 hero-image-wrapper">
            <img
              src="https://avatars.githubusercontent.com/u/20788133?v=4"
              alt="Musab Naik — Data Analyst"
              className="hero-image"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
