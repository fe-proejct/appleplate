import styled from "styled-components";
import { recentHistory } from "../../../constants/constant";
import { wishLocation } from "../../../constants/constant";

const StyleProfileUl = styled.ul`
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

const StyleProfileLi = styled.li`
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

interface PropsType {
    recent:Boolean;
    setRecent:React.Dispatch<React.SetStateAction<Boolean>>;
    wish:Boolean;
    setWish:React.Dispatch<React.SetStateAction<Boolean>>;
}

export const ModalTab = ({recent, setRecent, wish, setWish}:PropsType) => {
    const recentStore = () => {
        setRecent(true);
        setWish(false);
    }
    const hopePlace = () => {
        setWish(true);
        setRecent(false);
    }

    return <>
        <StyleProfileUl>
            <StyleProfileLi onClick={recentStore}  className={recent === true ? 'active' : 'tab'}>
                <StyleModalTab>{recentHistory}</StyleModalTab>
            </StyleProfileLi>
            <StyleProfileLi onClick={hopePlace} className={wish === true ? 'active' : 'tab'}>
                <StyleModalTab>{wishLocation}</StyleModalTab>
            </StyleProfileLi>
        </StyleProfileUl>
    </>
}