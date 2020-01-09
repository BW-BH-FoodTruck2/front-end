import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import TruckList from './ATruckList';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';

const Span = styled.span`
border-radius: 10px
width:350px
margin:1%
box-shadow: 10px 10px 8px 10px #888888
`;

const useStyles = makeStyles((theme) => ({
	card       : {
		maxWidth : 345
	},
	media      : {
		height     : 0,
		paddingTop : '56.25%' // 16:9
	},
	expand     : {
		transform  : 'rotate(0deg)',
		marginLeft : 'auto',
		transition : theme.transitions.create('transform', {
			duration : theme.transitions.duration.shortest
		})
	},
	expandOpen : {
		transform : 'rotate(180deg)'
	},
	avatar     : {
		backgroundColor : red[500]
	}
}));

const ATruckCard = (props) => {
	const classes = useStyles();

	const deleteTruck = () => {
		axiosWithAuth()
			.delete(`https://food-truck-trackr.herokuapp.com/api/trucks/${props.id}`)
			.then((response) => {})
			.catch((error) => {
				console.log('DELETE TRUCK ERROR: ', error);
			})
			.finally(() => {
				props.setRefresh(!props.refresh);
			});
	};

	return (
		<Span>
			<Card className={classes.card}>
				<CardHeader
					action={
						<IconButton aria-label='settings'>
							<MoreVertIcon />
						</IconButton>
					}
					title={props.name}
				/>
				<CardMedia className={classes.media} image={props.image} title={props.cuisine} />
				<CardContent>
					<p>The food available on this truck will is {props.cuisine}</p>
				</CardContent>

				<CardActions disableSpacing>
					<Link exact to={`/edittruck/${props.id}`}>
						<CardActions>
							<IconButton>Edit</IconButton>
						</CardActions>
					</Link>
					<IconButton onClick={deleteTruck}>Delete</IconButton>
				</CardActions>
			</Card>
		</Span>
	);
};

// function mapStateToProps (state){
// 	return { state: state };
// }

// const mapDispatchToProps = {
// 	//ACTIONS HERE
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ATruckCard);
export default ATruckCard;
