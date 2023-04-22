import { useParams } from "react-router-dom";
import RestaurantDetailTable from "../features/restaurantDetail/RestaurantDetailTable";
import RestaurantHeader from "../features/restaurantDetail/RestaurantHeader";
import styled from "styled-components";
import RestaurantSidebar from "../features/restaurantDetail/RestaurantSidebar";
import RestaurantDetailPhotos from "../features/restaurantDetail/RestaurantDetailPhotos";


const StyledRestaurantDetail = styled.div`
    min-width: 1200px;
    list-style : none;
`;

const RestaurantData = styled.section`
    margin: 0 auto;
    margin-top: 20px;
    padding : 0 20px;
    width: calc(100% - 400px);
    flex: 1;
    float: left;


`;

const ContentWrap = styled.section`
    display: flex;
    
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