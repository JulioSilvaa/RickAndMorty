import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


*{
    margin:0 ;
    padding:0 ;
    box-sizing: border-box ; 
    font-family: 'Architects Daughter', cursive;


    

}


.ContainerApp{   
display:grid ;
grid-template-columns: 4fr 1fr;
grid-template-rows: 8vh 92vh  ;
grid-template-areas:" h h"
"m a"
"m a"
 ;

 
 background-color:
 lightgray;
}



`;

export default GlobalStyle;
