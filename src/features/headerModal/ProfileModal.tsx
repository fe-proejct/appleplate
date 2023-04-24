import { useState } from "react"
import styled from "styled-components"
import { clearAll, myPage } from "../../constants/constant"
import { HistoryModal } from "./HistoryModal"
import { ModalTab } from "../ui/Modal/ModalTab"
import { WishNull } from "../ui/Modal/WishNull"
import { Wish } from "./Wish"

const StyleProfileModal = styled.div`
    //데스크탑
    @media ${(props) => props.theme.device.desktop} {
        width:320px;
        height:506px;
        background-color: #fff;
        position:fixed;
        top:75px;
        right:10px;
        z-index:5;
    }
`
const StyleProfileArrow = styled.i`
    //데스크탑
    @media ${(props) => props.theme.device.desktop} {
        width:0;
        position:absolute;
        top:-16px;
        right:16px;
        border-width: 0 16px 16px;
        border-color: #fff transparent;
        border-style: solid;
    }
`
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
const StyleMyPage = styled.footer`
    width:100%;
    height:22px;
    border-top:1px solid ${(props) => props.theme.colors.secondText};
    color:${(props) => props.theme.colors.grayBg};
    padding-left:260px;
    line-height:40px;
    cursor:pointer;
`
export const ProfileModal = () => {
    const [recent, setRecent] = useState<Boolean>(true);
    const [wish, setWish] = useState<Boolean>(false);
    //찜 목록에 값이 들어간다면 값의 유무에 따라 
    const [wishData, setWishData] = useState<[]>([]);
    const arr = [1,2,3,4,5]

    return <StyleProfileModal>
        <StyleProfileArrow></StyleProfileArrow>
        <ModalTab recent={recent} setRecent={setRecent} wish={wish} setWish={setWish} />
        
        {recent && (
                <div>
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
            )
        }
        {wish && (
        wishData.length >= 1 && (
            <Wish/>   
        ))}
        {wish && 
        wishData.length < 1 && (
            <WishNull/>
        )}

        <StyleMyPage>
            {myPage}
        </StyleMyPage>
    </StyleProfileModal>
}