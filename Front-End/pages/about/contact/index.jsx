import React from "react";

const ContactUs = () => {
  return (
    <>
      <div
        dir="rtl"
        className="bg-[#EEEEEE] text-gray-800 h-screen w-screen overflow-hidden px-10 pt-10"
      >
        <h1 className="text-3xl font-bold text-center">تماس با ما</h1>
        <br />
        <p className="text-lg text-gray-500">
          از ارتباط با شما عزیزان بسیار خوشحال می‌شویم. برای ارتباط با تیم
          پشتیبانی ما و دریافت پاسخ به سوالات، نظرات و پیشنهادات خود، می‌توانید
          از راه‌های زیر استفاده کنید:
        </p>

        <ol className="list-disc list-inside text-gray-500">
          <li className="font-bold">فرم تماس</li>
          <p className="text-base">
            می‌توانید فرم تماس با ما را در وبسایت ما پر کنید. لطفاً نام، ایمیل و
            پیام خود را در فرم ارائه شده وارد کنید. تیم پشتیبانی ما در اسرع وقت
            به شما پاسخ خواهد داد.
          </p>
          <hr className="w-full border-gray-400 my-4" />

          <li className="font-bold">ایمیل</li>
          <p className="text-base">
            شما می‌توانید از طریق ایمیل با ما در ارتباط باشید. برای پرسش سوالات،
            ارسال نظرات و پیشنهادات، لطفاً به آدرس ایمیل زیر ایمیل بفرستید:
          </p>
          <p className="text-base font-medium">
            ایمیل: samaostadyar7@gmail.com
          </p>
          <hr className="w-full border-gray-400 my-4" />

          <li className="font-bold">شبکه‌های اجتماعی</li>
          <p className="text-base">
            ما نیز در شبکه‌های اجتماعی حضور داریم. می‌توانید با ما در این
            شبکه‌ها ارتباط برقرار کنید و پیام‌ها و نظرات خود را با ما به اشتراک
            بگذارید. شما می‌توانید ما را در شبکه‌های زیر دنبال کنید:
          </p>
          <p className="text-base font-medium">
            تلگرام :{" "}
            <a href="https://t.me/samaostadyar" className=" underline">
              https://t.me/samaostadyar
            </a>
          </p>
          <p className="text-base font-medium">اینستاگرام : samaostadyar@</p>
          <p className="text-base font-medium">لینکدین : UniSama@</p>
          <hr className="w-full border-gray-400 my-4" />

          <li className="font-bold">تلفن</li>
          <p className="text-base">
            در صورت لزوم، می‌توانید با ما تماس بگیرید. شماره تلفن تماس ما در
            ساعات کاری به شرح زیر است
          </p>
          <p className="text-base">
            ساعات کاری: از شنبه تا پنجشنبه 12-9 | 21-16
          </p>
          <p className="text-base font-medium">شماره تلفن : 09131231234</p>
          <hr className="w-full border-gray-400 my-4" />
        </ol>

        <p className="text-lg text-gray-500">
          لطفاً توجه داشته باشید که تیم پشتیبانی ما سعی می‌کند در اسرع وقت به
          تمامی پیام‌ها و درخواست‌ها پاسخ دهد. <br />
          با ارائه اطلاعات دقیق و کامل، ما را در ارائه پاسخ سریع‌تر و دقیق‌تر به
          شما یاری کنید.
        </p>

        <h2 className="text-2xl font-bold text-center">با تشکر</h2>
      </div>
    </>
  );
};

export default ContactUs;
