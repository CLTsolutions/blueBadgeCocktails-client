const SearchCards = ({ drink, index }) => {

    let liArray = []
    Object.entries(drink).map((entry, index)=>{
      if(entry[0].includes("strIngredient")){
        liArray.push(
          <li key={index}>{entry[1]}</li>
        )
      }
      return true
    })

    let mesArray = []
    Object.entries(drink).map((entry, index) =>{
      if(entry[0].includes("strMeasure")){
        mesArray.push(
          <li key={index}>{entry[1]}</li>
        )
      }
      return true
    })

    return (
      <div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 m-2'>
          <img src={drink.strDrinkThumb} alt='' className='w-full' />
          <div className='text-left m-3'>
            <p className='text-2xl text-gray-800 mb-3'>{drink.strDrink}</p>
            <p className='list-none'>{liArray}</p>
            <p className='list-none'>{mesArray}</p>
            <p>{drink.strGlass}</p>
            <p>{drink.strInstructions}</p>
          </div>
        </div>
      </div>
    );
}

export default SearchCards