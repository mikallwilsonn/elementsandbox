// ----
// Dependencies
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './theme/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


// ----
// Application
import Application from './components/Application';


// ----
// Reducers
import reducers from './reducers';


// ----
// Store
const store = createStore( reducers, {}, applyMiddleware( reduxThunk ));


// ----
// Render the application
ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.querySelector( '#root' )
);
