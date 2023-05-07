import styled from "styled-components";
import RestaurantReviewItem from "./RestaurantReviewItem";

const StyledReviewList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export default function RestaurantReviewList() {
  return (
    <StyledReviewList>
      <RestaurantReviewItem />
      <RestaurantReviewItem />
      <RestaurantReviewItem />
      <RestaurantReviewItem />
    </StyledReviewList>
  );
}
