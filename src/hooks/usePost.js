import { useSelector, useDispatch } from 'react-redux';
import { createPost, getPost, updatePost, getPosts, getPostsCarousel } from './../redux/modules/post/postActions';

export const usePost = () => {
    const dispatch = useDispatch();
    const { post, updatedPost, posts, error, carouselPosts } = useSelector(state => state.post);

    const _createPost = (title, published, body, imageUrl, userId) => {
        return dispatch(createPost({
            title, 
            published, 
            body, 
            imageUrl, 
            userId
        }));
    };

    const _updatePost = (id, title, published, body, imageUrl) => {
        return dispatch(updatePost({
            id,
            title, 
            published, 
            body, 
            imageUrl
        }));
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
        _createPost,
        _getPost,
        _getPosts,
        _getPostsCarousel,
        _updatePost,

        // states
        updatedPost,
        post,
        posts,
        carouselPosts,
        error
    };
}