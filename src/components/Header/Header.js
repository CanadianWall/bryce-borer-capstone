import "./Header.scss";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";


const Header = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
    const [userName, setUserName] = useState(props.userName);

    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
  
    const baseUrl = "http://localhost:8080";
  const accountUrl = `${baseUrl}/account`;
  
    const token = sessionStorage.getItem('authToken')
  
    useEffect(() => {
      // Here grab the token from sessionStorage and then make an axios request to profileUrl endpoint.
      // Remember to include the token in Authorization header
      const token = sessionStorage.getItem('authToken')
  
      axios.get(accountUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        setIsLoading(false)
        setUserInfo(response.data)
      });
    }, []);



    return(
        <header>
      <nav>
        <div className="logo">
          <a href="/">sAIcheese</a>
        </div>
        <ul className="nav-links">
          <li><a href="/trends">Trends</a></li>
          <li><a href="/login">{isLoggedIn ?(props.userName) : ("Log In")}</a></li>
          <li><a href="/signup">Sign Up</a></li>
          <li><a href="/account">Account</a></li>
        </ul>
      </nav>
    </header>
    )
}


export default Header;
