import styled from "styled-components"

const StyledRestaurantDetailPhotos = styled.div`
    background-color: grey;
    width: 100%;
    height: 340px;
`;

export default function RestaurantDetailPhotos() {
    return (
        <StyledRestaurantDetailPhotos>
            사진 리스트
        </StyledRestaurantDetailPhotos>
    )
}