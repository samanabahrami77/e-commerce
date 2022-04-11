import React from "react";
import { CartItem } from "./CartItem";

export const Items = () => {
  return (
    <div className="flex flex-wrap justify-center md:p-16">
      <div className="md:flex hidden md:w-1/4">fdsfds</div>
      <div className="flex flex-wrap md:w-3/4 justify-center">
      <CartItem />
      </div>
    </div>
  );
};
