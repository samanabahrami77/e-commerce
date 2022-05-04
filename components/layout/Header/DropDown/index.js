import { useEffect, useState, useRef } from "react";
import { Category1 } from "./Category1";
import { Category2 } from "./Category2";
import { Category3 } from "./Category3";

export const DropDown = () => {
  const [category, setcategory] = useState(null);
  const menuDropdown = useRef();

  useEffect(() => {
    menuDropdown.current.querySelectorAll("button").forEach((element) => {
      element.addEventListener("mouseover", (el) =>
        el.target ? setcategory(el.target.id) : setcategory("category1")
      );
    });
  }, [menuDropdown]);

  return (
    <>
      <div
        ref={menuDropdown}
        className="flex flex-col p-6 gap-6 text-lg border-l border-gray-400"
      >
        <button className=" w-60 hover:text-orange-500 text-right" id="category1">
          لوازم جانبی موبایل
        </button>
        <button className=" w-60 hover:text-orange-500 text-right" id="category2">
          گوشی موبایل و لپ تاپ
        </button>
        <button className=" w-60 hover:text-orange-500 text-right" id="category3">
        سایر ...
        </button>
      </div>

      {category === "category1" ? (
        <Category1 />
      ) : category === "category2" ? (
        <Category2 />
      ) : category === "category3" ? (
        <Category3 />
      ) : (
        <Category1 />
      )}
    </>
  );
};
