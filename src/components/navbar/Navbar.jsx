import React, { Fragment, useState,useEffect } from 'react'
import { NavbarContainer,NavBarLogo, NavBarTitle,LinkList, NavbarLink, NavbarAnchor, NavbarLogoContainer } from './Navbar.styled';
import home from "../../assets/homeLogo.svg";
import useAuth from '../../hooks/useAuth';



const Navbar = () => {
    const LocalData=sessionStorage.getItem("username");
    const [isOpen,setIsOpen]=useState(LocalData || false);


    // useEffect(() => {
    //     if(LocalData){

    //         setIsOpen(true)
    //     }
    // }, [LocalData])
    // console.log(LocalData)
    const context=useAuth()

    const logOutHandler=()=>{
  context.onLogout()
    }
   
  return (
    <Fragment>
 <NavbarContainer>
   <NavbarLogoContainer>
       <NavBarLogo src={home} />
        <NavbarLink to="/home">
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
        <NavbarLink to="/login" onClick={logOutHandler}>LOGOUT</NavbarLink>
    </li>
</LinkList>
    </NavbarContainer>

    </Fragment>
  )
}

export default Navbar