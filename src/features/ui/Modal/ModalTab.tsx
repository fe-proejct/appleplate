import styled from "styled-components";
import { useState, useEffect } from "react";

const StyleModalUl = styled.ul`
        width:100%;
        height:50px;
        display:flex;
        justify-content:space-between;
        background-color:#fff;
        z-index:7;
        margin-bottom:3px;
`
const StyleModalLi = styled.li`
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
    
`
const StyleModalTab = styled.div`
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    cursor:pointer;
`
export interface PropsType {
    tabs: {
        key:number;
        content:string;
        element:JSX.Element
    }[]
}

const ModalTab = ({tabs}:PropsType) => {
    //클릭한 엘리먼트에 active 클래스 추가
    const [currentTab, setCurrentTab] = useState<number>(0);
    const [element, setElemet] = useState<JSX.Element>();
    let clicked = 0;
    //기본화면 설정
    useEffect(() => {
        setElemet(tabs[0].element);
    }, [])
    //탭 클릭
    const recentStore = (e:React.MouseEvent<HTMLElement>) => {
        //클릭하면 clicked에 몇번째 애를 클릭했는지 알려줘야함.
        let index = Number(e.currentTarget.getAttribute('value'));
        clicked = index;
        setCurrentTab(index);
        {
            tabs.map((res,i) => (
                clicked === i ? setElemet(res.element) : null
            ))
        }
    }

    return <>
        <StyleModalUl>
            {
                tabs.map((res,i) => (
                    <StyleModalLi onClick={recentStore} key={i} value={i} className={currentTab === i ? 'active' : 'tab'}>
                        <StyleModalTab>{res.content}</StyleModalTab>
                    </StyleModalLi>
                ))
            }
        </StyleModalUl>
        {element}
    </>
}

export default ModalTab;