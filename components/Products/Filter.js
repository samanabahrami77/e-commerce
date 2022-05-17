import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PriceRange } from "../Tools/PriceRange";

const Filter = () => {
  const [showBrandBtn, setshowBrandBtn] = useState(true);
  const [displayBrand, setdisplaybrand] = useState("none");
  const [showRangeBtn, setshowRangeBtn] = useState(true);
  const [displayRange, setdisplayRange] = useState("none");

  const handelShowBrand = () => {
    setshowBrandBtn(!showBrandBtn);
  };

  const handelShowRange = () => {
    setshowRangeBtn(!showRangeBtn);
  };

  useEffect(() => {
    if (showBrandBtn) {
      setdisplaybrand("none");
    } else setdisplaybrand("flex");
  }, [showBrandBtn]);

  useEffect(() => {
    if (showRangeBtn) {
      setdisplayRange("none");
    } else setdisplayRange("flex");
  }, [showRangeBtn]);

  return (
    <div
      className="flex bg-white flex-col gap-4 w-full ml-4 rounded-md p-6 text-gray-700
    text-lg"
    >
      <h1 className="text-2xl text-orange-600">دسته بندی</h1>
      <button className="flex gap-2 relative text-gray-400 hover:bg-gray-50 p-1 focus:text-gray-700 text-base">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 z-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          ></path>
        </svg>
        <span className="absolute bg-gray-100 w-6 h-6 rounded-full -right-[8px] -top-[8px]"></span>
        تلفن همراه
      </button>
      <button className="flex gap-2 relative text-gray-400 hover:bg-gray-50 p-1 focus:text-gray-700 text-base">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 z-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
        <span className="absolute bg-gray-100 w-6 h-6 rounded-full -right-[9px] -top-[9px]"></span>
        لپ تاپ
      </button>
      <button className="flex gap-2 relative text-gray-400 hover:bg-gray-50 p-1 focus:text-gray-700 text-base">
        <span className="w-5 h-5 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 z-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </span>
        <span className="absolute bg-gray-100 w-6 h-6 rounded-full -right-[7px] -top-[7px]"></span>
        سایر
      </button>

      <h1 className="text-2xl text-orange-600 mt-6">فیلتر</h1>
      <button
        className="flex justify-between text-gray-400 focus:text-gray-700 hover:bg-gray-50
         rounded-md"
        onClick={handelShowBrand}
      >
        <span className="flex gap-2 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 z-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="absolute bg-gray-100 w-5 h-5 rounded-full -right-[10px] -top-[10px]"></span>
          برند
        </span>
        {showBrandBtn ? (
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
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        )}
      </button>
      <ul
        className="flex-col text-base gap-2 h-48 overflow-y-scroll"
        style={{ display: displayBrand }}
      >
        <li className="flex items-center gap-6 border-b p-2">
          <input type="checkbox" className="scale-150" /> <span>اپل</span>
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
      </ul>
      <button
        className="flex justify-between pt-2 text-gray-400 focus:text-gray-700 hover:bg-gray-50 rounded-md"
        onClick={handelShowRange}
      >
        <span className="flex gap-2 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 z-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="absolute bg-gray-100 w-5 h-5 rounded-full -right-[8px] -top-[8px]"></span>
          محدوده قیمت
        </span>
        {showRangeBtn ? (
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
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        )}
      </button>
      <div style={{ display: displayRange }} className="flex flex-col">
        <PriceRange />
      </div>
    </div>
  );
};

export default Filter;
