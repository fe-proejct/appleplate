import { Link } from "react-router-dom";
import MainHeader from "../features/main/MainHeader";
import MainSearchBar from "../features/main/MainSearchbar";
import Section from "../features/main/Section";
import RestaurantCard from "../features/ui/RestaurantCard";
import Grid from "../styles/Grid.style";

export default function Main() {
  return (
    <>
      <MainHeader>
        <MainSearchBar />
      </MainHeader>
      <Section title="등록된 식당">
        <Grid columns={4} gap={36}>
          {[
            {
              id: 1,
              thumbnail:
                "https://mp-seoul-image-production-s3.mangoplate.com/546909_1574502057395813.jpg?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80",
              name: "딤섬 9898",
              location: "제주 제주시내",
              food: "딤섬 / 만두",
              score: 4.5,
            },
            {
              id: 2,
              thumbnail:
                "https://mp-seoul-image-production-s3.mangoplate.com/added_restaurants/80845_1466095399124157.jpg?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80",
              name: "곱",
              location: "마포 / 공덕",
              food: "고기 요리",
              score: 4.3,
            },
            {
              id: 3,
              thumbnail:
                "https://mp-seoul-image-production-s3.mangoplate.com/137889/1573043_1628983138860_36833?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80",
              name: "초원순두부",
              location: "강원 속초시",
              food: "탕 / 찌개 / 전골",
              score: 3.0,
              view_count: 1,
              review_count: 1,
            },
            {
              id: 3,
              thumbnail:
                "https://mp-seoul-image-production-s3.mangoplate.com/137889/1573043_1628983138860_36833?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80",
              name: "초원순두부",
              location: "강원 속초시",
              food: "탕 / 찌개 / 전골",
              view_count: 1,
              review_count: 1,
            },
            {
              id: 3,
              thumbnail:
                "https://mp-seoul-image-production-s3.mangoplate.com/137889/1573043_1628983138860_36833?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80",
              name: "초원순두부",
              location: "강원 속초시",
              food: "탕 / 찌개 / 전골",
              score: 3.9,
              view_count: 1,
              review_count: 0,
            },
            {
              id: 3,
              thumbnail:
                "https://mp-seoul-image-production-s3.mangoplate.com/137889/1573043_1628983138860_36833?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80",
              name: "초원순두부",
              location: "강원 속초시",
              food: "탕 / 찌개 / 전골",
              score: 3.94,
              view_count: 12,
            },
            {
              id: 3,
              thumbnail:
                "https://mp-seoul-image-production-s3.mangoplate.com/137889/1573043_1628983138860_36833?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80",
              name: "초원순두부",
              location: "강원 속초시",
              food: "탕 / 찌개 / 전골",
              score: 4.0,
              review_count: 1,
            },
            {
              id: 3,
              thumbnail:
                "https://mp-seoul-image-production-s3.mangoplate.com/137889/1573043_1628983138860_36833?fit=around|362:362&crop=362:362;*,*&output-format=jpg&output-quality=80",
              name: "초원순두부",
              location: "강원 속초시",
              food: "탕 / 찌개 / 전골",
              score: 4.0,
              view_count: 0,
              review_count: 1,
            },
          ].map((restaurant, id) => (
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
