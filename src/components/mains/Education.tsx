import {MainContainer, StyledH2, StyledUl, StyledLi} from "../styles/MainStyles.tsx";

export default function Education(){
    return(
        <MainContainer>
            <StyledH2> Educational Background </StyledH2>
            <StyledUl>
                <StyledLi> Squantum Elementary School (2010-2015) </StyledLi>
                <StyledLi> Atlantic Middle School (2015-2018) </StyledLi>
                <StyledLi> North Quincy High School (2018-2022) </StyledLi>
                <StyledLi> Massachusetts Maritime Academy (2022-2023) <em> Facilities Engineering </em> </StyledLi>
                <StyledLi> Boston University (2023-present) <em> Computer Science</em> </StyledLi>
            </StyledUl>
        </MainContainer>
    )
}