import userDrinkPic from "../Pics/userdrink.jpg";
import UpdateModal from "./UpdateModal";

const CocktailLibraryCard = ({
  cocktails,
  setCocktailsToUpdate,
  fetchDrinks,
  deleteCocktail,
  updateCocktail,
  cocktailsToUpdate,
}) => {
  return (
    <div className="grid grid-cols-4">
      {cocktails?.length > 0 ? (
        <>
          {cocktails?.map((cocktail) => {
            //map is returning drink card for user's drinks
            return (
              <div
                className="m-4 p-4 max-w-sm border rounded shadow-lg bg-gray-50"
                key={cocktail.id}
              >
                <h1 className="text-2xl text-gray-800 text-center mb-3 font-serif">
                  {cocktail.name}
                </h1>
                {/* {drink.strDrinkThumb ? ( */}
                {/* <img
                      className="rounded-full h-40 w-40 mx-auto"
                      src={drink.strDrinkThumb}
                      alt="userDrinkIPic"
                    /> */}
                {/* ) : (  */}
                <img
                  className="rounded-full h-40 w-40 mx-auto"
                  src={userDrinkPic}
                  alt="userDrinkIPic"
                />
                {/* )} */}
                <h5 className="mt-3 text-lg text-center font-serif">
                  Served in:
                </h5>
                <p className="text-md text-center font-serif mb-5">
                  {cocktail.glassType}
                </p>
                <div>
                  <h3 className="text-base font-bold">Ingredients</h3>
                  <p>{cocktail.ingredients}</p>
                  <h3 className="mt-2 text-base font-bold">Measurements</h3>
                  <p>{cocktail.measurements}</p>
                  <h3 className="mt-2 text-base font-bold">Instructions</h3>
                  <p>{cocktail.instructions}</p>
                </div>
                <div className="mb-2">
                  <button
                    className="focus:outline-none focus:ring-1 focus:ring-pink-300 bg-pink-500 hover:bg-pink-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-pink-200 font-sans"
                    onClick={() => {
                      cocktailsToUpdate === Infinity
                        ? setCocktailsToUpdate(cocktail.id)
                        : setCocktailsToUpdate(Infinity);
                    }}
                  >
                    Update
                  </button>
                  {/* below toggles to update form when update button is clicked */}
                  {cocktailsToUpdate === cocktail.id ? (
                    <UpdateModal
                      updateCocktail={updateCocktail}
                      cocktail={cocktail}
                      id={cocktail.id}
                      fetchDrinks={fetchDrinks}
                      setCocktailsToUpdate={setCocktailsToUpdate}
                    />
                  ) : (
                    <button
                      className="focus:outline-none focus:ring-1 focus:ring-pink-300 bg-pink-500 hover:bg-pink-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-pink-200 font-sans"
                      onClick={() => deleteCocktail(cocktail.id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
                <br />
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
};

export default CocktailLibraryCard;
