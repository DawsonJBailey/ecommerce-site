import { compose, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { rootReducer } from "./root-reducer";
import {persistStore, persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";

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

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger];
// const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);