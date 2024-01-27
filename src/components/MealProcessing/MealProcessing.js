import "./MealProcessing.scss";
import axios from "axios";
import { API_BASE_URL } from "../../utils/utils";
import React, { useState, useEffect, useRef } from "react";

import sandwich from '../../assets/images/ham-sandwich.jpeg'
import pizza from '../../assets/images/pizza.jpg'
const FormData = require('form-data');

// const fetch = require('node-fetch');
//const fs = require('fs');

const url = "https://vision.foodvisor.io/api/1.0/en/analysis/";
const API_KEY = "WGUmFqSK.gcxjKP1cm9F4MaLTZUlntSeuQWpHWreI"
const headers = {
    "Content-Type": "multipart/form-data; boundary=<calculated when request is sent></calculated>",
    "Authorization": `Api-Key ${API_KEY}`
};
const foodDir = "/C:/Users/bryce/Brainstation/bryce-borer-capstone/src/assets/images/ham-sandwich.jpeg"

const MealProcessing = () => {
    const [foodData, setFoodData] = useState("Loading...")
    const [image1, setImage1] = useState('')
    const formData = new FormData();
    //formData.append("image", foodDir)

  


    function handleImage(e){
        console.log(e.target.files)
        setImage (e.target.files[0])
    }
// new code
const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    console.log(file.name)
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result);
        // You can add a call to your backend API here if needed
       //  sendToBackend(reader.result);

        // try {
            //const formData = new FormData();
            formData.append('image', file);
          const fileName = file.name;
            axios.post('http://localhost:8080/foodImage', {fileName})
            .then((response) => {
              console.log('File upload success:', response.data);
            })
    
            
          // } catch (error) {
          //   console.error('File upload error:', error);
          // }

      };

      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result);
        // You can add a call to your backend API here if needed
        // sendToBackend(reader.result);
      };

      reader.readAsDataURL(file);

      // Send the file to the backend using Axios
      // try {
      //   //const formData = new FormData();
      //   formData.append('image', file);

      //   const response = await axios.post('http://localhost:8080/foodImage', formData, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   });

      //   console.log('File upload success:', response.data);
      // } catch (error) {
      //   console.error('File upload error:', error);
      // }
    }
  };
        

  // end of new code

    // const foodProcessing = () => {


    //     axios.post('http://localhost:8080/foodImage', formData, {
    //         headers: {
    //           'Content-Type': 'multipart/form-data',
    //         },
    //       });


    //     // axios
    //     //     .post(url, formData, { headers: headers })
    //     //     .then((res) => {
    //     //         console.log(res)
    //     //         setFoodData(res)
    //     //     })
    //     //     .catch((e) => {
    //     //         console.log(e)
    //     //     })


    // }



    return (
        <main>
            {/* <section className="food">
                <div className="food--wrapper">
                <img
                    src={pizza}
                    alt="pizza"
                    className="food--img" />
                </div>
                <form method="post" encType="multipart/form-data" action="http://localhost:8080/foodImage">

                    <input type="file" id="foodImage" name="foodImage" accept="image/jpeg, image/png, image/jpg"></input>
                    <button>SUBMIT</button>
                </form>
        <input type="file" name="file" onChange={handleImage}/>

            </section> */}
            <div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          border: '2px dashed #aaa',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >
        {image ? (
          <img
            src={image}
            alt="Uploaded"
            style={{ maxWidth: '100%', maxHeight: '200px' }}
          />
        ) : (
          <p>Drag & drop an image here, or click to select one.</p>
        )}
      </div>
      {/* <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
        ref={fileInputRef}
      />
      <button onClick={() => fileInputRef.current.click()}>Select Image</button> */}
    </div>
            {/* <section>
                <h1 className="data">
                    Food Data:
                </h1>
                <h3>{foodData}</h3>
                <button onClick={foodProcessing}>Process Image</button>
            </section> */}
        </main>
    )
}

export default MealProcessing;