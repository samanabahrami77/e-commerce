export const Category3 = () => (
  <div className="flex flex-col">
    <h3 className="px-4 pt-4">سایر {`>`}</h3>
    <div className="flex">
      <div className="flex flex-col gap-3 text-gray-500 p-4 text-sm">
        <div className="w-60 cursor-pointer hover:text-orange-500">هندزفری</div>
        <div className="w-60 cursor-pointer hover:text-orange-500">کیبورد</div>
        <div className="w-60 cursor-pointer hover:text-orange-500">ماوس</div>
      </div>
      <div className="flex flex-col gap-3 text-gray-500 p-4 text-sm">
        <div className="w-60 cursor-pointer hover:text-orange-500">هارد</div>
        <div className="w-60 cursor-pointer hover:text-orange-500">دوربین</div>
      </div>
    </div>
  </div>
);
