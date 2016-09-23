import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import asyncMiddleware from 'redux-async';


import reducer from './modules';

const middleware = applyMiddleware(thunk, asyncMiddleware);

export default (data = {}) => {
    const rootReducer = combineReducers({ atom: reducer });

    return createStore(rootReducer, data, middleware)
}