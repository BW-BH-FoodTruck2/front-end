import axios from 'axios';

export const axiosWithAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		baseURL : 'https://food-truck-trackr.herokuapp.com/api/auth',
		headers : {
			'Content-Type' : 'application/json',
			'authorization'  : token
		}
	});
};
