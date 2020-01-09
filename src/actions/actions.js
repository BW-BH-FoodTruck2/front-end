import { axiosWithAuth } from '../utils/axiosWithAuth';

export const DELETE_TRUCK = 'DELETE_TRUCK';
export const DELETE_TRUCK_SUCCESS = 'DELETE_TRUCK_SUCCESS';
export const DELETE_TRUCK_FAILURE = 'DELETE_TRUCK_FAILURE';

export const UPDATE_TRUCK = 'UPDATE_TRUCK';
export const UPDATE_TRUCK_SUCCESS = 'UPDATE_TRUCK_SUCCESS';
export const UPDATE_TRUCK_FAILURE = 'UPDATE_TRUCK_FAILURE';

export const deleteTruck = (id) => (dispatch) => {
	console.log(`Truck Id: ${id}`);
	dispatch({ type: DELETE_TRUCK });
	axiosWithAuth()
		.delete(`https://food-truck-trackr.herokuapp.com/api/trucks/${id}`)
		.then((res) => {
			dispatch({ type: DELETE_TRUCK_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			console.error('error', err);
			dispatch({ type: DELETE_TRUCK_FAILURE, payload: err });
		});
};

export const updateTruck = (truck) => (id) => (dispatch) => {
	dispatch({ type: UPDATE_TRUCK });
	axiosWithAuth()
		.put(`https://food-truck-trackr.herokuapp.com/api/trucks/${id}`, truck)
		.then((res) => {
			axiosWithAuth().get(`https://food-truck-trackr.herokuapp.com/api/trucks/${id}`).then((res) => {
				dispatch({ type: UPDATE_TRUCK_SUCCESS, payload: res.data });
			});
		})
		.catch((err) => {
			dispatch({ type: UPDATE_TRUCK_FAILURE, payload: err });
		});
};
