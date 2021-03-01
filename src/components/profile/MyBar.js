import '../styles/MyBar.css'
import SearchCards from '../cards/SearchCards';
import CocktailLibrary from './CocktailLibrary';
// import CocktailForm from '../cards/CocktailForm';

const MyBar = () => {
    return (
        <div className='saved-drinks'>
            <h1>My Bar Cart</h1>
            <CocktailLibrary />
            <br/>
            <SearchCards />
        </div>
    )
}

export default MyBar