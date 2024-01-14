import "./Home.scss";
import axios from "axios";
import { API_BASE_URL } from "../../utils/utils";
import React, { useState, useEffect } from "react";
import sandwich from '../../assets/images/ham-sandwich.jpeg'
import pizza from '../../assets/images/pizza.jpeg'
import MealProcessing from "../../components/MealProcessing/MealProcessing";
const FOOD_URL = "https://vision.foodvisor.io/api/1.0/en/analysis/"
const headers = { "Authorization": "Api-Key <YOUR_API_KEY>" }

const Home = () => {

    const fetchFoodData = () => {
        axios
            .get(`FOOD_URL`, pizza)
    }

    return (
        <main>
            <MealProcessing />

        </main>
    )
}

export default Home;