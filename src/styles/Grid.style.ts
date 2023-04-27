import styled from "styled-components";

type device = {
  pc: number;
  mobile?: number;
};
interface IGrid {
  columns: device;
  gap: device;
}

const Grid = styled.div<IGrid>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns.pc}, 1fr);
  grid-gap: ${({ gap }) => `${gap.pc}px`};

  @media ${(props) => props.theme.device.mobile} {
    grid-template-columns: repeat(
      ${({ columns }) => columns?.mobile || columns.pc},
      1fr
    );
    grid-gap: ${({ gap }) => `${gap?.mobile || gap.pc}px`};
  }
`;

export default Grid;
