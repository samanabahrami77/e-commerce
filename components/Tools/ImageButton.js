import Image from "next/image";

export const ImageButton = ({ src, value }) => {
  return (
    <button
      className="bg-white border border-transparent hover:text-gray-700
       text-gray-500 rounded-lg shadow-sm h-14 px-4 flex items-center
        sm:justify-start justify-center hover:bg-blue-700 group
        hover:bg-opacity-20 transition duration-200 gap-2"
    >
      <Image src={src} width={30} height={30} />
      {value}
    </button>
  );
};
