import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { postDate, titleExcerpt } from '../utils/helpers.js';

import PostsLoader from './loader/PostsLoader';

const Posts = ({ 
    token,
    postItems,
    isLoadMore,
    isLoading,
    posts,
    handleClickLoadMore
 }) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (token && token.user?.id) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    }, [token]);

    return (
        <div className="posts">
            <div className="u-container">
                <div className="posts-header">
                    <h1 className="posts-title">NEWS</h1>
                    {
                        isAuth
                            ?   <Link to="/post/create" className="posts-create-link">
                                    Create New Post
                                </Link>
                            :   ''
                    }
                            
                </div>
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
                                                            <div className="posts-image" style={{backgroundImage: `url(${post.imageUrl})`}}/>
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
            </div>
        </div>
    );
}

export default Posts;
