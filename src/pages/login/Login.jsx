import React, { Fragment } from 'react'
import LoginCard from './Login.styled';
const Login = () => {
  return (
    <Fragment>
      <LoginCard >
    <form  >
   
      <div><input type="text"  id='userName' required placeholder='USERNAME'/></div>
      <div><input type="password"  id='password' required min="5" max="10" placeholder='USERNAME'/></div>
      <button>
        LOGIN
      </button>
    </form>

      </LoginCard>
    </Fragment>
  )
}

export default Login;