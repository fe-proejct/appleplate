import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../features/main/MainHeader";
import MainSearchBar from "../features/main/MainSearchbar";
import Section from "../features/main/Section";
import RestaurantCard from "../features/ui/RestaurantCard";
import IRestaurant from "../features/ui/RestaurantCard/RestaurantCard.interface";
import Grid from "../styles/Grid.style";

export default function Main() {
  const [restaurantList, setRestaurantList] = useState<IRestaurant[]>([]);

  async function fetchRestaurantList() {
    // 임시 코드
    try {
      const { status, data } = await axios.get("/restaurantlist.test.json");
      if (status === 200) {
        setRestaurantList(data);
      }
    } catch (e) {}
  }

  useEffect(() => {
    fetchRestaurantList();
  }, []);

  return (
    <>
      <MainHeader>
        <MainSearchBar />
      </MainHeader>
      <Section title="등록된 식당">
        <Grid columns={{ pc: 4, mobile: 2 }} gap={{ pc: 36, mobile: 14 }}>
          {restaurantList.map((restaurant, id) => (
            <Link
              key={`${restaurant.id}-${id}`}
              to={`restaurants/${restaurant.id}`}
            >
              <RestaurantCard {...restaurant} />
            </Link>
          ))}
        </Grid>
      </Section>
    </>
  );
}
