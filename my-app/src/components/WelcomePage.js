import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Form = styled.form`
display:flex
flex-direction:column
background-color: grey
width:30.5%
height:310px
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
const Button = styled.button`
margin:0 auto
`;
const H1 = styled.h1`
margin: 2% 26.5%

`;
const H2 = styled.h2`
 margin 2% auto
`;

export default function WelcomePage(){
    return (
<section className="welcome-page">
      
        <H1>Welcome to the best place to find food trucks near you!</H1>
        <Form> 
      <Div>
      <H2> Sign In </H2>
      <input 
      id='userName'
      placeholder='UserName'
      name='UserName'
      type='text'
      />
    </Div>
    <Div>
    <input 
      id='password'
      placeholder='Password'
      name='Password'
      type='text'
      />
      </Div>
      <br/>
      
      <button > Sign In </button>

      <Link to='./SignUp'>
      <button > Sign Up </button>
      </Link>
      
      
    </Form>
      
    </section>

    );
}