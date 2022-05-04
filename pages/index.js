import Header from "../components/layout/Header";
import Slider from "../components/layout/Slider";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Product } from "../Store/Actions";
import { useEffect } from "react";
import { Items } from "../components/cart/Items";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(async () => {
    const fetch = await axios.get("/api/product").then((res) => res.data);
    dispatch(Product(fetch));
  }, []);

  return (
    <>
      <Slider />
      <Items />
    </>
  );
}
