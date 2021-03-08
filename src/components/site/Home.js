import React from "react";
import { useEffect, useState } from "react";
import "../styles/Home.css";
import TrendingDrinks from '../Pics/trendingDrinks.png'
import TrendCard from "../cards/TrendCard";
// import { ListItemSecondaryAction } from "@material-ui/core";

const Home = ({token}) => {
  const [data, setData] = useState();
  const url = `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILS_API_KEY}/popular.php`;

  const initData = async () => {
    const response = await fetch(url);
    const drinks = await response.json();
    // console.log(drinks);
    return drinks
  };

  useEffect(() => {
    let isMounted = true;
    initData()
      .then(data => {
        if (isMounted) setData(data)
      })
    return () => {isMounted = false}
  }, []);

  return (
    <div className="Drinks">
     <img className='place-items-center'  src ={TrendingDrinks} alt='trenddrinkpic'/>
      <div className="grid grid-rows-4 grid-flow-col gap-0">
        {data?.drinks.slice(0, 12).map((drink, index) => (
          <TrendCard token={token} drink={drink} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
