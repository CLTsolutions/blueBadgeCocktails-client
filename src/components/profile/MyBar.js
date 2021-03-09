import CocktailLibrary from './CocktailLibrary';
import barcart from '../Pics/barcartCropped.png'

const MyBar = ({ token }) => {
    return (
        <div className='saved-drinks'>
            <div className= 'flex justify-center'>
            <img className='h-60' src={barcart} />
            </div>
            <CocktailLibrary token={token} />
            <br/>
        </div>
    )
}

export default MyBar