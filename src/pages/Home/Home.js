import "./Home.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import MealProcessing from "../../components/MealProcessing/MealProcessing";
import Header from "../../components/Header/Header";
import Chart from "../../components/Chart/Chart";

const baseUrl = "http://localhost:8080";
const signupUrl = `${baseUrl}/signup`;
const loginUrl = `${baseUrl}/login`;
const newMealURL = `${baseUrl}/post`;
const space = ' ';
const postHeader = {
    "Content-Type": "application/json",
  };

const Home = () => {
    const [foodMacros, setFoodMacros] = useState({
            foodName: '',
            size: 0,
            calories: 0,
            carbs: 0,
            protein: 0,
            fat: 0,
            sugar: 0
    })

    const handleFoodLogging = async (newFood_name, newPortion, newCalories, newCarbs, newProtein, newSugar) => {
        const newMeal = {
            food_name: newFood_name,
            portion: newPortion, 
            calories: newCalories, 
            carbs: newCarbs, 
            protein: newProtein,
            sugar: newSugar
        }
        try {
            axios.post(newMealURL, newMeal, postHeader);
        } catch (e) {
            console.log(e);
        }
    }

    const updateFoodMacros = (newData) => {
        setFoodMacros(newData);
    }
    return (
        <main className="home">
            <div className="home--wrapper">
            <div className="home__box">
                    <h2 className="home__box--title"> Yum Yum</h2>
                    <div className="home__box--content">
                        <MealProcessing
                            foodMacros={foodMacros}
                            updateFoodMacros={updateFoodMacros}
                        />
                    </div>
                </div>
                <div className="home__box">
                    <h2 className="home__box--title"> Last Week</h2>
                    <div className="home__box--content"> 
                    <Chart />
                    </div>
                </div>
                
                {foodMacros.foodName ? (
                    <div className="home__box">
                        <div className="home__box--title">
                            <h2 className="food__name"> 
                            <span className="tablet-hidden">Looks like a delicious</span>
                            <span> </span>
                                <span className="food__name--identified">
                                    {foodMacros.foodName}
                                </span>
                            </h2>
                            
                        </div>
                        <div className="home__box--content">
                            <h3 className="food__facts"> Here are some food facts on your meal:</h3>
                            <h4 className="food__facts--info"> Portion size: {foodMacros.size}g</h4>
                            <h4 className="food__facts--info"> Calories: {foodMacros.calories}kcal</h4>
                            <h4 className="food__facts--info"> Carbohydrates: {foodMacros.carbs}g</h4>
                            <h4 className="food__facts--info"> Proteins: {foodMacros.protein}g</h4>
                            <h4 className="food__facts--info"> Sugars: {foodMacros.sugar}g</h4>
                            <div className="food--button--wrapper">
                            <button className="food--button" onClick={()=>(
                                handleFoodLogging(
                                    foodMacros.foodName,
                                    foodMacros.size,
                                    foodMacros.calories,
                                    foodMacros.carbs,
                                    foodMacros.protein,
                                    foodMacros.sugar
                                ))}> Log my food!</button>

                                </div>
                        </div>

                        
                    </div>
                ) : (<div></div>)}

            </div>


        </main>
    )
}

export default Home;