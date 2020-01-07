import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './actions/actions';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { PrivateRouter } from './components/PrivateRoute';

function App (props){
	const [ isLoggedIn, setIsLoggedIn ] = useState(false);

	useEffect(
		() => {
			if (localStorage.getItem('token')) {
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
		},
		[ isLoggedIn ]
	);

	const toggleLogin = (e) => {
		e.preventDefault();
	};

	const logOut = (e) => {
		e.preventDefault();
		console.log('LOGGING OUT');

		localStorage.removeItem('token');
		window.location.reload();
	};

	return (
		<div className='App'>
			<Header toggleLogin={toggleLogin} logOut={logOut} isLoggedIn={isLoggedIn} />
			<Route exact path='/register' component={Register} />
			<PrivateRouter path='/' component={Home} />
			<Route exact path='/login' component={Login} />
		</div>
	);
}

function mapStateToProps (state){
	return { state: state };
}

const mapDispatchToProps = {
	//ACTIONS HERE
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
