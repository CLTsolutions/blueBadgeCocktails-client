import './MyBar.css'
import SearchCards from '../SearchCards';

const MyBar = () => {
    return (
        <div className='saved-drinks'>
            <h1>My Bar Cart</h1>
            <SearchCards />
        </div>
    )
}

export default MyBar