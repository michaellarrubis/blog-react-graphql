import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Comment from '../components/Comment'
import Breadcrumbs from '../components/common/Breadcrumbs'

import { usePost } from '../hooks/usePost.js';
import { useAuth } from '../hooks/useAuth.js';

import { postDate, scrollToTopOnLoad } from '../utils/helpers.js';

const Post = () => {
    const postId = useParams().id;

    const { post, _getPost } = usePost();
    const { token } = useAuth();

    const [user, setUser] = useState({ id: null, isAuth: false });

    useEffect(() => {
        scrollToTopOnLoad();
        
        _getPost(postId);

        setUser({
            ...user,
            id: token && Object.keys(token).length > 0 ? token.user.id : null,
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (post && Object.keys(post).length) {
            setUser({
                ...user,
                isAuth: post?.user?.id === token?.user?.id ? true : false
            });
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post]);


    const handleDisplayEditPost = user.isAuth
        ?   <Link to={'/post/' + post.id + '/edit'} className="post-action-link"> Edit Post </Link>
        :   '';

    return (
        <main className="post">
        	<Breadcrumbs currentPage={post.title} currentPageUrl={'/posts/' + post.id}/>

            <div className="l-container">
                <div className="post-header">
                    <ul className="post-action-list">
                        <li className="post-action-item">
                            {handleDisplayEditPost}
                        </li>
                    </ul>
                </div>
            	<div className="post-body">
                    <time dateTime={postDate(post.createdAt)} className="post-posted">{postDate(post.createdAt)}</time>
                    <h1 className="post-title">{post.title}</h1>
					<div className="post-image" style={{backgroundImage: `url(${post.imageUrl})`}}/>
					<div className="post-text">{post.body}</div>
            	</div>

            	<Comment 
                    postId={post.id} 
                    userId={post?.user?.id}
                    comments={post.comments}
                />
            </div>
        </main>
    );
}

export default Post;
