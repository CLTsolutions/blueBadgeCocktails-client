import React from "react";
import { useEffect, useState } from "react";
import './Home.css'
import TrendCard from "./TrendCard";

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
      {data?.drinks.map((drink, index) => (
        <div key={index} className ="drinkCard" height='300px' width='100%'>
          <img src={drink.strDrinkThumb} height='25%' width='25%' />
          <h2>{drink.strDrink}</h2>
          <h2>{drink.strCategory}</h2>
          <h2>{drink.strAlcoholic}</h2>
          <h2>{drink.strGlass}</h2>
          <ul className= "ingredientsList">
            <li>{drink.strInstructions}</li>
            <li>{drink.strIngredient1}</li>
            <li>{drink.strIngredient2}</li>
            <li>{drink.strIngredient3}</li>
            <li>{drink.strIngredient4}</li>
            <li>{drink.strIngredient5}</li>
            <li>{drink.strIngredient6}</li>
            <li>{drink.strIngredient7}</li>
            <li>{drink.strIngredient8}</li>
            <li>{drink.strIngredient9}</li>
            <li>{drink.strIngredient10}</li>
            <li>{drink.strIngredient11}</li>
            <li>{drink.strIngredient12}</li>
            <li>{drink.strIngredient13}</li>
            <li>{drink.strIngredient14}</li>
            <li>{drink.strIngredient15}</li>
          </ul>
        </div>
      ))}
    </div>
  );

};

export default Home;
