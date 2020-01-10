import React, { useEffect, useState } from 'react';
import ATruckCard from './ATruckCard';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import login from '../components/Login';
import AddTruck from './AddTruck';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import styled from 'styled-components';
import Logo from'../Logo/FoodTruckLogo.png'

export default function TruckList (props){
	const DIV = styled.div`
display:flex
max-width:100%
flex-wrap:wrap
justify-content:center

img{
	width:10%
}
`;

	const [ trucks, setTrucks ] = useState([]);
	const [ refresh, setRefresh ] = useState(false);

	useEffect(
		() => {
			axiosWithAuth()
				.get('https://food-truck-trackr.herokuapp.com/api/trucks')
				.then((response) => {
					setTrucks(response.data);
				})
				.catch((error) => {
					console.error('Server Error', error);
				});
		},
		[ refresh ]
	);

	const removeTruck = () => {};

	return (
		<section className='character-list'>
			<DIV>
			<img src={Logo} alt='Food Truck'></img>
			</DIV>
			<DIV>
				{trucks.map((truck) => (
					<ATruckCard
						refresh={refresh}
						trucksState={trucks}
						setRefresh={setRefresh}
						image={truck.imageURL}
						key={truck.id}
						id={truck.id}
						name={truck.truckName}
						cuisine={truck.cuisineType}
					/>
				))}
			</DIV>

			<Link exact to='/addtruck'>
				<CardActions>
					<IconButton>Add Food Truck</IconButton>
				</CardActions>
			</Link>
		</section>
	);
}
