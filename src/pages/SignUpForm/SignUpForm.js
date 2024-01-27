import "./SignUpForm.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";

const baseUrl = "http://localhost:8080";
const signupUrl = `${baseUrl}/signup`;

const SignUpForm = () => {
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    
    const renderSignUp = () => (
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={handleSignup}>
            <div className="form-group">
              Username: <input type="text" name="username" />
            </div>
            <div className="form-group">
              Name: <input type="text" name="name" />
            </div>
            <div className="form-group">
              Password: <input type="password" name="password" />
            </div>
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
          </form>
        </div>
      );

      const handleSignup = (e) => {
        e.preventDefault();
        const newUser = {
          username: e.target.username.value,
          name: e.target.name.value,
          password: e.target.password.value
        }
        axios.post(signupUrl, newUser).then((response)=> {
           setIsSignedUp(true);
          })
        //Here send a POST request to signupUrl with username, name and password data
      };


  return renderSignUp();
}

export default SignUpForm;