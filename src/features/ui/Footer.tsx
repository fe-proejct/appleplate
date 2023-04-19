import styled from "styled-components"

const StyledFooter = styled.footer`
    background-color: var(--background-color);
    color : white;
    width: 100vw;
    height: 100px;
`;

export default function Footer() {
    return (
        <StyledFooter>
            푸터
        </StyledFooter>
    )
}