import styled from "styled-components";

export const Wrapper=styled.main`
background-color:#fff;
width:12rem;
padding:1rem;
box-shadow: 4px 4px 5px rgba(0,0,0,0.5);
border-radius: 8px;

`;
export const Main=styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
gap:1rem;

`;
export const Title=styled.h4`
color:${({theme})=>theme.colors.colorDarkBlue};
text-align:center;
`
export const Button=styled.button`
padding:0.6rem 0.9rem;
outline:none;
border:none;
border-radius: 6px;
background-color:${({theme})=>theme.colors.colorDarkBlue};
color:white;
font-weight: bold;
transition:all 0.4s ease-in-out ;
opacity:1;
cursor: pointer;
&:hover{
opacity:0.8
}

`;

export const Image=styled.img`
width:100%;
height:10rem;

object-fit:cover;
color:white;
border-radius: 8px;
`