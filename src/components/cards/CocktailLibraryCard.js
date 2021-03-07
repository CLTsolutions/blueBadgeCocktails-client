import UpdateCocktailForm from '../cards/UpdateCocktailForm'

const CocktailLibraryCard = ({cocktails, setCocktailsToUpdate, fetchDrinks, deleteCocktail, updateCocktail, cocktailsToUpdate}) => {

    return (
        <div>
            {cocktails?.length > 0 ? 
                <>
                {cocktails.map(cocktail => { //map is returning drink card for user's drinks
                    return (
                        <div className='m-4 p-4 max-w-sm rounded overflow-hidden shadow-lg bg-gray-50' key={cocktail.id}>
                            <h1 className='text-2xl mb-3 text-center'>{cocktail.name}</h1>
                            <div className='space-y-3'>
                                <h3>{cocktail.glassType}</h3>
                                <h3>{cocktail.ingredients}</h3>
                                <h3>{cocktail.measurements}</h3>
                                <h3>{cocktail.instructions}</h3>
                            </div>
                            <button 
                                className="focus:outline-none focus:ring-1 focus:ring-gray-900 bg-red-500 hover:bg-red-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-red-200 font-sans"
                                onClick={() => {
                                    cocktailsToUpdate == Infinity
                                    ? setCocktailsToUpdate(cocktail.id)
                                    : setCocktailsToUpdate(Infinity)}}
                            >Update</button>
                            {/* below toggles to update form when update button is clicked */}
                            { cocktailsToUpdate === cocktail.id
                            ? <UpdateCocktailForm updateCocktail={updateCocktail} cocktail={cocktail} id={cocktail.id} fetchDrinks={fetchDrinks}/>
                            :<button 
                                className="focus:outline-none focus:ring-1 focus:ring-gray-900 bg-red-500 hover:bg-red-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-red-200 font-sans" 
                                onClick={() => deleteCocktail(cocktail.id)}>Delete
                            </button>
                            }
                            <br />
                        </div>
                    )
                })}
                </>
                : null
            }
        </div>
    )
}

export default CocktailLibraryCard
