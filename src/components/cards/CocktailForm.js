import { useState } from 'react'
import React from 'react';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CocktailForm = ({createCocktail}) => {
    const [name, setName] = useState('')
    const [isAlcoholic, setIsAlcoholic] = useState(false)
    const [glassType, setGlassType] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [measurements, setMeasurements] = useState('')
    const [instructions, setInstructions] = useState('')
    const [isIced, setIsIced] = useState(false)
    const [isShaken, setIsShaken] = useState(false)
    const [isStirred, setIsStirred] = useState(false)
    // const [isChecked, setIsChecked] = useState(false)
    // const [isCheckedTwo, setIsCheckedTwo] = useState(false)
    console.log(isAlcoholic);
    console.log(isIced);
    console.log(isShaken);
    console.log(isStirred);

  return (
    <div className='text-left max-w-sm bg-white bg-opacity-50 w-auto my-3 mx-3 px-5 py-4 rounded'>
        <p className='font-bold text-2xl'>Create a New Cocktail</p>
        <form className='flex flex-col'>
            <label className='my-2'>
                <input type='text' placeholder='Name' className='rounded-sm p-1' onChange={e => setName(e.target.value)} />
            </label>
            <label className='flex flex-row items-center'>
                Alcoholic
                <input type='checkbox' checked={isAlcoholic} name='alcoholic' className='ml-3 mr-1' onChange={e => setIsAlcoholic(e.target.checked)} /> Yes
            </label>
            <label className='my-2'>
                <input type='text' placeholder='Glass Type' className='rounded-sm p-1' onChange={e => setGlassType(e.target.value)} />
            </label>
            <label className='my-2'>
                <textarea placeholder='Ingredients' className='rounded-sm p-1' onChange={e => setIngredients(e.target.value)} />
            </label>
            <label className='my-2'>
                <textarea placeholder='Measurements' className='rounded-sm p-1' onChange={e => setMeasurements(e.target.value)} />
            </label>
            <label className='my-2'>
                <textarea placeholder='Instructions' className='rounded-sm p-1' onChange={e => setInstructions(e.target.value)} />
            </label>
            <label className='flex flex-row items-center'>
                Iced
                <input type='checkbox' checked={isIced} name='iced' className='p-4 ml-3 mr-1' onChange={e => setIsIced(e.target.checked)} /> Yes
            </label>
            <label className='flex flex-row items-center'>
                Shaken
                <input type='checkbox' checked={isShaken} name='shaken' className='p-4 ml-3 mr-1' onChange={e => setIsShaken(e.target.checked)} /> Yes
            </label>
            <label className='flex flex-row items-center'>
                Stirred
                <input type='checkbox' checked={isStirred} name='stirred' className='p-4 ml-3 mr-1' onChange={e => setIsStirred(e.target.checked)} /> Yes
            </label>
        </form>
        <button type='submit' className="focus:outline-none focus:ring-1 focus:ring-gray-900 bg-red-500 hover:bg-red-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-red-200 font-sans" onClick={e => createCocktail(name, glassType, ingredients, measurements, instructions)}>Create New Cocktail</button>
        <br />
        {/* <Form>
            <FormGroup>
                <Label for="name"></Label>
                <Input type="text" id="" placeholder="Name" className='my-2' />
            </FormGroup>
            <FormGroup tag="fieldset">
                <h1>Alcoholic?</h1>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="alcoholic" />{' '}
                    Yes
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="alcoholic" />{' '}
                    No
                </Label>
                </FormGroup>
            </FormGroup>
            <FormGroup>
                <Label for="glassType"></Label>
                <Input type="text" id="" placeholder="Glass Type" className='my-2' />
            </FormGroup>
            <FormGroup>
                <Label for="ingredients"></Label>
                <Input type="text" name="" id="" placeholder="Ingredients" className='my-2' />
            </FormGroup>
            <FormGroup>
                <Label for="measurements"></Label>
                <Input type="textarea" name="" id="" className='my-2' placeholder='Measurements' />
            </FormGroup>
            <FormGroup>
                <Label for="instructions"></Label>
                <Input type="textarea" name="t" id="" placeholder='Instructions' />
            </FormGroup>
            <FormGroup tag="fieldset">
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Option one is this and that—be sure to include why it's great
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Option two can be something else and selecting it will deselect option one
                </Label>
                </FormGroup>
            </FormGroup>
            <Button className="focus:outline-none focus:ring-1 focus:ring-gray-900 bg-red-500 hover:bg-red-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-red-200 font-sans" onClick={e => createCocktail()}>Create New Cocktail</Button>
        </Form> */}
    </div>
  );
}

export default CocktailForm