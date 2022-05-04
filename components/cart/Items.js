import React from "react";
import { CartItem } from "./CartItem";
import Filter from "./Filter";

export const Items = () => {
  return (
    <div className="flex justify-center md:p-16 p-2">
      <div className="xl:flex hidden xl:w-1/4 h-fit xl:sticky xl:top-24">
        <Filter />
      </div>
      <div className="flex flex-col xl:w-3/4 gap-2">
        <div className="flex gap-2 text-gray-800 text-xs items-center">
          <svg
            direction={"rtl"}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
          <span className="xl:block hidden">مرتب سازی :</span>
          <button className="xl:hidden">مرتب سازی</button>
          <div className="xl:flex gap-6 mr-2 text-gray-600 hidden">
            <button>پربازدید ترین</button>
            <button>ارزان ترین</button>
            <button>گران ترین</button>
            <button>محبوب ترین </button>
          </div>
        </div>
        <div className="flex custom:flex-col sm:flex-wrap justify-center">
          <CartItem />
        </div>
      </div>
    </div>
  );
};
