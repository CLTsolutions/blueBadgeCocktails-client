const Card = ({drink, index}) => {

    console.log(drink)
    // Api ing counting
    
    let liArray = []
    Object.entries(drink).map((entry)=>{
        if(entry[0].includes("strIngredient")){
            liArray.push(
                <li>{entry[1]}</li>
            )
        }
    })


    return (    
        <div key={index} className ="drinkCard" height='300px' width='100%'>
          <img src={drink.strDrinkThumb} height='25%' width='25%' />
          <h2>{drink.strDrink}</h2>
          <h2>{drink.strCategory}</h2>
          <h2>{drink.strAlcoholic}</h2>
          <h2>{drink.strGlass}</h2>
          <ul className= "ingredientsList">
            <li>{drink.strInstructions}</li>
            {liArray}
          </ul>
        </div>
    )
}

export default Card