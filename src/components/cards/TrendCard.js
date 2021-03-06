import "../styles/TrendCard.css";
import Button from "@material-ui/core/Button";
import Favorite from "@material-ui/icons/Favorite";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { useState } from "react";

const TrendCard = ({ drink, index }) => {
  // console.log(drink);
  // Api ing counting
  let ingArr = [];
  let measuresArr = [];
  Object.entries(drink).map((entry, index) => {
    if (entry[0].includes("strIngredient")) {
      ingArr.push(entry[1]);
      return;
    }
    if (entry[0].includes("strMeasure")) {
      measuresArr.push(entry[1]);
      return;
    }
  });

  let ingList = []
  for (let i = 0; i < ingArr.length; i++){
    if(ingArr[i]){
         ingList.push(
      <tr>
        <td>{ingArr[i]}</td>
        <br/>
        <td>{measuresArr[i] || "to taste"}</td>
      </tr>
    )
    }
 
  }
  // console.log(ingArr, measuresArr)

  return (
    <div key={index} className="drinkCard">
      <Flippy
        className="card"
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        style={{ height: 330, width: 250 }}
      >
        <div className="drinkFront font-display">
          <FrontSide
            style={{
              backgroundColor: "white",
            }}
          >
            <h1 className="name text-center font-semibold">{drink.strDrink}</h1>
            <img
              className="drinkPic text-center"
              src={drink.strDrinkThumb}
              height="30%"
              width="30%"
              alt=""
            />
            <h5 className="text-xs text-center">Served in: </h5>
            <h5 className="text-xs text-center">{drink.strGlass}</h5>
            <br/>
            <Button onClick={() =>alert('SAVE')}
          startIcon={<Favorite />}
          variant="outlined"
          color="primary"
          size="small"
          style={{
              fontSize: 8
          }}>
              Save Drink
            </Button>
          </FrontSide>
        </div>
        <div className="drinkBack">
          <BackSide
            className=" back-card font-thin text-pink-500 text-s"
            style={{ backgroundColor: "white" }}
          >
            <div className="flex flex-row flex-wrap flex-grow-0 content-between">
              <table class="table-auto">
      <thead>
      <tr>
        <th className="text-s">Ingredient</th>
        <br/>
        <th className="text-s">Quanity</th>
      </tr>
    </thead>
    <tbody className="text-xs">
      {ingList}

    </tbody>
  </table>
            </div>
            <br />
            <p className="text-s">{drink.strInstructions}</p>
          </BackSide>
        </div>
      </Flippy>
    </div>
  );
};

export default TrendCard;
