import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { AddTruckPage, Button } from '../styles/AddTruck.js';
import { Redirect } from 'react-router-dom';

const AddTruck = (props) => {
	const [ truck, setTruck ] = useState({ truckName: '', cuisineType: '', operatorID: 1, imageURL: '' });

	const handleChange = (e) => {
		setTruck({ ...truck, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post('https://food-truck-trackr.herokuapp.com/api/trucks', truck)
			.then((response) => {
				console.log(truck);
				console.log('ADD TRUCK RESPONSE: ', response);
				setTruck({ ...truck, truckName: '', cuisineType: '', operatorID: 1, imageURL: '' });
				props.history.push('/');
			})
			.catch((error) => {
				console.log('ADD TRUCK ERROR: ', error);
			});
	};

	return (
		<AddTruckPage>
			<h2 className='log-in-h2'>Add Truck</h2>
			<form onSubmit={handleSubmit}>
				<div className='form-input'>
					<h4>Operator Id</h4>
					<input type='text' onChange={handleChange} name='operatorID' value={truck.operatorID} />
				</div>
				<div className='form-input'>
					<h4>Truck Name</h4>
					<input type='text' onChange={handleChange} name='truckName' value={truck.truckName} />
				</div>
				<div className='form-input'>
					<h4>Cuisine Type</h4>
					<input type='text' onChange={handleChange} name='cuisineType' value={truck.cuisineType} />
				</div>
				<div className='form-input'>
					<h4>Truck Image</h4>
					<input type='text' onChange={handleChange} name='imageURL' value={truck.imageURL} />
				</div>

				<Button type='submit'>Add Truck</Button>
			</form>
		</AddTruckPage>
	);
};

export default AddTruck;
