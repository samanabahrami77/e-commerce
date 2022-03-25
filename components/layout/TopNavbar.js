export const TopNavbar = () => {
  return (
    <div className="flex items-center bg-white h-20 w-full sticky top-0 px-8">
      <h1 className="flex-col w-2/12 font-bold  text-2xl">فروشگاه</h1>
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
          className="outline-none h-12 px-2 bg-dark w-full"
          placeholder="جستجو در بازار"
        />
      </div>
      <div className="w-5/12 flex gap-10" dir="ltr">
        <button className="flex flex-col w-24 items-center text-gray-600 gap-1 text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            id="cart"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <label htmlFor="cart">سبد خرید</label>
        </button>
        <button className="flex flex-col w-24 items-center text-gray-600 gap-1 text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-6 w-6"
            fill="none"
            id="userImage"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <label htmlFor="userImage">ورود / ثبت نام</label>
        </button>
      </div>
    </div>
  );
};
