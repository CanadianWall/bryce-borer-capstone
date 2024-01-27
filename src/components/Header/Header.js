import "./Header.scss";
import React, { useState, useEffect, useRef } from "react";

const Header = () => {

    return(
        <header>
      <nav>
        <div className="logo">
          <a href="/">Logo</a>
        </div>
        <ul className="nav-links">
          <li><a href="/trends">Trends</a></li>
          <li><a href="/login">Log In</a></li>
          <li><a href="/signup">Sign Up</a></li>
          <li><a href="/account">Account</a></li>
        </ul>
      </nav>
    </header>
    )
}


export default Header;
