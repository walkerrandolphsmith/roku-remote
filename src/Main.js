import React from 'react'
import { Component } from 'react-native';
import { Provider } from 'react-redux';

import App from './app/components/App';

import createStore from './createStore'

const store = createStore();

const Main = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
};

export default Main