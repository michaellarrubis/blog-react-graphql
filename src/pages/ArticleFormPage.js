import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import Breadcrumbs from '../components/common/Breadcrumbs'
import Comment from '../components/Comment'

const ArticleFormPage = () => {
    const location = useLocation();
    const articleId = useParams().id;

    const isFormEdit = location.pathname.includes('edit');
    const formActionPage = isFormEdit ? `Edit-${articleId}-Article` : "Create New Post";

    let dummyArticle = {
        title: "サンプルテキストサンプル ルテキストサンプルテキ ストサンプルテキストサンプル ルテキスト ",
        image: "",
        content: "ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。"
    }

    let handleCommentSection = isFormEdit ? <Comment /> : ''

    return (
        <div className="article-form article-form-create">
            <Breadcrumbs currentPage={formActionPage} />

            <div className="l-container">
                <div className="article-header">
                    <ul className="article-action-list">
                        <li className="article-action-item">
                            <Link to="/" className="article-action-link"> Save Post </Link>
                        </li>
                        <li className="article-action-item">
                            <Link to="/" className="article-action-link"> Cancel </Link>
                        </li>
                    </ul>
                </div>
                <div className="article-body">
                    <time dateTime="2019.06.19" className="article-posted">2019.06.19</time>
                    <div className="article-form-title">
                        <textarea
                            className="article-form-title-textarea" 
                            placeholder="Title" 
                            defaultValue={isFormEdit ? dummyArticle.title : ""}/>
                    </div>
                    <div className="article-form-image-wrapper">
                        <label htmlFor="image-upload" className="article-form-image-label">UPLOAD IMAGE</label>
                        <input type="file" id="image-upload" className="article-form-image-file"/>
                    </div>
                    <div className="article-form-content">
                        <textarea 
                            placeholder="Content" 
                            className="article-form-content-textarea"
                            defaultValue={isFormEdit ? dummyArticle.content : ""}/>
                    </div>
                      {handleCommentSection}
                </div>
            </div>
        </div>
    );
}

export default ArticleFormPage
