import Image from "next/image";
import React from "react";
import googleImage from "./../../images/google.png";

export const ImageButton = () => {
  return (
    <div
      className="bg-white border border-transparent hover:text-gray-700
       text-gray-500 rounded-lg shadow-sm h-14 px-4 flex items-center
        sm:justify-start justify-center hover:bg-blue-700 group
        hover:bg-opacity-20 transition duration-200 gap-2"
    >
      <Image src={googleImage} width={30} height={30} />
      <button>signup with google</button>
    </div>
  );
};
