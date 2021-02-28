import { useState, useEffect } from 'react';

const CocktailLibrary = () => {
    const [cocktails, setCocktails] = useState([])
    // const [name, setName] = useState('')
    // const [alcoholic, setAlcoholic] = useState()
    // const [glassType, setGlassType] = useState()
    // const [ingredients, setIngredients] = useState('')
    // const [measurements, setMeasurements] = useState('')
    // const [instructions, setInstructions] = useState('')
    // const [ice, setIced] = useState()
    // const [shaken, setShaken] = useState()
    // const [stirred, setStirred] = useState()

    useEffect(() => {
        fetch(`http://localhost:3000/mybar/1`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setCocktails(json.cocktails)
            })
    }, [])

    const deleteCocktail = (e, id) => {
        e.preventDefault()
        fetch(`http://localhost:3000/mybar/${id}`, {
            method: "DELETE",
        }).then(() => {
            let newArr = cocktails.filter(cocktail => cocktail.id !== id)
            setCocktails(newArr)
        })

    }

    return (
        <div className='flex flex-row justify-center flex-wrap'>
            {cocktails.map(cocktail => {
                return (
                <div className='border-2 border-indigo-600 mx-4 my-4 p-4' key={cocktail.id}>
                    <h1 className='mt-4'>{cocktail.name}</h1>
                    <h3>{cocktail.ingredients}</h3>
                    <h3>{cocktail.instructions}</h3>
                    <button className="focus:outline-none focus:ring-1 focus:ring-gray-900 bg-red-500 hover:bg-red-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-red-200 font-sans">Update</button>
                    <button className="focus:outline-none focus:ring-1 focus:ring-gray-900 bg-red-500 hover:bg-red-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-red-200 font-sans" onClick={e => deleteCocktail(e, cocktail.id)}>Delete</button>
                    <br />
                    <br />
                    <br />
                </div>
                )
            })}
        </div>
    )
}

export default CocktailLibrary
