interface IRestaurant {
  id: number;
  name: string;
  thumbnail: string;
  location: string;
  food: string;
  score?: number;
  view_count?: number;
  review_count?: number;
}

export default IRestaurant;
