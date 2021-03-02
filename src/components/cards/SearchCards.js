// import { useState, useEffect } from 'react';

const SearchCards = ({ drink, index }) => {

    let liArray = []
    Object.entries(drink).map((entry)=>{
        if(entry[0].includes("strIngredient")){
            liArray.push(
                <li>{entry[1]}</li>
            )
        }
    })

    let mesArray = []
    Object.entries(drink).map((entry) =>{
      if(entry[0].includes("strMeasure")){
        mesArray.push(
          <li>{entry[1]}</li>
        )
      }
    })

    return (

      <div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 m-2'>
          <img src={drink.strDrinkThumb} alt='' className='w-full'/>
          <p>{drink.strDrink}</p>
          <p>{liArray}</p>
          <p>{mesArray}</p>
          <p>{drink.strInstructions}</p>
        </div>
        {/* <div className='flex flex-row justify-center flex-wrap'>
          {data?.drinks.map((drink, index) => (
            <div key={index} className='max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 m-2'>
              <img src={drink.strDrinkThumb} alt='' className='w-full'/>
              <div className="font-bold text-xl mb-2"> */}
                {/* <p>{drink.strDrink}</p> */}
              {/* </div>
            </div>
          ))}

        </div> */}
      </div>
    );
}

export default SearchCards