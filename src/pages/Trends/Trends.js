import "./Trends.scss";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Trends = () => {

  const baseUrl = "http://localhost:8080";
  const accountURL = `${baseUrl}/user`;
  const foodURL = `${baseUrl}/post`;
  const [userInfo, setUserInfo] = useState({});
  const [foodInfo, setFoodInfo] = useState({});
  const [dataSelected, setDataSelected] = useState("calories");
  const [hasLoaded1, setHasLoaded1] = useState(false);
  const [hasLoaded2, setHasLoaded2] = useState(false);

  useEffect(() => {
    getFoodData();
    getUserData();
    getFoodDataByDate();
  }, []);

  const getUserData = () => {
    axios.get(accountURL)
      .then((res) => {
        setUserInfo(res.data[0])
        setHasLoaded1(true)
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const getFoodData = () => {
    axios.get(foodURL)
      .then((res) => {
        setFoodInfo(res.data)
        setHasLoaded2(true)
        console.log(res.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function changeTrendData(change){

    setDataSelected(change)
    return change;
  }

  const getFoodDataByDate = () => {
    
    }

    const data = [
      {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: -1000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 500,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: -2000,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: -250,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];

    if (hasLoaded1 && hasLoaded2) {


      return (
        <div>
          <AreaChart
            width={400}
            height={400}
            data={foodInfo}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset={0} stopColor="green" stopOpacity={1} />
                <stop offset={1} stopColor="red" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey={dataSelected}
              stroke="#000"
              fill="url(#splitColor)"
            />
          </AreaChart>
          <button onClick={()=>setDataSelected("protein")}>
            Protein
          </button>
          <button onClick={()=>setDataSelected("calories")}>
            Calories
          </button>
          <button onClick={()=>setDataSelected("fat")}>
            Fat
          </button>
        </div>
      );
    }
    else {
      return null;
    }
  }

  export default Trends;

  // <button onClick={()=>changeTrendData("protein")}>
  //           Protein
  //         </button>
  //         <button onClick={()=>changeTrendData("calories")}>
  //           Calories
  //         </button>
  //         <button onClick={()=>changeTrendData("fat")}>
  //           Fat
  //         </button>