// import React from 'react'

// const Favorites=({ setCocktails }) => {

//     const [favCocktail, setFavCocktail] = useState([])

//     useEffect(()=> {
//         let promiseArr = []
//         favs.map((film) => {
//             promiseArr.push(
//                 fetch(film.filmURL)
//                     .then(res => res.json())
//             )
//         })
//         Promise.all(promiseArr).then(results => {
//             console.log(results)
//             setSaveCocktail(results)
//         })
//     }, [favs])
//     console.log(favFilms)

//     return (
//         <FavoritesView>
//             {saveCocktail && <h2>Favorites</h2>}
//             {saveCocktail.map(cocktails => {
//                 return (
//                     <div key={Cocktail.name}>
//                         <h3>{Cocktail.glassType}&emsp;{Cocktail.ingredients}&emsp;(Cocktail.measurements)&emsp;(Cocktail.instructions)&emsp;()
//                             <StyledButton onClick={() => setCocktails(cocktails)}>Details</StyledButton>
//                         </h3>
//                     </div>
//                 )
//             })}
//         </FavoritesView>
//     )
// }

// export default Favorites

