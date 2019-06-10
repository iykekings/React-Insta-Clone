import React, {useState} from 'react';
import styled from 'styled-components';
import Icon from '../Icons/Icon';

const LoginTitle = styled.h1`
    display: flex;
  color: #472b2b;
  &:before {
  content: ' ';
  height: 45px;
  width: 1.3px;
  margin: 0 1rem;
  background: grey;
}
`;
const LoginHeader = styled.div`
    display: flex;
  align-items: center;
    @media(max-width: 500px) {
    flex-direction: column;
    }
`;
const LoginForm = styled.form`
    display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;
const LoginInput = styled.input`
    margin-bottom: 0.5rem;
  padding: 0.5rem 1.5rem;
  font-size: 1.3rem;
  border: none;
  border-bottom: 1px solid grey;
  outline: none;
`;
const LoginSubmit = styled(LoginInput)`
  border-bottom: none;
  background: #472b2b;
  color: white;
  margin-top: 1rem;
  border-radius: 5px;
`;

const LoginBox = styled.div`
     border: 1px solid gray;
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  border-radius: 5px;
  box-shadow: 2px 2px 12px #00000026;
`;
const LoginContainer = styled.div`
    height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5vw;
`;

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
        <LoginContainer>
            <LoginBox>
            <LoginHeader>
                <Icon icon="instagram" fill="#472b2b" width="80px" />
                <LoginTitle>Login Here</LoginTitle>
            </LoginHeader>
            <LoginForm onSubmit={loginUser} id="loginForm">
                <LoginInput type="text" placeholder="username"
                onChange={(e) => handleUsernameInput(e.target.value)}/>
                <LoginInput type="password" placeholder="password"
                    onChange={(e) => handlePasswordInput(e.target.value)}/>
                <LoginSubmit type="submit" value="Login"/>
            </LoginForm>
            </LoginBox>
        </LoginContainer>
    )
}

export default Login;
