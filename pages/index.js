import axios from "axios";
import { useDispatch } from "react-redux";
import { Product } from "../Store/Actions";
import { useEffect } from "react";
import { Products } from "../components/Products";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(async () => {
    const fetch = await axios.get("/api/product").then((res) => res.data);
    dispatch(Product(fetch));
  }, []);

  return (
    <div className="bg-gray-100">
      <Products />
    </div>
  );
}
