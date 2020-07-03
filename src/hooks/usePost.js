import { useSelector, useDispatch } from 'react-redux';
import { createPost, getPost, updatePost, getPosts } from './../redux/modules/post/postActions';

export const usePost = () => {
    const dispatch = useDispatch();
    const { createdPost, post, updatedPost, posts } = useSelector(state => state.post);

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

    return {
        // actions
        _createPost,
        _getPost,
        _getPosts,
        _updatePost,

        // states
        createdPost,
        updatedPost,
        post,
        posts
    };
}