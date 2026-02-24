import React from "react";

export const Button = ({value}) => {
  return (
    <button className="bg-blue-500 dark:bg-sky-500 dark:hover:bg-sky-400 dark:hover:text-white dark:border-none hover:bg-white p-2 rounded-md text-white hover:border-blue-600 border hover:text-blue-600">
      {value}
    </button>
  );
};
