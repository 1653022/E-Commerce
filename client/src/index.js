import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import appReducers from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore(
    appReducers,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    , document.getElementById('root')

);

serviceWorker.unregister();
