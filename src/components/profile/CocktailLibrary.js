import { useState, useEffect } from 'react';
import CocktailForm from '../cards/CocktailForm';

const CocktailLibrary = ({ token }) => {
    console.log(token);
    const [cocktails, setCocktails] = useState([])

    useEffect(() => { //in useEffect from Justin's vid
        fetch("http://localhost:3000/mybar/", {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": token,
          }),
        })
        .then((res) => res.json())
        .then((json) => {
        console.log(json);
        setCocktails(json.cocktails); //setting array to be the result
        });
    }, []);

    const deleteCocktail = (id) => { //passing cocktail id NOT user's id
        fetch(`http://localhost:3000/mybar/${id}`, {
            method: "DELETE",
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        }).then(() => { //below updates and causes a rerender (.filter takes call back - if statement
            // -- is true gives new array, save in newArr, setCocktails equal to newArr.)
            let newArr = cocktails.filter(cocktail => cocktail.id !== id)
            setCocktails(newArr)
        }) 
    }

    const createCocktail = (e, name, glassType, ingredients, measurements, instructions) => {
        e.preventDefault()
        console.log('You created a new cocktail!');
        console.log({name, glassType, ingredients, measurements, instructions});
        fetch(`http://localhost:3000/mybar/`, {
            method: "POST",
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
            body: JSON.stringify ({
                name: name,
                alcoholic: false,
                glassType: glassType,
                ingredients: ingredients,
                measurements: measurements,
                instructions: instructions,
                iced: false,
                shaken: false,
                stirred: false
            }),
        })
        .then(res => res.json()) //parsing data
        .then(json => {
            console.log(json)
            setCocktails([...cocktails, json])
        })
    }

    return (
        <div>
            <div className='flex flex-row justify-center flex-wrap'>
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
                                    className="focus:outline-none focus:ring-1 focus:ring-gray-900 bg-red-500 hover:bg-red-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-red-200 font-sans">Update
                                </button>
                                <button 
                                    className="focus:outline-none focus:ring-1 focus:ring-gray-900 bg-red-500 hover:bg-red-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-red-200 font-sans" 
                                    onClick={() => deleteCocktail(cocktail.id)}>Delete
                                </button>
                                <br />
                            </div>
                        )
                    })}
                    </>
                    : null
                }
            </div>
            {/* Below is making form display */}
            <CocktailForm createCocktail={createCocktail} />
        </div>
    )
}

export default CocktailLibrary
