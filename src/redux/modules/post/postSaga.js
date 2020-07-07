import { put, call, getContext } from 'redux-saga/effects'
import { queries } from './postQueries'
// Actions   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { GET_POSTS_CAROUSEL } from './postTypes';
import { UPDATE_POST } from './postTypes'
import { GET_POSTS } from './postTypes'
import { GET_POST } from './postTypes'
import { CREATE_POST } from './postTypes'

// reqFunction   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
function* getPostsReq({ limit, page }) {
  const client = yield getContext('client')
  const mutation = queries.GET_POSTS

  return yield call(client.mutate, { mutation,
    variables: { limit, page }
  })
}

function* getPostReq({ id }) {
  const client = yield getContext('client')
  const mutation = queries.GET_POST

  return yield call(client.mutate, { mutation,
    variables: { id }
  })
}

function* createPostReq({ title, published, body, imageUrl, userId }) {
  const client = yield getContext('client')
  const mutation = queries.CREATE_POST

  return yield call(client.mutate, { mutation,
    variables: {
      title, 
      published, 
      body, 
      imageUrl, 
      userId
    }
  })
}

function* updatePostReq({ id, title, published, body, imageUrl }) {
  const client = yield getContext('client')
  const mutation = queries.UPDATE_POST

  return yield call(client.mutate, { mutation,
    variables: {
      id,
      title, 
      published, 
      body, 
      imageUrl
    }
  })
}


// exportFuntion   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export function* getPostsCarousel(action) {
  try {
    const { data } = yield getPostsReq(action.payload)
    yield put({ type: `${GET_POSTS_CAROUSEL}_SUCCESS`, payload: data.posts })
  } catch(error) {
    yield put({ type: `${GET_POSTS_CAROUSEL}_FAIL`, payload: error })
  }
}

export function* getPosts(action) {
  try {
    const { data } = yield getPostsReq(action.payload)
    yield put({ type: `${GET_POSTS}_SUCCESS`, payload: data.posts })
  } catch(error) {
    yield put({ type: `${GET_POSTS}_FAIL`, payload: error })
  }
}

export function* getPost(action) {
  try {
    const { data } = yield getPostReq(action.payload)
    yield put({ type: `${GET_POST}_SUCCESS`, payload: data.post })
  } catch(error) {
    yield put({ type: `${GET_POST}_FAIL`, payload: error })
  }
}

export function* createPost(action) {
  try {
    const { data } = yield createPostReq(action.payload)
    yield put({ type: `${CREATE_POST}_SUCCESS`, payload: data.createPost })
  } catch(error) {
    yield put({ type: `${CREATE_POST}_FAIL`, payload: error })
  }
}

export function* updatePost(action) {
  try {
    const { data } = yield updatePostReq(action.payload)
    yield put({ type: `${UPDATE_POST}_SUCCESS`, payload: data.updatePost })
  } catch(error) {
    yield put({ type: `${UPDATE_POST}_FAIL`, payload: error })
  }
}


