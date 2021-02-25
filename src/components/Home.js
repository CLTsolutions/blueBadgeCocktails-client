import React from 'react';
import { useEffect, useState } from "react";
import TrendCard from './TrendCard';


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
    }, [url]);
  
    return (
        <div className="Drinks">
            <h1>DRINKS</h1>
          {data?.drinks.map((drink, index)=>(
            <div key={index} className ="drinkCard" height='300px' width='100%'>
            <img src={drink.strDrinkThumb} height='25%' width='25%' />
            <p>{drink.strDrink}</p>
            </div>
          )
          )}
            
        </div>
    );
};

export default Home;

