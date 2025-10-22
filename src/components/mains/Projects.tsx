import useCalculator from "../hooks/useCalculator.tsx";
import {MainContainer, StyledH2, StyledButtons, StyledCalculator, StyledOutput, StyledH3, StyledOutputText} from "../styles/MainStyles.tsx";

export default function Projects() {
    const {
        one, setOne,
        two, setTwo,
        result, doAdd,
        doSub, doMul,
        doDiv, power,
        clearAll, color
    } = useCalculator();
    return (
        <MainContainer>
            <StyledH2> Calculator </StyledH2>
            <StyledCalculator>
                <input id="one" type="text" placeholder="Enter a number" value={one} onChange={e => setOne(e.target.value)} />
                <input id="two" type="text" placeholder="Enter a number" value={two} onChange={e => setTwo(e.target.value)} />
            </StyledCalculator>
            <StyledButtons>
                <button onClick={doAdd}>+</button>
                <button onClick={doSub}>-</button>
                <button onClick={doMul}>*</button>
                <button onClick={doDiv}>/</button>
                <button onClick={power}>**</button>
                <button onClick={clearAll}>Clear</button>
            </StyledButtons>
            <StyledH3> Output </StyledH3>
            <StyledOutput>
                <StyledOutputText color = {color}>{result}</StyledOutputText>
            </StyledOutput>
        </MainContainer>
    )
}