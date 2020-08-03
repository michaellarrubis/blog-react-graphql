import { useSelector, useDispatch } from "react-redux";
import {
  getPost,
  upsertPost,
  getPosts,
  getPostsCarousel,
} from "./../redux/modules/post/postActions";

export const usePost = () => {
  const dispatch = useDispatch();
  const { post, posts, error, carouselPosts } = useSelector(
    (state) => state.post
  );

  const _upsertPost = (id, title, published, body, imageUrl, userId) => {
    return dispatch(
      upsertPost({
        id,
        title,
        published,
        body,
        imageUrl,
        userId,
      })
    );
  };

  const _getPost = (id) => {
    return dispatch(getPost({ id }));
  };

  const _getPosts = (limit, page) => {
    return dispatch(getPosts({ limit, page }));
  };

  const _getPostsCarousel = (limit, page) => {
    return dispatch(getPostsCarousel({ limit, page }));
  };

  return {
    // actions
    _upsertPost,
    _getPost,
    _getPosts,
    _getPostsCarousel,

    // states
    post,
    posts,
    carouselPosts,
    error,
  };
};
