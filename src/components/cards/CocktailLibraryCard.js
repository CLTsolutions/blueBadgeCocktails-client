import UpdateCocktailForm from "../cards/UpdateCocktailForm";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import userDrinkPic from "../Pics/userdrink.jpg";

const CocktailLibraryCard = ({
  cocktails,
  setCocktailsToUpdate,
  fetchDrinks,
  deleteCocktail,
  updateCocktail,
  cocktailsToUpdate,
}) => {
  return (
    <div>
      {cocktails?.length > 0 ? (
        <>
          {cocktails.map((cocktail) => {
            //map is returning drink card for user's drinks
            return (
              <div className="drinkFront">
                <Flippy
                  className="card"
                  flipOnHover={false} // default false
                  flipOnClick={true} // default false
                  flipDirection="horizontal" // horizontal or vertical
                  style={{ height: 375, width: 300 }}
                >
                  <div
                    className="m-4 p-4 max-w-sm rounded overflow-hidden"
                    key={cocktail.id}
                  >
                    <FrontSide
                      style={{
                        backgroundColor: "white",
                      }}
                    >
                      <h1 className="text-2xl mb-3 text-center text-display">
                        {cocktail.name}
                      </h1>
                      <img
                        className="drinkPic text-center"
                        src={userDrinkPic}
                        alt="userDrinkIPic"
                        height="70%"
                        width="70%"
                      />
                      <h5 className="text-xs text-center">Served in: </h5>
                      <h5 className="text-xs text-center">
                        {cocktail.glassType}
                      </h5>
                      <button
                        className="focus:outline-none focus:ring-1 focus:ring-gray-900 bg-red-500 hover:bg-red-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-red-200 font-sans"
                        onClick={() => {
                          cocktailsToUpdate == Infinity
                            ? setCocktailsToUpdate(cocktail.id)
                            : setCocktailsToUpdate(Infinity);
                        }}
                      >
                        Update
                      </button>
                      {/* below toggles to update form when update button is clicked */}
                      {cocktailsToUpdate === cocktail.id ? (
                        <UpdateCocktailForm
                          updateCocktail={updateCocktail}
                          cocktail={cocktail}
                          id={cocktail.id}
                          fetchDrinks={fetchDrinks}
                        />
                      ) : (
                        <button
                          className="focus:outline-none focus:ring-1 focus:ring-gray-900 bg-red-500 hover:bg-red-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-red-200 font-sans"
                          onClick={() => deleteCocktail(cocktail.id)}
                        >
                          Delete
                        </button>
                      )}
                    </FrontSide>
                    <div className="drinkBack">
                      <BackSide
                        className=" back-card font-thin text-pink-500 text-s"
                        style={{ backgroundColor: "white" }}
                      >
                        <div className="flex flex-row flex-wrap flex-grow-0 content-between">
                          <table className="table-auto">
                            <thead>
                              <tr>
                                <th className="ing">
                                  <h3>Ingredient</h3>
                                  <p>{cocktail.ingredients}</p>
                                </th>
                                <th className="mes">
                                 <h3>Measurement</h3>              
                                  <p>{cocktail.measurements}</p>
                                </th>
                              </tr>
                            </thead>
                            <tbody className="text-center">
                              <h3 className="text-center">{cocktail.instructions}</h3>
                            </tbody>
                          </table>
                        </div>
                      </BackSide>

                      <br />
                    </div>
                  </div>
                </Flippy>
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
};

export default CocktailLibraryCard;
