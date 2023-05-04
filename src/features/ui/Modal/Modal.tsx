import styled from "styled-components";
import { MakingProps } from "./MaskingPage";

const StyleModalDiv = styled.div`
  width: 100%;
  height: 100%;
  z-index: 7;
  position: fixed;
`;

export const Modal = (propsData: MakingProps) => {
  return <StyleModalDiv>{propsData.element}</StyleModalDiv>;
};
