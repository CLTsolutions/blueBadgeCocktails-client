import { useState } from 'react';

const Login = (props) => {
    const [bartender, setBartender] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/bartender/login', {
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
        console.log(bartender, password)
    }

    return (
        <div>
            <p className="text-gray-600 text-center pt-2 mb-8 font-bold text-2xl">Sign in to your bar cart.</p>
            <form className='space-y-5'>
                <div>
                    {/* <label>Email</label> */}
                    <input
                        className='w-full border-2 border-white p-3 rounded outline-none focus:border-purple-500'
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
                        className='w-full border-2 border-white p-3 rounded outline-none focus:border-purple-500'
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
                    className="max-w-auto bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-md border-4 text-white py-1 px-3 rounded" 
                    onClick={handleSubmit}
                    login={Login}
                    >
                Submit
                </button>
            </form>
        </div>
    );
};

export default Login;