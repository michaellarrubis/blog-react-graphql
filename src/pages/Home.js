import React from 'react';

import Slider from '../components/Slider';
import Posts from '../components/Posts';

const Home = () => {
  	return (
	    <div className="top">
	    	<Slider />
	    	<Posts />
	    </div>
  	);
}

export default Home;
