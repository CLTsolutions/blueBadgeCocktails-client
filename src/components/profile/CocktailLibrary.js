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
        fetch('http://localhost:3000/mybar/1')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setCocktails(json.cocktails)
            })
    }, [])

    return (
        <div>
            {cocktails.map(cocktail => {
                return (
                <div className='border-2 border-indigo-600' key={cocktail.id}>
                    <h1>{cocktail.name}</h1>
                    <h3>{cocktail.ingredients}</h3>
                    <h3>{cocktail.instructions}</h3>
                    <button>Update Cocktail</button>
                    <button>Delete</button>
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
