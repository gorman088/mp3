import styled from "styled-components";
import {Link} from "react-router";

const StyledP = styled.p`
        color: white;
        
        a{
            color: white;
        }
    `;

const StyledFooter = styled.footer`
        background-color: #4C3B4D;
    `;

export default function Footer(){
    return(
        <StyledFooter>
            <StyledP>All rights reserved by Michael Gorman <Link to="/">Credits</Link> &#169; </StyledP>
        </StyledFooter>
    )
}