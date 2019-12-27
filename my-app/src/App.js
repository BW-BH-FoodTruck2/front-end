import React, { useState } from 'react';
import {Route, Link, Switch} from "react-router-dom"

import WelcomePage from "../src/components/WelcomePage"
import SignUpPage from "../src/components/SignUpPage"

import './App.css';


function App() {
  return (
    <main>
<Link to='/'> Home </Link> 
<Link to='/SignUp'> SignUp </Link> 

<Switch>
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
