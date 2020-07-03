import React, { useState, useEffect } from 'react';
import TimeAgo from 'timeago-react';

import { useUtils } from '../hooks/useUtils.js';
import { useComment } from '../hooks/useComment.js';

const Comment = ({ postId, userId, comments }) => {
    const { _createComment, createdComment } = useComment();
    const { _loginRegisterForm, _loginForm } = useUtils();

    const [commentText, setCommentText] = useState('');
    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        setCommentList(comments);
    }, [comments]);

    useEffect(() => {
        if(createdComment) {
            setCommentText('');
            setCommentList([ ...commentList, createdComment ]);
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [createdComment]);

    const handleLogin = () => {
        _loginRegisterForm(true);
        _loginForm(true);
    };

    const handleChangeCommentText = (e) => {
        e.persist();
        setCommentText(e.target.value)
    };

    const handleSubmitComment = (e) => {
        e.preventDefault();

        if (commentText) {
            _createComment(commentText, postId, userId);
        }
    };

    const handleCommentList = () => {
        return commentList?.map((comment, i) => {
            return (
                <div className="comment-item" key={i}>
                    <p className="comment-text">{comment.text}</p>
                    <p className="comment-posted">
                        <TimeAgo datetime={comment.createdAt} />
                    </p>
                </div>
            )
        })
    };


    const handleCommentForm = userId
        ?   <form className="comment-form" onSubmit={handleSubmitComment}>
                <div className="comment-form-textarea-wrapper">
                    <textarea
                        id="text"
                        className="comment-form-textarea" 
                        placeholder="Write comment" 
                        onChange={handleChangeCommentText}
                        value={commentText} 
                    />
                </div>
                <div className="comment-form-footer">
                    <button className="comment-button">SUBMIT</button>
                </div>
            </form>
        :   <button className="comment-button login-to-comment" onClick={handleLogin}>LOGIN TO COMMENT</button>

	return (
		<div className="comment">
            <div className="u-container">
                <h3 className="comment-header">COMMENT</h3>
                <div className="comment-list">
                    {handleCommentList()}
                </div>
                {handleCommentForm}
            </div>
        </div>
  	);
}

export default Comment;
