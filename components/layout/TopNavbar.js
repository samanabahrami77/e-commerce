import { ImageButton } from "../Tools/ImageButton";

export const TopNavbar = () => {
  return (
    <div className="flex items-center bg-white h-20 w-full sticky top-0 px-8">
      <h1 className="flex-col w-2/12 font-bold">logo</h1>
      <div className="flex items-center bg-dark w-5/12 rounded-md px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-gray-400 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          className="outline-none h-12 px-2 bg-dark"
          placeholder="جستجو در بازار"
        />
      </div>
      <button className="w-5/12">text</button>
    </div>
  );
};
