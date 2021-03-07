import Search from '../site/Search';
import CocktailLibrary from './CocktailLibrary';
import SearchForm from "../cards/SearchForm";
// import CocktailForm from '../cards/CocktailForm';

const MyBar = ({ token }) => {
    // console.log(token);
    return (
        <div className='saved-drinks'>
            <CocktailLibrary token={token} />
            <br/>
            <Search />
        </div>
    )
}

export default MyBar