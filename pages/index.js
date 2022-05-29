import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../Store/Actions";
import { useEffect } from "react";
import { Products } from "../components/Products";

export default function Home() {
  const dispatch = useDispatch();
  const { product, filter } = useSelector((state) => state);

  useEffect(() => {
    axios.get("/api/product").then((res) => dispatch(Product(res.data)));
  }, [dispatch]);

  return (
    <div className="bg-gray-100">
      <Products product={filter.length > 0 ? filter : product.product} />
    </div>
  );
}
