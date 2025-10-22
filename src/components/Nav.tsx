import {Link} from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    background-attachment: fixed;
    width: 30%;
    background-color: #ADA8B6;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const StyledUl = styled.ul`
    padding: 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100%;

    @media screen and (max-width: 1000px) {
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
    }
`;

const StyledLi = styled.li`
        background: #4C3B4D;
        border: 1px solid #FFEEDB;
        margin: 10px;
    
        @media screen and (max-width: 1000px) {
            margin: 0;
        }
    
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: calc(2px + 2vw);
    text-align: center;
    color: white;
`;

export default function Nav(){
    return(
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to={`/`}>Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/education`}>Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/experience`}>Experience</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/references`}>References</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/hobbies`}>Hobbies</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/projects`}>Projects</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    )
}