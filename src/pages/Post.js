import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { ReactTitle } from "react-meta-tags";

import Comment from "../components/Comment";
import Breadcrumbs from "../components/common/Breadcrumbs";
import PostLoader from "../components/loader/PostLoader";

import { usePost } from "../hooks/usePost.js";
import { useAuth } from "../hooks/useAuth.js";

import { postDate, scrollTop } from "../utils/helpers.js";

const Post = () => {
  const params = useParams();
  const postSlug = params.slug;
  const history = useHistory();

  const { post, error, _getPostBySlug } = usePost();
  const { currentUser } = useAuth();

  const [user, setUser] = useState({ id: null, isAuth: false });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    scrollTop();
    _getPostBySlug(postSlug);

    if (currentUser && Object.keys(currentUser).length > 0) {
      setUser({
        ...user,
        id: currentUser.user.id,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  useEffect(() => {
    if (post && Object.keys(post).length) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);

      setUser({
        ...user,
        id: currentUser?.user?.id,
        isAuth: post?.user?.id === currentUser?.user?.id ? true : false,
      });
    }

    if (error?.message?.includes("not found")) {
      history.push("/page-not-found");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post, error]);

  const handleDisplayEditPost = user.isAuth ? (
    <Link to={"/post/" + post.id + "/edit"} className="post-action-link">
      Edit Post
    </Link>
  ) : (
    ""
  );

  return (
    <div className="post">
      <ReactTitle title={post.title + " | Blog"}></ReactTitle>
      {isLoading ? (
        <PostLoader />
      ) : (
        <div>
          <Breadcrumbs
            currentPage={post.title}
            currentPageUrl={"/posts/" + post.id}
          />
          <div className="u-container">
            <div className="post-header">
              <ul className="post-action-list">
                <li className="post-action-item">{handleDisplayEditPost}</li>
              </ul>
            </div>
            <div className="post-body">
              <time
                dateTime={postDate(post.createdAt)}
                className="post-created"
              >
                {postDate(post.createdAt)}
              </time>
              <h1 className="post-title">{post.title}</h1>
              <div
                className="post-image"
                style={{ backgroundImage: `url(${post.imageUrl})` }}
              />
              <div className="post-text">{post.body}</div>
            </div>

            <Comment
              postId={post.id}
              userId={user.id}
              comments={post.comments}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
