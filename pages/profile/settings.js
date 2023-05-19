import { useState } from "react";
import ProfileNav from "../../components/Tools/ProfileNav";

const orders = () => {
  const [email, setEmail] = useState(
    typeof window !== "undefined" ? localStorage.getItem("email") : ""
  );
  return (
    <div className="flex mx-52 my-10 justify-around">
      <ProfileNav />
      <div className="flex-col rounded dark:text-white text-gray-500 bg-white dark:bg-slate-600 h-80 w-8/12 justify-center items-center gap-8">
        <span>
          نام کاربری :{" "}
          <span className="dark:text-white text-gray-800">{email.split("@")[0]}</span>
        </span>
        <span>
          ایمیل : <span className="dark:text-white text-gray-800">{email}</span>
        </span>
      </div>
    </div>
  );
};

export default orders;
