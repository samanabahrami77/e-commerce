export const Category2 = () => (
  <div className="flex flex-col">
    <h3 className="px-4 pt-4">گوشی موبایل و لپ تاپ {`>`}</h3>
    <div className="flex">
      <div className="flex flex-col gap-3 text-gray-500 p-4 text-sm">
        <div className="w-60 cursor-pointer hover:text-orange-500">اپل</div>
        <div className="w-60 cursor-pointer hover:text-orange-500">سامسونگ</div>
        <div className="w-60 cursor-pointer hover:text-orange-500">شیائومی</div>
      </div>
      <div className="flex flex-col gap-3 text-gray-500 p-4 text-sm">
        <div className="w-60 cursor-pointer hover:text-orange-500">هوآوی</div>
        <div className="w-60 cursor-pointer hover:text-orange-500">ال جی</div>
        <div className="w-60 cursor-pointer hover:text-orange-500">لنوو</div>
      </div>
      <div className="flex flex-col gap-3 text-gray-500 p-4 text-sm">
        <div className="w-60 cursor-pointer hover:text-orange-500">ایسوس</div>
      </div>
    </div>
  </div>
);
