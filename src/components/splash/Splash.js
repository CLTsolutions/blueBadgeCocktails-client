import { useState } from 'react';

import Register from './Register';
import Login from './Login';


const Splash = ( props ) => {
    const [toggle, setToggle] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="splash-container">
            {toggle ? (
                <Login
                    setPassword={setPassword}
                    setUsername={setUsername}
                    username={username}
                    password={password}
                    updateToken={props.updateToken}
                />
            ) : (
                <Register
                    setPassword={setPassword}
                    setUsername={setUsername}
                    username={username}
                    password={password}
                    updateToken={props.updateToken}
                />
            )}

            

            <p className={"link"} onClick={() => setToggle(!toggle)}>
                {toggle
                    ? "Don't have a barCart?"
                    : "Already have a barCart?"}
            </p>
        </div>
    );
};

export default Splash;