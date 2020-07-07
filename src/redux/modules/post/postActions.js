// ImportActionType   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { GET_POSTS_CAROUSEL } from './postTypes';
import { UPDATE_POST } from './postTypes';
import { GET_POST } from './postTypes';
import { GET_POSTS } from './postTypes';
import { CREATE_POST } from './postTypes';

// Action Creators   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export function getPostsCarousel(data) {
  return { type: GET_POSTS_CAROUSEL , payload: data };
}

export function updatePost(data) {
  return { type: UPDATE_POST , payload: data };
}

export function getPost(data) {
  return { type: GET_POST , payload: data };
}

export function getPosts(data) {
  return { type: GET_POSTS , payload: data };
}

export function createPost(data) {
  return { type: CREATE_POST , payload: data };
}

