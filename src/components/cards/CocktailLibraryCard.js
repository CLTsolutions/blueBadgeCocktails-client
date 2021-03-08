import UpdateCocktailForm from "../cards/UpdateCocktailForm";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import userDrinkPic from "../Pics/userdrink.jpg";

const CocktailLibraryCard = ({
  cocktails,
  setCocktailsToUpdate,
  fetchDrinks,
  deleteCocktail,
  updateCocktail,
  cocktailsToUpdate
}) => {
  return (
    <div className="flex flex-wrap items-center">
      {cocktails?.length > 0 ? (
        <>
          {cocktails.map((cocktail) => {
            //map is returning drink card for user's drinks
            return (
              <div className="m-4 p-4 max-w-sm rounded">
                <Flippy
                  className=""
                  flipOnHover={false} // default false
                  flipOnClick={true} // default false
                  flipDirection="horizontal" // horizontal or vertical
                  style={{ height: 375, width: 300 }}
                >
                  <div
                    className=""
                    key={cocktail.id}
                  >
                    <FrontSide
                      className=''
                      style={{
                        backgroundColor: "white",
                      }}
                    >
                      <h1 className="text-2xl text-gray-800 text-center mb-4 font-serif">
                        {cocktail.name}
                      </h1>
                      {/* {drink.strDrinkThumb ? ( */}
                        {/* <img
                          className="rounded-full h-40 w-40 mx-auto"
                          src={drink.strDrinkThumb}
                          alt="userDrinkIPic"
                        /> */}
                        {/* ) : ( */}
                        <img
                          className="rounded-full h-40 w-40 mx-auto"
                          src={userDrinkPic}
                          alt="userDrinkIPic"
                        />
                      {/* )} */}
                      <h5 className="mt-3 text-lg text-center font-serif">Served in:</h5>
                      <p className="text-md text-center font-serif">
                        {cocktail.glassType}
                      </p>
                      <div className=''>
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
                      </div>
                    </FrontSide>
                    <div className="drinkBack">
                      <BackSide
                        className=" back-card font-thin text-pink-500 text-s"
                        style={{ backgroundColor: "white" }}
                      >
                        <div className="">
                          <table className="">
                              <tr>
                                <th className="ing">
                                  Ingredients
                                </th>
                                <th className="mes">
                                 Measurement             
                                </th>
                              </tr>
                              <tr>
                                  <td>{cocktail.ingredients}</td>
                                  <td>{cocktail.measurements}</td>
                              </tr>
                              <tr>
                                <td className="mt-5 text-center">
                                  {cocktail.instructions}
                                </td>
                              </tr>
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
