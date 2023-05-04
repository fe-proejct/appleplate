import styled from "styled-components";
import {
  LogoText,
  Slogan,
  CompanyName,
  Address,
  PhoneNumber,
  FAQ,
  CopyRight,
} from "../../constants/constant";

const StyledFooter = styled.footer`
  background-color: var(--background-color);
  color: ${(props) => props.theme.colors.second};
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const StyleFooterContent = styled.div`
  width: 100%;
  height: 100%;
`;

const StyleLogo = styled.div`
  height: 20%;
  color: ${(props) => props.theme.colors.thirdText};
  font-size: 30px;
  font-weight: 700;
  //데스크탑
  @media ${(props) => props.theme.device.desktop} {
    width: 130px;
    margin: 30px 0 0 30px;
  }

  //모바일
  @media ${(props) => props.theme.device.mobile} {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 30px 0 0 0;
  }
`;

const StyleLine = styled.div`
  //데스크탑
  @media ${(props) => props.theme.device.desktop} {
    border-top: 1px solid ${(props) => props.theme.colors.secondText};
    width: 20px;
    margin: 30px 0 0 30px;
  }

  //모바일
  @media ${(props) => props.theme.device.mobile} {
    border-top: 1px solid ${(props) => props.theme.colors.secondText};
    width: 20px;
    margin: 30px 0 0 30px;
    display: none;
  }
`;

const StyleSlogan = styled.div`
  //데스크탑
  @media ${(props) => props.theme.device.desktop} {
    color: ${(props) => props.theme.colors.secondText};
    font-size: 15px;
    margin: 10px 0 0 30px;
    width: 300px;
  }

  //모바일
  @media ${(props) => props.theme.device.mobile} {
    color: ${(props) => props.theme.colors.secondText};
    font-size: 15px;
    margin: 30px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const StyleCompanyInfo = styled.ul`
  height: 90px;
  color: ${(props) => props.theme.colors.secondText};

  //데스크탑
  @media ${(props) => props.theme.device.desktop} {
    margin: 20px 0 0 30px;
    width: 300px;
  }

  //모바일
  @media ${(props) => props.theme.device.mobile} {
    border: 1px solid white;
    width: 150px;
    margin: 10px auto;
    font-size: 13px;
    text-align: center;
  }
`;
const StyleCompanyInfoTxt = styled.li`
  margin: 5px 0;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyleFooterContent>
        <StyleLogo>{LogoText}</StyleLogo>
        <StyleLine />
        <StyleSlogan>{Slogan}</StyleSlogan>
        <StyleCompanyInfo>
          <StyleCompanyInfoTxt>{CompanyName}</StyleCompanyInfoTxt>
          <StyleCompanyInfoTxt>{Address}</StyleCompanyInfoTxt>
          <StyleCompanyInfoTxt>{PhoneNumber}</StyleCompanyInfoTxt>
          <StyleCompanyInfoTxt>{FAQ}</StyleCompanyInfoTxt>
        </StyleCompanyInfo>
        <StyleSlogan>{CopyRight}</StyleSlogan>
      </StyleFooterContent>
    </StyledFooter>
  );
}
