import styled from "styled-components";




export const LoginContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top: 10rem;

`
const LoginCard= styled.main`
background-color:${({theme})=>theme.colors.colorBgLightblue};
width:30rem;
display:flex;
justify-content:center;
align-items:center;
padding:2rem;
box-shadow: 2px 3px 5px 4px #fdfdfd7f;
gap:1rem;

border-radius:6px;
@media (max-width: ${({ theme }) => theme.responsive.smallDevice}) {
    flex-direction: column;
    padding:1rem;
  }

`;
export const LoginForm=styled.form`

display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
justify-self:center;
gap:1rem;


`
export const LoginInput=styled.input`
display:block;
width:100%;
outline:none;
border:none;
padding:0.7rem;
border-radius: 6px;
box-shadow: 3px 5px 5px rgba(0,0,0,0.5);

`
export const LoginButton=styled.button`
width:6rem;
padding:0.5rem 1rem;
margin:0 auto;
border:none;
border-radius:6px;
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

export  const LoginImg=styled.img`
width:150px;
margin:0 auto;

`

 export default LoginCard;
