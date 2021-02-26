import React from "react";
import { useEffect, useState } from "react";
import './Home.css'
import TrendCard from "./TrendCard";
import Card from './Card'

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
      <h1>DRINKS</h1>
      {data?.drinks.map((drink, index) => (
        <Card drink={drink} index={index}/>
      ))}
    </div>
  );

};

export default Home;
