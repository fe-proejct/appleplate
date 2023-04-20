import { useParams } from "react-router-dom";
import RestaurantDetailTable from "../features/restaurantDetail/RestaurantDetailTable";
import RestaurantHeader from "../features/restaurantDetail/RestaurantHeader";
import styled from "styled-components";
import RestaurantSidebar from "../features/restaurantDetail/RestaurantSidebar";
import RestaurantDetailPhotos from "../features/restaurantDetail/RestaurantDetailPhotos";

const RestaurantData = styled.section`
    width: 800px;
    margin: 0 auto;
    margin-top: 20px;
    padding : 0 20px;
    flex : 1;
`;

const ContentWrap = styled.section`
    display: flex;
    
`;

const StyledRestaurantDetail = styled.div`
    
`;

export default function RestaurantDetail() {
    const { id } = useParams();

    return (
        <StyledRestaurantDetail>
            <RestaurantDetailPhotos />
            <ContentWrap>
                <RestaurantData>
                    <RestaurantHeader />
                    <RestaurantDetailTable />
                </RestaurantData>
                <RestaurantSidebar />
            </ContentWrap>
        </StyledRestaurantDetail>
    )
}