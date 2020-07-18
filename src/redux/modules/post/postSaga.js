import { put, call, getContext } from 'redux-saga/effects'
import { queries } from './postQueries'
// Actions   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { GET_POSTS_CAROUSEL } from './postTypes';
import { GET_POST } from './postTypes'
import { GET_POSTS } from './postTypes'
import { UPSERT_POST } from './postTypes'

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

function* upsertPostReq({ id, title, published, body, imageUrl, userId }) {
  const client = yield getContext('client')
  const mutation = queries.UPSERT_POST

  return yield call(client.mutate, { mutation,
    variables: {
      id,
      title, 
      published, 
      body, 
      imageUrl,
      userId
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

export function* upsertPost(action) {
  try {
    const { data } = yield upsertPostReq(action.payload)
    yield put({ type: `${UPSERT_POST}_SUCCESS`, payload: data.upsertPost })
  } catch(error) {
    yield put({ type: `${UPSERT_POST}_FAIL`, payload: error })
  }
}


