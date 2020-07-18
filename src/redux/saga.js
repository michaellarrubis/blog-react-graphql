import { all, takeLatest, setContext } from 'redux-saga/effects';
import { client } from './../utils/apollo';

// actionTypes   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { GET_POSTS_CAROUSEL  } from './modules/post/postTypes.js';
import { GET_COMMENTS  } from './modules/comment/commentTypes.js';
import { CREATE_COMMENT  } from './modules/comment/commentTypes.js';
import { UPSERT_POST  } from './modules/post/postTypes.js';
import { GET_POST  } from './modules/post/postTypes.js';
import { GET_POSTS  } from './modules/post/postTypes.js';
import { LOGIN_FORM  } from './modules/utils/utilsTypes.js';
import { LOGIN_REGISTER_FORM  } from './modules/utils/utilsTypes.js';
import { AUTH_LOGOUT  } from './modules/auth/authTypes.js';
import { AUTH_REGISTER  } from './modules/auth/authTypes.js';
import { AUTH_LOGIN  } from './modules/auth/authTypes.js';

// sagaActions   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { getPostsCarousel  } from './modules/post/postSaga.js';
import { getComments  } from './modules/comment/commentSaga.js';
import { createComment  } from './modules/comment/commentSaga.js';
import { upsertPost  } from './modules/post/postSaga.js';
import { getPost  } from './modules/post/postSaga.js';
import { getPosts  } from './modules/post/postSaga.js';
import { loginForm  } from './modules/utils/utilsSaga.js';
import { loginRegisterForm  } from './modules/utils/utilsSaga.js';
import { authLogout  } from './modules/auth/authSaga.js';
import { authRegister  } from './modules/auth/authSaga.js';
import { authLogin  } from './modules/auth/authSaga.js';

export default function* rootSaga() {
  yield setContext({ client })
  yield all([
    takeLatest(GET_POSTS_CAROUSEL, getPostsCarousel),
    takeLatest(GET_COMMENTS, getComments),
    takeLatest(CREATE_COMMENT, createComment),
    takeLatest(UPSERT_POST, upsertPost),
    takeLatest(GET_POST, getPost),
    takeLatest(GET_POSTS, getPosts),
    takeLatest(LOGIN_FORM, loginForm),
    takeLatest(LOGIN_REGISTER_FORM, loginRegisterForm),
    takeLatest(AUTH_LOGOUT, authLogout),
    takeLatest(AUTH_REGISTER, authRegister),
    takeLatest(AUTH_LOGIN, authLogin),
  ])
}