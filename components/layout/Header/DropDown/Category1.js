export const Category1 = () => (
  <div className="flex flex-col">
    <h3 className="px-4 pt-4"> لوازم جانبی موبایل {`>`}</h3>
    <div className="flex">
      <div className="flex flex-col gap-3 text-gray-500 p-4 text-sm">
        <div className="w-60 cursor-pointer hover:text-orange-500">
          کیف و کاور گوشی
        </div>
        <div className="w-60 cursor-pointer hover:text-orange-500">
          شارژر گوشی
        </div>
        <div className="w-60 cursor-pointer hover:text-orange-500">
          پایه نگهدارنده گوشی
        </div>
      </div>
      <div className="flex flex-col gap-3 text-gray-500 p-4 text-sm">
        <div className="w-60 cursor-pointer hover:text-orange-500">
          باتری گوشی
        </div>
        <div className="w-60 cursor-pointer hover:text-orange-500">
          محافظ صفحه نمایش گوشی
        </div>
      </div>
    </div>
  </div>
);
