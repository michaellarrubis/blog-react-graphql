import React from 'react';

import Breadcrumbs from '../components/common/Breadcrumbs'
import Comment from '../components/Comment'

import DummyImage from '../assets/images/slider.png';

const NewsArticle = () => {

    return (
        <div className="news-article">
        	<Breadcrumbs />

            <div className="l-container">
            	<div className="news-article-header">
            		<ul className="news-article-action-list">
            			<li className="news-article-action-item">
	                		<button className="news-article-action-btn"> Edit Post </button>
            			</li>
            		</ul>
            	</div>
            	<div className="news-article-body">
                    <time datetime="2019.06.19" className="news-article-posted">2019.06.19</time>
                    <h1 className="news-article-title">サンプルテキストサンプル ルテキストサンプルテキ
ストサンプルテキストサンプル ルテキスト </h1>
					<div className="news-article-image" style={{backgroundImage: `url(${DummyImage})`}}/>
					<div className="news-article-text">
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

export default NewsArticle
