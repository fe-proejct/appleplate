import { useState } from "react";
import { WishNull } from "../ui/Modal/WishNull";
import { Wish } from "./Wish";

export const WishWrap = () => {
  const [wishData, setWishData] = useState<[]>([]);

  return <>{wishData.length >= 1 ? <Wish /> : <WishNull />}</>;
};
