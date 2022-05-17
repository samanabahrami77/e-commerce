import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductItem } from "./ProductItem";
import Filter from "./Filter";
import { ProductLoad } from "./ProductLoad";

export const Products = () => {
  const [active1, setactive1] = useState(true);
  const [active2, setactive2] = useState(false);
  const [active3, setactive3] = useState(false);
  const [active4, setactive4] = useState(false);

  const { product } = useSelector((state) => state);

  useEffect(() => {}, [active1, active2, active3, active4]);

  return (
    <div className="flex justify-center md:p-14 p-2 bg-gray-100">
      <div className="xl:flex hidden xl:w-1/4 h-fit xl:sticky xl:top-24">
        <Filter />
      </div>
      <div className="flex flex-col xl:w-3/4 gap-4">
        <div className="flex gap-3 text-gray-500 bg-white rounded p-3 items-center">
          <span className="bg-orange-100 p-1 rounded">
            <svg
              direction={"rtl"}
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 stroke-orange-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
              />
            </svg>
          </span>
          <div className="flex gap-6 mr-2 text-gray-500">
            <button
              className="relative focus:text-gray-700 focus:font-bold"
              style={{
                color: active1 ? "#374151" : "rgb(107,114,128)",
                fontWeight: active1 ? "bold" : "normal",
              }}
              onClick={() => {
                setactive2(false);
                setactive3(false);
                setactive4(false);
                setactive1(true);
              }}
            >
              پربازدید ترین
              {active1 ? (
                <span className="bg-orange-600 w-2 h-2 absolute rounded-full -top-1"></span>
              ) : (
                ""
              )}
            </button>
            <button
              className="relative focus:text-gray-700 focus:font-bold"
              onClick={() => {
                setactive2(true);
                setactive3(false);
                setactive4(false);
                setactive1(false);
              }}
            >
              ارزان ترین
              {active2 ? (
                <span className="bg-orange-600 w-2 h-2 absolute rounded-full -top-1"></span>
              ) : (
                ""
              )}
            </button>
            <button
              className="relative focus:text-gray-700 focus:font-bold"
              onClick={() => {
                setactive2(false);
                setactive3(true);
                setactive4(false);
                setactive1(false);
              }}
            >
              گران ترین
              {active3 ? (
                <span className="bg-orange-600 w-2 h-2 absolute rounded-full -top-1"></span>
              ) : (
                ""
              )}
            </button>
            <button
              className="relative focus:text-gray-700 focus:font-bold"
              onClick={() => {
                setactive2(false);
                setactive3(false);
                setactive4(true);
                setactive1(false);
              }}
            >
              محبوب ترین
              {active4 ? (
                <span className="bg-orange-600 w-2 h-2 absolute rounded-full -top-1"></span>
              ) : (
                ""
              )}
            </button>
          </div>
        </div>
        <div className="flex custom:flex-col sm:flex-wrap justify-center">
          {product.product ? (
            product.product.map((item) => (
              <ProductItem product={item} key={item.id} />
            ))
          ) : (
            <ProductLoad />
          )}
        </div>
      </div>
    </div>
  );
};
