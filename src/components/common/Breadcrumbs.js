import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ currentPageUrl, currentPage }) => {
  return (
    <div className="breadcrumbs">
      <div className="u-container">
        <ul className="breadcrumbs-list">
          <li className="breadcrumbs-item">
            <Link to="/" className="breadcrumbs-link">
              HOME
            </Link>
          </li>
          <li className="breadcrumbs-item">
            <Link
              to={currentPageUrl ? currentPageUrl : "/"}
              className="breadcrumbs-link"
            >
              {currentPage ? currentPage : ""}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;
