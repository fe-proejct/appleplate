import styled from "styled-components"
import { ProfileModal } from "../../headerModal/ProfileModal"
import { MakingProps } from "./MaskingPage"
import { useAppSelector } from "../../../store/store";
import { WithDrawalModal } from "../../headerModal/WithDrawalModal";

const StyleModalDiv = styled.div`
    width:100%;
    height:100%;
    z-index:7;
    position:fixed;
`
interface ModalProps {
    value:MakingProps;
}

export const Modal = (propsData:ModalProps) => {
    let withdrawalCheck = useAppSelector((state) => state.withdrawalReducer.value);
    return <>
    {
        withdrawalCheck === true ? <WithDrawalModal value={propsData.value}/> 
        : <StyleModalDiv>
            {
                (propsData.value.element)
            }
        </StyleModalDiv>
    }
    </>
}