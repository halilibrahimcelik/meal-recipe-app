import styled from "styled-components";


export const NavbarContainer=styled.nav`
width:100%;
background-color: ${({theme})=>theme.colors.colorDarkBlue};

padding:1rem;
display:flex;
justify-content: space-between;
align-items:baseline;



`
export const NavBarLogo=styled.img`
width:50px;
height: 50px;
object-fit:cover;
color:white;
`
export const NavBarTitle=styled.h1`
color:${({theme})=>theme.colors.colorBgWhite};
font-style: italic;
display:inline;
margin-left: 10px;
`
export const LinkList=styled.ul `
display:flex;
gap:2rem;
margin-right: 2rem;


`
export const LinkElement=styled.li`
text-decoration: none;
`