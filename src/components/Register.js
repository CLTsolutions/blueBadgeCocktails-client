import { useState } from 'react';

const Register = ({ props }) => {
    const [bartender, setBartender] = useState('');
    const [password, setPassword] = useState('');

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
        ).then(json => {
            console.log(json)
        })
        
        // .then((data) => {
        //     props.updateToken(data.sessionToken)
        // })
        console.log(bartender, password);
        // <div>
        //     <h1>Sign Up</h1>
        //     <form onSubmit={handleSubmit}>

        //     </form>
        // </div>
    }

    return (
        <div>
            <h1>Register</h1>
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

export default Register;