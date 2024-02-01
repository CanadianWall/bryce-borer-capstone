import "./Chart.scss";
import axios from "axios";
import React, { PureComponent, useEffect } from 'react';
import { RadialBarChart, RadialBar, Legend, PolarAngleAxis, ResponsiveContainer } from 'recharts';






const Chart = (props) => {

    const baseUrl = "http://localhost:8080";
    const accountUrl = `${baseUrl}/account`;


    useEffect(() => {

    }, []);

 
    

const data = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: '30-34',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: '35-39',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '40-49',
    uv: 8.63,
    pv: 3908,
    fill: '#a4de6c',
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(-200%, -150%)',
  lineHeight: '24px',
};




    return (
      
        <RadialBarChart 
        cx="0%" 
        cy="0%" 
        innerRadius= "50%" 
        outerRadius="100%" 
        width={490}
        height={490}
        barSize={20} 
        data={data}
        startAngle={270}
        endAngle={360}

        >
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#000' }}
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
