import React from "react";
import { useEffect, useState } from "react";
import '../styles/Home.css'
import TrendCard from '../cards/TrendCard' 
// import { ListItemSecondaryAction } from "@material-ui/core";


const Home = () => {
  const [data, setData] = useState();
  const url = "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php";

  const initData = async () => {
    const response = await fetch(url);
    const drinks = await response.json();
    console.log(drinks);
    setData(drinks);
  };
  useEffect(() => {
    initData();
  }, []);

  return (
    <div className="Drinks">

      <h1 className="font-display text-white text-xl">Trending Drinks</h1>
      <div className='grid grid-rows-4 grid-flow-col gap-0'>
      {data?.drinks.slice(0,10).map((drink, index) => (
        <TrendCard drink={drink} key ={index} index={index}/>
      ))}
      </div>
    </div>

  );
}

export default Home;
