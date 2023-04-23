import IRestaurant from "./RestaurantCard.interface";
import RestaurantCardStyle from "./RestaurantCardStyle.style";

function RestaurantCard({
  name,
  thumbnail,
  location,
  food,
  score,
  view_count = 0,
  review_count = 0,
}: IRestaurant) {
  return (
    <RestaurantCardStyle>
      <div className="thumb">
        <img src={thumbnail} />
      </div>
      <figcaption>
        <p className="title">
          <span className="title--name">{name}</span>
          {score ? (
            <span className={`title--score${score >= 3.95 ? " primary" : ""}`}>
              {score}
            </span>
          ) : null}
        </p>
        <p className="info">
          <span>{location}</span> -<span>{food}</span>
        </p>
        {view_count || review_count ? (
          <p className="count">
            {view_count ? (
              <span className="count--view">{view_count}</span>
            ) : null}
            {view_count && review_count ? " - " : null}
            {review_count ? (
              <span className="count--review">{review_count}</span>
            ) : null}
          </p>
        ) : null}
      </figcaption>
    </RestaurantCardStyle>
  );
}

export default RestaurantCard;
