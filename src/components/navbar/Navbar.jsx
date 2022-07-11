import React from 'react'
import { NavbarContainer,NavBarLogo, NavBarTitle,LinkList } from './Navbar.styled';
import home from "../../assets/homeLogo.svg";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarContainer>
   <div>
       <NavBarLogo src={home} />
        <NavBarTitle>RECIPES</NavBarTitle>
   </div>

<LinkList>
    <li>
        <NavLink to="/about">ABOUT</NavLink>
    </li>
    <li><a href="https://github.com/halilibrahimcelik" target="_blank" rel="noopener noreferrer" >GITHUB</a></li>
    <li>
        <NavLink to="/login">LOGOUT</NavLink>
    </li>
</LinkList>
    </NavbarContainer>
  )
}

export default Navbar