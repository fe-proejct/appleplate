import { useState } from "react";
import styled from "styled-components";
import { LogoText } from "../../constants/constant";
import ModalPortal from "./Modal/ModalPortal";
import { MaskingPage } from "./Modal/MaskingPage";
import { ProfileModal } from "../headerModal/ProfileModal";

const StyledHeader = styled.header`
  background-color: #fff;
  color: ${(props) => props.theme.colors.secondText};
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  box-shadow: 0 4px 11px rgba(0, 0, 0, 0.1);
  display: flex;

  align-items: center;
  z-index: 2;
  //데스크탑
  @media ${(props) => props.theme.device.desktop} {
    justify-content: space-between;
  }

  //모바일
  @media ${(props) => props.theme.device.mobile} {
    justify-content: flex-end;
  }
`;

const StyleLogo = styled.a`
  //데스크탑
  @media ${(props) => props.theme.device.desktop} {
    width: 100px;
    height: 80%;
    color: ${(props) => props.theme.colors.primary};
    font-size: 22px;
    font-weight: 700;
    margin-left: 30px;
  }

  //모바일
  @media ${(props) => props.theme.device.mobile} {
    display: none;
  }
`;

const StyleNav = styled.div`
  height: 100%;

  //데스크탑
  @media ${(props) => props.theme.device.desktop} {
    width: 390px;
    border-left: 1px solid #dbdbdb;
    margin-left: 1279px;
    display: none;
  }

  //모바일
  @media ${(props) => props.theme.device.mobile} {
    width: 45px;
    margin-left: 0px;
    display: flex;
    justify-content: center;
    height: 75%;
  }
`;

const StyleNavImg = styled.img`
  //데스크탑
  @media ${(props) => props.theme.device.desktop} {
    display: none;
  }

  //모바일
  @media ${(props) => props.theme.device.mobile} {
    width: 85%;
    height: 100%;
  }
`;

const StyleNavItem = styled.li`
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  width: 130px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyleProfileList = styled.ul`
  //데스크탑
  @media ${(props) => props.theme.device.desktop} {
    width: 86px;
    border-left: 1px solid #dbdbdb;
  }

  //모바일
  @media ${(props) => props.theme.device.mobile} {
    width: 45px;
  }
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const StyleProfileImg = styled.img`
  width: 38px;
  height: 38px;
  border: 3px solid ${(props) => props.theme.colors.primary};
  border-radius: 30px;
  cursor: pointer;
`;
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

export default function Header() {
    const [openProfileModal, setOpenProfileModal] = useState<Boolean>(false);

    const profileModal = () => {
      setOpenProfileModal(!openProfileModal);
    }
    return (
        <StyledHeader>
            <StyleLogo href="#">
                { LogoText }
            </StyleLogo>
            <StyleNav>
              <StyleNavImg src="/icons/menu.png"/>
            </StyleNav>
            <StyleProfileList>
                <StyleProfileImg src="/icons/profile.png" onClick={profileModal}>
                </StyleProfileImg>
                <ModalPortal>
                  {openProfileModal && (<MaskingPage openCheck={setOpenProfileModal} closeCheck={openProfileModal} name={'profile'} element={<ProfileModal/>}/>)}
                </ModalPortal>
            </StyleProfileList>
        </StyledHeader>
    )
}
