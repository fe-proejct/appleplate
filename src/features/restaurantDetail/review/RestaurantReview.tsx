import styled from "styled-components"
import RestaurantReviewHeader from "./RestaurantReviewHeader";
import RestaurantReviewList from "./RestaurantReviewList";

const StyledRestaurantReview = styled.section`
    padding: 20px 15px 0;

    @media  ${e => e.theme.device.mobile} {
        padding: 20px 10px 0;
        background-color: #F7F7F7;
    }
`;

export default function RestaurantReview() {
    return (
        <StyledRestaurantReview>
            <RestaurantReviewHeader />
            <RestaurantReviewList />
        </StyledRestaurantReview>
    )
}