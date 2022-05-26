import Image from "next/image";
import { useEffect, useState } from "react";
import PersianNumber from "../../Hooks/PersianNumber";
import {
  decreaseNumOfProduct,
  increaseNumOfProduct,
  RemoveCart,
} from "../../Store/Actions";

export const CartItem = ({ product, cartProduct, dispatch }) => {
  const [IsDisable, setIsDisable] = useState(false);

  useEffect(() => {
    product.Quanity < 2 ? setIsDisable(true) : setIsDisable(false);
  }, [product]);

  return (
    <div
      className="flex md:text-base text-xs justify-between bg-white rounded-md shadow-md p-4"
      key={product.id}
    >
      <div className="flex gap-2">
        <div className="flex flex-col">
          <span className="w-[15vw]">
            <Image
              src={product.images.url[0]}
              width="100%"
              height="100%"
              layout="responsive"
              alt="product"
            />
          </span>
        </div>
        <div className="flex flex-col justify-around">
          <span className="break-words">{product.title_fa}</span>
          <span className="text-orange-500 md:text-lg text-xs">
            {PersianNumber(product.price)} تومان{" "}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        {/* delete button */}
        <button
          className="self-end"
          onClick={() => dispatch(RemoveCart(product.id))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-orange-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* count of product */}
        <div className="flex gap-2 items-center">
          <button
            onClick={() => {
              dispatch(increaseNumOfProduct(product.id, cartProduct));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 bg-gray-100 rounded-full"
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
          <span className="border border-orange-500 rounded p-1 outline-none">
            {product.Quanity}
          </span>
          <button
            onClick={() => {
              dispatch(decreaseNumOfProduct(product.id, cartProduct));
            }}
            disabled={IsDisable}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 bg-red-100 rounded-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
