import '../styles/MyBar.css'
import SearchCards from '../cards/SearchCards';
import CocktailLibrary from './CocktailLibrary';

const MyBar = () => {
    return (
        <div className='saved-drinks'>
            <h1>My Bar Cart</h1>
            <CocktailLibrary />
            <SearchCards />
        </div>
    )
}

export default MyBar