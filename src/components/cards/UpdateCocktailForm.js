import { useState } from "react";
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const UpdateCocktailForm = ({ updateCocktail, id, fetchDrinks }) => {
    const [updateName, setUpdateName] = useState("");
    const [updateIsAlcoholic, setUpdateIsAlcoholic] = useState(true);
    const [updateGlassType, setUpdateGlassType] = useState("");
    const [updateIngredients, setUpdateIngredients] = useState("");
    const [updateMeasurements, setUpdateMeasurements] = useState("");
    const [updateInstructions, setUpdateInstructions] = useState("");
    const [updateIsIced, setUpdateIsIced] = useState(true);
    const [updateIsShaken, setUpdateIsShaken] = useState(true);
    const [updateIsStirred, setUpdateIsStirred] = useState(true);
    console.log(id)
    
    return (
        <div className='bg-white bg-opacity-50 max-w-2xl mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl w-1/2'>
            <p className='text-center font-bold text-gray-700 text-2xl mb-5'>Create a New Cocktail</p>
            <form 
                className='flex flex-col space-y-3'
                onSubmit={(e) => {
                    e.preventDefault()
                    updateCocktail(e, id, updateName, updateGlassType, updateIngredients, updateMeasurements, updateInstructions)
                    fetchDrinks()
                }}
            >
                <label>
                    <input
                        type='text' 
                        className='w-full border-2 border-white p-2 rounded outline-none focus:border-purple-500'
                        placeholder='Name'
                        onChange={e => setUpdateName(e.target.value)}
                    />
                </label>
                <label className='flex flex-row items-center'>
                    Alcoholic
                    <input 
                        type='checkbox' 
                        className='p-4 ml-3 mr-1'
                        checked={updateIsAlcoholic} 
                        name='alcoholic' 
                        onChange={e => setUpdateIsAlcoholic(e.target.checked)} 
                    /> Yes
                </label>
                <label>
                    <input 
                        type='text' 
                        className='w-full border-2 border-white p-2 rounded outline-none focus:border-purple-500' 
                        placeholder='Glass Type' 
                        onChange={e => setUpdateGlassType(e.target.value)} 
                    />
                </label>
                <label>
                    <textarea 
                        className='w-full border-2 border-white p-2 rounded outline-none focus:border-purple-500'
                        placeholder='Ingredients' 
                        onChange={e => setUpdateIngredients(e.target.value)} 
                    />
                </label>
                <label>
                    <textarea 
                        className='w-full border-2 border-white p-2 rounded outline-none focus:border-purple-500'
                        placeholder='Measurements' 
                        onChange={e => setUpdateMeasurements(e.target.value)} 
                    />
                </label>
                <label>
                    <textarea 
                        className='w-full border-2 border-white p-2 rounded outline-none focus:border-purple-500' 
                        placeholder='Instructions' 
                        onChange={e => setUpdateInstructions(e.target.value)} 
                    />
                </label>
                <label className='flex flex-row items-center'>
                    Iced
                    <input 
                        type='checkbox' 
                        className='p-4 ml-3 mr-1' 
                        checked={updateIsIced} 
                        name='iced' 
                        onChange={e => setUpdateIsIced(e.target.checked)} 
                    /> Yes
                </label>
                <label className='flex flex-row items-center'>
                    Shaken
                    <input 
                        type='checkbox' 
                        className='p-4 ml-3 mr-1' 
                        checked={updateIsShaken} 
                        name='shaken' 
                        onChange={e => setUpdateIsShaken(e.target.checked)} 
                    /> Yes
                </label>
                <label className='flex flex-row items-center'>
                    Stirred
                    <input 
                        type='checkbox' 
                        className='p-4 ml-3 mr-1' 
                        checked={updateIsStirred} 
                        name='stirred' 
                        onChange={e => setUpdateIsStirred(e.target.checked)} 
                    /> Yes
                </label>
            <button
                type='submit'
                className="focus:outline-none focus:ring-1 focus:border-purple-500 bg-red-500 hover:bg-red-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-red-200 font-sans">
                Update
            </button>
            </form>
            <br />
        </div>
    )
}

