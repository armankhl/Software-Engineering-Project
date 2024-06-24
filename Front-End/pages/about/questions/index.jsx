/* eslint-disable react/no-unescaped-entities */
import React from "react";

const FAQs = () => {
  return (
    <div
      dir="rtl"
      className="bg-[#EEEEEE] text-gray-800 h-screen w-screen px-10 pt-10 overflow-x-hidden"
    >
      <h1 className="text-3xl font-bold text-center text-gray-800">
        سوالات متداول
      </h1>

      <section className="mt-8 pr-4">
        <h2 className="text-2xl font-bold text-center text-gray-500">
          سوالات متداول برای اساتید
        </h2>

        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-500">
            چگونه می‌توانم پروفایل خود را در وبسایت ثبت کنم؟
          </h3>
          <p className="text-base text-gray-500">
            برای ثبت پروفایل خود، به صفحه "ثبت نام" بروید و اطلاعات مورد نیاز را
            وارد کنید. سپس می‌توانید پروفایل خود را ویرایش و تکمیل کنید.
          </p>
        </div>

        <hr className="w-full border-gray-400 my-4" />

        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-500">
            آیا می‌توانم بیش از یک پروفایل در وبسایت داشته باشم؟
          </h3>
          <p className="text-base text-gray-500">
            بله، شما می‌توانید برای هر تخصص یا حوزه‌ی تحصیلی مختلف، یک پروفایل
            جداگانه ایجاد کنید.
          </p>
        </div>

        <hr className="w-full border-gray-400 my-4" />

        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-500">
            آیا می‌توانم پروفایلم را پس از ثبت نهایی ویرایش کنم؟
          </h3>
          <p className="text-base text-gray-500">
            بله، شما می‌توانید هر زمان که خواستید پروفایل خود را ویرایش کنید. پس
            از ویرایش، تغییرات جدید شما در پروفایل نمایش داده می‌شود.
          </p>
        </div>

        <hr className="w-full border-gray-400 my-4" />

        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-500">
            آیا می‌توانم درخواست استادیاری را لغو کنم؟
          </h3>
          <p className="text-base text-gray-500">
            بله، شما می‌توانید درخواست استادیاری خود را لغو کنید. برای این کار،
            به صفحه "درخواست‌های من" مراجعه کنید و درخواست مورد نظر را لغو کنید.
          </p>
        </div>
      </section>

      <br />

      <section className="mt-8 pr-4 pb-4">
        <h2 className="text-2xl font-bold text-center text-gray-500">
          سوالات متداول برای دانشجویان
        </h2>

        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-500">
            چگونه می‌توانم استادیار مناسب را پیدا کنم؟
          </h3>
          <p className="text-base text-gray-500">
            برای پیدا کردن استادیار مناسب، می‌توانید از قابلیت جستجو در وبسایت
            استفاده کنید. می‌توانید بر اساس تخصص‌ها، مهارت‌ها و سایر معیارهای
            مهم، استادیاران را فیلتر کنید و پروفایل‌های آن‌ها را بررسی کنید.
          </p>
        </div>

        <hr className="w-full border-gray-400 my-4" />

        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-500">
            چگونه می‌توانم درخواست استادیاری ارسال کنم؟
          </h3>
          <p className="text-base text-gray-500">
            برای ارسال درخواست استادیاری، به صفحه "استادیاری" بروید و فرم مربوطه
            را تکمیل کنید. درخواست شما سپس به استادیاران مناسب ارسال خواهد شد و
            آن‌ها می‌توانند به شما پاسخ دهند.
          </p>
        </div>

        <hr className="w-full border-gray-400 my-4" />

        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-500">
            آیا می‌توانم درخواست استادیاری خود را ویرایش کنم؟
          </h3>
          <p className="text-base text-gray-500">
            بله، شما می‌توانید درخواست استادیاری خود را تا زمانی که توسط
            استادیاری پذیرفته شود، ویرایش کنید.
          </p>
        </div>

        <hr className="w-full border-gray-400 my-4" />

        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-500">
            چگونه می‌توانم با استادیار در تماس باشم؟
          </h3>
          <p className="text-base text-gray-500">
            پس از ارسال درخواست استادیاری، استادیاران می‌توانند با شما تماس
            بگیرند. همچنین، شما نیز می‌توانید در پروفایل آنها، اطلاعات تماسی
            آنها را ببینید و با استفاده از راه‌های ارتباطی موجود، با آنها تماس
            برقرار کنید.{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
