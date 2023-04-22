import styled from "styled-components";
import { useState } from "react";

const StyledHeader = styled.header`
    background-color: #fff;
    color : ${(props) => props.theme.colors.secondText};
    width: 100%;
    height: 60px;
    position : sticky;
    top: 0;
    border-bottom:1px solid #DBDBDB;
    box-sizing:border-box;
    box-shadow: 0 4px 11px rgba(0,0,0,0.1);
    display:flex;
    
    align-items:center;
    z-index:2;
    //데스크탑
    @media ${(props) => props.theme.device.desktop} {
        justify-content:space-between;
    }

    //모바일
    @media ${(props) => props.theme.device.mobile} {
        justify-content:flex-end;
    }

    
`;

const StyleLogo = styled.a`
    //데스크탑
    @media ${(props) => props.theme.device.desktop} {
        width: 100px;
        height: 80%;
        color: ${(props) => props.theme.colors.primary};
        font-size:22px;
        font-weight:700;
        margin-left:30px;
    }

    //모바일
    @media ${(props) => props.theme.device.mobile} {
        display:none;
    }
`

const StyleNav = styled.ul`
    height:100%;

    //데스크탑
    @media ${(props) => props.theme.device.desktop} {
        width: 390px;
        border-left:1px solid #DBDBDB;
        margin-left:1279px;
        display:none;
    }

    //모바일
    @media ${(props) => props.theme.device.mobile} {
        width:45px;
        border:1px solid blue;
        margin-left:0px;
        display:block;
    }
    
`

const StyleNavItem = styled.li`
    border-left:1px solid #dbdbdb;
    border-right:1px solid #dbdbdb;
    width:130px;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

const StyleProfileList = styled.ul`
    //데스크탑
    @media ${(props) => props.theme.device.desktop} {
        width:86px;
        border-left:1px solid #dbdbdb;
    }

    //모바일
    @media ${(props) => props.theme.device.mobile} {
        border:1px solid red;
        width:45px;
    }
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
`
const StyleProfileButton = styled.button`
    width:38px;
    height:38px;
    border:3px solid ${(props) => props.theme.colors.primary};
    border-radius:30px;
    cursor:pointer;
`
const StyleHistoryCnt = styled.span`
    border:1px solid ${(props) => props.theme.colors.primary};
    width: 24px;
    height:24px;
    border-radius:15px;
    position:absolute;
    top:5px;
    left:45px;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.second};
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:600;
`
const StyleMaskingPage = styled.div`
    width:100vw;
    height:100vh
    background-color: var(--background-color:white);
    opacity: 0.5;
`
export default function Header() {

    return (
        <StyledHeader>
            <StyleLogo href="#">
                A P P L E<br/>
                P L A T E
            </StyleLogo>
            <StyleNav>

            </StyleNav>
            <StyleProfileList>
                <StyleProfileButton onClick={() => {
                    
                }}>
                </StyleProfileButton>
            </StyleProfileList>
        </StyledHeader>
    )
}