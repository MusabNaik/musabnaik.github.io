import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="not-found animate-in">
          <div className="not-found-code">404</div>
          <h2 className="not-found-title">Page Not Found</h2>
          <p className="not-found-text">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary-custom" style={{ textDecoration: 'none' }}>
            <i className="fa-solid fa-house"></i> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
