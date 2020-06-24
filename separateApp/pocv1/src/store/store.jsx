import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/index";
import { createLogger } from "redux-logger";

import rootReducer from '../reducers/index'

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
export const middlewares = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

middlewares.push(loggerMiddleware);
middlewares.push(thunkMiddleware);


const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);

export default store;
