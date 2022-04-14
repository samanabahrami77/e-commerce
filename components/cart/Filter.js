import React from "react";

const Filter = () => {
  return (
    <div
      className="flex flex-col gap-4 border w-full ml-4 rounded-md p-6 text-gray-700
    text-lg"
    >
      <h1 className="text-2xl ">فیلترها</h1>
      <div>برند</div>
      <svg direction={"rtl"}
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
          d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
        />
      </svg>
    </div>
  );
};

export default Filter;
