import { useState } from "react";
import styled from "styled-components";
import { Wish } from "./Wish";
import { WishNull } from "../ui/Modal/WishNull";

export const WishWrap = () => {
    const [wishData, setWishData] = useState<object[]>([{}]);

    return <>
        {wishData.length >= 1 ? (<Wish/>) : (<WishNull/>)}
    </>
}