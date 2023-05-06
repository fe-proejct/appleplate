import styled from "styled-components"
import { useDispatch } from "../../store/dispatch/Dispatch"
import { useAppSelector } from "../../store/store"
import { withdrawal } from "../../store/slice/WithDrawalSlice"
import { MakingProps } from "../ui/Modal/MaskingPage"
import { useEffect, useState } from "react"
import { agreeText, withDrawalNotice1, withDrawalNotice2, withDrawalNotice3, withDrawalNotice4, withDrawalNotice5, withDrawalText } from "../../constants/constant"

const StyleWithDrawalWrap = styled.div`
    @media ${(props) => props.theme.device.desktop} {
        position:absolute;
        top:10%;
        left:40%;
        width:414px;
        height:620px;
        background-color:#fff;
        z-index:7;
        border-radius:10px;  
    }
    @media ${(props) => props.theme.device.mobile} {
        position:absolute;
        top:0%;
        left:0%;
        width:100%;
        height:100%;
        background-color:#fff;
        z-index:7;
        border-radius:0px;  
    }
`

const StyleClose = styled.div`
    height:45px;
    position:absolute;
    top:10px;
    right:10px;
    
    button {
        width:20px;
        height:20px;
        font-size:16px;
        background-color:transparent;
        padding:0;
        cursor:pointer;
    }
`
const StyleContentWrap = styled.div`
    @media ${(props) => props.theme.device.desktop} {
        padding: 60px 20px 50px;
    }
    @media ${(props) => props.theme.device.mobile} {
        padding: 60px 20px 450px;
    }

    ul {
        margin-top:20px;
        list-style:none;
        li{
            width:auto;
        }
        div {
            @media ${(props) => props.theme.device.desktop} {
                width:auto;
            }
            @media ${(props) => props.theme.device.mobile} {
                width:auto;
            }
            display:flex;
            flex-direction:row;
            margin-bottom:10px;
            font-size:15px;
            line-height:1.53;
            color: ${(props) => props.theme.colors.primaryText};
            
            box-orient:horizontal;
            font-stretch:normal;
            font-style:normal;
            letter-spacing:normal;
        }
        div::before {
            content:'-';
            width:1%;
            height:6px;
            margin-right:5px;
            background-repeat:no-repeat;
        }
    }
`
const StyleNotice = styled.div`
    width:100%;
    font-size:16px;
    font-weight:bold;
    text-align:center;
    color: ${(props) => props.theme.colors.primary};
`
const StyleFooterWrap = styled.div`
    @media ${(props) => props.theme.device.desktop} {
        width:414px;
    }
    @media ${(props) => props.theme.device.mobile} {
        width:100%;
        bottom:0;
    }
    position:fixed;
    z-index:1;
    padding: 0 20px;
`

const StyleFooterCheck = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`
const StyleFooterDisAgree = styled.img`
    width:22px;
    height:22px;
`
const StyleFooterAgrre = styled.img`
    width:22px;
    height:22px;
`
const StyleFooterCheckContent = styled.div`
    margin-left:12px;
    font-size:16px;
    font-weight:bold;
    font-stretch:normal;
    font-style:normal;
    line-height:1.5;
    letter-spacing:normal;
    cursor:pointer;
    color: ${(props) => props.theme.colors.primaryText};
`
const StyleFooterCheckButton = styled.div`
    @media ${(props) => props.theme.device.desktop} {
        width:375px;
    }
    @media ${(props) => props.theme.device.mobile} {
        width:100%;
    }
    height:50px;
    background-color: ${(props) => props.theme.colors.lightGrayBg};
    font-size:17px;
    font-weight:600;
    margin:20px 0;
    border-radius:30px;
    color: ${(props) => props.theme.colors};
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
`

interface ModalProps {
    value:MakingProps;
}

export const WithDrawalModal = (propsData:ModalProps) => {
    const [checkAgree, setCheckAgree] = useState<boolean>(false);
    let withdrawalCheck = useAppSelector((state) => state.withdrawalReducer.value);
    let dispatch = useDispatch();

    useEffect(() => {
        setCheckAgree
    }, [])
    const closeWithdrawalModal = () => {
        dispatch(withdrawal(!withdrawalCheck));
        propsData.value.openCheck(false);
    }
    const checkWithDraw = () => {
        setCheckAgree(!checkAgree)
    }
    return <StyleWithDrawalWrap>
        <StyleClose>
            <button onClick={closeWithdrawalModal}>X</button>
        </StyleClose>
        <StyleContentWrap>
            <StyleNotice>{withDrawalNotice1}</StyleNotice>
            <ul>
                <li>
                    <div>{withDrawalNotice2}</div>
                </li>
                <li>
                    <div>{withDrawalNotice3}</div>
                </li>
                <li>
                    <div>{withDrawalNotice4}</div>
                </li>
                <li>
                    <div>{withDrawalNotice5}</div>
                </li>
            </ul>
        </StyleContentWrap>
        <StyleFooterWrap>
            <StyleFooterCheck>
                { checkAgree === true ? <StyleFooterAgrre src="/images/agree_btn_color.png"/> : <StyleFooterDisAgree src="/images/agree_btn.png"/> }
                <StyleFooterCheckContent onClick={checkWithDraw}>
                    {agreeText}
                </StyleFooterCheckContent>
            </StyleFooterCheck>
            <StyleFooterCheckButton style={checkAgree === true ? {backgroundColor:'#FD0013'} : {backgroundColor: '#cbcbcb'} }>
                {withDrawalText}
            </StyleFooterCheckButton>
        </StyleFooterWrap>
    </StyleWithDrawalWrap>
}