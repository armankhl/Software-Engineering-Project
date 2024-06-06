import React from "react";

const AboutUs = () => {
  return (
    <div
      dir="rtl"
      className="bg-[#EEEEEE] text-white h-screen w-screen px-10 pt-10"
    >
      <h1 className="text-3xl font-bold text-center text-black pt-1">
        درباره ما
      </h1>
      <div className="pl-4 pr-4">
        {/* <h2 className="text-2xl bg-gray-800 text-white">
          به وبسایت سما (انتخاب استادیار) خوش آمدید!
        </h2> */}
        <p className="text-lg text-gray-800 text-justify">
          سامانه سما توسط تیمی متشکل از دانشجویان خوش‌ذوق دانشکده مهندسی
          کامپیوتر دانشگاه اصفهان در سال 1402 طراحی و پیاده‌سازی شد.
        </p>
        <p className="text-lg text-gray-800 text-justify">
          از آنجایی که هیچ سیستم واحدی برای گزینش و مدیریت استادیاران در سطح
          دانشگاهی وجود نداشت، تیم ما این خلا را شناسایی کرده و پس از تحقیقات و
          مصاحبه با اساتید و کارشناسان به منظور بالا بردن کیفیت آموزشی و همچنین
          فراهم‌سازی سیستمی نظارت‌شده و نظام‌مند، اقدام به پیاده‌سازی این پروژه
          کرد.
        </p>
        {/* <p className="text-lg text-gray-800 text-justify">
          دانشجویان نیز با ساخت پروفایل خود و وارد کردن اطلاعات موردنیاز (مانند:
          ترم-نمرات-معدل…) خود را به اساتید معرفی کنند و درخواست همکاری به آنها
          بدهند همچنین درخواست های آنها را بررسی و قبول یا رد کنند.
        </p>
        <p className="text-lg text-gray-800 text-justify">
          در وبسایت ما، امکانات ویژه‌ای نیز برای اساتید فراهم شده است. آن‌ها
          می‌توانند جستجوی جامعی را بر اساس تخصص‌ها، تجربه‌ها و محل استادیاری
          مشاهده کنند و با استفاده از ابزارهای هوشمند، به راحتی استادیارانی را
          که به نیازهایشان می‌پاسخند، انتخاب کنند.
        </p>
        <p className="text-lg text-gray-800 text-justify">
          ما در تلاشیم تا با ایجاد این پلتفرم آنلاین، فرایند انتخاب استادیار را
          برای اساتید دانشگاه ساده‌تر و موثرتر کنیم. با انتخاب استادیار مناسب،
          اساتید می‌توانند در مسیر تحقق اهداف تحصیلی و پژوهشی خود راهگشا باشند و
          به جامعه دانشگاهی کمک کنند.
        </p>
        <p className="text-lg text-gray-800 text-justify">
          اگر شما هم یک استاد دانشگاه هستید و به دنبال یک استادیار مناسب هستید،
          یا اگر یک دانشجو هستید و به دنبال همکاری با یک استادیار خبره هستید، به
          ما بپیوندید و از امکانات ما بهره‌برداری کنید.
        </p> */}
        <br />
        {/* <h2 className="text-2xl bg-gray-800 text-white">با تشکر</h2> */}

        <div class="relative flex py-5 items-center">
          <div class="flex-grow border-t border-gray-400"></div>
          <span class="flex-shrink mx-4 text-black">تیم توسعه‌دهندگان</span>
          <div class="flex-grow border-t border-gray-400"></div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4">
        <div className="flex flex-col items-center">
          <img
            className="w-40 h-40 rounded-full object-cover justify-center"
            src="\matin.jpg"
            alt="Image 1"
          />
          <div className="mt-2 px-2 py-0 text-center font-bold text-black font-bold">
            متین عصب‌الظهور
          </div>
          <div className="mt-2 px-2 py-1 text-center text-gray-800">
            پیاده‌سازی قالب
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-40 h-40 rounded-full object-cover justify-center"
            src="\arman.jpg"
            alt="Image 2"
          />
          <div className="mt-2 px-2 py-0 text-center text-black font-bold">
            آرمان خلیلی
          </div>
          <div className="mt-2 px-2 py-1 text-center text-gray-800">
            طراح UI/UX
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-40 h-40 rounded-full object-cover justify-center"
            src="\yazdan.jpg"
            alt="Image 3"
          />
          <div className="mt-2 px-2 py-0 text-center text-black font-bold">
            یزدان افرا
          </div>
          <div className="mt-2 px-2 py-1 text-center text-gray-800">
            سرپرست فرانت‌اند
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-40 h-40 rounded-full object-cover justify-center"
            src="\kiani.jpg"
            alt="Image 4"
          />
          <div className="mt-2 px-2 py-0 text-center text-black font-bold">
            محمدامین کیانی
          </div>
          <div className="mt-2 px-2 py-1 text-center text-gray-800">
            سرپرست گروه
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-40 h-40 rounded-full object-cover justify-center"
            src="\hosseinif.jpg"
            alt="Image 5"
          />
          <div className="mt-2 px-2 py-0 text-center text-black font-bold">
            علی حسینی فرد
          </div>
          <div className="mt-2 px-2 py-1 text-center text-gray-800">
            سرپرست بک‌اند
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-40 h-40 rounded-full object-cover justify-center"
            src="\ketabchi.jpg"
            alt="Image 6"
          />
          <div className="mt-2 px-2 py-0 text-center text-black font-bold">
            محمدمهدی کتابچی
          </div>
          <div className="mt-2 px-2 py-1 text-center text-gray-800">
            پیاده‌سازی منطق سیستم
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-40 h-40 rounded-full object-cover justify-center"
            src="\mmd.jpg"
            alt="Image 7"
          />
          <div className="mt-2 px-2 py-0 text-center text-black font-bold">
            محمد جعفری
          </div>
          <div className="mt-2 px-2 py-1 text-center text-gray-800">
            پیاده‌سازی منطق سیستم
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
