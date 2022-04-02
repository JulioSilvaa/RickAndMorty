import styled from "styled-components";

export const ContainAside = styled.div`
  background-color: lightgray;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  height: 100%;
  grid-area: a;
  margin: 18px;
  position: sticky;
`;

export const ContainerSeason = styled.div`
  box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.2);
  width:400px ;
  background-color: #fff ;

  :hover{
    -webkit-transform:scale(1); 
      -moz-transform:scale(1); 
        -o-transform:scale(1);
       	   transform:scale(1.1);
            background-color:bisque ;
  }
`;
