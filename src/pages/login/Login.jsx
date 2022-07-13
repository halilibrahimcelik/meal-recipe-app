import React, { Fragment, useState,useEffect } from 'react'
import LoginCard,{LoginForm, LoginInput,LoginContainer,LoginButton, LoginImg} from './Login.styled';
import meal2 from "../../assets/meal2.svg";
import {useNavigate} from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const[userName, setUserName]= useState("");

const navigate=useNavigate();
const {setAuth,isLoggedIn ,onLogin}=useAuth();
console.log()
const submitHandler=(e)=>{
e.preventDefault();
  // sessionStorage.setItem("username",userName);

  navigate("/home");
setAuth({userName})
setUserName("");
onLogin(userName)

}


  return (
    <Fragment>
      <LoginContainer data-aos="zoom-out">
        <LoginCard >
          
          <LoginImg  src={meal2} />
            <LoginForm  onSubmit={(e)=>submitHandler(e)} >
        <LoginInput type="text"  id='userName' value={userName} required placeholder='USERNAME' onChange={(e)=>setUserName(e.target.value)}/>
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