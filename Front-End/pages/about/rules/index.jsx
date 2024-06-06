import React from "react";

const TermsAndConditions = () => {
  return (
    <div
      dir="rtl"
      className="bg-[#EEEEEE] text-gray-800 w-screen h-screen px-10 pt-10 overflow-hidden"
    >
      <h1 className="text-3xl font-bold text-center text-gray-800">
        شرایط و قوانین سایت
      </h1>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-center text-gray-500">
          قوانین عمومی
        </h2>

        <ul className="list-disc list-inside text-center">
          <li className="text-base">
            با استفاده از این سایت، شما موافقت می‌کنید که قوانین و مقررات مربوطه
            را رعایت کنید و هرگونه استفاده نامناسب از سایت ممنوع است.
          </li>
          <li className="text-base">
            هرگونه اقدامات غیرقانونی، تهدید، توهین، سوءاستفاده یا تخریب از سایت
            مورد پیگیری قانونی قرار می‌گیرد.
          </li>
        </ul>
      </section>

      <br />

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-center text-gray-500">
          حقوق و مالکیت
        </h2>

        <ul className="list-disc list-inside text-center">
          <li className="text-base">
            تمامی حقوق مالکیت معنوی مربوط به سایت، اطلاعات، محتوا و برنامه‌های
            کامپیوتری متعلق به ما می‌باشد و هیچ مجوزی برای استفاده از آنها بدون
            اجازه ما صادر نخواهد شد.
          </li>
          <li className="text-base">
            اساتید و دانشجویان می‌بایست اطلاعات و محتواهای مربوط به خود را به
            صورت صادقانه و دقیق در سایت وارد کنند.
          </li>
        </ul>
      </section>

      <br />

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-center text-gray-500">
          حفظ حریم خصوصی
        </h2>

        <ul className="list-disc list-inside text-center">
          <li className="text-base">
            ما به حفظ حریم خصوصی کاربران اهمیت می‌دهیم و تمامی اطلاعات شخصی که
            توسط کاربران در سایت وارد می‌شود، محرمانه می‌ماند و به هیچ شخص یا
            سازمان ثالثی منتقل نخواهد شد.
          </li>
          <li className="text-base">
            با استفاده از سایت، شما به جمع‌آوری، استفاده و ذخیره اطلاعات شخصی
            خود توسط ما رضایت می‌دهید.
          </li>
        </ul>
      </section>

      <br />

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-center text-gray-500">
          مسئولیت محتوا
        </h2>

        <ul className="list-disc list-inside text-center">
          <li className="text-base">
            ما هیچ مسئولیتی در قبال محتوای ارسالی توسط اساتید و دانشجویان نداریم
            و تمامی مسئولیت محتوای ارسالی بر عهده ارسال کننده آن است.
          </li>
          <li className="text-base">
            ما هیچ گونه تضمینی در خصوص صحت، کارایی و قابلیت اطمینان محتوای سایت
            و ارتباطات بین اساتید و دانشجویان نمی‌دهیم.
          </li>
        </ul>
      </section>

      <br />

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-center text-gray-500">
          تغییرات در شرایط و قوانین
        </h2>

        <p className="text-base text-center">
          ما حق داریم شرایط و قوانین استفاده از سایت را در هر زمان و بدون اطلاع
          قبلی تغییر دهیم. تغییرات جدید بلافاصله پس از اعمال در قسمت "شرایط و
          قوانین" سایت اعمال خواهند شد و استفاده بعدی شما از سایت به معنای پذیرش
          این تغییرات است.
        </p>
      </section>

      <br />

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-center text-gray-500">در آخر</h2>
        <p className="text-base text-center">
          اگر سوالات، نگرانی‌ها یا ابهام‌هایی درباره شرایط و قوانین مربوط به
          سایت دارید، لطفاً با ما تماس بگیرید تا بتوانیم به شما کمک کنیم.
          <br />
          توصیه می‌کنیم که به دقت شرایط و قوانین استفاده از سایت را مطالعه کرده
          و پس از موافقت با آنها، استفاده از سایت را آغاز کنید. پیروی از این
          شرایط و قوانین به منظور حفظ حقوق و حفاظت از همه کاربران سایت ضروری
          است.
          <br />
          در صورت داشتن سوالات بیشتر، لطفاً با ما تماس بگیرید.
        </p>
        <br />
      </section>
      <h3 className="text-2xl font-bold text-center text-gray-500">با تشکر</h3>
    </div>
  );
};

export default TermsAndConditions;