//   const updateCocktail = (name, glassType, ingredients, measurements, instructions)=> {
//     console.log("You have updated your cocktail!");
//     fetch(`http://localhost:3000/mybar`, {
//       method: "POST",
//       headers: new Headers({
//         "Content-Type": "application/json",
//         "Authorization": "token"
//       }),
//       body: JSON.stringify({
//         name: updateName,
//         isAlcoholic: updateIsAlcoholic,
//         glassType: updateGlassType,
//         ingredients: updateIngredients,
//         measurements: updateMeasurements,
//         instructions: updateInstructions,
//         isIced: updateIsIced,
//         isShaken: updateIsShaken,
//         isStirred: updateIsStirred,
//       })
//     }) .then(() =>{
//         let newCocktail = updateCocktail
//         newCocktail.name =name
//         newCocktail.isAlcoholic = isAlcoholic
//         newCocktail.glassType = glassType
//         newCocktail.ingredients = ingredients
//         newCocktail.isIced = isIced
//         newCocktail.isShaken = isShaken
//         newCocktail.isStirred = updateIsStirred
//     })
//     return (
//       <div className="text-left max-w-sm bg-white bg-opacity-50 w-auto my-3 mx-3 px-5 py-4 rounded">
//         <p className="font-bold text-gray-700 text-2xl">
//           Create a New Cocktail
//         </p>
//         <form className="flex flex-col">
//           <label className="my-2">
//             <input
//               type="text"
//               placeholder="Name"
//               className="rounded-sm p-1"
//               onChange={(e) => setUpdateName(e.target.value)}
//             />
//           </label>
//           <label className="flex flex-row items-center">
//             Alcoholic
//             <input
//               type="checkbox"
//               checked={updateIsAlcoholic}
//               name="alcoholic"
//               className="ml-3 mr-1"
//               onChange={(e) => setUpdateIsAlcoholic(e.target.checked)}
//             />{" "}
//             Yes
//           </label>
//           <label className="my-2">
//             <input
//               type="text"
//               placeholder="Glass Type"
//               className="rounded-sm p-1"
//               onChange={(e) => setUpdateGlassType(e.target.value)}
//             />
//           </label>
//           <label className="my-2">
//             <textarea
//               placeholder="Ingredients"
//               className="rounded-sm p-1"
//               onChange={(e) => setUpdateIngredients(e.target.value)}
//             />
//           </label>
//           <label className="my-2">
//             <textarea
//               placeholder="Measurements"
//               className="rounded-sm p-1"
//               onChange={(e) => setUpdateMeasurements(e.target.value)}
//             />
//           </label>
//           <label className="my-2">
//             <textarea
//               placeholder="Instructions"
//               className="rounded-sm p-1"
//               onChange={(e) => setUpdateInstructions(e.target.value)}
//             />
//           </label>
//           <label className="flex flex-row items-center">
//             updateIced
//             <input
//               type="checkbox"
//               checked={updateIced}
//               name="iced"
//               className="p-4 ml-3 mr-1"
//               onChange={(e) => setUpdateIsIced(e.target.checked)}
//             />{" "}
//             Yes
//           </label>
//           <label className="flex flex-row items-center">
//             Shaken
//             <input
//               type="checkbox"
//               checked={updateShaken}
//               name="shaken"
//               className="p-4 ml-3 mr-1"
//               onChange={(e) => setUpdateIsShaken(e.target.checked)}
//             />{" "}
//             Yes
//           </label>
//           <label className="flex flex-row items-center">
//             Stirred
//             <input
//               type="checkbox"
//               checked={updateStirred}
//               name="stirred"
//               className="p-4 ml-3 mr-1"
//               onChange={(e) => setUpdateIsStirred(e.target.checked)}
//             />{" "}
//             Yes
//           </label>
//         </form>
//         <button
//           className="focus:outline-none focus:ring-1 focus:ring-gray-900 bg-red-500 hover:bg-red-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-red-200 font-sans"
//           onClick={() =>
//             updateCocktail(
//               name,
//               glassType,
//               ingredients,
//               measurements,
//               instructions
//             )
//           }
//         >
//           Update New Cocktail
//         </button>
//       </div>
//     );
//   };
// };

export default UpdateCocktailForm;
