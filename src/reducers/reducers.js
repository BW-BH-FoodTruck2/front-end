import {
	DELETE_TRUCK,
	DELETE_TRUCK_SUCCESS,
	DELETE_TRUCK_FAILURE,
	UPDATE_TRUCK,
	UPDATE_TRUCK_SUCCESS,
	UPDATE_TRUCK_FAILURE
} from '../actions/actions';

let initialState = {
	trucks : []
};

export default function reducer (state = initialState, action){
	switch (action.type) {
		case DELETE_TRUCK:
			return {
				...state
			};
		case DELETE_TRUCK_SUCCESS:
			return {
				...state,
				trucks : action.payload
			};
		case DELETE_TRUCK_FAILURE:
			return {
				...state,
				error : action.payload
			};

		case UPDATE_TRUCK:
			return {
				...state
			};
		case UPDATE_TRUCK_SUCCESS:
			return {
				...state,
				trucks : action.payload
			};
		case UPDATE_TRUCK_FAILURE:
			return {
				...state,
				error : action.payload
			};
		default:
			return state;
	}
}
