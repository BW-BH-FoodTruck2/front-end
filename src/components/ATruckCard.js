import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import styled from 'styled-components'

const Span = styled.span`
display:flex
border:2px solid red
width:30%
min-width:1000px
justify-content:space-around
margin:2%
`;

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
  

export default function ATruckCard(props) {
    const classes = useStyles();


  return (
      <Span>
    <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.name}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.cuisine}
      />
      <CardContent>
        <p>The food available on this truck will be. {props.cuisine}</p>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
            Edit
        </IconButton>
        <IconButton >
            Delete
        </IconButton>
        <IconButton>
            Add
        </IconButton>
      </CardActions>
    </Card>
    </Span>
  );
}
