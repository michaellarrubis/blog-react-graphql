import React from 'react';
import logoWhite from '../../assets/images/logo-white.png';

const Footer = () => {
  return (
    <footer className="l-footer">
    	<div className="l-footer-inner">
	    	<div className="l-wrapper l-footer-inner-content">
		    	<div className="l-footer-logo">
    				<img src={logoWhite} alt="Blog Logo" className="l-footer-logo-image" />
		    	</div>
		    	<div className="l-footer-description">
		    		<p className="l-footer-text">
		    			サンプルテキストサンプル ルテキストサンプルテキストサ
		    		</p>
		    		<p className="l-footer-text">
		    			ンプルテキストサンプル ルテキスト
		    		</p>
		    	</div>
		    	<div className="l-footer-back-to-top">
		    		<div className="l-footer-back-to-top-arrow" />
		    		<div className="l-footer-back-to-top-text">TOP</div>
		    	</div>
	    	</div>
	    </div>
    	<div className="l-footer-copyright">
	    	<div className="l-wrapper">
		    	<p className="l-footer-copyright-text">Copyright©2007-2019 Blog Inc.</p>
	    	</div>
	    </div>
    </footer>
  );
}

export default Footer
