import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth.js';
import { usePost } from '../hooks/usePost.js';
import { postDate, titleExcerpt } from '../utils/helpers.js';

import DummyImage from '../assets/images/slider.png';

const Posts = () => {
    const { token } = useAuth();
    const { posts, _getPosts } = usePost();

    const [query, setQuery] = useState({ limit: 6, page: 1 });
    
    useEffect(() => {
        _getPosts(query.limit, query.page);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    const handleClickLoadMore = (e) => {
        e.preventDefault();
        let limit = query.limit * (query.page + 1)
        setQuery({ ...query, limit });
        _getPosts(limit, query.page);
    };

    const handlePostItems = () => {

        return (
            <div className="posts-content">
                <div className="posts-body">
                    <ul className="posts-list">
                        {
                            posts?.posts?.map((post, i) => {
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
                </div>
                <div className="posts-footer">
                    {
                        posts?.posts?.length !== parseInt(posts.count)
                            ?   <button className="posts-footer-button" onClick={handleClickLoadMore}>LOAD MORE</button>
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
