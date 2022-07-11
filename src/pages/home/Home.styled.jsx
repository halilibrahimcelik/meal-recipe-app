import styled from "styled-components";

export const Section =styled.section`
background-color: ${({theme})=>theme.colors.colorBgLightblue};
height:100vh;
width:100%;
display:flex;
flex-direction: column;
align-items:center;


`
export const Title=styled.h1`
margin-top: 4rem;
color:#604343;
font-size: 2.5rem;
font-weight: 900;

text-shadow: 5px 5px 8px  rgba(0,0,0,0.2);
`