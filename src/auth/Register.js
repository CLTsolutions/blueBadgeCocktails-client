import { useState } from 'react';

const Register = (props) => {
    const [bartender, setBartender] = useState('');
    const [password, setPassword] = useState('');
    const [noUsername, setNoUsername] = useState(false);

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/bartender/register', {
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
        console.log(bartender, password);
    }

    return (
        <div>
            <p className="text-gray-600 text-center pt-2 mb-8 font-bold text-2xl">Sign up for a bar cart.</p>
            <form className='space-y-5'>
                <div>
                    <input
                        className='w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500'
                        required
                        type='email'
                        placeholder='Email'
                        size='30'
                        value={bartender}
                        name='bartender'
                        onChange={(event) => setBartender(event.target.value)}
                    />
                </div>
                <div>
                    <input
                        className='w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500'
                        required
                        type='password'
                        placeholder='Password'
                        minLength='8'
                        value={password}
                        name='password'
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button 
                    className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded"
                    onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default Register;