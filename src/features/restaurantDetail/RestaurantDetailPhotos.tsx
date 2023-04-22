import styled from "styled-components"
import Carousel from "../ui/Carousel/component/Carousel";
import '@splidejs/react-splide/css/sea-green';
const StyledRestaurantDetailPhotos = styled.div`
    width: 100%;
    position: relative;
    height: 340px;
    margin-bottom: 6px;
`;

export default function RestaurantDetailPhotos() {
    return (
        <StyledRestaurantDetailPhotos>
            <Carousel option={{
                perMove: 1,
                showDisabledArrow: false,
                showPageNation: false,
                focus: 0,
                omitEnd: true,
                autoWidth: true,
                gap: 6,
            }}>
                <img src="/images/test/1.jpeg" alt="Image 1" />
                <img src="/images/test/2.jpeg" alt="Image 1" />
                <img src="/images/test/3.jpeg" alt="Image 1" />
                <img src="/images/test/4.jpeg" alt="Image 1" />
                <img src="/images/test/5.jpeg" alt="Image 1" />
                <img src="/images/test/1.jpeg" alt="Image 1" />
            </Carousel>
        </StyledRestaurantDetailPhotos>
    )
}