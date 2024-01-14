import "./MealProcessing.scss";
import axios from "axios";
import { API_BASE_URL } from "../../utils/utils";
import React, { useState, useEffect } from "react";

import sandwich from '../../assets/images/ham-sandwich.jpeg'
import pizza from '../../assets/images/pizza.jpeg'

// const fetch = require('node-fetch');
//const fs = require('fs');

const url = "https://vision.foodvisor.io/api/1.0/en/analysis/";
const API_KEY = "WGUmFqSK.gcxjKP1cm9F4MaLTZUlntSeuQWpHWreI"
const headers = {
    "Content-Type": "multipart/form-data; boundary=<calculated when request is sent></calculated>",
    "Authorization": `Api-Key ${API_KEY}`
};
const pizzaDir = "/C:/Users/bryce/Brainstation/bryce-borer-capstone/src/assets/images/pizza.jpeg"

const MealProcessing = () => {
    const [foodData, setFoodData] = useState("Loading...")
    const formData = new FormData();
    formData.append("image", pizzaDir)

    const foodProcessing = () => {

        axios
            .post(url, formData, { headers: headers })
            .then((res) => {
                console.log(res)
                setFoodData(res)
            })
            .catch((e) => {
                console.log(e)
            })


    }

    return (
        <main>
            <section className="food">
                <img
                    src={pizza}
                    alt="pizza"
                    className="food--img" />
                <form method="post" encType="multipart/form-data" action="http://localhost:8080/foodImage">

                    <input type="file" id="foodImage" name="foodImage" accept="image/jpeg, image/png, image/jpg"></input>
                    <button>SUBMIT</button>
                </form>
            </section>
            <section>
                <h1 className="data">
                    Food Data:
                </h1>
                <h3>{foodData}</h3>
                <button onClick={foodProcessing}>Process Image</button>
            </section>
        </main>
    )
}

export default MealProcessing;