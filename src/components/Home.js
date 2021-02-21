import { render } from "@testing-library/react";
import React from "react";
import { useEffect, useState } from "react";
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
        <div className = "Drinks">
            <h1>DRINKS</h1>
          {data?.drinks.map((drink, index)=>(
            <p key={index}>{drink.strDrink}</p>
          )
          )}
            {/* <TrendCard
                key={drinks.idDrink}
                title={drinks.strDrink}
                category={drinks.strCategory}
                description={drinks.strInstructions}
                img={drinks.strDrinkThumb}
                date={drinks.dateModified}
                ingredient1={drinks.strIngredient1}
                ingredient2={drinks.strIngredient2}
                ingredient3={drinks.strIngredient3}
                ingredient4={drinks.strIngredient4}
                ingredient5={drinks.strIngredient5}
                ingredient6={drinks.strIngredient6}
                ingredient7={drinks.strIngredient7}
                ingredient8={drinks.strIngredient8}
                ingredient9={drinks.strIngredient9}
                ingredient10={drinks.strIngredient10}
                ingredient11={drinks.strIngredient11}
                ingredient12={drinks.strIngredient12}
                ingredient13={drinks.strIngredient13}
                ingredient14={drinks.strIngredient14}
                ingredient15={drinks.strIngredient15}
                measurement1={drinks.strMeasure1}
                measurement2={drinks.strMeasure2}
                measurement3={drinks.strMeasure3}
                measurement4={drinks.strMeasure4}
                measurement5={drinks.strMeasure5}
                measurement6={drinks.strMeasure6}
                measurement7={drinks.strMeasure7}
                measurement8={drinks.strMeasure8}
                measurement9={drinks.strMeasure9}
                measurement10={drinks.strMeasure10}
                measurement11={drinks.strMeasure11}
                measurement12={drinks.strMeasure12}
                measurement13={drinks.strMeasure13}
                measurement14={drinks.strMeasure14}
                measurement15={drinks.strMeasure15}
              /> */}
        </div>
    );
};

export default Home;

