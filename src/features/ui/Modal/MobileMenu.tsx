import { useEffect, useState } from "react";
import styled from "styled-components";
import { MobileMenuList } from "./MobileMenuList";

export interface MenuProps {
    openCheck:React.Dispatch<React.SetStateAction<Boolean>>;
    closeCheck:Boolean;
    element:JSX.Element;
}

const StyleMenuWrap = styled.div`
    width:100%;
    height:100vh;
    background-color: ${(props) => props.theme.colors.primary};
    z-index:6;
    position:fixed;
    top:0;
    left:0;
    padding:16px;
    box-sizing:border-box;
    overflow-y:auto;

    header {
        width:100%;
        height:55px;
        padding-bottom:20px;
        border-bottom: 1px solid ${(props) => props.theme.colors.thirdText};
        position:relative;

        a {
            width:19px;
            margin:0 auto;
            color: ${(props) => props.theme.colors.thirdText};
            display:flex;
            justify-content:center;
            align-items:center;
            height:30px;
            text-decoration:none;
            font-size:25px;
        }

        button {
            position:absolute;
            top:0;
            right:0;
            display:block;
            width:30px;
            height:30px;
            font-size:25px;
            background-color:transparent;
            color: ${(props) => props.theme.colors.thirdText};
            cursor:pointer;
        }
    }
`

export const MobileMenu = (props:MenuProps) => {
    const [closeModalData, setCloseModalData] = useState<Boolean>(props.closeCheck);
    
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
    }, [])

    const closeMenu = () => {
        props.openCheck(!closeModalData);
    }
    return <StyleMenuWrap>
        <header>
            <a href="#">Home</a>
            <button onClick={closeMenu}>X</button>
        </header>
        <MobileMenuList/>
    </StyleMenuWrap>
}