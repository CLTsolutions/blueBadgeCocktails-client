import { useState } from 'react'
import React from 'react';

const CreateCocktailForm = ({ createCocktail }) => {
    const [name, setName] = useState('')
    const [isAlcoholic, setIsAlcoholic] = useState(false)
    const [glassType, setGlassType] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [measurements, setMeasurements] = useState('')
    const [instructions, setInstructions] = useState('')
    const [isIced, setIsIced] = useState(false)
    const [isShaken, setIsShaken] = useState(false)
    const [isStirred, setIsStirred] = useState(false)

  return (
    <div className='bg-white bg-opacity-50 max-w-2xl mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl w-1/2'>
        <p className='text-center font-bold text-gray-700 text-2xl mb-5'>Create a New Cocktail</p>
        <form 
            className='flex flex-col space-y-3'
            onSubmit={(e) => createCocktail(e, name, glassType, ingredients, measurements, instructions)}
        >
            <label>
                <input
                    type='text' 
                    className='w-full border-2 border-white p-2 rounded outline-none focus:border-purple-500'
                    placeholder='Name'
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <label className='flex flex-row items-center'>
                Alcoholic
                <input 
                    type='checkbox' 
                    className='p-4 ml-3 mr-1'
                    checked={isAlcoholic} 
                    name='alcoholic' 
                    onChange={e => setIsAlcoholic(e.target.checked)} 
                /> Yes
            </label>
            <label>
                <input 
                    type='text' 
                    className='w-full border-2 border-white p-2 rounded outline-none focus:border-purple-500' 
                    placeholder='Glass Type' 
                    onChange={e => setGlassType(e.target.value)} 
                />
            </label>
            <label>
                <textarea 
                    className='w-full border-2 border-white p-2 rounded outline-none focus:border-purple-500'
                    placeholder='Ingredients' 
                    onChange={e => setIngredients(e.target.value)} 
                />
            </label>
            <label>
                <textarea 
                    className='w-full border-2 border-white p-2 rounded outline-none focus:border-purple-500'
                    placeholder='Measurements' 
                    onChange={e => setMeasurements(e.target.value)} 
                />
            </label>
            <label>
                <textarea 
                    className='w-full border-2 border-white p-2 rounded outline-none focus:border-purple-500' 
                    placeholder='Instructions' 
                    onChange={e => setInstructions(e.target.value)} 
                />
            </label>
            <label className='flex flex-row items-center'>
                Iced
                <input 
                    type='checkbox' 
                    className='p-4 ml-3 mr-1' 
                    checked={isIced} 
                    name='iced' 
                    onChange={e => setIsIced(e.target.checked)} 
                /> Yes
            </label>
            <label className='flex flex-row items-center'>
                Shaken
                <input 
                    type='checkbox' 
                    className='p-4 ml-3 mr-1' 
                    checked={isShaken} 
                    name='shaken' 
                    onChange={e => setIsShaken(e.target.checked)} 
                /> Yes
            </label>
            <label className='flex flex-row items-center'>
                Stirred
                <input 
                    type='checkbox' 
                    className='p-4 ml-3 mr-1' 
                    checked={isStirred} 
                    name='stirred' 
                    onChange={e => setIsStirred(e.target.checked)} 
                /> Yes
            </label>
            <button
                type='submit'
                className="focus:outline-none focus:ring-1 focus:border-purple-500 bg-red-500 hover:bg-red-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-red-200 font-sans">
                Submit
            </button>
        </form>
        <br />
    </div>
  );
}

export default CreateCocktailForm