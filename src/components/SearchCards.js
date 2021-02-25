import { useState, useEffect } from 'react';

const SearchCards = () => {
    // const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin';
    const [term, setTerm] = useState('')
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum';
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

      <div className="search-drinks">
          <input placeholder='Search'></input>
        <h1>SEARCH RESULTS</h1>
        {data?.drinks.map((drink, index) => (
          <div key={index} className="drinkCard" height="300px" width="100%">
            <img src={drink.strDrinkThumb} height="25%" width="25%" />
            <p>{drink.strDrink}</p>
          </div>
        ))}
      </div>
    );
}
export default SearchCards
