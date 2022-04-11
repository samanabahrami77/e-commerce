import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { Loading } from "../loading";

export const CartItem = () => {
  const { product } = useSelector((state) => state);

  return (
    <>
      {product.product ? (
        <>
          {product.product.map((item) => (
            <div
              className="flex flex-col gap-8 cursor-pointer items-center shadow-gray-700
               border md:w-1/4 w-1/2 p-6 hover:shadow-sm"
              key={item.id}
            >
              <div className="md:w-60 md:h-60">
                <Image
                  src={item.images.url[0]}
                  width="100%"
                  height="100%"
                  layout="responsive"
                />
              </div>
              <div className="h-10 text-sm overflow-hidden text-ellipsis whitespace-nowrap md:w-60">
                <span className="text-gray-700" >{item.title_fa}</span>
              </div>
            </div>
          ))}
        </>
      ) : (
        "Loading..."
      )}
    </>
  );
};
