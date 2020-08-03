import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./modules";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootSaga from "./saga";

const persistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["auth"], // which reducer want to store
};
const pReducer = persistReducer(persistConfig, reducers);

const composeEnhancers =
  (process.env.NODE_ENV !== "production"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;
const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  pReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);
export { persistor, store };
