import styled from "styled-components"
import { email, name, profileNotice } from "../../../constants/constant"
import { useState } from "react"
import { useDispatch } from "../../../store/dispatch/Dispatch"
import { withdrawal } from "../../../store/slice/WithDrawalSlice"
import { useAppSelector } from "../../../store/store"

const StyleMyPageContentWrap = styled.div`
    //데스크탑
        width:100%;
        height:310px;

        ul {
            margin: 20px 20px;
            padding: 20px 16px;
            border-radius:10px;
            height:246px;
            background-color: ${(props) => props.theme.colors.lightGrayBg};

            li {
                width:100%;
                height:auto;
                display:flex;
                justify-contnet:flex-start;
                margin-bottom:10px;
                
                div {
                    @media ${(props) => props.theme.device.desktop} {
                        margin:20px 95px;
                    }
                    @media ${(props) => props.theme.device.mobile} {
                        margin:20px 120px;
                    }
                    width:55px;
                    height:55px;
                    padding:0px;
                    border-radius:55px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    
                    img {
                        width:100%;
                        height:100%;
                    }
                }
                p {
                    color: ${(props) => props.theme.colors.primaryText};
                }
                p:nth-child(1) {
                    width:91px;
                    font-size:16px;
                    font-weight:bold;
                    letter-spacing:normal;
                }
                p:nth-child(2) {
                    @media ${(props) => props.theme.device.mobile} {
                        margin-left:7px;
                    }
                    width:157px;
                    font-size:16px;
                    font-weight:600;
                    display:inline-block;
                }
            }
            li:nth-child(3) {
                width:100%;
                height:auto;
                text-align:end;
                p:nth-child(1) {
                    width:91px;
                }
                p:nth-child(2) {
                    @media ${(props) => props.theme.device.desktop} {
                        width:157px;
                    }
                    text-align:start;
                    font-size:16px;
                    color: ${(props) => props.theme.colors.secondText};
                    
                }
            }
            li:nth-child(4) {
                width:100%;
                height:auto;
                p:nth-child(1) {
                    width:91px;
                    font-size:16px;
                    font-weight:bold;
                    letter-spacing:normal;
                }
                p:nth-child(2) {
                    @media ${(props) => props.theme.device.desktop} {
                        width:157px;
                    }
                    @media ${(props) => props.theme.device.mobile} {
                        width:70%;
                    }
                    font-size:16px;
                    font-weight:600;
                    display:inline-block;
                    word-break:break-all;
                }
            }
            li:nth-child(5) {
                width:100%;
                height:auto;
                p:nth-child(1) {
                    @media ${(props) => props.theme.device.mobile} {
                        margin: 10px 0;
                    }
                    width:100%;
                    font-size:12px;
                    font-weight:bold;
                    letter-spacing:normal;
                    color: ${(props) => props.theme.colors.secondText};
                }
            }
        }

        footer {
            width:100%;
            height:50px;
            display:flex;
            justify-content:space-between;

            button {
                margin: 0;
                padding: 0;
                border-radius:0;
                width:100%;
                height:50px;
                color: ${(props) => props.theme.colors.secondText};
                background-color: ${(props) => props.theme.colors.second};
                display:flex;
                justify-content:center;
                align-items:center;
                cursor:pointer;
            }
            span {
                height:30px;
                border-right: 1px solid ${(props) => props.theme.colors.thirdText};;
                margin-top:10px;
            }
        }

    //모바일
    @media ${(props) => props.theme.device.mobile} {
        
    }
`

const StyleHeaderWrap = styled.header`
    width:100%;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    color: ${(props) => props.theme.colors.primaryText};
    border-bottom:1px solid ${(props) => props.theme.colors.thirdText};
`

export const MyPage = () => {
    const dispatch = useDispatch();

    const memberWithdrawal = () => {
        dispatch(withdrawal(true));
    }
    return <> 
        <StyleHeaderWrap>내 정보</StyleHeaderWrap>
        <StyleMyPageContentWrap>
            <ul>
                <li>
                    <div><img src="/icons/profile.png"/></div>
                </li>
                <li>
                    <p>{name}</p>
                    <p>가나다</p>
                </li>
                <li>
                    <p></p>
                    <p>페이스북으로 가입</p>
                </li>
                <li>
                    <p>{email}</p>
                    <p>aaabbbccc@gmail.com</p>
                </li>
                <li>
                    <p>{profileNotice}</p>
                </li>
            </ul>
            <footer>
                <button onClick={memberWithdrawal}>회원탈퇴</button>
                <span></span>
                <button>로그아웃</button>
            </footer>
        </StyleMyPageContentWrap>
    </>
}