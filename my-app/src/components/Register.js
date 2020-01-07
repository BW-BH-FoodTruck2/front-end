import React, { useState } from "react";
import {Redirect} from 'react-router-dom';
import axios from 'axios'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';

//STYLES
import {
  RegisterPage,
  Button,
} from "../styles/Register.js";

const Registration = props => {
  const [credentials, setCredentials] = useState({
    role: 1,
    username: '',
    password: '',
    location: ''
  });

  

  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
  });
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const [confirmation, setConfirmation] = useState(false);

  //Login on form submit
  const submitHandler = e => {
    e.preventDefault();
    axios
    .post('https://food-truck-trackr.herokuapp.com/api/auth/register', credentials)
    .then((response) => {
      console.log(credentials);
      console.log('REGISTER RESPONSE: ', response);
      props.history.push('/login')
    })
    .catch((error) => {
      console.log(credentials);
      console.log('REGISTER ERROR: ', error);
    });
  };

  const toggleConfirm = () => {
    setConfirmation(!confirmation);
  }

  const validateField = (name, value) => {
    let fieldValidationErrors = formErrors;
    let formUsernameValid = usernameValid;
    let formPasswordValid = passwordValid;

    switch (name) {
      case "username":
        formUsernameValid = value.length >= 4;
        fieldValidationErrors.username = formUsernameValid
          ? ""
          : " is too short";
        break;
      case "password":
        formPasswordValid = value.length >= 6;
        fieldValidationErrors.password = formPasswordValid
          ? ""
          : " is too short";
        break;
      default:
        break;
    }
    setFormErrors(fieldValidationErrors);
    setUsernameValid(formUsernameValid);
    setPasswordValid(formPasswordValid);
  };

  const validateForm = () => {
    if (usernameValid && passwordValid && confirmPasswordValid) {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = e => {
    setCredentials({
      ...credentials, [e.target.name]: e.target.value
    });
    validateField(e.target.name, e.target.value);
  };


  return (
    <>

      <RegisterPage>
        

        <form onSubmit={submitHandler} autoComplete="off">
          <h2>Sign Up</h2>

          {/* <DropdownButton id="dropdown-basic-button" title="Choose Role">
          <Dropdown.Item onClick={isDiner}>Diner</Dropdown.Item>
          <Dropdown.Item onClick={Operator}>Operator</Dropdown.Item>
          </DropdownButton> */}
            <div className="form-input">
            <span>Role</span>
            <input
              type="text"
              name="role"
              value={credentials.role}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <div className="form-input">
            <span>Username</span>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              autoComplete="off"
            />
            {formErrors.username ? (
              <span className="input-error">Username {formErrors.username}</span>
            ) : (
              <span> </span>
            )}
          </div>

          <div className="form-input">
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              autoComplete="off"
            />
            {formErrors.password ? (
              <span className="input-error">
                Password {formErrors.password}
              </span>
            ) : (
              <span> </span>
            )}
          </div>
          {/* <div className="form-input">
            <span>Confirm Password</span>
            <input
              type="password"
              name="confirmPassword"
              value={credentials.confirmPassword}
              onChange={handleChange}
              autoComplete="off"
            />
            {formErrors.confirmPassword ? (
              <span className="input-error">{formErrors.confirmPassword}</span>
            ) : (
              <span> </span>
            )}
          </div> */}
          <div className="form-input">
            <span>Location</span>
            <input
              type="text"
              name="location"
              value={credentials.location}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          {/*************** CHANGE FOR ACTUAL VALIDATION ******************/}
          
            <Button type="submit">Sign Up</Button>
         
        </form>
      </RegisterPage>
    </>
  );
};

// const mapDispatchToProps = {
//   register
// };

// export default connect(state => { 
//   return state;
// }, mapDispatchToProps)(Registration);

export default Registration;