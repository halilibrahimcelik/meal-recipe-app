import styled from "styled-components";

export  const Section=styled.section`
background-color: ${({theme})=>theme.colors.colorBgLightblue};
height:100vh;
width:100%;
display:flex;
flex-direction:column;

align-items:center;

`
export const Title=styled.h2`
color:#605858;
text-shadow:4px 4px 10px  rgba(0,0,0,0.5); 
margin: 1rem;
`
export const Img=styled.img`
width:30rem;
height:15rem;
object-fit:cover;
background-position: center;

margin-top: 2rem;
border-radius: 10px;

`
export const Article=styled.article`
border:3px solid #ccc;
padding:1rem;
border-radius:7px;
display:grid;
gap:10px;
box-shadow: 4px 4px 5px rgba(0,0,0,0.5);
font-size:1rem;


`