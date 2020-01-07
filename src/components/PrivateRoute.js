import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import styles from 'styled-components';

export const PrivateRouter = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => (localStorage.getItem('token') ? <Component {...props} /> : <Redirect to='/login' />)}
		/>
	);
};
