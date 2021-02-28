const Login = ({ username, password, setUsername, setPassword }) => {
    return (
        <div>
            <h1>Login</h1>
            <div>
                <label>Email</label>
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

export default Login;