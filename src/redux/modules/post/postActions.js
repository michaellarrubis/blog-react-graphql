// ImportActionType   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { GET_POSTS_CAROUSEL } from './postTypes';
import { UPSERT_POST } from './postTypes';
import { GET_POST } from './postTypes';
import { GET_POSTS } from './postTypes';

// Action Creators   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export function getPostsCarousel(data) {
  return { type: GET_POSTS_CAROUSEL , payload: data };
}

export function upsertPost(data) {
  return { type: UPSERT_POST , payload: data };
}

export function getPost(data) {
  return { type: GET_POST , payload: data };
}

export function getPosts(data) {
  return { type: GET_POSTS , payload: data };
}

