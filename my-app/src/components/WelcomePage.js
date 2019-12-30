import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const Form = styled.form`
display:flex
flex-direction:column
background-color: grey
width:32%
height:20%
align-items:center
justify-content:center
margin:0 26.5%
margin-top:6%
`;
const Div = styled.div`
  display:flex
  flex-direction:column
  margin:1%
  justify-content:center
`;

const H1 = styled.h1`
margin: 2% 26.5%

`;
const H2 = styled.h2`
 margin 2% auto
`;

export default function WelcomePage(){
  const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));
  
  const classes = useStyles();
    return (
<section className="welcome-page">
      
        <H1>Welcome to the best place to find food trucks near you!</H1>
<Form className={classes.root} noValidate autoComplete="off">
      <Div>
      <H2> Sign In </H2>
      
      <TextField id="standard-basic" label="User Name"  
      id='userName'
      name='UserName'
      type='text'
      />

    </Div>

    <Div>
    <TextField id="standard-basic" label="Password"  
      id='password'
      name='Password'
      type='text'
      />
  </Div>

      
    <div class="welcome">
      <Button variant="contained" color="primary" href="#contained-buttons">
        Sign In 
      </Button>
    
    <p>No account yet? Creat one now!</p>
    <Button variant="contained" color="primary" href="#contained-buttons" component={Link} to="/SignUp">
      Sign Up
    </Button>
    </div>
      
</Form>
      
    </section>

    );
}