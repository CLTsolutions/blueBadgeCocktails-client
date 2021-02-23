import { useState } from 'react';

import Register from './Register';
import Login from './Login';


const Splash = () => {
    const [toggle, setToggle] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log(username, password);
    };

    const handleEvent = () => {
        console.log('HandleEvent');
    };

    return (
        <div className="card">
            {toggle ? (
                <Login
                    setPassword={setPassword}
                    setUsername={setUsername}
                    username={username}
                    password={password}
                />
            ) : (
                    <Register
                        setPassword={setPassword}
                        setUsername={setUsername}
                        username={username}
                        password={password}
                    />
                )}

            <button onClick={toggle ? handleSubmit : handleEvent}>Submit</button>

            <p className={"link"} onClick={() => setToggle(!toggle)}>
                {toggle
                    ? "Don't have a barCart?"
                    : "Already have a barCart?"}
            </p>
        </div>
    );
};

export default Splash;