import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

import { useAuth } from '../hooks/useAuth.js';
import { usePost } from '../hooks/usePost.js';

import { postDate, scrollTop } from '../utils/helpers.js';
import firebaseConfig from '../utils/firebase-config';

import Breadcrumbs from '../components/common/Breadcrumbs';
import Comment from '../components/Comment';

firebase.initializeApp(firebaseConfig);

const PostForm = () => {
    const { 
        post, 
        createdPost, 
        updatedPost,
        _createPost,
        _getPost,
        _updatePost } = usePost();
    const { token } = useAuth();
    const history = useHistory();

    const [image, setImage] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    const [formPost, setFormPost] = useState({ title: '', published: false, body: '', userId: null });

    const location = useLocation();
    const postId = useParams().id;

    const isFormEdit = location.pathname.includes('edit');
    const formActionPage = isFormEdit ? post?.title : "Create New Post";

    useEffect(() => {
        scrollTop();
        setIsBtnClicked(false);

        if (isFormEdit) {
            _getPost(postId);
        }

        setFormPost({
            ...formPost,
            userId: token && token.user?.id ? token.user.id : null
        });

        if (isBtnClicked && createdPost?.id) {
            history.push(`/posts/${createdPost.id}`);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [createdPost, token]);

    useEffect(() => {
        setIsBtnClicked(false);
        
        if (isFormEdit) {
            setFormPost({
                ...formPost,
                title: post.title,
                published: post.published,
                body: post.body
            });

            setImage(post.imageUrl);
        }

        if (isBtnClicked && updatedPost?.id) {
            history.push(`/posts/${updatedPost.id}`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updatedPost, post]);

    const handleCommentSection = isFormEdit
        ?   <Comment 
                postId={postId} 
                userId={token?.user?.id} 
                comments={post.comments} />
        :   '';

    const handleUploadStart = () => {
        setIsUploading(true);
    };

    const handleUploadSuccess = (filename) => {
        firebase.storage()
            .ref('blogPostImages')
            .child(filename)
            .getDownloadURL()
            .then((url) => {
                setIsUploading(false);

                setImage(url)
            });
    };

    const handleUpdateField = (e) => {
        e.persist();
        setFormPost(prevState => {
            return { ...prevState, [e.target.id]: e.target.id === 'published' ? e.target.checked : e.target.value }
        });
    };

    const handleSubmitPost = (e) => {
        e.preventDefault();
        setIsBtnClicked(true);

        const { title, published, body, userId } = formPost;

        if (isFormEdit) {
            _updatePost(post.id, title, published, body, image);
        } else { 
            _createPost(title, published, body, image, userId);
        }
    };

    return (
        <div className="post-form">
            <Breadcrumbs currentPage={formActionPage} />

            <div className="u-container">
                <form className="post-form-inner" onSubmit={handleSubmitPost}>
                    <div className="post-header post-form-header">
                        <ul className="post-action-list post-form-action-list">
                            <li className="post-action-item">
                                <button className="post-action-link post-form-action-button"> Save Post </button>
                            </li>
                            <li className="post-action-item">
                                <Link to="/" className="post-action-link"> Cancel </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="post-body">
                        <div className="post-form-body-top">
                            <time dateTime="2019.06.19" className="post-posted">{postDate()}</time>
                            <div className="post-form-published">
                                <input
                                    type="checkbox"
                                    id="published"
                                    name="published"
                                    className="post-form-published-checkbox"
                                    value={formPost.published}
                                    defaultChecked={post.published}
                                    onClick={handleUpdateField}
                                />
                                <label htmlFor="published" className="post-form-published-label">Publish</label>
                            </div>
                        </div>
                        <div className="post-form-title">
                            <textarea
                                id="title"
                                className="post-form-title-textarea" 
                                placeholder="Title" 
                                onChange={handleUpdateField}
                                value={formPost.title} />
                        </div>
                        <div className="post-form-image-wrapper" style={{backgroundImage: `url(${image})`}}>
                            <label htmlFor="image-upload" className="post-form-image-label">{ isUploading ? 'UPLOADING...' : 'UPLOAD IMAGE' }</label>
                            <FileUploader
                                accept="image/*"
                                name="image-upload"
                                storageRef={firebase.storage().ref('blogPostImages')}
                                onUploadStart={handleUploadStart}
                                onUploadSuccess={handleUploadSuccess}
                                className="post-form-image-file"
                                id="image-upload"
                            />
                        </div>
                        <div className="post-form-text-content">
                            <textarea 
                                id="body"
                                placeholder="Content" 
                                className="post-form-content-textarea"
                                onChange={handleUpdateField}
                                value={formPost.body} />
                        </div>
                    </div>
                </form>
                <div className="post-footer">
                    {handleCommentSection}
                </div>
            </div>
        </div>
    );
}

export default PostForm;
