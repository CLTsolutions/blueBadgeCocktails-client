import { useState, useEffect } from 'react'
import SearchCards from '../cards/SearchCards'
import SearchForm from '../cards/SearchForm'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    // const [isLoading, setIsLoading] = useState(true)
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;
    const [data, setData] = useState();

    const initData = async () => {
        const response = await fetch(url);
        const searchResults = await response.json();
        console.log(searchResults);
        setData(searchResults);
        
    };

    useEffect(() => {
        initData();
    }, []);

    return (
        <div>
            <SearchForm />
            <div className='flex flex-row justify-center flex-wrap'>
                {data?.drinks.map((drink, index) => (
                    <SearchCards drink={drink} key={index} index={index} />
                ))}
            </div>
        </div>
    )
}

export default Search
