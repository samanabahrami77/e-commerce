import React from "react";

export const Input = ({ data, jsx, aLink, label }) => {
  return (
    <>
      <label
        htmlFor={data}
        className="flex flex-col text-gray-600 text-sm gap-2"
      >
        <div className="flex justify-between">
          {label ? label : data} {aLink}
        </div>
        <div
          className="bg-dark border flex flex-row p-2 text-base rounded-md 
          hover:border-blue-500"
        >
          <input
            className="flex-1 outline-none bg-gray-100 border-0"
            type={data}
            id={data}
          />
          <a href="">{jsx}</a>
        </div>
      </label>
    </>
  );
};
