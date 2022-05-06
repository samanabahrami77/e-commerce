import Link from "next/link";
import { useState } from "react";

export const TopNavbar = () => {
  const [IsShowMobileMenu, setIsShowMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setIsShowMobileMenu(!IsShowMobileMenu);
  };

  return (
    <>
      <div className="flex flex-col md:sticky top-0 border-gray-300 shadow-md md:border-0 md:shadow-none z-10 border-b">
        <div className="flex items-center bg-white h-20 w-full px-8">
          {/* mobile menu button */}
          <button
            className="flex gap-2 md:hidden pl-2 hover:text-orange-500"
            onClick={handleMobileMenu}
          >
            {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={` h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            }
          </button>
          {/*  logo  */}
          <h1 className="flex-col w-2/12 font-bold  md:text-2xl text-xl">
            فروشگاه
          </h1>
          {/* search input  */}
          <div className="md:flex items-center hidden bg-dark w-5/12 rounded-md px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-gray-400 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              className="outline-none h-12 px-2 bg-dark w-full"
              placeholder="جستجو در بازار"
            />
          </div>
          {/* cart and login  */}
          <div className="w-5/12 flex md:gap-10 gap-6 justify-end absolute left-8">
            <button className="flex flex-col items-center text-gray-600 gap-1 text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                id="cart"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <label className="hidden md:flex" htmlFor="cart">
                سبد خرید
              </label>
            </button>
            <Link href={"/Auth/Signin"}>
              <button className="flex flex-col items-center text-gray-600 gap-1 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" h-6 w-6"
                  fill="none"
                  id="userImage"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <label className="md:flex hidden" htmlFor="userImage">
                  ورود / ثبت نام
                </label>
              </button>
            </Link>
          </div>
        </div>
        {/* mobile search input  */}
        <div className="md:hidden items-center flex bg-dark w-10/12 rounded-md mx-auto px-2 mb-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-gray-400 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            className="outline-none h-12 px-2 bg-dark w-full"
            placeholder="جستجو در بازار"
          />
        </div>
      </div>
      {/* mobile menu */}
      {IsShowMobileMenu ? (
        <div className="z-20 flex absolute top-0 h-screen w-full">
          <div className="flex flex-col bg-white w-2/3 p-6 ease-linear shadow-md">
            <div className="flex w-full gap-4 justify-between">
              <h1 className="font-bold  text-xl">فروشگاه</h1>
              <button className="h-6" onClick={handleMobileMenu}>
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-6">
              <li className="mt-10">ورود / ثبت نام</li>
              <hr className="mb-2" />
              <li>محصولات</li>
              <li>ارتباط با ما</li>
              <li>پشتیبانی</li>
            </ul>
          </div>
          <div
            onClick={handleMobileMenu}
            className="bg-gray-600 opacity-60 w-1/3"
          ></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
