import styled from "styled-components";

export default function Header() {

const StyledHeader = styled.header`
    background-color: #4C3B4D;
`;

const StyledH1 = styled.h1`
    margin-left: 10px;
    text-align: left;
    color: white;
    
    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`;

const StyledP = styled.p`
    margin-left: 10px;
    text-align: left;
    color: white;
    
    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`;

    return(
       <StyledHeader>
           <StyledH1>Michael's Resume</StyledH1>
           <StyledP>Welcome to my webpage</StyledP>
       </StyledHeader>
   )
}