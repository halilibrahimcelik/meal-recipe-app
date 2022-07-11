import React, { Fragment, useState,useEffect } from 'react'
import LoginCard,{LoginForm, LoginInput,LoginContainer,LoginButton, LoginImg} from './Login.styled';
import meal2 from "../../assets/meal2.svg";
import {useNavigate} from "react-router-dom";
const Login = () => {
  const[userName, setUserName]= useState("");
  const navigate=useNavigate();


const submitHandler=(e)=>{
e.preventDefault();
  sessionStorage.setItem("username",userName);
  window.location.href="/home";
  // navigate("/home");



}
const LocalData=sessionStorage.getItem("username");
useEffect(() => {
  if(LocalData){

console.log("he")
  }
}, [LocalData])
console.log(LocalData)
  return (
    <Fragment>
      <LoginContainer>
        <LoginCard >
          
          <LoginImg  src={meal2} />
            <LoginForm  onSubmit={(e)=>submitHandler(e)} >
        <LoginInput type="text"  id='userName' required placeholder='USERNAME' onChange={(e)=>setUserName(e.target.value)}/>
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