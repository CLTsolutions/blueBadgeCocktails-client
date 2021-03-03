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
            <h1>Register</h1>
            <div>
                <label>Email</label>
                <input
                    required
                    type='email'
                    size='30'
                    value={bartender}
                    name='bartender'
                    onChange={(event) => setBartender(event.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    required
                    type='password'
                    minLength='8'
                    value={password}
                    name='password'
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Register;