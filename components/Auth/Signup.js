import React from "react";
import { Button } from "../Tools/Button";
import { ImageButton } from "../Tools/ImageButton";
import { Input } from "../Tools/Input";
import { Svg } from "../Tools/Svg";

export const Signup = () => {
  return (
    <div className="bg-dark min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-sm rounded-2xl py-6 px-12 flex flex-col gap-4 2xl:w-1/3">
        <h1 className="text-2xl text-center text-gray-500">sign up</h1>
        <ImageButton />
        <div className="relative flex justify-center">
          <h3 className="text-xs text-gray-500 z-10 relative bg-white px-3">
            or signup
          </h3>
          <i className="absolute top-1/2 transform -translate-y-1/2 z-0 right-0 w-full flex border-t border-gray-500 border-opacity-30"></i>
        </div>
        <Input data="email" />
        <Input data="password" jsx={<Svg />} />
        <Input data="re-password" />
        <Button  />
        <div className="">im not bot</div>
        <div className="text-center mt-6">
          already acount?{" "}
          <a href="" className="text-blue-500">
            signin
          </a>
        </div>
      </div>
    </div>
  );
};
