import {MainContainer, StyledDiv, StyledH2, StyledImg, StyledP} from "../styles/MainStyles.tsx";

export default function Hobbies() {
    return (
        <MainContainer>
            <StyledH2> Hobbies </StyledH2>
            <StyledDiv>
                <StyledImg src="public/Race.PNG" alt="Michael"/>
                <StyledP>One of my favorite hobbies is spending time with my two dogs, an English Lab and an English Bulldog,
                    both of whom love going on walks and playing outside. I have a
                    deep love for the outdoors, whether it’s enjoying fresh air on a quiet walk, running under the open
                    sky, or simply relaxing outside on a nice day. Being outside helps me feel more connected to nature
                    and gives me a sense of peace and freedom. In my free time, I like reading fiction, and two of my
                    favorite books are <em>Harry Potter</em> by J.K Rowling and <em>1984</em> by George Orwell. I’m also
                    a big fan of watching sports, especially the New England Patriots, and I often watch games with my
                    friends. Most importantly, I love spending time with my family, which always brings me happiness and
                    balance.
                    <br/>
                    <br/>
                    This here is a picture of me winning 1st place in my local road race! It was a charity event and
                    all proceeds went towards my local community where I live.
                </StyledP>
            </StyledDiv>
        </MainContainer>
    )
}