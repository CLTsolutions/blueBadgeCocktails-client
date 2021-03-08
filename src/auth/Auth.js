import { useState } from 'react';

import Login from './Login';
import Register from './Register';
import loginPic from '../components/Pics/vibes.png'


const Auth = ({ updateToken } ) => {
    const [toggle, setToggle] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (
 
        <div className="flex h-screen items-center justify-center">
        <div>
            <img src={ loginPic } alt = 'loginPic' />
            </div>
            <div className='bg-white bg-opacity-75 max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl w-1/2'>
                {toggle ? (
                    <Login
                        setPassword={setPassword}
                        setUsername={setUsername}
                        username={username}
                        password={password}
                        updateToken={updateToken}
                    />
                ) : (
                    <Register
                        setPassword={setPassword}
                        setUsername={setUsername}
                        username={username}
                        password={password}
                        updateToken={updateToken}
                    />
                )}
                <div className='mt-8 text-center'>
                    <p className={"link"} onClick={() => setToggle(!toggle)}>
                        {toggle
                            ? "Don't have a Bar Cart?"
                            : "Already have a Bar Cart?"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Auth;