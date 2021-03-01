import React from 'react';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const createCocktail = () => {

}

const CocktailForm = () => {
  return (
    <div className='text-left bg-white bg-opacity-50 my-3 mx-3 p-4 rounded'>
        <div className='border-2 border-indigo-600 mx-4 my-4 p-4'>
            <p className='font-bold text-2xl'>Create a New Cocktail</p>
            <form className='flex flex-col'>
                <label className='my-2'>
                    <input type='text' placeholder='Name' className='rounded-sm p-1' />
                </label>
                <label>
                    Alcoholic
                    <input type='radio' value='yes' name='stirred' className='p-4' /> Yes
                    <input type='radio' value='no' name='stirred' className='pl-4' /> No
                </label>
                <label className='my-2'>
                    <input type='text' placeholder='Glass Type' className='rounded-sm p-1' />
                </label>
                <label className='my-2'>
                    <textarea placeholder='Ingredients' className='rounded-sm p-1' />
                </label>
                <label className='my-2'>
                    <textarea placeholder='Measurements' className='rounded-sm p-1' />
                </label>
                <label className='my-2'>
                    <textarea placeholder='Instructions' className='rounded-sm p-1' />
                </label>
                <label>
                    Iced
                    <input type='radio' value='yes' name='iced' className='p-4' /> Yes
                    <input type='radio' value='no' name='iced' className='pl-4' /> No
                </label>
                <label>
                    shaken<input type='radio' value='yes' name='shaken' className='p-4' /> Yes
                    <input type='radio' value='no' name='Shaken' className='pl-4' /> No
                </label>
                <label>
                    Stirred
                    <input type='radio' value='yes' name='stirred' className='p-4' /> Yes
                    <input type='radio' value='no' name='stirred' className='pl-4' /> No
                </label>
            </form>
            <button className="focus:outline-none focus:ring-1 focus:ring-gray-900 bg-red-500 hover:bg-red-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-red-200 font-sans" onClick={e => createCocktail()}>Create New Cocktail</button>
            <br />
        </div>
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