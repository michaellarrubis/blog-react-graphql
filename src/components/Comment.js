import React from 'react';

const Comment = () => {
	return (
		<section className="l-section l-section-comment">
            <div className="l-container">
                <div className="l-section-inner">
                    <div className="content content-comment">
                    	<h3 className="comment-header">COMMENT</h3>
                    	<div className="comment-list">
                    		<div className="comment-item">
                    			<p className="comment-text">
                    				ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。
                    			</p>
                    			<p className="comment-posted">3 months ago</p>
                    		</div>
                    		<div className="comment-item">
                    			<p className="comment-text">
                    				ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。
                    			</p>
                    			<p className="comment-posted">3 months ago</p>
                    		</div>
                    	</div>
                    	<form className="comment-form">
                    		<textarea placeholder="Write comment" className="comment-textarea"></textarea>
                    		<div className="comment-form-footer">
                    			<button className="comment-button">SUBMIT</button>
                    		</div>
                    	</form>
                    </div>
                </div>
            </div>
        </section>
  	);
}

export default Comment;
