import "./Home.scss";
import axios from "axios";
import React, { useState} from "react";
import MealProcessing from "../../components/MealProcessing/MealProcessing";
import Chart from "../../components/Chart/Chart";

const baseUrl = "http://localhost:8080";
const newMealURL = `${baseUrl}/post`;
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
                    <h2 className="home__box--title"> Drop your food image below</h2>
                    <div className="home__box__content">
                        
                        <div className="home__box__content">
                            <MealProcessing
                                foodMacros={foodMacros}
                                updateFoodMacros={updateFoodMacros}
                            />
                            
                        </div>
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
                        <div className="home__box__content">
                            <h3 className="food__facts"> Here are some food facts on your meal:</h3>
                            <h4 className="food__facts--info"> Portion size: {foodMacros.size}g</h4>
                            <h4 className="food__facts--info"> Calories: {(Math.round(foodMacros.calories* 100) / 100).toFixed(2)}kcal</h4>
                            <h4 className="food__facts--info"> Carbohydrates: {(Math.round(foodMacros.carbs* 100) / 100).toFixed(2)}g</h4>
                            <h4 className="food__facts--info"> Proteins: {(Math.round(foodMacros.protein* 100) / 100).toFixed(2)}g</h4>
                            <h4 className="food__facts--info"> Sugars: {(Math.round(foodMacros.sugar* 100) / 100).toFixed(2)}g</h4>
                            <div className="food--button--wrapper">
                                <button className="food--button" onClick={() => (
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
                 {foodMacros.foodName ? (<div className="home__box">
                    <h2 className="home__box--title"> Today's Stats</h2>
                    <div className="home__box__content">
                        <Chart foodMacros={foodMacros} />
                    </div>
                </div>) : (<div></div>)}

                

            </div>


        </main>
    )
}

export default Home;