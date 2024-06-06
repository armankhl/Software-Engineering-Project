/* eslint-disable @next/next/no-html-link-for-pages */
import { studentsignupAPI } from "@/utils/api/signup";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
  const router = useRouter();

  const [formValue, setFormValue] = useState({
    userName: "",
    password: "",
    email: "",
    id: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
  });
  let [login, setLogin] = useState(false);

  const loginMutation = useMutation({
    mutationFn: studentsignupAPI,
    onError(err) {
      toast.error("مشکلی بوجود آمده است.");
    },
    onSuccess(data) {
      toast.success("ثبت نام شما با موفقیت انجام شد.");
      router.push("/login");
    },
  });

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    loginMutation.mutate({
      user: {
        username: formValue.userName,
        first_name: formValue.firstname,
        last_name: formValue.lastname,
        email: formValue.email,
        password: formValue.password,
      },
      stu_no: formValue.id,
      phone_no: formValue.phonenumber,
      is_ta: false,
      password2: formValue.password,
    });
  };

  return (
    <div
      className={
        "items-center justify-center py-10 min-h-screen max-w-screen w-full flex flex-row bg-[#31363f] bg-gradient-to-r from-[#222831] to-gray-700"
      }
      dir={"rtl"}
    >
      <div
        className={
          "flex flex-col items-center bg-gradient-to-r from-[#222831] to-gray-700 justify-between p-10 rounded-xl"
        }
      >
        <div className={"flex flex-col text-center gap-1 mb-5"}>
          <p className={"text-white text-5xl"}>SAMA</p>
          <p className={"text-base text-gray-300"}>سامانه مدیریت استادیار</p>
          <p className={"text-sm text-gray-300 mb-3"}> ثبت نام دانشجو</p>
        </div>

        <form
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onSubmit={formSubmitHandler}
          className={
            "border-gray-700 flex flex-col align-items-center justify-between "
          }
        >
          <div className={"grid grid-cols-2 gap-5"}>
            <div className={"flex flex-col w-80 mb-3"}>
              <p className={"text-base pb-2 text-start pr-5 text-white"}>
                {" "}
                نام
              </p>
              <input
                name={"userName"}
                onChange={(event) => {
                  setFormValue({ ...formValue, firstname: event.target.value });
                }}
                className=" h-12 block bg-blue1 w-full border border-slate-300 rounded-xl text-black
                        pr-3 pl-3 shadow-lg focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1 "
                type="text"
              />
            </div>
            <div className={"flex flex-col w-80 mb-3"}>
              <p className={"text-base pb-2 text-start pr-5 text-white"}>
                {" "}
                شماره آموزشی
              </p>
              <input
                name={"userName"}
                onChange={(event) => {
                  setFormValue({ ...formValue, id: event.target.value });
                }}
                className=" h-12 block bg-blue1 w-full border border-slate-300 rounded-xl text-black
                        pr-3 pl-3 shadow-lg focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1 "
                type="text"
              />
            </div>
            <div className={"flex flex-col w-80 mb-3"}>
              <p className={"text-base pb-2 text-start pr-5 text-white"}>
                {" "}
                نام خانوادگی
              </p>
              <input
                name={"userName"}
                onChange={(event) => {
                  setFormValue({ ...formValue, lastname: event.target.value });
                }}
                className=" h-12 block bg-blue1 w-full border border-slate-300 rounded-xl text-black
                        pr-3 pl-3 shadow-lg focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1 "
                type="text"
              />
            </div>
            <div className={"flex flex-col w-80 mb-3"}>
              <p className={"text-base pb-2 text-start pr-5 text-white"}>
                {" "}
                نام کاربری
              </p>
              <input
                name={"userName"}
                onChange={(event) => {
                  setFormValue({ ...formValue, userName: event.target.value });
                }}
                className=" h-12 block bg-blue1 w-full border border-slate-300 rounded-xl text-black
                        pr-3 pl-3 shadow-lg focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1 "
                type="text"
              />
            </div>

            <div className={"flex flex-col w-80 mb-3"}>
              <p className={"text-base pb-2 text-start pr-5 text-white"}>
                {" "}
                ایمیل
              </p>
              <input
                name={"userName"}
                onChange={(event) => {
                  setFormValue({ ...formValue, email: event.target.value });
                }}
                className=" h-12 block bg-blue1 w-full border border-slate-300 rounded-xl text-black
                        pr-3 pl-3 shadow-lg focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1 "
                type="text"
              />
            </div>
            <div className={"flex flex-col w-80 mb-3"}>
              <p className={"text-base pb-2 text-start pr-5 text-white"}>
                رمز ورود
              </p>
              <input
                name={"password"}
                onChange={(event) => {
                  setFormValue({ ...formValue, password: event.target.value });
                }}
                className=" h-12 block bg-blue1 w-full border border-slate-300 rounded-xl text-black
                        pr-3 pl-3 shadow-lg focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1 "
                type="password"
              />
            </div>
            <div className={"flex flex-col w-full mb-3 col-span-full"}>
              <p className={"text-base pb-2 text-start pr-5 text-white"}>
                {" "}
                شماره تلفن
              </p>
              <input
                name={"userName"}
                onChange={(event) => {
                  setFormValue({
                    ...formValue,
                    phonenumber: event.target.value,
                  });
                }}
                className=" h-12 block bg-blue1 w-full border border-slate-300 rounded-xl text-black
                        pr-3 pl-3 shadow-lg focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1 "
                type="text"
              />
            </div>
          </div>

          <button
            className="font-bold drop-shadow-md text-[#222831] text-center mt-8 rounded-xl bg-[#76ABAE] px-16 py-2 pb-3
                    shadow-sm shadow-[#EEEEEE] hover:scale-105 transition ease-in-out delay-50"
            type={"submit"}
          >
            {loginMutation.isPending ? "درحال ثبت نام..." : "ثبت نام"}
          </button>
          <div className={"flex flex-row text-sm gap-1 mt-5 text-gray-300"}>
            <p>حساب کاربری دارید؟</p>
            <a href="/login" className={"text-white hover:text-[#76ABAE]"}>
              ورود
            </a>
          </div>
          <Link className="mt-5 hover:text-[#76ABAE]" href="/sign-up/ostad">
            ثبت نام استاد
          </Link>

          {login && (
            <p className={"text-white text-[0.75rem] mt-2"}>
              .رمز ورود یا نام کاربری اشتباه است
            </p>
          )}
        </form>

        <div className={"flex flex-row gap-28 text-white text-lg mt-5"}>
          <button>ارتباط با پشتیبانی</button>
          <button>شرایط و قوانین</button>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
