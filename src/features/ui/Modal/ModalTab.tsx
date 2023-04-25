import styled from "styled-components";
import { recentHistory } from "../../../constants/constant";
import { wishLocation } from "../../../constants/constant";
import { useState } from "react";

const StyleModalUl = styled.ul`
    @media ${(props) => props.theme.device.desktop} {
        width:100%;
        height:50px;
        display:flex;
        justify-content:space-between;
        background-color:#fff;
        z-index:7;
        margin-bottom:3px;
    }
`
const StyleModalLi = styled.li`
    @media ${(props) => props.theme.device.desktop} {
        width:100%;
        height:${(props) => props.className?.includes('active') ? '53px' : "50px"};
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:16px;
        font-weight:600;
        color: ${(props) => props.theme.colors.primary};
        border-bottom: ${(props) => props.className?.includes('active') ? '3px solid red' : "none"};
        margin-bottom:3px;
    }
`
const StyleModalTab = styled.div`
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    cursor:pointer;
`
export interface PropsType {
    arr: {
        key:number;
        content:string;
        checkClick:React.Dispatch<React.SetStateAction<number>>;
        element:JSX.Element
    }[]
}

export const ModalTab = ({arr}:PropsType) => {
    //클릭한 엘리먼트에 active 클래스 추가
    const [currentTab, setCurrentTab] = useState(0);
    //탭 클릭
    const recentStore = (index:number) => {
        setCurrentTab(index)
        arr.map((res,i) => {
            if(index === i) {
                res.checkClick((index));
            } else {
                res.checkClick((index));
            }
        })
    }

    return <>
        <StyleModalUl>
            {
                arr.map((res,i) => (
                    <StyleModalLi onClick={() => recentStore(i)} key={i} className={currentTab === i ? 'active' : 'tab'}>
                        <StyleModalTab>{res.content}</StyleModalTab>
                    </StyleModalLi>
                ))
            }
        </StyleModalUl>
    </>
}