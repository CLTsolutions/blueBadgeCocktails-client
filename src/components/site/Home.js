import React from "react";
import { useEffect, useState } from "react";
import '../styles/Home.css'
import TrendCard from '../cards/TrendCard' 
import ReactPaginate from 'react-paginate';
// import { ListItemSecondaryAction } from "@material-ui/core";


const Home = () => {
  const [data, setData] = useState();
  const url = `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILS_API_KEY}/popular.php`;
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0)

  const initData = async () => {
    const response = await fetch(url);
    const drinks = await response.json();
    // const slice = data.slice(offset, offset + perPage)
    console.log(drinks);
    setData(drinks);
    setPageCount(Math.ceil(drinks.length / perPage))
  }
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
  };
  
  useEffect(() => {
    initData();
  }, [offset]);


  return (
    <div className="Drinks">

      <h1 className="font-display text-white text-xl">Trending Drinks</h1>
      <div className='grid grid-rows-4 grid-flow-col gap-0'>
      {data?.drinks.slice(offset, offset + perPage).map((drink, index) => (
        
        <TrendCard drink={drink} key ={index} index={index}/> 
      ))}
      </div>
      <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
    </div>
  );
}

export default Home;
