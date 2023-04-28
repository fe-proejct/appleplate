import styled from "styled-components";
import { ProfileModal } from "../../headerModal/ProfileModal";
import { useEffect, useState } from "react";
import { Modal } from "./Modal";

export interface MakingProps {
    openCheck:React.Dispatch<React.SetStateAction<Boolean>>;
    closeCheck:Boolean;
    name:string;
    element:JSX.Element;
}

const StyleMaskingPage = styled.div`
    height:100%;
    width:100%;
    background-color: var(--background-color, black);
    opacity:0.5;
    top:0;
    z-index:6;
    position:fixed;
`

const StyleMaskingDiv = styled.div`
    width:100%;
    height:100%;
`

export const MaskingPage = (props: MakingProps) => {
    const [closeModalData, setCloseModalData] = useState<Boolean>(props.closeCheck);
    const {openCheck, closeCheck} = props
    const closeModal = () => {
        setCloseModalData(!closeModalData);
        openCheck(!closeModalData);
    }

    //스크롤 막기
    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          width: 100%;`;
        return () => {
          const scrollY = document.body.style.top;
          document.body.style.cssText = '';
          window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
      }, []);
    
    return (
        <StyleMaskingDiv>
            { closeCheck === closeModalData && (<StyleMaskingPage onClick={closeModal}/>) }
            {
                closeCheck === closeModalData && (
                    <Modal value={props}/>
                )
            }
        </StyleMaskingDiv>
    );
};