import { useState } from "react";
import ProfileNav from "../../components/Tools/ProfileNav";

const Notifications = () => {
  const [email, setEmail] = useState(
    typeof window !== "undefined" ? localStorage.getItem("email") : ""
  );
  return (
    <div className="flex mx-52 my-10 justify-around">
      <ProfileNav />
      <div className="flex-col dark:text-white text-gray-600 rounded bg-white dark:bg-slate-600 h-80 w-8/12 justify-center items-center gap-8">
        هیچ پیغامی موجود نیست !
      </div>
    </div>
  );
};

export default Notifications;
