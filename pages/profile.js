import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../Store/Actions";
import { useRouter } from "next/router";

const Profile = () => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { push } = useRouter();

  useEffect(() => {
    if (!user.email) {
      push("/");
    }
  }, [user]);

  return (
    <div className="flex mx-14 my-10">
      <div className="flex flex-col w-1/4 bg-white rounded dark:bg-gray-600 dark:text-white">
        <span>مشخصات</span>
        <div>
          <span>ایمیل : </span>
          <span>{user.email}</span>
        </div>
        <button
          className="bg-red-500 py-3 text-white rounded"
          onClick={() => dispatch(Logout())}
        >
          logout
        </button>
        <div className="flex flex-col w-3/4"></div>
      </div>
    </div>
  );
};

export default Profile;
