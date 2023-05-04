import { useParams } from "react-router-dom";
import RestaurantDetail from "../features/restaurantDetail/RestaurantDetail";

export default function RestaurantDetailPage() {
  const { id } = useParams();
  return <RestaurantDetail />;
}
