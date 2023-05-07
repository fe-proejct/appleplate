import { useState } from "react"
import styled from "styled-components"
import { myPage, recentHistory, wishLocation } from "../../constants/constant"
import ModalTab from "../ui/Modal/ModalTab"
import { ProfileRecent } from "./ProfileRecent"
import { WishWrap } from "./WishWrap"
import { MyPage } from "../ui/Modal/MyPage"

const StyleProfileModal = styled.div`
    //데스크탑
    @media ${(props) => props.theme.device.desktop} {
        width:320px;
        height:506px;
        background-color: #fff;
        position:fixed;
        top:75px;
        right:10px;
        z-index:5;

        div {
        }
    }
    //모바일
    @media ${(props) => props.theme.device.mobile} {
        width:100%;
        height:100%;
        background-color: #fff;
        position:fixed;
        top:75px;
        z-index:5;
        overflow-y:auto;
    }
`
const StyleProfileArrow = styled.i`
    //데스크탑
    @media ${(props) => props.theme.device.desktop} {
        width:0;
        position:absolute;
        top:-16px;
        right:16px;
        border-width: 0 16px 16px;
        border-color: #fff transparent;
        border-style: solid;
    }
    //모바일
    @media ${(props) => props.theme.device.mobile} {
        width:0;
        position:absolute;
        top:-16px;
        right:16px;
        border-width: 0 16px 16px;
        border-color: #fff transparent;
        border-style: solid;
    }
`
const StyleMyPage = styled.footer`
    width:100%;
    border-top:1px solid ${(props) => props.theme.colors.secondText};
    color:${(props) => props.theme.colors.grayBg};
    cursor:pointer;
    //데스크탑
    @media ${(props) => props.theme.device.desktop} {
        padding-left:260px;
        line-height:40px;
        height:22px;
    }
    @media ${(props) => props.theme.device.mobile} {
        text-align:end;
        line-height:35px;
        position:fixed;
        top:96vh;
        height:100%;
    }

    div {
        display:flex;
        justify-content:flex-end;
        align-items:center;
        margin-right:10px;
    }
`
export const ProfileModal = () => {
    const [click, setClick] = useState<boolean>(false);
    //찜 목록에 값이 들어간다면 값의 유무에 따라 
    
    const tabs = [
        { key: 0, content: recentHistory, element: <ProfileRecent key={0}/> },
        { key: 1, content: wishLocation, element: <WishWrap key={1}/> },
    ];

    const checkMyPage = () => {
        setClick(!click);
    }

    return <StyleProfileModal>
        <StyleProfileArrow></StyleProfileArrow>
        {
            click === true ? <MyPage/> 
            : <div>
                <ModalTab tabs={tabs} />
                <StyleMyPage>
                    <div onClick={checkMyPage}>
                        {myPage}
                    </div>
                </StyleMyPage>
            </div>
        }
</StyleProfileModal>
}
