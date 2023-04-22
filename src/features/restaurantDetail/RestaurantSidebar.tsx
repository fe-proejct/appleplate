import styled from "styled-components";

const StyledRestaurantSidebar = styled.div`
    background-color: #f6f6f6;
    position: relative;
    float: right;
    width: 400px;

    @media ${e => e.theme.device.mobile} {
        display: none;
    }
`;

const KakaoMap = styled.div`
    background-color: orange;
    width: 100%;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function RestaurantSidebar() {
    return (
        <StyledRestaurantSidebar>
            <KakaoMap>
                카카오 지도 들어갈곳
            </KakaoMap>
        </StyledRestaurantSidebar>
    )
}