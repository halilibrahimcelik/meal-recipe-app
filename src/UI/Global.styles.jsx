import { createGlobalStyle } from "styled-components";


export const GlobalStyles=createGlobalStyle`

*{
    margin: 0;
    padding:0;
    box-sizing:border-box;
    overflow:hidden;
    
  }
  
  body {
  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url("https://picsum.photos/1600/900?grayscale");
  background-repeat:no-repeat;
  background-size:cover;
  object-fit:cover;

  background-attachment: fixed;
 

}

`