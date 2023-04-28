import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetFilter } from "../../Store/Actions";

export const PriceRange = () => {
  const [minvalue, setMinValue] = useState(0);
  const [maxvalue, setMaxValue] = useState(100000000);
  const minGap = 0;
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    if (product) {
      dispatch(
        SetFilter(
          product.filter(
            (item) => item.price/10 <= maxvalue && item.price/10 >= minvalue
          )
        )
      );
    }
    if (maxvalue - minvalue <= minGap) {
      setMaxValue(parseInt(minvalue) - minGap);
    }
    if (maxvalue - minvalue <= minGap) {
      setMinValue(parseInt(maxvalue) + minGap);
    }
    const per1 = (minvalue / 100000000) * 100;
    const per2 = (maxvalue / 100000000) * 100;
    document.getElementById(
      "slider-track"
    ).style.background = `linear-gradient(to left, #e0e5e6 ${per1}%,#19bfd3 ${per1}%,#19bfd3 ${per2}%,#e0e5e6 ${per2}%)`;
  }, [minvalue, maxvalue]);

  return (
    <>
      <div className="flex items-center">
        <span className="text-base">از</span>
        <input
          type="text"
          className="flex text-left outline-none shadow-none p-2 border-b font-bold text-2xl text-gray-800 w-11/12"
          onChange={(e) => setMinValue(e.target.value)}
          value={minvalue}
        />
        <span className="text-base mr-1">تومان</span>
      </div>
      <div className="flex items-center">
        <span className="text-base">تا</span>
        <input
          type="text"
          className="flex text-left outline-none shadow-none p-2 border-b font-bold text-2xl text-gray-800 w-11/12"
          onChange={(e) => setMaxValue(e.target.value)}
          value={maxvalue}
        />
        <span className="text-base mr-1">تومان</span>
      </div>
      <div className="range mb-8">
        <div className="slider-track" id="slider-track"></div>
        <div className="wrapper">
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100000000"
              value={minvalue}
              name=""
              id=""
              onChange={(e) => setMinValue(e.target.value)}
            />
            <input
              type="range"
              min="0"
              max="100000000"
              value={maxvalue}
              name=""
              id=""
              onChange={(e) => setMaxValue(e.target.value)}
            />
          </div>
          <div className="flex justify-between w-full text-xs text-gray-500 mt-3 pb-5">
            <span>ارزانترین</span>
            <span>گرانترین</span>
          </div>
        </div>
      </div>
    </>
  );
};
