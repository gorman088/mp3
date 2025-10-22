import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Nav from "./Nav.tsx";
import {Route, Routes} from "react-router"
import Education from "./mains/Education.tsx";
import References from "./mains/References.tsx";
import Home from "./mains/Home.tsx";
import Experience from "./mains/Experience.tsx";
import Hobbies from "./mains/Hobbies.tsx";
import Projects from "./mains/Projects.tsx";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    text-align: center;
`;

const Container=styled.div`
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export default function Root() {
    return(
        <Wrapper>
            <Header/>
            <Container>
                <Nav/>
                <Routes>
                    <Route path={`/`} element={<Home/>}/>
                    <Route path={`/education`} element={<Education/>}/>
                    <Route path={`/experience`} element={<Experience/>}/>
                    <Route path={'/references'} element={<References/>}/>
                    <Route path={'/hobbies'} element={<Hobbies/>}/>
                    <Route path={'/projects'} element={<Projects/>}/>
                    <Route path={"/credits"} element={<Home/>}/>
                    <Route/>
                </Routes>
            </Container>
            <Footer/>
        </Wrapper>
    )
}