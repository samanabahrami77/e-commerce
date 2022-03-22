import { useEffect, useState } from "react";
import { DropDown } from "./DropDown";

export const Navbar = () => {
  const [display, setdisplay] = useState("block");
  const [Isdown, setIsdown] = useState(false);

  //// navbar hidden /////
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        setdisplay("hidden");
      } else setdisplay("block");
    });
  }, [display]);

  useEffect(() => {
    document.querySelector("#dropdownButton").addEventListener("mouseover", (e) => {
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
    <div className={`bg-white h-20 w-full flex items-center px-8 ${display}`}>
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
          <div id="dropdown" className="absolute flex gap-2 bg-blue-400">
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
  );
};
