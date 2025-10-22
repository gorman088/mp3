import {MainContainer, StyledImg, StyledP, StyledDiv, StyledH2} from "../styles/MainStyles.tsx";

export default function Home() {

    return(
    <MainContainer>
        <StyledH2> Home </StyledH2>
        <StyledDiv>
            <StyledImg src="public/me.jpg" alt="Michael"/>
            <StyledP>My name is Michael, and I am a full-time student at Boston University currently pursuing a
                Bachelor's degree in Computer Science. I am in my third year, with an expected graduation
                date of Fall 2026. As a transfer student coming from regimented academy, assimilating into
                the culture of Boston University was not an easy task. Learning from the ground up the many
                processes and integrated systems
                that make a computer so powerful was both a challenge and a rewarding experience. Through
                hard work and perseverance, I have been able to overcome obstacles and continue to grow
                academically and personally. Looking ahead, I am excited to make the most of the
                remainder of my time here and to pursue the many opportunities that will prepare me for a
                successful career after graduation.
                <br/>
                <br/>
                Off to the side you will notice a navigation bar, please use this to explore more about me.
                Thank you for visiting my resume!
            </StyledP>
        </StyledDiv>
    </MainContainer>
    )
}