import styled from "styled-components";
import { HistoryModal } from "./HistoryModal";

const StyleText = styled.div`
    color:#000;
    height:411px;
`
const StyleItemList = styled.ul`
    margin:5px 0 10px 15px;
    overflow-y:auto;
    @media ${(props) => props.theme.device.desktop} {
        width:294px;
        height:400px;
    }
    @media ${(props) => props.theme.device.mobile} {
        width:92%;
        height:auto;
        margin-top: 25px;
    }
`
export const Wish = () => {
    const arr = [1,2,3,4,5];

    return <>
        <StyleItemList>
            {
                arr.map((res,i) => (
                    HistoryModal(i)
                ))
            }
        </StyleItemList>
    </>
};
