import "../styles/TrendCard.css";
import Button from "@material-ui/core/Button";
import Favorite from "@material-ui/icons/Favorite";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { useState } from "react";


import APIURL from '../../helpers/environment'

const TrendCard = ({ drink, index, token }) => {
  // console.log(drink);
  // Api ing counting
// Drink has dirty data, it gets cleaned and returned in a 2 k,v obj {ing:[...], measuers:[...]} of equal len
let result = parseIngMeasures(drink);
// adding str version of ing/measuers for sake of createDrink call later
drink.ing = result.ing.join(", ");
drink.measures = result.measures.join(", ");


  let ingArr = [];
  let measuresArr = [];
  Object.entries(drink).map((entry, index) => {
    if (entry[0].includes("strIngredient")) {
      ingArr.push(entry[1]);
      return true;
    }
    if (entry[0].includes("strMeasure")) {
      measuresArr.push(entry[1]); 
    }
    return true
  });

  let ingList = []
  for (let i = 0; i < ingArr.length; i++){
    if(ingArr[i]){
         ingList.push(
      <tr key={i} className='mx-auto'>
        <td className='flex'>{ingArr[i]}</td>
        <td>{measuresArr[i] || "to taste"}</td>
      </tr>
    )
    }
 
  }
  // console.log(ingArr, measuresArr)

  return (
    <div key={index} className="mx-auto">
      <Flippy
        className="card"
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        style={{ height: 375, width: 300 }}
      >
        <div className="drinkFront font-serif">
          <FrontSide
            style={{
              backgroundColor: "white",
            }}
          >
            <h1 className="text-2xl text-gray-800 text-center mb-4 font-serif">{drink.strDrink}</h1>
            <img
              className="rounded-full h-40 w-40 mx-auto"
              src={drink.strDrinkThumb}
              alt=""
            />
            <h5 className="mt-3 text-lg text-center font-serif">Served in: </h5>
            <h5 className="text-md text-center font-serif">{drink.strGlass}</h5>
            <br/>
            <Button onClick={() => createCocktail(drink)}
          startIcon={<Favorite />}
          variant="outlined"
          color="primary"
          size="medium"
          style={{
              fontSize: 10
          }}>
              Save Drink
            </Button>
          </FrontSide>
        </div>
        <div className="drinkBack">
          <BackSide
            className=" back-card font-thin font-sans text-pink-500 text-lg"
            style={{ backgroundColor: "white" }}
          >
            <div className="flex flex-row flex-wrap flex-grow-2 content-between">
              <table className="table-auto">
      <thead>
        <tr>
          <th className="text-lg">Ingredient</th>
          <th className="text-lg">Measurements</th>
        </tr>
    </thead>
    <tbody className="text-xs">
      {ingList}
    </tbody>
  </table>
            </div>
            <p className="text-s">{drink.strInstructions}</p>
          </BackSide>
        </div>
      </Flippy>
    </div>
  );


  function createCocktail (drink) {
    // name, glassType, ingredients, measurements, instructions
    console.log(drink)
    fetch(`${APIURL}/mybar/`, {
        method: "POST",
        headers: new Headers ({
            'Content-Type': 'application/json',
            'Authorization': token
        }),
        body: JSON.stringify ({
            name: drink.strDrink,
            alcoholic: drink.strAlcoholic == "Alcoholic",
            glassType: drink.strGlass,
            ingredients: drink.ing,
            measurements: drink.measures,
            instructions: drink.strInstructions,
            iced: false,
            shaken: false,
            stirred: false
        }),
    })
    .then(res => res.json()) //parsing data
    .then(json => {
        console.log(json)
    })
}

  function parseIngMeasures (aDrink) { 

    let ingArr = [];
    let measuresArr = [];
    // looks into the drink obj for matching keys, pushes to arrays the needed data
    Object.entries(aDrink).map((entry, index) => {
      if (entry[0].includes("strIngredient")) {
        ingArr.push(entry[1]);
      } else if (entry[0].includes("strMeasure")) {
        measuresArr.push(entry[1]);
      }
    });

    // Correct keys can have null data, this cleans up the data
    ingArr = ingArr.filter((ing) => ing != null);
    measuresArr = measuresArr.filter((meas) => meas != null);

    // This fixes the len mismatch should the ing be longer then the measures
    let toAdd = ingArr.length - measuresArr.length;
    for (let i = toAdd; toAdd > 0; toAdd--) {
      measuresArr.push("to taste");
    }
  
    // Bundles the data into an obj for return.
    return {
      ing: ingArr,
      measures: measuresArr
    };
  };
};


export default TrendCard;
