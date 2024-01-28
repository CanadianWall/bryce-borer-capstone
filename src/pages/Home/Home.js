import "./Home.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import MealProcessing from "../../components/MealProcessing/MealProcessing";
import Header from "../../components/Header/Header";

const baseUrl = "http://localhost:8080";
const signupUrl = `${baseUrl}/signup`;
const loginUrl = `${baseUrl}/login`;
const space = ' ';

const Home = () => {
    const [foodMacros, setFoodMacros] = useState({
        foodMacros:
        {
            foodName: '',
            size: 0,
            calories: 0,
            carbs: 0,
            protein: 0,
            fat: 0,
            sugar: 0
        }
    })

    const handleFoodLogging = () => {

    }

    const updateFoodMacros = (newData) => {
        setFoodMacros(newData);
    }
    return (
        <main className="home">
            <div className="home--wrapper">
                <div className="home__box">
                    <h2 className="home__box--title"> Last Week</h2>
                    <div className="home__box--content"> *Graph*</div>
                </div>
                <div className="home__box">
                    <h2 className="home__box--title"> Yum Yum</h2>
                    <div className="home__box--content">
                        <MealProcessing
                            foodMacros={foodMacros}
                            updateFoodMacros={updateFoodMacros}
                        />
                    </div>
                </div>
                {foodMacros.foodMacros.foodName ? (
                    <div className="home__box">
                        <div className="home__box--title">
                            <h2 className="food__name"> 
                            <span className="tablet-hidden">Looks like a delicious</span>
                            <span> </span>
                                <span className="food__name--identified">
                                    {foodMacros.foodMacros.foodName}
                                </span>
                            </h2>
                            
                        </div>
                        <div className="home__box--content">
                            <h3 className="food__facts"> Here are some food facts on your meal:</h3>
                            <h4 className="food__facts--info"> Portion size: {foodMacros.foodMacros.size}g</h4>
                            <h4 className="food__facts--info"> Calories: {foodMacros.foodMacros.calories}kcal</h4>
                            <h4 className="food__facts--info"> Carbohydrates: {foodMacros.foodMacros.carbs}g</h4>
                            <h4 className="food__facts--info"> Proteins: {foodMacros.foodMacros.protein}g</h4>
                            <h4 className="food__facts--info"> Sugars: {foodMacros.foodMacros.sugar}g</h4>
                            <div className="food--button--wrapper">
                            <button className="food--button" onClick={handleFoodLogging}> Log my food!</button>

                                </div>
                        </div>

                        
                    </div>
                ) : (<div></div>)}
                <div className="home__box">
                    <h2 className="home__box--title"> Today is Looking</h2>
                    <div className="home__box--content"> Great!</div>
                </div>
            </div>


        </main>
    )
}

export default Home;