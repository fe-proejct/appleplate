import styled from "styled-components";
import { ProfileModal } from "../../headerModal/ProfileModal";
import { useEffect, useState } from "react";

interface Props {
    receive:any;
    closeCheck:Boolean;
    name:String;
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

const StyleModalDiv = styled.div`
    width:100%;
    height:100%;
    z-index:7;
    position:fixed;
`

export const MaskingPage = (props: Props) => {
    const [closeModalData, setCloseModalData] = useState<Boolean>(props.closeCheck);
    const closeModal = () => {
        setCloseModalData(!closeModalData);
        props.receive(!closeModalData);
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
            { props.closeCheck === closeModalData && (
                <StyleMaskingPage onClick={closeModal}>
                    
                </StyleMaskingPage>) 
            }
            {
                props.closeCheck === closeModalData && (
                    <StyleModalDiv>
                        {
                            props.name === 'profile' ? (<ProfileModal/>) : 
                            props.name === 'filter' ? "필터 모달" : null
                        }
                    </StyleModalDiv>
                )
            }
        </StyleMaskingDiv>
    );
};