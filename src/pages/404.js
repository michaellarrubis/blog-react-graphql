import React from "react";
import { ReactTitle } from "react-meta-tags";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page-not-found">
      <ReactTitle title="Page not Found | Blog" />
      <div className="u-container">
        <h3 className="page-not-found-title">404</h3>
        <p className="page-not-found-text">Page Doesn't Exist!</p>
        <Link to="/" className="page-not-found-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
