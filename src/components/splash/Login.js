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
            <h1>Login</h1>
            <div>
                <label>Email</label>
                <input
                    value={bartender}
                    name='bartender'
                    onChange={(event) => setBartender(event.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    value={password}
                    name='password'
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Login;