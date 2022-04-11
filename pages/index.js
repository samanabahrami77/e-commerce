import Header from "../components/layout/Header";
import Slider from "../components/layout/Slider";
import axios from "axios";
import { CartItem } from "../components/cart/CartItem";
import { useDispatch } from "react-redux";
import { Product } from "../Store/Actions";
import { useEffect } from "react";
import { Items } from "../components/cart/Items";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/api/product").then((res) => dispatch(Product(res.data)));
  }, []);

  return (
    <>
      <Header />
      <Slider />
      <Items />
    </>
  );
}
