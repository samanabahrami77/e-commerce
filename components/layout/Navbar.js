import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <div className="flex flex-col shadow-md border-b z-10 sticky bg-white top-0">
        <div className="flex items-center bg-white h-20 w-full px-8">
          {/*  logo  */}
          <Link href={"/"}>
            <div className="flex items-center gap-2 md:ml-10 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-orange-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="flex flex-col items-center">
                <h1 className="font-bold text-base text-orange-500">فروشگاه</h1>
                <h3 className="text-xs text-gray-500">market</h3>
              </div>
            </div>
          </Link>
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
          <div className="md:w-5/12 w-2/3 flex gap-6 justify-end items-center absolute left-8">
            {/* login icon */}
            <Link href={"/Auth/Signin"}>
              <>
                <button className="md:flex hidden items-center gap-3 text-xs border p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  ورود به حساب کاربری
                </button>
                <button className="md:hidden flex items-center gap-3 text-xs rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </>
            </Link>
            <div className="w-[1.5px] min-h-[5vh] bg-gray-400"></div>
            {/* cart icon */}
            <button className="flex flex-col items-center text-gray-600 gap-1 text-base">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
            <span className="absolute text-xs flex justify-center items-center text-white bg-orange-500 w-7 h-7 left-[60px] md:-top-[2px] -top-[10px] border-white border-4 rounded-full">
              0
            </span>
            {/* favorite icon */}
            <button className="flex flex-col items-center text-gray-600 gap-1 text-base">
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
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
    </>
  );
};
