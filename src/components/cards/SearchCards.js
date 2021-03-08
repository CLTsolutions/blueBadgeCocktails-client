import Flippy, { FrontSide, BackSide } from "react-flippy";
import Button from "@material-ui/core/Button";
import Favorite from "@material-ui/icons/Favorite";
const SearchCards = ({ createCocktail, drink, index }) => {
  // Drink has dirty data, it gets cleaned and returned in a 2 k,v obj {ing:[...], measuers:[...]} of equal len
  let result = parseIngMeasures(drink);
  // adding str version of ing/measuers for sake of createDrink call later
  drink.ing = result.ing.join(", ");
  drink.measures = result.measures.join(", ");
  // Builds up the rows of a card using result's 2 arrays
  let ingList = [];
  for (let i = 0; i < result.ing.length; i++) {
      ingList.push(
        <tr key={i}>
          <td>{result.ing[i]}</td>
          <td>{result.measures[i]}</td>
        </tr>
      );
  }

  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden m-2">
        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="horizontal"
          style={{ width: "300px", height: "300px" }}
        >
          <FrontSide
            style={{
              backgroundColor: "white",
            }}
          >
            <p className="text-2xl text-gray-800 text-center">
              {drink.strDrink}
            </p>
            <img
              src={drink.strDrinkThumb}
              alt=""
              className="drinkPic text-center"
              height="30%"
              width="30%"
            />
            <h3 className="text-center">Served in:</h3>
            <p className="text-center">{drink.strGlass}</p>
            <Button
              onClick={() => createCocktail(drink)}
              startIcon={<Favorite />}
              variant="outlined"
              color="primary"
              size="small"
              style={{
                fontSize: 8,
              }}
            >
              Save Drink
            </Button>
          </FrontSide>
          <BackSide
            className=" back-card font-thin text-pink-500 text-s"
            style={{ backgroundColor: "white" }}
          >
            <div className="flex flex-row flex-wrap flex-grow-0 content-between">
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="text-s">Ingredient</th>
                    <th className="text-s">Measurement</th>
                  </tr>
                </thead>
                <tbody className="text-center">{ingList}</tbody>
              </table>
            </div>
            <p className="text-center">{drink.strInstructions}</p>
          </BackSide>
        </Flippy>
      </div>
    </div>
  );
  
  function parseIngMeasures (aDrink) { 

    let ingArr = [];
    let measuresArr = [];
    // looks into the drink obj for matching keys, pushs to arrays the needed data
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

export default SearchCards;
