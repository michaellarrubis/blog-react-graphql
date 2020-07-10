import React, { useEffect } from 'react';

import Carousel from '../components/Carousel';
import Posts from '../components/Posts';

import CarouselLoader from '../components/loader/CarouselLoader';

import { usePost } from '../hooks/usePost.js';

const Home = () => {
	const { carouselPosts, _getPostsCarousel } = usePost();

	useEffect(() => {
        _getPostsCarousel(3, 1);

        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleCarouselDisplay = carouselPosts
		?	<Carousel carouselPosts={carouselPosts} />
		:	<CarouselLoader />
	
	return (
	    <div className="top">
			{handleCarouselDisplay}
	    	<Posts />
	    </div>
  	);
}

export default Home;
