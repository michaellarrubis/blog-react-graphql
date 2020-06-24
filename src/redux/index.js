import { createStore, compose } from 'redux'
// import { createStore, applyMiddleware, compose } from 'redux'
// import reducers from './modules'
// import createSagaMiddleware from 'redux-saga'

// import rootSaga from './saga'

const composeEnhancers = (process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose
// const sagaMiddleware = createSagaMiddleware()

let store = createStore(
  // reducers,
  // composeEnhancers(applyMiddleware(sagaMiddleware))
  composeEnhancers()
)

// sagaMiddleware.run(rootSaga)

export default store
