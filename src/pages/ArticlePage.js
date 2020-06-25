import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Comment from '../components/Comment'
import Breadcrumbs from '../components/common/Breadcrumbs'

import DummyImage from '../assets/images/slider.png';

const ArticlePage = () => {
    const articleId = useParams().id;

    return (
        <div className="article">
        	<Breadcrumbs currentPage=" サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト "/>

            <div className="l-container">
            	<div className="article-header">
            		<ul className="article-action-list">
            			<li className="article-action-item">
                            <Link to={'/article/' + articleId + '/edit'} className="article-action-link"> Edit Post </Link>
            			</li>
            		</ul>
            	</div>
            	<div className="article-body">
                    <time dateTime="2019.06.19" className="article-posted">2019.06.19</time>
                    <h1 className="article-title">サンプルテキストサンプル ルテキストサンプルテキ
ストサンプルテキストサンプル ルテキスト </h1>
					<div className="article-image" style={{backgroundImage: `url(${DummyImage})`}}/>
					<div className="article-text">
						ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。
						<br/>
						ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。
					</div>
            	</div>
            	<Comment />
            </div>
        </div>
    );
}

export default ArticlePage
