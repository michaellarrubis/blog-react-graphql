import React from "react";

const PostsLoader = () => {
  return (
    <div className="posts-loader">
      <ul className="posts-list">
        {[...Array(6)].map((e, i) => {
          return (
            <li className="posts-item" key={i}>
              <div className="posts-link">
                <div className="posts-image-wrapper u-loading"></div>
                <time className="posts-created u-loading"></time>
                <p className="posts-text u-loading"></p>
                <p className="posts-text u-loading"></p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostsLoader;
