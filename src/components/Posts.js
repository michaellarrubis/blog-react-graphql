import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth.js';
import { usePost } from '../hooks/usePost.js';
import { postDate, titleExcerpt } from '../utils/helpers.js';

import PostsLoader from './skeleton-loader/PostsLoader';
import DummyImage from '../assets/images/slider.png';

const Posts = () => {
    const { token } = useAuth();
    const { posts, _getPosts } = usePost();

    const [query, setQuery] = useState({ limit: 6, page: 1 });
    const [postItems, setPostItems] = useState([]);

    const [isLoadMore, setIsLoadMore] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        _getPosts(query.limit, query.page);
        return () => {
            setIsLoadMore(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (posts?.posts) {
            handleLoadPosts();
            setIsLoadMore(false);

            setTimeout(() => {
                setIsLoading(false)
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
                posts.posts.map(post => tmpPostItems.push(post));

                setPostItems(tmpPostItems);
                setQuery({ ...query, page: query.page+= 1 });
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
            setQuery({ ...query, page: query.page+= 1 });
        }

        _getPosts(query.limit, page);
    };

    const handlePostItems = () => {
        return (
            <div className="posts-content">
                <div className="posts-body">
                    {
                        isLoading
                        ?   <PostsLoader />
                        :   <ul className="posts-list">
                                {
                                    postItems?.map((post, i) => {
                                        return (
                                            <li className="posts-item" key={i}>
                                                <Link to={'/posts/' + post.id} className="posts-link">
                                                    <div className="posts-image-wrapper">
                                                        <div className="posts-image" style={{backgroundImage: `url(${post.imageUrl ? post.imageUrl : DummyImage })`}}/>
                                                    </div>
                                                    <time dateTime={postDate(post.createdAt)} className="posts-created">{postDate(post.createdAt)}</time>
                                                    <p className="posts-text">{titleExcerpt(post.title)}</p>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                    }
                    {
                        isLoadMore
                        ?   <PostsLoader />
                        :   ''
                    }
                </div>
                <div className="posts-footer">
                    {
                        postItems?.length !== parseInt(posts.count) && postItems?.length !== 0
                            ?   <button className="posts-loadmore-button" onClick={handleClickLoadMore}>LOAD MORE</button>
                            :   ''
                    }
                </div>
            </div>
        );
        
    };

    return (
        <div className="posts">
            <div className="u-container">
                <div className="posts-header">
                    <h1 className="posts-title">NEWS</h1>
                    {
                        token && token.user?.id
                            ?   <Link to="/post/create" className="posts-create-link">
                                    Create New Post
                                </Link>
                            :   ''
                    }
                            
                </div>
                {handlePostItems()}
            </div>
        </div>
    );
}

export default Posts;
