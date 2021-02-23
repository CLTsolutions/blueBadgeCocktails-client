const Register = ({ username, password, setUsername, setPassword }) => {
    return (
        <div>
            <h1>Register</h1>
            <div>
                <label>Username</label>
                <input
                    value={username}
                    name='username'
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    value={password}
                    name='password'
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
        </div>
    );
};

export default Register;