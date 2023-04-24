import styled from "styled-components";
import KakaoMap from "../ui/KakaoMap/KakaoMap";

const StyledRestaurantSidebar = styled.div`
  background-color: #f6f6f6;
  position: relative;
  float: right;
  width: 400px;
`;

const KakaoMapWrap = styled.div`
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
      <KakaoMapWrap>
        <KakaoMap />
      </KakaoMapWrap>
    </StyledRestaurantSidebar>
  );
}
