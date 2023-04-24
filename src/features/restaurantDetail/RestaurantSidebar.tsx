import styled from "styled-components";
import KakaoMap from "../ui/KakaoMap";
import { KakaoMapOptions } from "../ui/KakaoMap/KakaoMap.options";

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
  const KakaoMapOptions: KakaoMapOptions = {
    markers: [
      { lat: 33.604, lng: 126.795841 },
      { lat: 33.55635, lng: 126.795841 },
      { lat: 35.55605, lng: 127.795841 },
      { lat: 33.55605, lng: 125.795841 }
    ]
  }

  return (
    <StyledRestaurantSidebar>
      <KakaoMapWrap>
        <KakaoMap options={KakaoMapOptions} />
      </KakaoMapWrap>
    </StyledRestaurantSidebar>
  );
}
