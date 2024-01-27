import "./MealProcessing.scss";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

const FormData = require('form-data');

const MealProcessing = () => {
  const formData = new FormData();

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
        // formData.append('image', file);
        const fileName = file.name;
        axios.post('http://localhost:8080/foodImage', { fileName })
          .then((response) => {
            console.log('File upload success:', response.data);
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
    <main>
      <section>
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

      </section>
      

    </main>
  )
}

export default MealProcessing;