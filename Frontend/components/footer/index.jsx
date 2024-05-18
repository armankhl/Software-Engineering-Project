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
          <a
            href={"/about/questions"}
            className={"text-white text-lg basis-1/4"}
          >
            سوالات متداول
          </a>
          <a
            href={"/about/about-us"}
            className={"text-white text-lg basis-1/4"}
          >
            درباره ما
          </a>
          <a href={"/about/rules"} className={"text-white text-lg basis-1/4"}>
            شرایط و قوانین
          </a>
          <a href={"/about/contact"} className={"text-white text-lg basis-1/4"}>
            تماس با ما
          </a>
        </div>
      </div>
      <div className={"flex flex-row gap-3 justify-end items-center "}>
        <a href="https://www.instagram.com/samaostadyar?igsh=bW1oZXY4YWwwYTZp&utm_source=qr">
          <img className={"w-5 h-5"} src={"/icons8-instagram-50.png"} />
        </a>
        <a href="https://www.linkedin.com/in/matin-asabozohoor-b8584728a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          <img className={"w-7 h-7"} src={"/icons8-linkedin-circled-500.png"} />
        </a>
        <a href="https://t.me/samaostadyar">
          <img className={"w-5 h-5"} src={"/icons8-telegram-50.png"} />
        </a>
      </div>
    </div>
  );
};
export default Footer;
