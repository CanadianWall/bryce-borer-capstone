import "./LogIn.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:8080";
const loginUrl = `${baseUrl}/login`;

const LogIn = (props) => {
  const navigate = useNavigate();
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  


  const handleLogin = (e) => {
    e.preventDefault();

    alert("You are logged in!")
    navigate('/');
    
  };

  const renderLogin = () => (
    <div>
      <h1>Login</h1>
      {isLoginError && <label className="error">{errorMessage}</label>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          Username: <input type="text" name="username" />
        </div>
        <div className="form-group">
          Password: <input type="password" name="password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );

  return renderLogin();

}

export default LogIn;