// SEARCH STRETCH GOALS IN PROGRESS

import { useState, useEffect } from 'react'
import SearchCards from '../cards/SearchCards'
import SearchForm from '../cards/SearchForm'

import APIURL from '../../helpers/environment'

const Search = ({token}) => {
    const [searchTerm, setSearchTerm] = useState()
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const [data, setData] = useState([]);

    const queryApi = async () => {
        const response =await fetch(url + searchTerm)
        const searchResults = await response.json();
        // console.log(searchResults);
        setData(searchResults);
    };

    useEffect(() => {
        queryApi()
    }, [searchTerm])

    const createCocktail = (drink) => {
        // name, glassType, ingredients, measurements, instructions
        console.log(drink)
        fetch(`${APIURL}/mybar/`, {
            method: "POST",
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
            body: JSON.stringify ({
                name: drink.strDrink,
                alcoholic: drink.strAlcoholic == "Alcoholic",
                glassType: drink.strGlass,
                ingredients: drink.ing,
                measurements: drink.measures,
                instructions: drink.strInstructions,
                iced: false,
                shaken: false,
                stirred: false
            }),
        })
        .then(res => res.json()) //parsing data
        .then(json => {
            console.log(json)
        })
    }


    return (
        <div>
            <SearchForm setSearchTerm={setSearchTerm} />
            <div className='flex flex-row justify-center flex-wrap'>
                {data?.drinks?.map((drink, index) => (
                    <SearchCards createCocktail={createCocktail} drink={drink} key={index} index={index} />
                ))}
            </div>
        </div>
    )
}

export default Search

// import { useState, useEffect } from 'react'
// import SearchCards from '../cards/SearchCards'
// import SearchForm from '../cards/SearchForm'

// const Search = () => {
//     const [searchTerm, setSearchTerm] = useState('')
//     const [searchQuery, setSearchQuery] = useState()
//     const [userCocktail, setUserCocktail] = useState()
//     // const [isLoading, setIsLoading] = useState(true)
//     const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;
//     const [data, setData] = useState();

//     const initData = async () => {
//         const response = await fetch(url);
//         const searchResults = await response.json();
//         console.log(searchResults);
//         setData(searchResults);
        
//     };

//     useEffect(() => {
//         initData();
//     }, []);

//     useEffect(() => {
//         if (userCocktail) setUserCocktail()
//     }, [searchQuery])

//     return (
//         <div>
//             <div className=" flex flex-row justify-center flex-wrap ">
//             <SearchForm setSearchQuery = {setSearchQuery} />,
//             {/* flex flex-row justify-center flex-wrap */}
//                 {data?.drinks.map((drink, index) => (
//                     <SearchForm setSearchQuery = {setSearchQuery} drink={drink}/>,
//                     <SearchCards drink={drink} key={index} index={index} setSearchQuery={setSearchQuery} />
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Search