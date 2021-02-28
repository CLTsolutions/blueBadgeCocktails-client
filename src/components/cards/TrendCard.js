import '../styles/TrendCard.css'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import Favorite from '@material-ui/icons/Favorite'
import Grid from '@material-ui/core/Grid'


  
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
        <Card style={{ height: 350, width: 300, }}>
              <h1>{drink.strDrink}</h1>
          <img src={drink.strDrinkThumb} height='25%' width='25%' alt='' />
          <ul className ="font-thin text-pink-500 text-xs">
          <li>{drink.strCategory} </li>
         <li> {drink.strAlcoholic}</li>
        <li> {drink.strGlass}</li>
        <li>{drink.strInstructions}</li>
          <li>{liArray}</li>  
          </ul>
        
          <Button onClick={() =>alert('SAVE')} 
          startIcon={<Favorite />}
          variant="outlined" 
          color="primary" 
          size="small"
          style={{
              fontSize: 6
          }}>
              Save Drink
            </Button>
            </Card>
        </div>
    )
}

export default TrendCard