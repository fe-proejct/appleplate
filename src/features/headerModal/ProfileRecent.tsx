import styled from "styled-components"
import { clearAll } from "../../constants/constant";
import { HistoryModal } from "./HistoryModal";

const StyleModalClear = styled.span`
    width:auto;
    height:15px;
    font-size:12px;
    color: ${(props) => props.theme.colors.secondText};
    margin-left:250px;
    cursor:pointer;
`
const StyleItemList = styled.ul`
    margin:5px 0 10px 15px;
    border:1px solid black;
    width:294px;
    height:380px;
    overflow-y:auto;
`

export const ProfileRecent = () => {
    const arr = [1,2,3,4,5];

    return <div>
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
    </div>
}