import "./Header.scss";
import React, { useState } from "react";
import logo from "../../assets/images/logo-title-new.png"


const Header = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);

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
