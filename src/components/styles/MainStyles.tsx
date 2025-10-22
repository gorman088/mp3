import styled from 'styled-components';

export const MainContainer=styled.div`
    background-color: #FFEEDB;
    height: 100vh;
    width: 70%;

    @media screen and (max-width: 1000px) {
        height: 120vh;
        width: 100%;
    }
`;

export const StyledP = styled.p`
    margin-top: 25px;
`;

export const StyledH2 = styled.h2`
    margin-top: 25px;
    color: #4C3B4D;
`;

export const StyledH3 = styled.h3`
    margin-top: 20px;
    color: #4C3B4D;
`;

export const StyledUl = styled.ul`
    margin-top: 25px;
    text-align: left;
    list-style: square;
    margin-right: 10px;
`;

export const StyledLi = styled.li`
    margin-bottom: 20px;
`;

export const StyledTable = styled.table`
    margin: auto;
    margin-top: 25px;
`;

export const StyledTableHead = styled.th`
    padding: 10px;
`;

export const StyledImg = styled.img`
    border: 3px #4C3B4D solid;
    margin-top: 25px;
    width: 250px;
    height: 300px;

    @media screen and (max-width: 1000px) {
        max-width: 100%;
        height: auto;
    }
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    margin-left: 5%;
    margin-right: 5%;
    gap: 10px;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;   /* centers the image and text nicely */
        text-align: center;    /* optional, makes text centered under image */
    }
`;

export const StyledButtons = styled.div`
    margin-top: 20px;
    background-color: #ADA8B6;
    border-radius: 10px;
    border: 2px solid #4C3B4D;
    margin-right: 10%;
    margin-left: 10%;
    padding: 10px;
`;

export const StyledOutput = styled.div`
    margin-top: 5px;
    background-color: #ADA8B6;
    border-radius: 10px;
    border: 2px solid #4C3B4D;
    margin-right: 30%;
    margin-left: 30%;
    padding: 10px;
`;

export const StyledCalculator = styled.div`
    margin-top: 20px;
    background-color: #ADA8B6;
    border-radius: 10px;
    border: 2px solid #4C3B4D;
    margin-right: 10%;
    margin-left: 10%;
    padding: 10px;
`;

export const StyledOutputText = styled.h4`
  color: ${(props) => props.color};
`;