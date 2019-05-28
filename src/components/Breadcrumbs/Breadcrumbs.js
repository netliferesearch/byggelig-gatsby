import React from 'react';
import { Link } from 'gatsby';

// Create our navigation (prev or next)
const Breadcrumbs = () => {
  return (
    <div className="wrap-outer">
      <div className="container-fluid">
        <div className="row">
          <div className="col mt-2">
            <Link to="/" className="link">
              ← Alle fasene
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
