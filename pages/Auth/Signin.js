import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/Tools/Button";
import { ImageButton } from "../../components/Tools/ImageButton";
import { Input } from "../../components/Tools/Input";

import google from "../../images/google.png";
import { Auth, Notify } from "../../Store/Actions";
import { validate } from "../../utils/validate";

export default function Signin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  console.log(useSelector((state) => state));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length > 7 && password.length > 7) {
      axios.post("/api/signin", { email, password }).then((res) => {
        if (!res.data) {
          dispatch(Notify("error", validate.USER_AUTH_ERROR));
        } else {
          dispatch(
            Notify("success", email.split("@")[0] + validate.USER_AUTH_SUCCESS)
          );
          dispatch(Auth(res.data));
          router.push("/");
        }
      });
    }
  };

  const aLink = (
    <a href="" className="text-blue-500">
      فراموش کرده اید؟
    </a>
  );

  return (
    <>
      <Head>
        <title>ورود به فروشگاه</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main
        className="bg-dark min-h-screen  flex flex-col gap-8 justify-center items-center"
        dir="rtl"
      >
        <Link href={"/"}>
          <h1 className="text-2xl cursor-pointer">فروشگاه</h1>
        </Link>
        <div className="bg-white shadow-sm rounded-2xl py-6 px-12 flex flex-col w-11/12 md:w-[32rem] gap-4">
          <h1 className="text-2xl text-center text-gray-500">ورود</h1>
          <ImageButton src={google} value="ورود با گوگل" />
          <div className="relative flex justify-center">
            <h3 className="text-xs text-gray-400 z-10 relative  bg-white px-3">
              یا ورود به حساب با
            </h3>
            <i className="absolute top-1/2 transform -translate-y-1/2 z-0 right-0 w-full flex border-t border-gray-500 border-opacity-30"></i>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Input
              data="email"
              label={"ایمیل"}
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
            <Input
              data="password"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
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
              aLink={aLink}
              label="پسورد"
            />
            <div className="">im not bot</div>
            <Button value={"ورود"} />
          </form>
          <div className="text-center mt-6 text-gray-700">
            آیا قبلا ثبت نام کرده اید؟
            <Link href={"/Auth/Signup"}>
              <a className="text-blue-500">ثبت نام</a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
