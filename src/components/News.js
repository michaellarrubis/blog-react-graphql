import React from 'react';
import { Link } from 'react-router-dom';

import NewsArticle from './NewsArticle'

const News = () => {
  return (
    <section className="l-section news">
        <div className="l-wrapper news-wrapper">
            <div className="news-header">
                <h1 className="news-title">NEWS</h1>
                <Link to="/" className="news-create-link">
                    Create New Post
                </Link>
            </div>
            <div className="news-body">
                <NewsArticle />
            </div>
            <div className="news-footer">
                <button className="news-footer-link btn btn-default">LOAD MORE</button>
            </div>
        </div>
    </section>
  );
}

export default News
