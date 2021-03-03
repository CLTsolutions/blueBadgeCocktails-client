import { useState, useEffect } from 'react';
import CocktailForm from '../cards/CocktailForm';

const CocktailLibrary = (props) => {
    console.log(props.token);
    const [cocktails, setCocktails] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/mybar/", {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": props.token,
          }),
        })
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            setCocktails(json.cocktails);
          });
      }, []);

    const deleteCocktail = (id) => {
        fetch(`http://localhost:3000/mybar/${id}`, {
            method: "DELETE",
        }).then(() => {
            let newArr = cocktails.filter(cocktail => cocktail.id !== id)
            setCocktails(newArr)
        })
    }

    const createCocktail = (name, glassType, ingredients, measurements, instructions) => {
        console.log('You created a new cocktail!');
        console.log({name, glassType, ingredients, measurements, instructions});
        fetch(`http://localhost:3000/mybar/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify ({
                name: name,
                alcoholic: true,
                glassType: glassType,
                ingredients: ingredients,
                measurements: measurements,
                instructions: instructions,
                iced: false,
                shaken: false,
                stirred: false
            })
        })
        .then(res => console.log(res))
    }

    // CIRCE WORKS HERE


    return (
        <div>
            <div className='flex flex-row justify-center flex-wrap'>
                {cocktails?.length > 0 ? 
                    <>
                    {cocktails.map(cocktail => {
                        return (
                            <div className='m-4 p-4 max-w-sm rounded overflow-hidden shadow-lg bg-gray-50' key={cocktail.id}>
                                <h1 className='mt-4'>{cocktail.name}</h1>
                                <h3>{cocktail.glassType}</h3>
                                <h3>{cocktail.ingredients}</h3>
                                <h3>{cocktail.measurements}</h3>
                                <h3>{cocktail.instructions}</h3>
                                <button className="focus:outline-none focus:ring-1 focus:ring-gray-900 bg-red-500 hover:bg-red-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-red-200 font-sans">Update</button>
                                <button className="focus:outline-none focus:ring-1 focus:ring-gray-900 bg-red-500 hover:bg-red-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-red-200 font-sans" onClick={() => deleteCocktail(cocktail.id)}>Delete</button>
                                <br />
                            </div>
                        )
                    })}
                    </>
                    : null
                }
            </div>
            <CocktailForm createCocktail={createCocktail} />
        </div>
    )
}

export default CocktailLibrary
