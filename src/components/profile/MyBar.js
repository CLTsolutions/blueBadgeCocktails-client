import CocktailLibrary from './CocktailLibrary';

const MyBar = ({ token }) => {
    return (
        <div className='saved-drinks'>
            <CocktailLibrary token={token} />
            <br/>
        </div>
    )
}

export default MyBar