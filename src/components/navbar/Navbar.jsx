import React from 'react'
import { NavbarContainer,NavBarLogo, NavBarTitle,LinkList, NavbarLink, NavbarAnchor, NavbarLogoContainer } from './Navbar.styled';
import home from "../../assets/homeLogo.svg";
import {NavLink} from "react-router-dom";


const Navbar = () => {
   
  return (
    <NavbarContainer>
   <NavbarLogoContainer>
       <NavBarLogo src={home} />
        <NavbarLink to="/">
            <NavBarTitle>RECIPES</NavBarTitle>
        </NavbarLink>
   </NavbarLogoContainer>

<LinkList>
    <li>
        <NavbarLink  to="/about">ABOUT</NavbarLink>
    </li>
    <li>
        <NavbarAnchor href="https://github.com/halilibrahimcelik" target="_blank" rel="noopener noreferrer" >GITHUB</NavbarAnchor>
        </li>
    <li>
        <NavbarLink to="/login">LOGOUT</NavbarLink>
    </li>
</LinkList>
    </NavbarContainer>
  )
}

export default Navbar