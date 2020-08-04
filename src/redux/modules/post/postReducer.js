// ImportActionType   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { GET_POST_BY_SLUG } from "./postTypes";
import { GET_POSTS_CAROUSEL } from "./postTypes";
import { UPSERT_POST } from "./postTypes";
import { GET_POSTS } from "./postTypes";
import { GET_POST } from "./postTypes";

const INITIAL_STATE = {
  post: {},
  posts: {},
  carouselPosts: {},
  error: {},
};

// Reducer   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case GET_POST_BY_SLUG:
      return state;
    case `${GET_POST_BY_SLUG}_SUCCESS`:
      return {
        ...state,
        post: action.payload,
        error: {},
      };
    case `${GET_POST_BY_SLUG}_FAIL`:
      return {
        ...state,
        post: {},
        error: action.payload,
      };
    case GET_POSTS_CAROUSEL:
      return state;
    case `${GET_POSTS_CAROUSEL}_SUCCESS`:
      return {
        ...state,
        carouselPosts: action.payload,
        error: {},
      };
    case `${GET_POSTS_CAROUSEL}_FAIL`:
      return {
        ...state,
        carouselPosts: {},
        error: action.payload,
      };
    case UPSERT_POST:
      return state;
    case `${UPSERT_POST}_SUCCESS`:
      return {
        ...state,
        post: action.payload,
        error: {},
      };
    case `${UPSERT_POST}_FAIL`:
      return {
        ...state,
        post: {},
        error: action.payload,
      };
    case GET_POSTS:
      return state;
    case `${GET_POSTS}_SUCCESS`:
      return {
        ...state,
        posts: action.payload,
        error: {},
      };
    case `${GET_POSTS}_FAIL`:
      return {
        ...state,
        posts: {},
        error: action.payload,
      };
    case GET_POST:
      return state;
    case `${GET_POST}_SUCCESS`:
      return {
        ...state,
        post: action.payload,
        error: {},
      };
    case `${GET_POST}_FAIL`:
      return {
        ...state,
        post: {},
        error: action.payload,
      };
    default:
      return state;
  }
}
