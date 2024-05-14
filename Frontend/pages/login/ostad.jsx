import { DRF_TOKEN_KEY } from "@/utils/api/axios";
import { loginAPI } from "@/utils/api/login";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();

  const [formValue, setFormValue] = useState({ userName: "", password: "" });
  let [login, setLogin] = useState(false);
  const [user, setUser] = useState({ userName: "" });

  const loginMutation = useMutation({
    mutationFn: loginAPI,
    onError(err) {
      toast.error("مشکلی بوجود آمده است");
    },
    onSuccess(data) {
      const token = data.token; // TODO: token ro az data backend begir
      localStorage.setItem(DRF_TOKEN_KEY, token);
      router.push("/professor-home");
    },
  });

  //   const ostadListQuery = useQuery({
  //     queryFn: () => {},
  //     queryKey: ["ostad-list"],
  //   });

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    loginMutation.mutate({
      username: formValue.userName,
      password: formValue.password,
    });
  };

  return (
    <div
      className={
        "flex items-center justify-center h-screen w-screen flex flex-row bg-[#31363f] bg-gradient-to-r from-[#222831] to-gray-700"
      }
      dir={"rtl"}
    >
      <div
        className={
          "flex flex-col items-center bg-gradient-to-r from-[#222831] to-gray-700 justify-between p-10 rounded-xl"
        }
      >
        <div className={"flex flex-col text-center gap-5 mb-5"}>
          <p className={"text-white text-5xl"}>SAMA</p>
          <p className={"text-base text-gray-300"}>سامانه مدیریت استادیار</p>
          <p className={"text-sm text-gray-300"}>  ورود استاد</p>
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
          <div className={"flex flex-col w-80 mb-12"}>
            <p className={"text-xl pb-2 text-start pr-5 text-white"}>
              نام کاربری
            </p>
            <input
              name={"userName"}
              onChange={(event) => {
                setFormValue({ ...formValue, userName: event.target.value });
              }}
              className=" h-14 block bg-blue1 w-full border border-slate-300 rounded-xl text-black
                        pr-3 pl-3 shadow-lg focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1 "
              type="text"
            />
          </div>
          <div className={"flex flex-col w-80"}>
            <p className={"text-xl pb-2 text-start pr-5 text-white"}>
              رمز ورود
            </p>
            <input
              name={"password"}
              onChange={(event) => {
                setFormValue({ ...formValue, password: event.target.value });
              }}
              className=" h-14 block bg-blue1 w-full border border-slate-300 rounded-xl text-black
                        pr-3 pl-3 shadow-lg focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1 "
              type="password"
            />
          </div>

          <button
            className="font-bold drop-shadow-md text-[#222831] text-center mt-10 rounded-xl bg-[#76ABAE] px-16 py-2 pb-3
                    shadow-sm shadow-[#EEEEEE] hover:scale-105 transition ease-in-out delay-50"
            type={"submit"}
          >
            {loginMutation.isPending ? "درحال ورود..." : "ورود"}
          </button>
          <div className={"flex flex-row text-sm gap-1 mt-5 text-gray-300"}>
            <p>حساب کاربری ندارید؟</p>
            <a href="/sign-up/ostad" className={"text-white hover:text-[#76ABAE]"}>
              ثبت نام
            </a>
          </div>

          <Link className="mt-5 hover:text-[#76ABAE]" href="/login">
            ورود دانشجو
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
export default Login;
