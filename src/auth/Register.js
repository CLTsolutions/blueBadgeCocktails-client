import { useState } from 'react';
import validate from './validateInfo'
import APIURL from '../helpers/environment'

const Register = (props) => {
    const [bartender, setBartender] = useState('');
    const [password, setPassword] = useState('');


    let handleSubmit = (e) => {
        e.preventDefault();
        let isValid = validate({
            email: bartender,
            password: password
        })
        if (!isValid) {
            alert("Invalid input for form")
            return
        }

        fetch(`${APIURL}/bartender/register`, {
            method: 'POST',
            body: JSON.stringify({ 
            user:{ 
                email: bartender,
                password: password }}),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }
    
    return (
        <div>
            <p className="text-gray-600 text-center pt-2 mb-8 font-bold text-2xl">Sign up for a bar cart.</p>
            <form className='space-y-5'>
                <div>
                    <input
                        className='w-full border-2 border-white p-3 rounded outline-none focus:border-purple-500'
                        // pattern='(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))'
                        id='email'
                        type='email'
                        placeholder='Email'
                        size='30'
                        value={bartender}
                        name='email'
                        onChange={(event) => setBartender(event.target.value)}
                    />
                </div>
                <div>
                    <input
                        className='w-full border-2 border-white p-3 rounded outline-none focus:border-purple-500'
                        required
                        id='password'
                        type='password'
                        placeholder='Password'
                        value={password}
                        name='password'
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button 
                    className="max-w-auto bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-md border-4 text-white py-1 px-3 rounded"
                    onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
        </div>
    );
};

export default Register;