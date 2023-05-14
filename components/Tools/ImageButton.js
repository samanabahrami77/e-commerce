import Image from "next/image";

export const ImageButton = ({ src, value }) => {
  return (
    <button
      className="bg-white dark:bg-slate-700 dark:text-white dark:border-none border border-transparent hover:text-gray-700
       text-gray-500 rounded-lg shadow-imgbtn h-14 px-4 flex items-center
        sm:justify-start justify-center hover:bg-blue-700 group
        hover:bg-opacity-20 dark:shadow-none duration-200 gap-2 md:text-base text-sm"
    >
      <Image src={src} width={30} height={30} alt="button" priority />
      {value}
    </button>
  );
};
