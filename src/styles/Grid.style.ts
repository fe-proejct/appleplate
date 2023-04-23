import styled from "styled-components";

interface IGrid {
  columns: number;
  gap: number;
}

const Grid = styled.div<IGrid>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-gap: ${({ gap }) => `${gap}px`};
`;

export default Grid;
