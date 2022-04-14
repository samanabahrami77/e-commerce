import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import PersianNumber from "../../Hooks/PersianNumber";
import { Loading } from "../loading";

export const CartItem = () => {
  const { product } = useSelector((state) => state);
  return (
    <>
      {product.product ? (
        <>
          {product.product.map((item) => (
            <div
              className="flex sm:flex-col gap-8 cursor-pointer items-center shadow-gray-700
                border md:w-1/3 xl:w-1/4 sm:w-1/2 p-2 hover:shadow-custom text-gray-800 relative "
              key={item.id}
            >
              {/* cartImage */}
              <div className="sm:w-4/5 w-1/3 mr-4">
                <Image
                  src={item.images.url[0]}
                  width="100%"
                  height="100%"
                  layout="responsive"
                />
              </div>
              {/* bodyCart */}
              <div className="flex flex-col gap-4 sm:w-full w-2/3">
                {/* titleCart */}
                <div
                  className="sm:h-10 text-xs sm:text-sm sm:overflow-hidden
                 text-ellipsis sm:whitespace-nowrap p-2"
                >
                  <span>{item.title_fa}</span>
                </div>
                {/* rate */}
                <div className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-yellow-400 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{(item.rating.rate * 5) / 100}</span>
                  <span className="mx-2 text-gray-600 text-sm">
                    ({item.rating.count} نظر)
                  </span>
                </div>
                {/* add to Cart */}
                <div className="flex w-full justify-between text-sm">
                  <button
                    className="flex justify-center items-center bg-primary text-white rounded p-1 hover:text-primary
                  hover:bg-white hover:border h-6 w-6 border-primary"
                  >
                    <svg
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
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                  <span className="text-gray-600">
                    {PersianNumber(item.price)} تومان
                  </span>
                </div>
              </div>
              {/* color */}
              <div className="w-2 h-auto flex flex-col absolute bottom-1 top-4 sm:left-2 gap-2">
                {item.colors.map((color) => (
                  <span
                    key={color.id}
                    className="w-2 h-2 rounded-full border"
                    style={{ backgroundColor: color.hex_code }}
                  ></span>
                ))}
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
