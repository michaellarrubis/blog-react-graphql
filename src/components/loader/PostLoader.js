import React from "react";

const PostLoader = () => {
  return (
    <div className="post-loader">
      <div className="u-container">
        <div className="post-body">
          <div className="post-created u-loading"></div>

          <div className="post-title u-loading"></div>
          <div className="post-title u-loading"></div>

          <div className="post-image u-loading" />

          <div className="post-text">
            {[...Array(4)].map((e, i) => {
              return (
                <span className="post-text-loading u-loading" key={i}></span>
              );
            })}
          </div>
          <div className="post-text">
            {[...Array(4)].map((e, i) => {
              return (
                <span className="post-text-loading u-loading" key={i}></span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostLoader;
