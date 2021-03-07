import { useState } from "react";

const UpdateCocktailForm = ({ updateCocktail, id, fetchDrinks }) => {
    const [updateName, setUpdateName] = useState("");
    const [updateIsAlcoholic, setUpdateIsAlcoholic] = useState(true);
    const [updateGlassType, setUpdateGlassType] = useState("");
    const [updateIngredients, setUpdateIngredients] = useState("");
    const [updateMeasurements, setUpdateMeasurements] = useState("");
    const [updateInstructions, setUpdateInstructions] = useState("");
    const [updateIsIced, setUpdateIsIced] = useState(true);
    const [updateIsShaken, setUpdateIsShaken] = useState(true);
    const [updateIsStirred, setUpdateIsStirred] = useState(true);
    // console.log(id)
    
    return (
        <>
            <p className='text-center font-bold text-gray-700 text-2xl mb-5'>Create a New Cocktail</p>
            <form 
                className='flex flex-col space-y-3'
                onSubmit={(e) => {
                    e.preventDefault()
                    updateCocktail(e, id, updateName, updateGlassType, updateIngredients, updateMeasurements, updateInstructions)
                    fetchDrinks()
                }}
            >
                <label>
                    <input
                        type='text' 
                        className='w-full border-2 border-white p-2 rounded outline-none focus:border-purple-500'
                        placeholder='Name'
                        onChange={e => setUpdateName(e.target.value)}
                    />
                </label>
                <label className='flex flex-row items-center'>
                    Alcoholic
                    <input 
                        type='checkbox' 
                        className='p-4 ml-3 mr-1'
                        checked={updateIsAlcoholic} 
                        name='alcoholic' 
                        onChange={e => setUpdateIsAlcoholic(e.target.checked)} 
                    /> Yes
                </label>
                <label>
                    <input 
                        type='text' 
                        className='w-full border-2 border-white p-2 rounded outline-none focus:border-purple-500' 
                        placeholder='Glass Type' 
                        onChange={e => setUpdateGlassType(e.target.value)} 
                    />
                </label>
                <label>
                    <textarea 
                        className='w-full border-2 border-white p-2 rounded outline-none focus:border-purple-500'
                        placeholder='Ingredients' 
                        onChange={e => setUpdateIngredients(e.target.value)} 
                    />
                </label>
                <label>
                    <textarea 
                        className='w-full border-2 border-white p-2 rounded outline-none focus:border-purple-500'
                        placeholder='Measurements' 
                        onChange={e => setUpdateMeasurements(e.target.value)} 
                    />
                </label>
                <label>
                    <textarea 
                        className='w-full border-2 border-white p-2 rounded outline-none focus:border-purple-500' 
                        placeholder='Instructions' 
                        onChange={e => setUpdateInstructions(e.target.value)} 
                    />
                </label>
                <label className='flex flex-row items-center'>
                    Iced
                    <input 
                        type='checkbox' 
                        className='p-4 ml-3 mr-1' 
                        checked={updateIsIced} 
                        name='iced' 
                        onChange={e => setUpdateIsIced(e.target.checked)} 
                    /> Yes
                </label>
                <label className='flex flex-row items-center'>
                    Shaken
                    <input 
                        type='checkbox' 
                        className='p-4 ml-3 mr-1' 
                        checked={updateIsShaken} 
                        name='shaken' 
                        onChange={e => setUpdateIsShaken(e.target.checked)} 
                    /> Yes
                </label>
                <label className='flex flex-row items-center'>
                    Stirred
                    <input 
                        type='checkbox' 
                        className='p-4 ml-3 mr-1' 
                        checked={updateIsStirred} 
                        name='stirred' 
                        onChange={e => setUpdateIsStirred(e.target.checked)} 
                    /> Yes
                </label>
            <button
                type='submit'
                className="focus:outline-none focus:ring-1 focus:border-purple-500 bg-red-500 hover:bg-red-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-red-200 font-sans">
                Update
            </button>
            </form>
            <br />
        <UpdateModal updateCocktailForm={updateCocktailForm} />
        </>
    )
}

export default UpdateCocktailForm;