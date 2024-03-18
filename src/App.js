import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import './App.scss';
import "./styles/partials/_global.scss";
import Home from "./pages/Home/Home"
import SignUpForm from "./pages/SignUpForm/SignUpForm";
import Header from "./components/Header/Header";
import Account from "./pages/Account/Account";
import LogIn from "./pages/LogIn/LogIn";
import Trends from "./pages/Trends/Trends";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Bryce");
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header
      isLoggedIn = {isLoggedIn}
      userName = {userName}
      />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LogIn isLoggedIn = {isLoggedIn} userName = {userName}/>} />
          <Route path="/account" element={<Account />} />
          <Route path="/trends" element={<Trends />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
