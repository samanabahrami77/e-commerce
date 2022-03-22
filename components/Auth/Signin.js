import React from "react";
import { Button } from "../Tools/Button";
import { Input } from "../Tools/Input";

export const Signin = () => {
  const aLink = (
    <a href="" className="text-blue-500">
      forget password?
    </a>
  );

  return (
    <div className="bg-dark min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-sm rounded-2xl py-6 px-12 flex flex-col gap-4 2xl:w-1/3">
        <h1 className="text-2xl text-center text-gray-500">sign in</h1>
        <div>signin with google</div>
        <div class="relative flex justify-center">
          <h3 class="text-xs text-gray-400 z-10 relative  bg-white px-3">
            or login
          </h3>
          <i class="absolute top-1/2 transform -translate-y-1/2 z-0 right-0 w-full flex border-t border-gray-500 border-opacity-30"></i>
        </div>
        <Input data="email" />
        <Input data="password" jsx={<Svg />} aLink={aLink} />
        <div className="">im not bot</div>
        <Button />
        <div className="text-center mt-6">already acount? <a href="" className="text-blue-500">signup</a></div>
      </div>
    </div>
  );
};
