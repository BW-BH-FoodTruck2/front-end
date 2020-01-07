import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore, compose } from 'redux';
import reducers from './reducers/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import 'typeface-poppins';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
