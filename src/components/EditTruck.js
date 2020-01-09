import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { EditTruckPage, Button } from '../styles/EditTruck.js';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';
import { useParams } from 'react-router-dom';

const initialTruck = {
	truckName   : '',
	cuisineType : '',
	operatorID  : 1,
	imageURL    : ''
};

const EditTruck = (props) => {
	const slug = useParams().slug;
	console.log(slug);
	console.log(props);
	const [ truck, setTruck ] = useState(initialTruck);
	useEffect(
		() => {
			axiosWithAuth()
				.get(`https://food-truck-trackr.herokuapp.com/api/trucks/${slug}`)
				.then((res) => {
					console.log(res.data);
					setTruck(res.data);
				})
				.catch((error) => {
					console.error('Server Error', error);
				});
		},
		[ props.trucks ]
	);

	const changeHandler = (e) => {
		e.persist();
		let value = e.target.value;
		setTruck({
			...truck,
			[e.target.name]: value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.put(`https://food-truck-trackr.herokuapp.com/api/trucks/${slug}`, truck)
			.then((res) => {
				console.log(res);
				console.log(truck);
				const updateItems = props.trucks.map((item) => {
					if (item.id === truck.id) {
						return (item = res.data);
					} else {
						return item;
					}
				});
				setTruck({ trucks: updateItems });
				console.log(truck);
				props.history.push('/');
			})
			.catch((err) => console.log(err));
	};

	return (
		<EditTruckPage>
			<h2 className='log-in-h2'>Edit Truck</h2>
			<form onSubmit={handleSubmit}>
				<div className='form-input'>
					<h4>Operator Id</h4>
					<input type='text' name='operatorID' onChange={changeHandler} value={truck.operatorID} />
				</div>
				<div className='form-input'>
					<h4>Truck Name</h4>
					<input type='text' name='truckName' onChange={changeHandler} value={truck.truckName} />
				</div>
				<div className='form-input'>
					<h4>Cuisine Type</h4>
					<input type='text' name='cuisineType' onChange={changeHandler} value={truck.cuisineType} />
				</div>

				<div className='form-input'>
					<h4>Image Url</h4>
					<input type='text' name='imageURL' onChange={changeHandler} value={truck.imageURL} />
				</div>
				<Button type='submit'>Update</Button>
			</form>
		</EditTruckPage>
	);
};

export default EditTruck;
