import { compose, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { rootReducer } from "./root-reducer";
import {persistStore, persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";

const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action);
    }
    console.log('type: ', action.type)
    console.log('payload: ', action.payload)
    console.log('current state: ', store.getState())
    // This causes everything to go to reducers 
    next(action);
    // Then store.getState() will have the new state
    console.log('next state: ', store.getState())
}

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger, sagaMiddleware];
// const middleWares = [logger, thunk];
// const middleWares = [loggerMiddleware];

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);