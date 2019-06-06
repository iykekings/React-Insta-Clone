import React, {useState} from 'react';
import './Login.css';
import Icon from '../Icons/Icon';

const Login = () => {
    const [user, setUser] = useState({username: '', password: ''});
    const handleUsernameInput = val => {
        setUser({username: val, password: user.password})
    }
    const handlePasswordInput = val => {
        setUser({ password: val, username: user.username })
    }
    const loginUser = () => {
        console.log({user});
       localStorage.setItem('user', JSON.stringify({user}));
    }
    return (
        <div className="login-container">

            <div className="login-header">
                <Icon icon="instagram" fill="#2a2a2a" />
                <h1>Login Here</h1>
            </div>
            <form onSubmit={loginUser} id="loginForm">
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
