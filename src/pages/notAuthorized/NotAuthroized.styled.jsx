import styled from "styled-components";

export const Section=styled.section`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#eadcdc;

 padding:3rem;
 background-color:${({theme})=>theme.colors.colorDarkBlue};
max-width:40rem;
 margin:5rem auto;
 border-radius: 8px;
`;

export const Title=styled.h1`
text-align:center;

font-size: 2rem;
margin-bottom: 2rem;
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
width:${({ wd }) => wd || "30px"};
border-radius: 8px;
`