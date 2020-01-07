import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// export const LOGIN_START = 'LOGIN_START';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// export const REGISTER_START = 'REGISTER_START';
// export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
// export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const GET_START = 'GET_START';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';

// export const register = (credentials) => (dispatch) => {
// 	dispatch({ type: REGISTER_START });

// 	if (credentials.role === 2) {
// 		return axios
// 			.post('https://food-truck-trackr.herokuapp.com/api/auth/register', credentials)
// 			.then((response) => {
// 				console.log(credentials);
// 				console.log('REGISTER RESPONSE: ', response);
// 				dispatch({ type: REGISTER_SUCCESS });
// 			})
// 			.catch((error) => {
// 				console.log('REGISTER ERROR: ', error);
// 				dispatch({ type: REGISTER_FAILURE });
// 			});
// 	} else if (creds.role === 1) {
// 		return axios
// 			.post('https://food-truck-trackr.herokuapp.com/api/auth/register', creds)
// 			.then((response) => {
// 				console.log('REGISTER RESPONSE: ', response);
// 				dispatch({ type: REGISTER_SUCCESS });
// 			})
// 			.catch((error) => {
// 				console.log('REGISTER ERROR: ', error);
// 				dispatch({ type: REGISTER_FAILURE });
// 			});
// 	}
// };

// export const login = (creds) => (dispatch) => {
// 	console.log(creds);
// 	dispatch({ type: LOGIN_START });
// 	return axios
// 		.post('https://food-truck-trackr.herokuapp.com/api/auth/login', creds)
// 		.then((response) => {
// 			console.log('LOGIN RESPONSE: ', response);
// 			localStorage.setItem('token', response.data.token);
// 			dispatch({ type: LOGIN_SUCCESS, payload: creds.email });
// 			return true;
// 		})
// 		.catch((error) => {
// 			console.log('LOGIN ERROR: ', error);
// 			dispatch({ type: LOGIN_FAILURE, payload: error.response.message });
// 		});
// };

// export const getHome = () => (dispatch) => {
// 	dispatch({ type: GET_START });
// 	axiosWithAuth()
// 		.get('')
// 		.then((response) => {
// 			console.log('GETHOME RESPONSE: ', response);
// 			dispatch({ type: GET_SUCCESS });
// 		})
// 		.catch((error) => {
// 			console.log('GETHOME ERROR: ', error);
// 			dispatch({ type: GET_FAILURE });
// 		});
// };
