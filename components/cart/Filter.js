import React, { useEffect, useState } from "react";
import { PriceRange } from "../Tools/PriceRange";

const Filter = () => {
  const [showBtn, setshowbtn] = useState(true);
  const [display, setdisplay] = useState("none");

  const handelShow = () => {
    setshowbtn(!showBtn);
  };
  useEffect(() => {
    if (showBtn) {
      setdisplay("none");
    } else setdisplay("flex");
  }, [showBtn]);

  return (
    <div
      className="flex flex-col gap-4 border w-full ml-4 rounded-md p-6 text-gray-700
    text-lg"
    >
      <h1 className="text-2xl ">فیلترها</h1>
      <button className="flex justify-between" onClick={handelShow}>
        <span>برند</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <ul
        className="flex-col text-base gap-2 h-48 overflow-y-scroll"
        style={{ display: display }}
      >
        <li className="flex items-center gap-6 border-b p-2">
          <input type="checkbox" name="" id="" className="scale-150" />{" "}
          <span>اپل</span>
        </li>
        <li className="flex items-center gap-6 border-b p-2">
          <input type="checkbox" name="" id="" className="scale-150" />{" "}
          <span>سامسونگ</span>
        </li>
        <li className="flex items-center gap-6 border-b p-2">
          <input type="checkbox" name="" id="" className="scale-150" />{" "}
          <span>شیائومی</span>
        </li>
        <li className="flex items-center gap-6 border-b p-2">
          <input type="checkbox" name="" id="" className="scale-150" />{" "}
          <span>ایسوس</span>
        </li>
        <li className="flex items-center gap-6 border-b p-2">
          <input type="checkbox" name="" id="" className="scale-150" />{" "}
          <span>لنوو</span>
        </li>
        <li className="flex items-center gap-6 border-b p-2">
          <input type="checkbox" name="" id="" className="scale-150" />{" "}
          <span>ایسوس</span>
        </li>
      </ul>
      <PriceRange />
    </div>
  );
};

export default Filter;
