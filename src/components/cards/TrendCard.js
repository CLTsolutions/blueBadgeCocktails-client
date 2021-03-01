import '../styles/TrendCard.css'
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
        <div key={index} className ="drinkCard">
        <Flippy
        className="card"
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        style={{ height: 200, width: 150 }}>
            <div className="drinkFront font-display">
                <FrontSide
                style={{
                  backgroundColor: 'white',
                }}>
              <h1 className='name'>{drink.strDrink}</h1>
          <img className= "drinkPic" src={drink.strDrinkThumb} height='25%' width='25%' alt='' />
        <h5 className='text-xs'>Served in: </h5>
        <h5 className='text-xs'>{drink.strGlass}</h5>
          </FrontSide>
          </div>
          <div className="drinkBack">
          <BackSide 
          className =" back-card font-thin text-pink-500 text-xs" style={{ backgroundColor: 'white'}}>
        <h5>{liArray}</h5>  
        <br />
        <p>{drink.strInstructions}</p>
          
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