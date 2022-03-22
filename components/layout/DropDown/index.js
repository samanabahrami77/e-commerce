import { useEffect, useState, useRef } from "react";
import { Category1 } from "./Category1";
import { Category2 } from "./Category2";
import { Category3 } from "./Category3";

export const DropDown = () => {
  const [category, setcategory] = useState(null);
  const menuDropdown = useRef();

  useEffect(() => {
    menuDropdown.current.querySelectorAll("div").forEach((element) => {
      element.addEventListener("mouseover", (el) =>
        el.target ? setcategory(el.target.id) : setcategory("category1")
      );
    });
  }, [menuDropdown]);

  return (
    <>
      <div
        ref={menuDropdown}
        className="flex flex-col p-4 gap-2 text-xl border-l"
      >
        <div className=" w-60" id="category1">
          amir
        </div>
        <div className=" w-60" id="category2">
          asgar
        </div>
        <div className=" w-60" id="category3">
          akbar
        </div>
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
