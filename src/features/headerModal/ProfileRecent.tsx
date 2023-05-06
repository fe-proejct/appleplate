import styled from "styled-components"
import { clearAll } from "../../constants/constant";
import { HistoryModal } from "./HistoryModal";

const StyleProfileRecentWrap = styled.div`
    height:81%;
`

const StyleModalClear = styled.div`
    cursor:pointer;
    width:auto;
    height:15px;
    font-size:12px;
    color: ${(props) => props.theme.colors.secondText};
    @media ${(props) => props.theme.device.desktop} {
        margin-left:250px;
    }
    @media ${(props) => props.theme.device.mobile} {
        text-align:end;
        margin-right:15px;
    }
`
const StyleItemList = styled.ul`
    margin:5px 0 10px 15px;
    overflow-y:auto;
    @media ${(props) => props.theme.device.desktop} {
        width:295px;
        height:380px;
    }
    @media ${(props) => props.theme.device.mobile} {
        width:92%;
        height:auto;
    }
`

export const ProfileRecent = () => {
    const arr = [1,2,3,4,5];

    return <StyleProfileRecentWrap>
        <StyleModalClear>
            {clearAll}
        </StyleModalClear>
        <StyleItemList>
            {
                arr.map((res,i) => (
                    HistoryModal(i)
                ))
            }
            
        </StyleItemList>
    </StyleProfileRecentWrap>
}