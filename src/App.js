import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './actions/actions';
import Login from './components/Login';
import Register from './components/Register';
import TruckList from './components/ATruckList';
import { PrivateRouter } from './components/PrivateRoute';
import AddTruck from './components/AddTruck';
import EditTruck from './components/EditTruck';
import Footer from './components/Footer'
import styled from 'styled-components';


function App (props){
	const [ isLoggedIn, setIsLoggedIn ] = useState(false);
	const [ trucks, setTrucks ] = useState([]);

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

	return (
		<div className='App'>
			<Header toggleLogin={toggleLogin} isLoggedIn={isLoggedIn} />
			<Route exact path='/register' component={Register} />

			<PrivateRouter exact path='/' component={TruckList} />

			<Route
				path='/edittruck/:slug'
				render={(props) => <EditTruck {...props} trucks={trucks} setTrucks={setTrucks} />}
			/>
			<Route exact path='/addtruck' component={AddTruck} />
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
