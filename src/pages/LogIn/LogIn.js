import "./LogIn.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:8080";

const LogIn = (props) => {
  const navigate = useNavigate();
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