import { useState } from "react";

const Footer = () => {
  return (
    <div
      className={"flex flex-col py-5 w-screen bg-[#31363f] justify-center px-5"}
      dir={"rtl"}
    >
      <div className={"w-screen flex flex-row h-full"}>
        <p className={"text-white text-4xl basis-6/12 flex items-center"}>
          سما - سامانه مدیریت استادیار
        </p>
        <div className={"flex flex-row justify-center items-center basis-6/12"}>

          <a href={""} className={"text-white text-lg basis-1/4"}>
            سوالات متداول
          </a>
          <a href={""} className={"text-white text-lg basis-1/4"}>
            درباره ما
          </a>
          <a href={""} className={"text-white text-lg basis-1/4"}>
            شرایط و قوانین
          </a>
          <a href={""} className={"text-white text-lg basis-1/4"}>
            تماس با ما
          </a>
          
        </div>
      </div>
      <div className={"flex flex-row gap-3 justify-end items-center "}>
        <a href="#">
          <img className={"w-5 h-5"} src={"/icons8-instagram-50.png"} />
        </a>
        <a href="#">
          <img className={"w-7 h-7"} src={"/icons8-linkedin-circled-500.png"} />
        </a>
        <a href="#">
          <img className={"w-5 h-5"} src={"/icons8-telegram-50.png"} />
        </a>
      </div>
    </div>
  );
};
export default Footer;
