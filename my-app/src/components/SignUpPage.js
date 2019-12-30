import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const Form = styled.form`
display:flex
flex-direction:column
background-color: grey
width:30.5%
height:310px
align-items:center
justify-content:center
margin:0 26.5%
margin-top:5.5%
`;
const Div = styled.div`
  display:flex
  flex-direction:column
  margin:1%
  justify-content:center
`;

const H1 = styled.h1`
margin: .5% 22%

`;
const H2 = styled.h2`
 margin 2% auto
`;

export default function SignUpPage(){
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
        <H1>Welcome to the best place to find food trucks near you,<br/> come join the many people who love and enjoy food truck near them!</H1>
        <Form> 
      

      <H2> Sign Up </H2>

    <Div>
    <TextField id="standard-basic" label="Email" 
      id='email'
      name='Email'
      type='text'
      />
    </Div>

    <Div>
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
      <br/>
      <Button variant="contained" color="primary" href="#contained-buttons" component={Link} to="/SignUp">
      Join Now!
        </Button>
      <br/>
      </Div>
    </Form>
      
    </section>

    );
}