import "./MealProcessing.scss";
import axios from "axios";
import React, { useState, useRef } from "react";

const FormData = require('form-data');

const MealProcessing = ({ foodMacros, updateFoodMacros }) => {
  
  const [image, setImage] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result);
        const fileName = file.name;
        axios.post('http://localhost:8080/foodImage', { fileName })
          .then((response) => {
            const size = response.data.items[0].food[0].food_info.g_per_serving
            const calories = (response.data.items[0].food[0].food_info.nutrition.calories_100g * size/100)
            const carbs = (response.data.items[0].food[0].food_info.nutrition.carbs_100g * size/100)
            const protein = (response.data.items[0].food[0].food_info.nutrition.proteins_100g * size/100)
            const fat = (response.data.items[0].food[0].food_info.nutrition.fat_100g * size/100)
            const sugar = (response.data.items[0].food[0].food_info.nutrition.sugars_100g * size/100)

            const newData = {
                foodName: response.data.items[0].food[0].food_info.display_name,
                size: size,
                calories: calories,
                carbs: carbs,
                protein: protein,
                fat: fat,
                sugar:sugar
            }
           updateFoodMacros(newData);
          })
          .catch((err) => {
            console.error('File upload error:', err);
          })
      };

      reader.readAsDataURL(file);

    }
    
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  
  return (
    <main className="meal">
      <section className="meal">
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="meal__box"
        >
          {image ? (
            <img
              src={image}
              alt="Uploaded"
              className="meal__box--image"

            />
          ) : (
            <p></p>
          )}
        </div>

      </section>


    </main>
  )
}

export default MealProcessing;