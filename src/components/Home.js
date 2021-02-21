import React from "react";
import { useEffect, useState } from "react";

const Home = () => {
  const [drinks, setDrinks] = useState({});

  async function fetchData() {
    //currently fetching from api name, will change to trending and add api key
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    res.json().then((res) => setDrinks(res));
  }
  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <span>{JSON.stringify(drinks)}</span>
    </div>
  );
};

export default Home;
