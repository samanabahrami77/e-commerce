import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Button } from "../../components/Tools/Button";
import { ImageButton } from "../../components/Tools/ImageButton";
import { Input } from "../../components/Tools/Input";

import google from "../../images/google.png";

export default function Signup() {
  return (
    <>
      <Head>
        <title>ثبت نام در فروشگاه</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main
        className="bg-dark min-h-screen flex flex-col justify-center items-center gap-8"
        dir="rtl"
      >
        <Link href={"../"}>
          <h1 className="text-2xl cursor-pointer ">
            فروشگاه
          </h1>
        </Link>

        <div className="bg-white shadow-sm rounded-2xl py-6 px-12 flex flex-col md:m-0 mx-4 w-full md:w-[32rem] gap-4">
          <h1 className="text-2xl text-center text-gray-500">ثبت نام</h1>
          <ImageButton src={google} value="ثبت نام با گوگل" />
          <div className="relative flex justify-center">
            <h3 className="text-xs text-gray-500 z-10 relative bg-white px-3">
              یا ثبت نام با
            </h3>
            <i className="absolute top-1/2 transform -translate-y-1/2 z-0 right-0 w-full flex border-t border-gray-500 border-opacity-30"></i>
          </div>
          <Input data="email" label={"ایمیل"} />
          <Input
            data="password"
            label={"پسورد"}
            jsx={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-gray-400 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            }
          />
          <Input data="re-password" label={" تکرار پسورد"} />
          <Button value={"ثبت نام"} />
          <div className="">im not bot</div>
        </div>
      </main>
    </>
  );
}
