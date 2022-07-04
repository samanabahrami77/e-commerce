import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../Store/Actions";

const Profile = () => {
  console.log(useSelector((state) => state));
  const dispatch = useDispatch();
  return (
    <div className="flex mx-14 my-10">
      <div className="flex flex-col w-1/4 bg-white rounded">
        <span>مشخصات</span>
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
