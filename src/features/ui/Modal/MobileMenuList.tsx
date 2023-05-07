import styled from "styled-components"

const MenuListWrap = styled.ul`
    height:auto;
    width:100%;
    display:block;

    li {
        height:60px;
        width:100%;
        border-bottom: 1px solid ${(props) => props.theme.colors.thirdText};
        display:flex;
        justify-content:center;
        align-items:center;
        
        a,button {
            text-decoration:none;
            font-size:18px;
            color: ${(props) => props.theme.colors.thirdText};
            background-color: ${(props) => props.theme.colors.primary};
            cursor:pointer;
        }
    }
`

export const MobileMenuList = () => {
    let menuList = [
        {key:0, content:'홈', src:'/'},
        {key:1, content:'맛집 리스트', src:'#'},
        {key:2, content:'로그아웃', src:''}
    ]
    const logOut = () => {
        //로그아웃 api
    }
    return <MenuListWrap>
        {
            menuList.map((res,i) => {
                if(res.content !== '로그아웃') return <li key={i}><a href={res.src}>{res.content}</a></li>
                return <li key={i}><button onClick={logOut}>{res.content}</button></li>
            }
                
                )
        }
    </MenuListWrap>
}