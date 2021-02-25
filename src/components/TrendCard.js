import React from 'react'
import { Link } from "react-router-dom";

const TrendCard = ({ drinks})  =>{
    return (
        <div className= "drinkCard">
            <Link to={`/drinks/${drinks}`}>{drinks}</Link>    
        </div>
    )
}

export default TrendCard;


