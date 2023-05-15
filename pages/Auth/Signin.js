import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImageButton } from "../../components/Tools/ImageButton";

import google from "../../images/google.png";
import { Auth, Notify } from "../../Store/Actions";
import { validate } from "../../utils/validate";
import Input from "../../components/Tools/Input";

export default function Signin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const [IshowPasword, setIshowPasword] = useState(false);
  const handleShowPasword = (e) => {
    e.preventDefault();
    setIshowPasword(!IshowPasword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/signin", { email, password }).then((res) => {
      if (res.data.status === "error") {
        dispatch(Notify("error", validate.USER_AUTH_ERROR));
      } else {
        dispatch(
          Notify("success", email.split("@")[0] + validate.USER_AUTH_SUCCESS)
        );
        dispatch(Auth(res.data));
        router.push("/");
      }
    });
  };

  return (
    <>
      <Head>
        <title>ورود به فروشگاه</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main
        className="bg-dark dark:bg-slate-900 dark:text-white min-h-screen  flex flex-col gap-8 justify-center
        items-center md:text-base text-sm"
      >
        <Link href={"/"} passHref>
          <h1 className="text-2xl cursor-pointer">فروشگاه</h1>
        </Link>
        <div className="bg-white dark:bg-slate-900 dark:text-white dark:border dark:border-slate-700 shadow-sm rounded-2xl py-6 px-12 flex flex-col w-11/12 md:w-[32rem] gap-4">
          <h1 className="md:text-2xl text-lg text-center text-gray-500 dark:text-white">
            ورود
          </h1>
          <ImageButton src={google} value="ورود با گوگل" />
          <div className="relative flex justify-center">
            <h3 className="text-xs text-gray-400 z-10 relative dark:bg-slate-900  bg-white px-3">
              یا ورود به حساب با
            </h3>
            <i className="absolute top-1/2 transform -translate-y-1/2 z-0 right-0 w-full flex border-t border-gray-500 border-opacity-30"></i>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label
              htmlFor={"email"}
              className="flex flex-col text-gray-600 dark:text-white text-sm gap-2"
            >
              <div className="flex justify-between">ایمیل</div>
              <div
                className="bg-dark dark:bg-slate-800 dark:text-white dark:border-none border flex flex-row p-2 text-base rounded-md 
          hover:border-blue-500"
              >
                <input
                  className="flex-1 outline-none bg-gray-100 dark:bg-slate-800 dark:text-white border-0"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
              </div>
            </label>
            {/* <label
              htmlFor={"password"}
              className="flex flex-col text-gray-600 dark:text-white text-sm gap-2"
            >
              <div className="flex justify-between">
                پسورد{" "}
                {/* <a href="" className="text-blue-500">
                  فراموش کرده اید؟
                </a>
              </div>
              <div
                className="bg-dark dark:bg-slate-800 dark:border-none dark:text-white border flex flex-row p-2 text-base rounded-md 
          hover:border-blue-500"
              >
                <input
                  className="flex-1 outline-none bg-gray-100 dark:bg-slate-800 dark:text-white border-0"
                  type={IshowPasword ? "password" : "text"}
                  id="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                />
                <button onClick={handleShowPasword}>
                  {!IshowPasword ? (
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
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 stroke-slate-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </label> */}
            <Input
                  data="password"
                  label={"پسورد"}
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
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
            <button
              type="submit"
              className="bg-blue-500 dark:bg-sky-500 dark:hover:bg-sky-400 dark:hover:text-white dark:border-none hover:bg-white p-2 rounded-md text-white hover:border-blue-600 border hover:text-blue-600"
            >
              ورود
            </button>
          </form>
          <div className="text-center mt-6 text-gray-700 dark:text-white">
            آیا قبلا ثبت نام کرده اید؟
            <Link href={"/Auth/Signup"} passHref>
              <a className="text-blue-500">ثبت نام</a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
