import React from 'react'

import { Img ,Wrapper} from './NotFound.styled';
import Image from "../../assets/not found.jpg"
import { LoginButton } from '../login/Login.styled';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate=useNavigate()
  return (
    <Wrapper  data-aos="flip-left">
    
    <Img src={Image}  />
    <LoginButton bg="#E93E44" onClick={()=>navigate("/login",{replace:true}) } > Go Back</LoginButton>
    </Wrapper>
  )
}

export default NotFound