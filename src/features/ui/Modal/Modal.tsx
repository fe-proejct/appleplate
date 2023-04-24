import styled from "styled-components"
import { ProfileModal } from "../../headerModal/ProfileModal"
import { MakingProps } from "./MaskingPage"

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
    return <>
        <StyleModalDiv>
            {
                propsData.value.name === 'profile' ? (<ProfileModal/>) : 
                propsData.value.name === 'filter' ? "필터 모달" : null
            }
        </StyleModalDiv>
    </>
}