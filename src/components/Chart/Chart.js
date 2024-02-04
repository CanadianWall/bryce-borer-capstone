import "./Chart.scss";
import axios from "axios";
import React, { PureComponent, useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, Legend, PolarAngleAxis, ResponsiveContainer } from 'recharts';



const Chart = (props) => {

  const baseUrl = "http://localhost:8080";
  const accountURL = `${baseUrl}/user`;
  const [userInfo, setUserInfo] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);


  // useEffect(() => {
  //   axios.get(accountURL)
  //     .then((res) => {
  //       setUserInfo(res.data[0])
  //       setHasLoaded(true)
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // const foodData (() => {

  // })

  const data = [
    {
      name: `Empty`,
      uv: 1,
      pv: 0,
      fill: '#fbc956',
    },
    {
      name: `Sugar: ${(Math.round(props.foodMacros.sugar* 100) / 100).toFixed(2)}g`,
      uv: (props.foodMacros.sugar/35),
      pv: props.foodMacros.sugar,
      fill: '#8884d8',
    },
    {
      name: `Fat: ${(Math.round(props.foodMacros.fat* 100) / 100).toFixed(2)}g`,
      uv: (props.foodMacros.fat/50),
      pv: props.foodMacros.fat,
      fill: '#83a6ed',
    },
    {
      name: `Protein: ${(Math.round(props.foodMacros.protein* 100) / 100).toFixed(2)}g`,
      uv: (props.foodMacros.protein/175),
      pv: props.foodMacros.protein,
      fill: '#8dd1e1',
    },
    {
      name: `Carbs: ${(Math.round(props.foodMacros.carbs* 100) / 100).toFixed(2)}g`,
      uv: (props.foodMacros.carbs/225),
      pv: props.foodMacros.carbs,
      fill: '#ff6f61',
    },
    {
      
      name: `Calories: ${(Math.round(props.foodMacros.calories* 100) / 100).toFixed(2)}kcal`,
      uv: (props.foodMacros.calories/2074),
      pv: props.foodMacros.calories,
      fill: '#82ca9d',
    },
  ];

  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(-70%, -120%)',
    lineHeight: '24px',
  };




  return (

    <RadialBarChart
      cx="0%"
      cy="0%"
      innerRadius="20%"
      outerRadius="100%"
      width={470}
      height={470}
      barSize={20}
      data={data}
      startAngle={270}
      endAngle={360}

    >
      <RadialBar
        minAngle={15}
        //label={{ position: 'insideStart', fill: '#000' }}
        background
        ClockWise
        dataKey="uv"
      />
      <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
    </RadialBarChart>

  );
}


// return (
//     <main className="chart">

//     </main>
// )
// }


export default Chart;
