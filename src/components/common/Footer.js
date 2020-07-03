import React from 'react';
import logoWhite from '../../assets/images/logo-white.png';

const Footer = () => {
  	return (
	    <footer className="footer">
	    	<div className="footer-inner">
		    	<div className="l-container footer-inner-content">
			    	<div className="footer-logo">
	    				<img src={logoWhite} alt="Blog Logo" className="footer-logo-image" />
			    	</div>
			    	<div className="footer-description">
			    		<p className="footer-text">
			    			サンプルテキストサンプル ルテキストサンプルテキストサ
			    		</p>
			    		<p className="footer-text">
			    			ンプルテキストサンプル ルテキスト
			    		</p>
			    	</div>
			    	<div className="footer-back-to-top">
			    		<div className="footer-back-to-top-arrow" />
			    		<div className="footer-back-to-top-text">TOP</div>
			    	</div>
		    	</div>
		    </div>
	    	<div className="footer-copyright">
		    	<div className="l-container">
			    	<p className="footer-copyright-text">Copyright©2007-2019 Blog Inc.</p>
		    	</div>
		    </div>
	    </footer>
  	);
}

export default Footer;
