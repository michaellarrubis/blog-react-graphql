import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { usePost } from '../hooks/usePost.js';
import { postDate } from '../utils/helpers.js';

import DummyImage from '../assets/images/slider.png';

const Posts = () => {
    const { posts, _getPosts } = usePost();

    const [query, setQuery] = useState({ limit: 6, page: 1 });
    const [postItems, setPostItems] = useState([]);

    useEffect(() => {
        if (!posts.posts) {
            _getPosts(query.limit, query.page);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    useEffect(() => {
        setPostItems(postItems.concat(posts.posts));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts]);

    const handleResetPostItems = (e) => {
        e.persist();
        setQuery({ ...query, page: 1 });
        setPostItems([]);
        _getPosts(query.limit, query.page);
    };

    const handleClickLoadMore = (e) => {
        e.preventDefault();

        _getPosts(query.limit, query.page + 1);
    };

    const handlePostItems = () => {
        const items = postItems.filter((postItem) => {
            return postItem !== undefined;
        });

        return (
            <div className="posts-content">
                <div className="posts-body">
                    <ul className="posts-list">
                        {
                            items.map((post, i) => {
                                return (
                                    <li className="posts-item" key={i}>
                                        <Link to={'/posts/' + post.id} onClick={handleResetPostItems} className="posts-link">
                                            <div className="posts-image-wrapper">
                                                <div className="posts-image" style={{backgroundImage: `url(${post.imageUrl ? post.imageUrl : DummyImage })`}}/>
                                            </div>
                                            <time dateTime={postDate(post.createdAt)} className="posts-created">{postDate(post.createdAt)}</time>
                                            <p className="posts-text">{post.title}</p>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="posts-footer">
                    {
                        items.length !== parseInt(posts.count)
                            ?   <button className="posts-footer-button" onClick={handleClickLoadMore}>LOAD MORE</button>
                            :   ''
                    }
                </div>
            </div>
        );
        
    };

    return (
        <section className="l-section l-section-posts">
            <div className="l-container">
                <div className="l-section-inner">
                    <div className="posts">
                        <div className="posts-header">
                            <h1 className="posts-title">NEWS</h1>
                            <Link to="/post/create" className="posts-create-link">
                                Create New Post
                            </Link>
                        </div>
                        {handlePostItems()}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Posts;
