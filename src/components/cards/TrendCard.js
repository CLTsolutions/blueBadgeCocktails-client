import '../styles/TrendCard.css'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import Favorite from '@material-ui/icons/Favorite'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { useState } from 'react'


  
const TrendCard = ({drink, index}) => {

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
        <div key={index} className ="drinkCard shadow-2xl">
        <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        style={{ height: 200, width: 200, }}>
            <div>
                <FrontSide
                style={{
                  backgroundColor: 'white',
                }}>
              <h1>{drink.strDrink}</h1>
          <img src={drink.strDrinkThumb} height='25%' width='25%' alt='' />
          <h5>{drink.strCategory} </h5>
        <h5> {drink.strGlass}</h5>
          </FrontSide>
          </div>
          <div className="drinkInstructions">
          <BackSide 
          className =" back-card font-thin text-pink-500 text-xs" style={{ backgroundColor: 'white'}}>
        <p>{drink.strInstructions}</p>
          <h5>{liArray}</h5>  
          </BackSide>
          </div>
          {/* <Button onClick={() =>alert('SAVE')} 
          startIcon={<Favorite />}
          variant="outlined" 
          color="primary" 
          size="small"
          style={{
              fontSize: 6
          }}>
              Save Drink
            </Button> */}
            </Flippy>
        </div>
    )
}

export default TrendCard