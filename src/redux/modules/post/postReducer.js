// ImportActionType   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { GET_POSTS_CAROUSEL } from './postTypes';
import { UPDATE_POST } from './postTypes';
import { GET_POSTS } from './postTypes';
import { GET_POST } from './postTypes';
import { CREATE_POST } from './postTypes';

const INITIAL_STATE = {
  createdPost: {},
  updatedPost: {},
  post: {},
  posts: {},
  carouselPosts: {},
  error: {}
}

// Reducer   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case GET_POSTS_CAROUSEL:
      return state;
    case `${GET_POSTS_CAROUSEL}_SUCCESS`:
      return {
        ...state,
        carouselPosts: action.payload,
        error: {}
      };
    case `${GET_POSTS_CAROUSEL}_FAIL`:
      return {
        ...state,
        carouselPosts: {},
        error: action.payload
      };
    case UPDATE_POST:
      return state;
    case `${UPDATE_POST}_SUCCESS`:
      return {
        ...state,
        updatedPost: action.payload,
        error: {}
      };
    case `${UPDATE_POST}_FAIL`:
      return {
        ...state,
        updatedPost: {},
        error: action.payload
      };
    case GET_POSTS:
      return state;
    case `${GET_POSTS}_SUCCESS`:
      return {
        ...state,
        posts: action.payload,
        error: {}
      };
    case `${GET_POSTS}_FAIL`:
      return {
        ...state,
        posts: {},
        error: action.payload
      };
    case GET_POST:
      return state;
    case `${GET_POST}_SUCCESS`:
      return {
        ...state,
        post: action.payload,
        error: {}
      };
    case `${GET_POST}_FAIL`:
      return {
        ...state,
        post: {},
        error: action.payload
      };
    case CREATE_POST:
      return state;
    case `${CREATE_POST}_SUCCESS`:
      return {
        ...state,
        createdPost: action.payload,
        error: {}
      };
    case `${CREATE_POST}_FAIL`:
      return {
        ...state,
        createdPost: {},
        error: action.payload
      };
    default: return state;
  }
}

