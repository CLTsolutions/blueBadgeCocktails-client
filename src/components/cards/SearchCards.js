import { useState, useEffect } from 'react';

const SearchCards = () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Rum';
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
        <h1 className='mt-5'>SEARCH RESULTS</h1>
        <div className='flex flex-row flex-wrap'>
          {data?.drinks.map((drink, index) => (
            <div key={index} className="drinkCard" height="300px" width="100%">
              <img src={drink.strDrinkThumb} alt='' className='rounded-md' />
              <p>{drink.strDrink}</p>
            </div>
          ))}
        </div>
      </div>
    );
}
export default SearchCards
