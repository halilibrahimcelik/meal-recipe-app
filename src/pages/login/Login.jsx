import React, { Fragment } from 'react'
import LoginCard,{LoginForm, LoginInput,LoginContainer,LoginButton, LoginImg} from './Login.styled';
import meal2 from "../../assets/meal2.svg"
const Login = () => {
  return (
    <Fragment>
      <LoginContainer>
        <LoginCard >
          
          <LoginImg  src={meal2} />
            <LoginForm  >
        <LoginInput type="text"  id='userName' required placeholder='USERNAME'/>
        <LoginInput type="password"  id='password' required minLength="5" max="10" placeholder='Password'/>
        <LoginButton>
          LOGIN
        </LoginButton>
            </LoginForm>
        </LoginCard>
      </LoginContainer>
    </Fragment>
  )
}

export default Login;