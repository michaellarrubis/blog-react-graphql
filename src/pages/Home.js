import React from 'react';

import Carousel from '../components/Carousel';
import Posts from '../components/Posts';

const Home = () => {
  	return (
	    <div className="top">
	    	<Carousel />
	    	<Posts />
	    </div>
  	);
}

export default Home;
