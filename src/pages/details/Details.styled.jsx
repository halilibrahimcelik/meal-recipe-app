import styled from "styled-components";

export const Container=styled.section`
display:flex;
flex-direction: column;
justify-content:center;
/* align-items:center; */
padding:1rem;
background-color: ${({theme})=>theme.colors.colorBgLightblue};
min-height:100vh;
width:100%;

`;
export const Title=styled.h1`
text-align:center;
color:#352525;
font-size: 2rem;
`;

export const Wrapper=styled.div`

display:flex;
gap:0.4rem;
justify-content: center;
flex-direction:column;
justify-self: center;
margin-bottom: 2rem;
`
export const Image=styled.img`
display:inline-block;
object-fit:cover;
width:30px;
`
export const subTitle=styled.h2`
text-align:center;
color:#352525;
`