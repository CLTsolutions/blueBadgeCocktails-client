// import { useState } from "react";
// import React from "react";

// // import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// const UpdateCocktailForm = () => {
//   const [updateName, setUpdateName] = useState("");
//   const [updateIsAlcoholic, setUpdateIsAlcoholic] = useState(true);
//   const [updateGlassType, setUpdateGlassType] = useState("");
//   const [updateIngredients, setUpdateIngredients] = useState("");
//   const [updateMeasurements, setUpdateMeasurements] = useState("");
//   const [updateInstructions, setUpdateInstructions] = useState("");
//   const [updateIsIced, setUpdateIsIced] = useState(true);
//   const [updateIsShaken, setUpdateIsShaken] = useState(true);
//   const [updateIsStirred, setUpdateIsStirred] = useState(true);

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

// export default UpdateCocktailForm;
