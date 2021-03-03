import "../styles/TrendCard.css";
import Button from "@material-ui/core/Button";
import Favorite from "@material-ui/icons/Favorite";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { useState } from "react";

const TrendCard = ({ drink, index }) => {
  console.log(drink);
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
        <td>{measuresArr[i] || "to taste"}</td>
      </tr>
    )
    }
 
  }
  console.log(ingArr, measuresArr)

  // return (
  //   <table class="table-auto">
  //     <thead>
  //       <tr>
  //         <th>Item</th>
  //         <th>Quanity</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {ingList}

  //     </tbody>
  //   </table>
  // );

  // let liArray = [];
  // Object.entries(drink).map((entry) => {
  //   if (entry[0].includes("strIngredient")) {
  //     liArray.push(<li>{entry[1]}</li>);
  //   }
  // });
  // let mesArray = [];
  // Object.entries(drink).map((entry) => {
  //   if (entry[0].includes("strMeasure")) {
  //     mesArray.push(<li>{entry[1]}</li>);
  //   }
  // });

  return (
    <div key={index} className="drinkCard">
      <Flippy
        className="card"
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        style={{ height: 300, width: 250 }}
      >
        <div className="drinkFront font-display">
          <FrontSide
            style={{
              backgroundColor: "white",
            }}
          >
            <h1 className="name">{drink.strDrink}</h1>
            <img
              className="drinkPic"
              src={drink.strDrinkThumb}
              height="25%"
              width="25%"
              alt=""
            />
            <h5 className="text-xs">Served in: </h5>
            <h5 className="text-xs">{drink.strGlass}</h5>
          </FrontSide>
        </div>
        <div className="drinkBack">
          <BackSide
            className=" back-card font-thin text-pink-500 text-xs"
            style={{ backgroundColor: "white" }}
          >
            <div className="flex flex-row flex-wrap flex-grow-0 content-between">
              <table class="table-auto">
      <thead>
      <tr>
        <th>Item</th>
        <th>Quanity</th>
      </tr>
    </thead>
    <tbody>
      {ingList}

    </tbody>
  </table>
            </div>
            <br />
            <p>{drink.strInstructions}</p>
          </BackSide>
        </div>
        {/* <Button onClick={() =>alert('SAVE')}
          startIcon={<Favorite />}
          variant="outlined"
          color="primary"
          size="small"
          style={{
              fontSize: 6
          }}>
              Save Drink
            </Button> */}
      </Flippy>
    </div>
  );
};

export default TrendCard;
