import { useEffect, useState } from "react";
import { DropDown } from "./DropDown";

export const Navbar = () => {
  const [Isdown, setIsdown] = useState(false);

  useEffect(() => {
    document
      .querySelector("#dropdownButton")
      .addEventListener("mouseover", (e) => {
        if (e.target) {
          setIsdown(true);
        }
      });

    document.querySelector("#dropdown").addEventListener("mouseleave", (e) => {
      if (e.target) {
        setIsdown(false);
      }
    });
  }, [Isdown]);

  return (
    <div className="hidden md:flex">
      <div className="bg-white h-12 w-full items-center px-8 border-b-2">
        <ul className="flex gap-14">
          <li>
            <button
              id="dropdownButton"
              className="flex gap-1 text hover:text-orange-500"
            >
              {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={` h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              }
              دسته بندی ها
            </button>
            <div
              id="dropdown"
              className="absolute flex gap-2 bg-white z-10 mt-6 text-center rounded shadow-sm"
            >
              {Isdown ? <DropDown /> : ""}
            </div>
          </li>
          <li>
            <button id="menu" className="flex gap-1 text hover:text-orange-500">
              درباره ما
            </button>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
