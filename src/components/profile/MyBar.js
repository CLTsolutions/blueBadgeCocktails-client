import CocktailLibrary from './CocktailLibrary';
import barcart from '../Pics/barcart.png'

const MyBar = ({ token }) => {
    return (
        <div className='saved-drinks'>
            <div className= 'flex justify-center'>
            <img className='h-96' src={barcart} />
            </div>
            <CocktailLibrary token={token} />
            <br/>
        </div>
    )
}

export default MyBar