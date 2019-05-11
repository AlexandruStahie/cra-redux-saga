import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import mySaga from "./sagas";

import { createLogger } from 'redux-logger'


// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({});

// mount it on the Store
export default createStore(reducer, applyMiddleware(sagaMiddleware, logger));

// then run the saga
sagaMiddleware.run(mySaga);
