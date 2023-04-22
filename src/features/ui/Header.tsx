import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--background-color);
  color: ${(props) => props.theme.colors.second};
  width: 100vw;
  height: 60px;
  position: sticky;
  top: 0;
`;

export default function Header() {
  return <StyledHeader>푸터</StyledHeader>;
}
