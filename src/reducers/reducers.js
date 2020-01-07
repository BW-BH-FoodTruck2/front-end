import { GET_START, GET_SUCCESS, GET_FAILURE } from '../actions/actions';
import styles from 'styled-components';

let initialState = {
	error    : null,
	user_id  : null,
	username : ''
};

export default function reducer (state = initialState, action){
	switch (action.type) {
		//*******************************************************
		// //payload: none
		// case REGISTER_START:
		// 	return {
		// 		...state,
		// 		registering : true
		// 	};
		// case REGISTER_SUCCESS:
		// 	return {
		// 		...state,
		// 		registering : false,
		// 		registered  : true
		// 	};
		// case REGISTER_FAILURE:
		// 	return {
		// 		...state,
		// 		registering : false,
		// 		registered  : false
		// 	};

		//*******************************************************
		// //payload: none
		// case LOGIN_START:
		// 	return {
		// 		...state,
		// 		loggingIn : true
		// 	};
		// case LOGIN_SUCCESS:
		// 	localStorage.setItem('username', action.payload);
		// 	return {
		// 		...state,
		// 		loggingIn : false,
		// 		loggedIn  : true,
		// 		username  : action.payload
		// 	};
		// case LOGIN_FAILURE:
		// 	return {
		// 		...state,
		// 		loggingIn : false,
		// 		loggedIn  : false
		// 	};

		// //*******************************************************
		//payload: none
		case GET_START:
			return {
				...state
			};
		case GET_SUCCESS:
			return {
				...state
			};
		case GET_FAILURE:
			return {
				...state
			};
		default:
			return state;
	}
}
