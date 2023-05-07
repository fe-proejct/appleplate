import styled from "styled-components"
import { MakingProps } from "./MaskingPage"
import { useAppSelector } from "../../../store/store";
import { WithDrawalModal } from "../../headerModal/WithDrawalModal";

const StyleModalDiv = styled.div`
  width: 100%;
  height: 100%;
  z-index: 6;
  position: fixed;
`;

export const Modal = (propsData:MakingProps) => {
    return <>
    {
      <StyleModalDiv>{(propsData.element)}</StyleModalDiv>
    }
    </>
}
