import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
    	<div className="l-container">
    		<ul className="breadcrumbs-list">
	            <li className="breadcrumbs-item">
	                <Link to="/" className="breadcrumbs-link"> HOME </Link>
	            </li>
	            <li className="breadcrumbs-item">
	                <Link to="/" className="breadcrumbs-link"> サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト </Link>
	            </li>
	        </ul>
	    </div>
    </div>
  );
}

export default Breadcrumbs
