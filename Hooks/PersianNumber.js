export default function PersianNumber(num) {
  const number = num + "";
  let arr = [];
  for (let index = 0; index < number.length - 1; index++) {
    const element = number[index];
    switch (element) {
      case "0":
        arr[index] = "۰";
        break;
      case "1":
        arr[index] = "۱";
        break;
      case "2":
        arr[index] = "۲";
        break;
      case "3":
        arr[index] = "۳";
        break;
      case "4":
        arr[index] = "۴";
        break;
      case "5":
        arr[index] = "۵";
        break;
      case "6":
        arr[index] = "۶";
        break;
      case "7":
        arr[index] = "۷";
        break;
      case "8":
        arr[index] = "۸";
        break;
      case "9":
        arr[index] = "۹";
      default:
        break
    }
  }
  let count = 0;
  for (let index = arr.length; index > 0; index--) {
    count++;
    if (count % 3 === 0 && count < arr.length - 1) {
      arr.splice(index - 1, 0, ",");
    }
  }
  return arr.join("");
}
