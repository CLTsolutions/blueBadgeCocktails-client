import { useState, useEffect } from 'react';
import CreateCocktailForm from '../cards/CreateCocktailForm';
import APIURL from '../../helpers/environment'
import CocktailLibraryCard from '../cards/CocktailLibraryCard';

const CocktailLibrary = ({ token }) => {
    const [cocktails, setCocktails] = useState([])
    //infinity is a number that's never true by default
    const [cocktailsToUpdate, setCocktailsToUpdate] = useState(Infinity)
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        fetchDrinks() //fetching drinks again after updating
      }, []);

    const fetchDrinks = () => {
        fetch(`${APIURL}/mybar/`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": token,
            }),
        })
        .then((res) => res.json())
        .then((json) => {
        //getting cocktails, mapping, and adding properties to them (storing boolean values on them)
        //this is so when update is clicked, it's set to true and form will show.
            // json.cocktails.map(cocktail => cocktail.isUpdating = false)
            setCocktails(json.cocktails); //setting array to be the result
        });
    }

    const deleteCocktail = (id) => { //passing cocktail id NOT user's id
        fetch(`${APIURL}/mybar/${id}`, {
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
        fetch(`${APIURL}/mybar/`, {
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
            //what is 'isUpdating'? See above comments in our GET.
            fetchDrinks()
        })
    }

    const updateCocktail = (e, id, name, glassType, ingredients, measurements, instructions) => {
        fetch(`${APIURL}/mybar/${id}`, {
            method: "PUT",
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
            //what is 'isUpdating'? See above comments in our GET.
            fetchDrinks()
            setCocktailsToUpdate(Infinity)
        })
    }

    return (
        <div>
            <div>
                <div className='flex justify-center'>
                    <button 
                        onClick={() => setShowForm(!showForm)}
                        className='my-5 mx-5 max-w-auto bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-md border-4 text-white py-1 px-3 rounded'
                    >
                    Create New Cocktail
                    </button>
                </div>
                {showForm ? <CreateCocktailForm createCocktail={createCocktail} />
                : <></>
                }
            </div>
            <div className='flex flex-start justify-center'>
                <CocktailLibraryCard cocktails={cocktails} setCocktailsToUpdate={setCocktailsToUpdate} fetchDrinks={fetchDrinks} deleteCocktail={deleteCocktail} updateCocktail={updateCocktail} cocktailsToUpdate={cocktailsToUpdate} />
            </div>
        </div>
    )
}

export default CocktailLibrary