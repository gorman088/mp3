import {MainContainer, StyledTable, StyledTableHead, StyledH2} from "../styles/MainStyles.tsx";

export default function References() {
    return (
        <MainContainer>
            <StyledH2> References </StyledH2>
            <StyledTable border={1}>
                <thead>
                    <tr>
                        <StyledTableHead>Name</StyledTableHead>
                        <StyledTableHead>Relation</StyledTableHead>
                        <StyledTableHead>Contact</StyledTableHead>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <StyledTableHead>Ryan Gorman</StyledTableHead>
                        <StyledTableHead>Brother</StyledTableHead>
                        <StyledTableHead>(857) 222-5542</StyledTableHead>
                    </tr>
                    <tr>
                        <StyledTableHead>Zachary Robey</StyledTableHead>
                        <StyledTableHead>Current Boss</StyledTableHead>
                        <StyledTableHead>(857) 352-1446</StyledTableHead>
                    </tr>
                    <tr>
                        <StyledTableHead>Thomas Healy</StyledTableHead>
                        <StyledTableHead>Former Boss</StyledTableHead>
                        <StyledTableHead>(857) 939-4014</StyledTableHead>
                    </tr>
                    <tr>
                        <StyledTableHead>Matthew Gibbons</StyledTableHead>
                        <StyledTableHead>Former Teacher & Coach</StyledTableHead>
                        <StyledTableHead>(617) 894-9872</StyledTableHead>
                    </tr>
                </tbody>
            </StyledTable>
        </MainContainer>
    )
}