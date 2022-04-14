import React from "react";
import { CartItem } from "./CartItem";
import Filter from "./Filter";

export const Items = () => {
  return (
    <div className="flex justify-center md:p-16 p-2">
      <div className="xl:flex hidden xl:w-1/4">
        <Filter />
      </div>
      <div className="flex custom:flex-col sm:flex-wrap xl:w-3/4 justify-center">
        <CartItem />
      </div>
    </div>
  );
};
