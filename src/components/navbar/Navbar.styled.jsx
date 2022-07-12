import styled from "styled-components";
import {NavLink} from "react-router-dom"

export const NavbarContainer=styled.nav`
width:100%;
background-color: ${({theme})=>theme.colors.colorDarkBlue};

padding:1rem;
display:flex;
justify-content: space-between;
align-items:baseline;

@media (max-width: ${({ theme }) => theme.responsive.smallDevice}) {
    flex-direction: column;
 
    padding:1rem;
  }

`;

export const NavbarLogoContainer=styled.div`
display:flex;
align-items:baseline;
@media (max-width: ${({ theme }) => theme.responsive.smallDevice}) {

margin: 0 auto;
  }
`
export const NavBarLogo=styled.img`
width:50px;
height: 50px;
object-fit:cover;
color:white;
`
export const NavBarTitle=styled.h2`
color:${({theme})=>theme.colors.colorBgWhite};
font-style: normal;
display:inline;
margin-left: 10px;
`
export const LinkList=styled.ul `
display:flex;
list-style:none;
gap:2rem;
margin-right: 2rem;
@media (max-width: ${({ theme }) => theme.responsive.smallDevice}) {
    flex-direction: column;
margin:0 auto;
justify-content:center;
align-items:center;
  }


`

export const NavbarLink = styled(NavLink)` color:white;
 font-size: x-large;
 font-family: Arial, Helvetica, sans-serif;
 text-decoration: none;

 margin: 10px;
&:hover,
&:focus{
    color:#415a68;
    text-decoration: underline;
}
&:active{
    color: #fff;
};`
export const NavbarAnchor = styled.a` color:white;
 font-size: x-large;
 font-family: Arial, Helvetica, sans-serif;
 text-decoration: none;

 margin: 10px;
&:hover,
&:focus{
    color:#415a68;
    text-decoration: underline;
}
&:active{
    color: #fff;
};`
