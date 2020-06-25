import React from 'react';
import { Link } from 'react-router-dom';

import DummyImage from '../../assets/images/slider.png';

const News = () => {
    let NewsArticles = [1, 2, 3, 4, 5, 6];
    let NewsArticleItems = NewsArticles.map((article) => {
        return (
            <li className="news-item" key={article}>
                <Link to={'/articles/' + article} className="news-link">
                    <div className="news-image" style={{backgroundImage: `url(${DummyImage})`}}/>
                    <time dateTime="2019.06.19" className="news-posted">2019.06.19</time>
                    <p className="news-text">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ</p>
                </Link>
            </li>
        )
    });

    return (
        <section className="l-section l-section-news">
            <div className="l-container">
                <div className="l-section-inner">
                    <div className="content content-news">
                        <div className="news-header">
                            <h1 className="news-title">NEWS</h1>
                            <Link to="/article/create" className="news-create-link">
                                Create New Post
                            </Link>
                        </div>
                        <div className="news-body">
                            <ul className="news-list">
                                {NewsArticleItems}
                            </ul>
                        </div>
                        <div className="news-footer">
                            <button className="news-footer-button">LOAD MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default News
