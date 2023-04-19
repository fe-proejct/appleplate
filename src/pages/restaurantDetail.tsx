import { useParams } from "react-router-dom";

export default function RestaurantDetail() {
    const { id } = useParams();

    return (
        <div>
            {id} 가게 상세 페이지
        </div>
    )
}