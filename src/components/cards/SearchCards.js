import { useState, useEffect } from 'react';

const SearchCards = (searchResults) => {
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


    let liArray = []
    Object.entries(searchResults).map((entry)=>{
        if(entry[0].includes("strIngredient")){
            liArray.push(
                <li>{entry[1]}</li>
            )
        }
    })
    console.log(liArray);

    let mesArray = []
    Object.entries(searchResults).map((entry) =>{
      if(entry[0].includes("strMeasure")){
        mesArray.push(
          <li>{entry[1]}</li>
        )
      }
    })
    console.log(mesArray);

    return (

      <div>
        <h1 className='mt-5'>SEARCH RESULTS</h1>
        <div className='flex flex-row justify-center flex-wrap'>
          {data?.drinks.map((drink, index) => (
            <div key={index} className='max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 m-2'>
              <img src={drink.strDrinkThumb} alt='' className='w-full'/>
              <div className="font-bold text-xl mb-2">
                <p>{drink.strDrink}</p>
                {/* <p>{liArray}</p> */}
                {/* <p>{mesArray}</p> */}
                <p>{drink.instructions}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    );
}

export default SearchCards