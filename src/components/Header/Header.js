import "./Header.scss";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/images/logo-title-new.png"


const Header = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
    const [userName, setUserName] = useState(props.userName);

    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const baseUrl = "http://localhost:8080";
    const accountUrl = `${baseUrl}/account`;

    return (
        <header className="header">
            <nav>
                <div className="header__logo">
                    <a href="/">
                        <img
                            src={logo}
                            alt="Logo"
                            className="header__logo--title" />
                    </a>
                </div>
                <ul className="header__links">
                    <li className="header__links--item"><a href="/trends">Trends</a></li>
                    <li className="header__links--item"><a href="/login">{isLoggedIn ? (props.userName) : ("Log In")}</a></li>
                    <li className="header__links--item"><a href="/signup">Sign Up</a></li>
                    <li className="header__links--item"><a href="/account">Account</a></li>
                </ul>
            </nav>
        </header>
    )
}


export default Header;
