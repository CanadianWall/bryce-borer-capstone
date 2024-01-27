import "./Home.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import MealProcessing from "../../components/MealProcessing/MealProcessing";

const baseUrl = "http://localhost:8080";
const signupUrl = `${baseUrl}/signup`;
const loginUrl = `${baseUrl}/login`;

const Home = () => {

    return (
        <main>
            
            <MealProcessing />

        </main>
    )
}

export default Home;