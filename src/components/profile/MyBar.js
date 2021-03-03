import Search from '../site/Search';
import CocktailLibrary from './CocktailLibrary';
import SearchForm from "../cards/SearchForm";
// import CocktailForm from '../cards/CocktailForm';

const MyBar = (props) => {
    console.log(props.token);
    return (
        <div className='saved-drinks'>
            <h1>My Bar Cart</h1>
            <CocktailLibrary token={props.token} />
            <br/>
            <h1 className='mt-5'>SEARCH RESULTS</h1>
            <Search />
        </div>
    )
}

export default MyBar