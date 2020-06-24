import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
        <ul className="nav-list">
            <li className="nav-item">
                <Link to="/" className="nav-link"> LOGIN </Link>
            </li>
        </ul>
    </nav>
  );
}

export default Nav
