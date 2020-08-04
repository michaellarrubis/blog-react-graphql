import React, { useEffect, useState } from "react";
import { ReactTitle } from "react-meta-tags";
import { useAuth } from "../hooks/useAuth.js";
import { usePost } from "../hooks/usePost.js";

import Carousel from "../components/Carousel";
import Posts from "../components/Posts";

import CarouselLoader from "../components/loader/CarouselLoader";

const Home = () => {
  const { carouselPosts, _getPostsCarousel, posts, _getPosts } = usePost();
  const { currentUser } = useAuth();

  const [query, setQuery] = useState({ limit: 6, page: 1 });
  const [postItems, setPostItems] = useState([]);

  const [isLoadMore, setIsLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    _getPostsCarousel(3, 1);
    _getPosts(query.limit, query.page);

    return () => {
      setIsLoadMore(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (posts?.posts) {
      handleLoadPosts();
      setIsLoadMore(false);

      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  const handleLoadPosts = () => {
    if (postItems.length === 0) {
      setPostItems(posts.posts);
    } else {
      if (isLoadMore) {
        let tmpPostItems = postItems;
        posts.posts.map((post) => tmpPostItems.push(post));

        setPostItems(tmpPostItems);
        setQuery({ ...query, page: (query.page += 1) });
      } else {
        setPostItems(posts.posts);
      }
    }
  };

  const handleClickLoadMore = (e) => {
    e.preventDefault();
    setIsLoadMore(true);

    let page = query.page;
    if (query.page === 1) {
      page = query.page + 1;
      setQuery({ ...query, page: (query.page += 1) });
    }

    _getPosts(query.limit, page);
  };

  return (
    <div className="top">
      <ReactTitle title="Blog | Basic Blog SPA" />
      {carouselPosts && carouselPosts.posts?.length > 0 ? (
        <Carousel carouselPosts={carouselPosts} />
      ) : (
        <CarouselLoader />
      )}
      <Posts
        currentUser={currentUser}
        postItems={postItems}
        isLoadMore={isLoadMore}
        isLoading={isLoading}
        posts={posts}
        handleClickLoadMore={handleClickLoadMore}
      />
    </div>
  );
};

export default Home;
