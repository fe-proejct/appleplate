import styled from "styled-components"

const StyleNullWrap = styled.div`
    height:411px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    h1 {
        color:#000;
    }
    div {
        height:120px;
        div {
            display:flex;
            justify-content:center;
            align-items:center;
            img {
                width:90px;
                height:90px;
            }
        }
    }
`
const StyleText = styled.p`
    margin-bottom:14px;
    font-size:23px;
    lineheight:25px;
    color:${(props) => props.theme.colors.primaryText};
    text-align:center;
`
const StyleIntroText = styled.p`
    width:100%;
    padding: 0 20px;
    box-sizing:border-box;
    font-size:17px;
    line-height:25px;
    text-align:center;
    color:${(props) => props.theme.colors.primary};
`
export const WishNull = () => {
    return <>
    <StyleNullWrap>
            <div>

            <div>
                <img src="/images/star.png"/>
            </div>
            <StyleText>격하게 가고싶다..</StyleText>
            <StyleIntroText>식당의 ‘별’ 아이콘을 누르면 가고싶은 곳을 쉽게 저장할 수 있습니다.</StyleIntroText>
            </div>
    </StyleNullWrap>
    </>
}