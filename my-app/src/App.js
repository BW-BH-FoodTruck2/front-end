import React, { useState } from 'react';
import {Route, Link, Switch} from "react-router-dom"
import styled from 'styled-components'

import TruckList from "../src/components/ATruckList"
import WelcomePage from "../src/components/WelcomePage"
import SignUpPage from "../src/components/SignUpPage"

import './App.css';



function App() {
  return (
    <main>

<div class ='Nav'>
<Link to='/' > Home </Link> 
<Link to='/SignUp' > SignUp </Link> 
<Link to='/Trucks'> Trucks Near You </Link> 
</div>

<Switch>
  <Route exact path="/Trucks">
       <TruckList/>
       </Route>

       <Route exact path="/SignUp">
       <SignUpPage/>
       </Route>
       
       <Route exact path="/">
       <WelcomePage/>
       </Route>
</Switch>
</main>
  );
}

export default App;
