import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/actions';
import { Wrapper, LoginPage, Button } from '../styles/Login.js';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styles from 'styled-components';

const Login = (props) => {
	const [ credentials, setCredentials ] = useState({
		role     : 1,
		username : '',
		password : ''
	});

	//Login on form submit
	const submitHandler = (e) => {
		e.preventDefault();

		axiosWithAuth()
			.post('https://food-truck-trackr.herokuapp.com/api/auth/login', credentials)
			.then((response) => {
				console.log(credentials);
				console.log('LOGIN RESPONSE: ', response);
				localStorage.setItem('token', response.data.payload);
				props.history.push('/protected');
			})
			.catch((error) => {
				console.log(credentials);
				console.log('LOGIN ERROR: ', error);
			});

		// props.login(credentials).then(() => {
		// 	props.toggleLogin(null);
		// 	props.setIsLoggedIn(true);
		// });
	};

	const handleChange = (e) => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div>
			<Wrapper>
				<LoginPage>
					<h2 className='log-in-h2'>Log In</h2>
					<form onSubmit={submitHandler} autoComplete='off'>
						<div className='form-input'>
							<span>Role</span>
							<input
								type='text'
								name='role'
								value={credentials.role}
								onChange={handleChange}
								autoComplete='off'
							/>
						</div>
						<div className='form-input'>
							<span>Username</span>
							<input
								type='text'
								name='username'
								value={credentials.username}
								onChange={handleChange}
								autoComplete='off'
							/>
						</div>

						<div className='form-input'>
							<span>Password</span>
							<input
								type='password'
								name='password'
								value={credentials.password}
								onChange={handleChange}
								autoComplete='off'
							/>
						</div>

						<Button type='submit'>Log In</Button>
					</form>
				</LoginPage>
			</Wrapper>
		</div>
	);
};

// const mapDispatchToProps = {
// 	login
// };

// export default connect((state) => {
// 	return state;
// }, mapDispatchToProps)(Login);

export default Login;
