import Flippy, { FrontSide, BackSide } from "react-flippy";

const SearchCards = ({ drink, index }) => {

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
      <tr key={i}>
        <td>{ingArr[i]}</td>
        <td>{measuresArr[i] || "to taste"}</td>
      </tr>
    )
    }
 
  }

    return (
      <div>
        <div className='max-w-sm rounded overflow-hidden m-2'>
        <Flippy
    flipOnHover={false} 
    flipOnClick={true}
    flipDirection="horizontal" 
    style={{ width: '300px', height: '300px' }}
  >
    <FrontSide
      style={{
        backgroundColor: 'white',
      }}>
         <p className='text-2xl text-gray-800 text-center'>{drink.strDrink}</p>
          <img src={drink.strDrinkThumb} alt='' className='drinkPic text-center' height="30%"
              width="30%" />
            <h3 className="text-center">Served in:</h3>
            <p className="text-center">{drink.strGlass}</p>
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
    <tbody className="text-center">
      {ingList}

    </tbody>
  </table>
            </div>
            <p className="text-center">{drink.strInstructions}</p>
          </BackSide>
          </Flippy>
        </div>
      </div>
    );
}

export default SearchCards