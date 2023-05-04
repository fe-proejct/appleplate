import { useState } from "react";
import styled from "styled-components";
import { myPage, recentHistory, wishLocation } from "../../constants/constant";
import Tab from "../ui/Tab";
import { ProfileRecent } from "./ProfileRecent";
import { WishWrap } from "./WishWrap";

const StyleProfileModal = styled.div`
  //데스크탑
  @media ${(props) => props.theme.device.desktop} {
    width: 320px;
    height: 506px;
    background-color: #fff;
    position: fixed;
    top: 75px;
    right: 10px;
    z-index: 5;
  }
`;
const StyleProfileArrow = styled.i`
  //데스크탑
  @media ${(props) => props.theme.device.desktop} {
    width: 0;
    position: absolute;
    top: -16px;
    right: 16px;
    border-width: 0 16px 16px;
    border-color: #fff transparent;
    border-style: solid;
  }
`;
const StyleMyPage = styled.footer`
  width: 100%;
  height: 22px;
  border-top: 1px solid ${(props) => props.theme.colors.secondText};
  color: ${(props) => props.theme.colors.grayBg};
  padding-left: 260px;
  line-height: 40px;
  cursor: pointer;
`;

export const ProfileModal = () => {
  //const [click, setClick] = useState<number>(0);
  //찜 목록에 값이 들어간다면 값의 유무에 따라

  const tabs = [
    { key: 0, content: recentHistory, element: <ProfileRecent key={0} /> },
    { key: 1, content: wishLocation, element: <WishWrap key={1} /> },
  ];

  return (
    <StyleProfileModal>
      <StyleProfileArrow></StyleProfileArrow>
      <Tab tabs={tabs} />
      <StyleMyPage>{myPage}</StyleMyPage>
    </StyleProfileModal>
  );
};
