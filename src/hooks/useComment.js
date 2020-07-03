import { useSelector, useDispatch } from 'react-redux';
import { createComment, getComments } from './../redux/modules/comment/commentActions';

export const useComment = () => {
    const dispatch = useDispatch();
    const { createdComment, comments } = useSelector(state => state.comment);

    const _createComment = (text, postId, userId) => {
        return dispatch(createComment({
            text,
            postId,
            userId
        }));
    };

    const _getComments = (postId, userId) => {
        return dispatch(getComments({
            postId,
            userId
        }));
    };

    return {
        // actions
        _createComment,
        _getComments,

        // states
        createdComment,
        comments
    };
}