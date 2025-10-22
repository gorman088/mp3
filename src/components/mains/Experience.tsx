import {MainContainer, StyledLi, StyledUl, StyledH2} from "../styles/MainStyles.tsx";

export default function Experience(){
    return(
        <MainContainer>
            <StyledH2> Job Experience </StyledH2>
            <StyledUl>
                <StyledLi> Food Server - Took on the responsibility of serving food to the elderly at an assisted living home
                    during the peak of Covid-19. <em> Fenno House Assisted Living (2019-2021) </em>
                </StyledLi>
                <StyledLi> Launch Operator - Maintained and operated marine vessels in accordance
                    with the United States Coast Guard to safely transport customers to their personal water crafts.
                    <em> Squantum Yacht Club (2020-present) </em>
                </StyledLi>
                <StyledLi> Bar Back/ Food Runner - Provided support to staff members, restocking when necessary,
                    while also providing service for customers. <em> Liberty Tavern (2022-2023) </em>
                </StyledLi>
                <StyledLi> Landscaping - Provided lawn and construction services to various homes
                    throughout greater Boston.<em> Thomas Healy Landscaping (2023-2024) </em>
                </StyledLi>
                <StyledLi> Building Automation Systems Intern - Helped run the various plants throughout campus using automation.
                    Coded and debugged various programs to help with energy conservation policies. <em> Boston University (2024-present)</em>
                </StyledLi>
            </StyledUl>
        </MainContainer>
    )
}