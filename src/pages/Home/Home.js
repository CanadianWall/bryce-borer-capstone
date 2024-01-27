import "./Home.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import MealProcessing from "../../components/MealProcessing/MealProcessing";
import Header from "../../components/Header/Header";

const baseUrl = "http://localhost:8080";
const signupUrl = `${baseUrl}/signup`;
const loginUrl = `${baseUrl}/login`;

const Home = () => {
    const [foodMacros, setFoodMacros] = useState({
        foodMacros: 
        {foodName: '',
        size: 0,
        calories: 0,
        carbs: 0,
        protein: 0,
        fat: 0,
        sugar: 0}
    })

    const handleFoodLogging = () => {

    }

    const updateFoodMacros  = (newData) => {
        setFoodMacros(newData);
    }
    return (
        <main>

            <MealProcessing
                foodMacros={foodMacros}
                updateFoodMacros={updateFoodMacros}
            />
            {foodMacros.foodMacros.foodName ? (
            <div className="food">
                <h2 className="food__name">Looks like a delicious {foodMacros.foodMacros.foodName}</h2>
                <h3 className="food__facts"> Here are some food facts on your meal:</h3>
                <h4 className="food__facts--info"> Portion size: {foodMacros.foodMacros.size}g</h4>
                <h4 className="food__facts--info"> Calories: {foodMacros.foodMacros.calories}g</h4>
                <h4 className="food__facts--info"> Carbohydrates: {foodMacros.foodMacros.carbs}g</h4>
                <h4 className="food__facts--info"> Proteins: {foodMacros.foodMacros.protein}g</h4>
                <h4 className="food__facts--info"> Sugars: {foodMacros.foodMacros.sugar}g</h4>

                <button className="food--button" onClick={handleFoodLogging}> Log my food!</button>
                </div>
            ) : (<div></div>)}

        </main>
    )
}

export default Home;