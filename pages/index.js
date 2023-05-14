import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../Store/Actions";
import { useEffect } from "react";
import { Products } from "../components/Products";

export default function Home() {
  const dispatch = useDispatch();
  const { product, filter, theme } = useSelector((state) => state);
  useEffect(() => {
    axios.get("/api/product").then((res) => dispatch(Product(res.data)));
    console.log(theme);
    if (theme == "dark") {
      document
        .getElementsByTagName("html")
        .item(0)
        .setAttribute("class", "dark");
    } else
      document.getElementsByTagName("html").item(0).removeAttribute("class");
  }, [dispatch, theme]);
  return (
    <div className="bg-gray-100 dark:text-white dark:bg-gray-500">
      <Products theme={theme} product={filter.length > 0 ? filter : product.product} />
    </div>
  );
}
