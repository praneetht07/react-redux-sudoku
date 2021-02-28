import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import rootReducer from './reducers';
import App from './App';

const finalCreateStore = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = finalCreateStore(rootReducer);

ReactDOM.render(
	<App store={store} />,
	document.getElementById('root')
);