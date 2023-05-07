import { useState } from "react"
import styled from "styled-components"

const StyleItem = styled.li`
    width:100%;
    height:90px;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    margin: 5px 0;
`

const StyleItemImg = styled.img`
  width: 105px;
  height: 86px;
  cursor: pointer;
`;

const StyleItemContent = styled.div`
    height:86px;
    display:flex;
    align-items:flex-start;
    @media ${(props) => props.theme.device.desktop} {
        width:135px;
        justify-content:center;
    }
    @media ${(props) => props.theme.device.mobile} {
        width:60%;
        justify-content:flex-start;
        margin-left:13px;
    }
`

const StyleItemNameList = styled.div`
    width:80%;
    height:auto;
`

const StyleItemName = styled.h3`
  width: 100%;
  color: #000;
  font-size: 18px;
  cursor: pointer;
`;

const StyleItemAddress = styled.span`
  width: 100%;
  color: ${(props) => props.theme.colors.secondText};
  font-size: 10px;
`;

const StyleWish = styled.button`
  width: 35px;
  height: 28px;
  display: 1px solid black;
  background-color: transparent;
  cursor: pointer;
`;
const StyleWishImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const HistoryModal = (i:number) => {
    const [select,setSelect] = useState<boolean>(false);

    const wishSelect = () => {
        setSelect(!select);
    }
    return <StyleItem key={i}>
            <StyleItemImg src="/images/gamjatang.jpeg" />
            <StyleItemContent>
                <StyleItemNameList>
                    <StyleItemName>
                        aaavvv
                    </StyleItemName>
                    <StyleItemAddress>
                        강원도
                    </StyleItemAddress>
                </StyleItemNameList>
            </StyleItemContent>
            <StyleWish onClick={wishSelect}>
                <StyleWishImg src={select === false ? "/images/star.png" : "/images/star_color.png" } />
            </StyleWish>
        </StyleItem>
}
