import styled from "styled-components";
import RestaurantDetailPhotos from "./RestaurantDetailPhotos";
import RestaurantDetailTable from "./RestaurantDetailTable";
import RestaurantSidebar from "./RestaurantSidebar";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantReview from "./review/RestaurantReview";

const StyledRestaurantDetail = styled.div`
  min-width: 1200px;
  list-style: none;

  button {
    appearance: none;
    cursor: pointer;
    border: 0px;
    border-radius: 0;
    background-color: transparent;
  }

  @media ${(e) => e.theme.device.mobile} {
    min-width: 100%;
  }
`;

const ContentWrap = styled.section`
  display: flex;
`;

const RestaurantData = styled.section`
  margin: 0 auto;
  margin-top: 20px;
  width: calc(100% - 400px);
  flex: 1;
  float: left;
`;

export default function RestaurantDetail() {
  return (
    <StyledRestaurantDetail>
      <RestaurantDetailPhotos />
      <ContentWrap>
        <RestaurantData>
          <RestaurantHeader />
          <RestaurantDetailTable />
          <RestaurantReview />
        </RestaurantData>
        <RestaurantSidebar />
      </ContentWrap>
    </StyledRestaurantDetail>
  );
}
