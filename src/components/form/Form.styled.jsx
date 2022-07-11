import styled from "styled-components";

export const FoodForm=styled.form`

display:flex;
gap:5px;
margin-top: 1rem;
border:1px solid #ccc;
padding:0.5rem;
border-radius: 6px;
box-shadow: 3px 5px 10px rgba(0,0,0,0.5);
`;
export const Input=styled.input`
padding:0.6rem;
outline:none;
border:none;
border-radius: 6px;
`;
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
export const Select=styled.select `
padding:0.6rem;
outline:none;
border:none;
border-radius: 6px;
font-weight: bold;
`