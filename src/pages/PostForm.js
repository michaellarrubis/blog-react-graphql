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
        _getPost,
        _upsertPost } = usePost();
    const { currentUser } = useAuth();
    const history = useHistory();

    const [image, setImage] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    const [formPost, setFormPost] = useState({ title: '', published: false, body: '', userId: null });
    const [isTitleEmpty, setIsTitleEmpty] = useState(false);

    const location = useLocation();
    const postId = useParams().id;

    const isFormEdit = location.pathname.includes('edit');
    const formActionPage = isFormEdit ? post?.title : "Create New Post";

    useEffect(() => {
        scrollTop();
        setIsBtnClicked(false);

        setFormPost({
            ...formPost,
            userId: currentUser && currentUser.user?.id ? currentUser.user.id : null
        });

        if (isFormEdit) {
            _getPost(postId);
        }

        if (post) {
            if (isBtnClicked && post?.id) {
                setFormPost({
                    ...formPost,
                    published: false
                });

                history.push(`/posts/${post.id}`);
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);

    useEffect(() => {
        scrollTop();
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

        if (isBtnClicked && post?.id) {
            history.push(`/posts/${post.id}`);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post]);

    const handleCommentSection = isFormEdit
        ?   <Comment 
                postId={postId} 
                userId={currentUser?.user?.id} 
                comments={post.comments} />
        :   '';

    const handleShowErrorTite = isTitleEmpty
        ? <p className="post-form-title-error">Title must not be empty.</p>
        : '';

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
        const { id, value } = e.target;

        setFormPost(prevState => {
            return { ...prevState, [e.target.id]: e.target.id === 'published' ? e.target.checked : e.target.value }
        });

        switch (id) {
            case 'title':
                if (value) {
                    setIsTitleEmpty(false);
                } else {
                    setIsTitleEmpty(true);
                }
                break;
            default:
                break;
        };
    };

    const handleSubmitPost = (e) => {
        e.preventDefault();
        setIsBtnClicked(true);

        const { title, published, body, userId } = formPost;

        if (title && !isTitleEmpty) {
            setIsTitleEmpty(false);
            
            const _postId = isFormEdit ? post.id : null
            _upsertPost(_postId, title, published, body, image, userId);
        } else {
            setIsTitleEmpty(true);
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
                            <time dateTime={postDate()} className="post-created">{postDate()}</time>
                            <div className="post-form-published">
                                <input
                                    type="checkbox"
                                    id="published"
                                    name="published"
                                    className="post-form-published-checkbox"
                                    value={isFormEdit ? post.published : false}
                                    defaultChecked={isFormEdit ? post.published : false}
                                    onChange={handleUpdateField}
                                />
                                <label htmlFor="published" className="post-form-published-label">Publish</label>
                            </div>
                        </div>
                        <div className={isTitleEmpty ? 'post-form-title error' : 'post-form-title'}>
                            <textarea
                                id="title"
                                className="post-form-title-textarea" 
                                placeholder="Title" 
                                onChange={handleUpdateField}
                                value={formPost.title} />
                        </div>
                        {handleShowErrorTite}

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
