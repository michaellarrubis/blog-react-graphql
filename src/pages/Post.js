import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Comment from '../components/Comment'
import Breadcrumbs from '../components/common/Breadcrumbs'
import PostLoader from '../components/skeleton-loader/PostLoader'

import { usePost } from '../hooks/usePost.js';
import { useAuth } from '../hooks/useAuth.js';

import { postDate, scrollTop } from '../utils/helpers.js';

const Post = () => {
    const postId = useParams().id;

    const { post, _getPost } = usePost();
    const { token } = useAuth();

    const [user, setUser] = useState({ id: null, isAuth: false });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        scrollTop();
        
        _getPost(postId);

        if (token && Object.keys(token).length > 0) {
            setUser({
                ...user,
                id: token.user.id
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (post && Object.keys(post).length) {
            setTimeout(() => {
                setIsLoading(false);
            }, 500);

            setUser({
                ...user,
                id: token?.user?.id,
                isAuth: post?.user?.id === token?.user?.id ? true : false
            });
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post]);


    const handleDisplayEditPost = user.isAuth
        ?   <Link to={'/post/' + post.id + '/edit'} className="post-action-link"> Edit Post </Link>
        :   '';

    return (
        <div className="post">
            {
                isLoading
                ?   <PostLoader />
                :   <div>
                        <Breadcrumbs currentPage={post.title} currentPageUrl={'/posts/' + post.id}/>
                        <div className="u-container">
                            <div className="post-header">
                                <ul className="post-action-list">
                                    <li className="post-action-item">
                                        {handleDisplayEditPost}
                                    </li>
                                </ul>
                            </div>
                            <div className="post-body">
                                <time dateTime={postDate(post.createdAt)} className="post-created">{postDate(post.createdAt)}</time>
                                <h1 className="post-title">{post.title}</h1>
                                <div className="post-image" style={{backgroundImage: `url(${post.imageUrl})`}}/>
                                <div className="post-text">{post.body}</div>
                            </div>

                            <Comment 
                                postId={post.id} 
                                userId={user.id}
                                comments={post.comments}
                            />
                        </div>
                    </div>
            }
        </div>
    );
}

export default Post;
