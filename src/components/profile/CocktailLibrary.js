import { useState, useEffect } from 'react';
import CreateCocktailForm from '../cards/CreateCocktailForm';
import CocktailLibraryCard from '../cards/CocktailLibraryCard';
// import UpdateCocktailForm from '../cards/UpdateCocktailForm'
import APIURL from '../../helpers/environment'

const CocktailLibrary = ({ token }) => {
    // console.log(token);
    const [cocktails, setCocktails] = useState([])
    //infinity is a number that's never true by default
    const [cocktailsToUpdate, setCocktailsToUpdate] = useState(Infinity)

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
                    // console.log(json.cocktails);
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
        // console.log({name, glassType, ingredients, measurements, instructions});
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
            // console.log(json)
        })
    }

    const updateCocktail = (e, id, name, glassType, ingredients, measurements, instructions) => {
        // console.log({name, glassType, ingredients, measurements, instructions});
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
            // console.log(json)
        })
    }

    return (
        <div>
            <div className='flex  flex-start justify-center'>
                {cocktails?.length > 0 ? 
                    <>
                    {cocktails.map(cocktail => { //map is returning drink card for user's drinks
                        return (
                            <CocktailLibraryCard createCocktail={createCocktail} />
                        )
                    })}
                    </>
                    : null
                }
            </div>
            <CreateCocktailForm createCocktail={createCocktail} />
        </div>
    )
}

export default CocktailLibrary