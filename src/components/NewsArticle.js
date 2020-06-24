import React from 'react';
import { Link } from 'react-router-dom';

import DummySlider from '../assets/images/slider.png';

const NewsArticle = () => {

    let NewsArticles = [1, 2, 3, 4, 5, 6];
    let NewsArticleItems = NewsArticles.map((article) => {
        return (
            <Link path="/" className="news-article-item" key={article}>
                <div className="news-article-image" style={{backgroundImage: `url(${DummySlider})`}}/>
                <time datetime="2019.06.19" className="news-article-posted">2019.06.19</time>
                <p className="news-article-excerpt">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ</p>
            </Link>
        )
    });

  return (
    <div className="news-article">
        <div className="news-article-list">
            {NewsArticleItems}
        </div>
    </div>
  );
}

export default NewsArticle
