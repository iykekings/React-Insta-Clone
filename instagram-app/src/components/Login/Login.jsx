import React, {useState} from 'react'

const Login = () => {
    const [user, setUser] = useState({username: '', password: ''});
    const handleUsernameInput = val => {
        setUser({username: val, password: user.password})
    }
    const handlePasswordInput = val => {
        setUser({ password: val, username: user.username })
    }
    const login = () => {
        console.log({user});
       // localStorage.setItem('user', JSON.stringify({user}));
    }
    return (
        <div className="login-container">
            <form onSubmit={login} id="loginForm">
                <input type="text" placeholder="username"
                onChange={(e) => handleUsernameInput(e.target.value)}/>
                <input type="password" placeholder="password"
                    onChange={(e) => handlePasswordInput(e.target.value)}/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default Login
