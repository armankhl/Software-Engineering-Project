import Layout from "@/components/layout";

const NewCours = () => {
  return (
    <Layout>
      <div
        className={
          " w-screen h-screen bg-white overflow-x-hidden flex flex-col px-10 gap-5 "
        }
        dir={"rtl"}
      >
        <h1 className={"text-2xl font-bold text-black "}>تعریف درس جدید</h1>
        <div className={"flex flex-col  justify-center items-center mb-3"}>
          <p
            className={
              "w-4/6 h-10 bg-[#222831] text-white text-center text-bold justify-center"
            }
          >
            مشخصات درس
          </p>
          <form className={"flex flex-col w-4/6 gap-8 bg-gray-500  p-5"}>
            <div className={"grid grid-cols-2 gap-4"}>
              <div className={"flex flex-row gap-2"}>
                <label className={""}>نام درس:</label>
                <select
                  name="courseName"
                  id="courseName"
                  className={"bg-gray-200 p-1 rounded-lg"}
                >
                  {/*<optgroup label="Swedish Cars">*/}
                  <option className={""}>برنامه نویسی پیشرفته</option>
                  <option>مبانی و کاربردهای هوش مصنوعی</option>
                  {/*</optgroup>*/}
                </select>
              </div>
              <div className={"flex flex-row gap-2"}>
                <label className={""}>ترم تحصیلی:</label>
                <select
                  name="courseName"
                  id="courseName"
                  className={"bg-gray-200 p-1 rounded-lg"}
                >
                  {/*<optgroup label="Swedish Cars">*/}
                  <option className={""}>برنامه نویسی پیشرفته</option>
                  <option>مبانی و کاربردهای هوش مصنوعی</option>
                  {/*</optgroup>*/}
                </select>
              </div>
              <div className={"flex flex-row gap-2"}>
                <label className={""}>تعداد استادیار مورد نیاز:</label>
                <select
                  name="courseName"
                  id="courseName"
                  className={"bg-gray-200 p-1 rounded-lg"}
                >
                  {/*<optgroup label="Swedish Cars">*/}
                  <option className={""}>برنامه نویسی پیشرفته</option>
                  <option>مبانی و کاربردهای هوش مصنوعی</option>
                  {/*</optgroup>*/}
                </select>
              </div>
              <div className={"flex flex-row gap-2"}>
                <label className={""}>حداقل معدل:</label>
                <select
                  name="courseName"
                  id="courseName"
                  className={"bg-gray-200 p-1 rounded-lg"}
                >
                  {/*<optgroup label="Swedish Cars">*/}
                  <option className={""}>برنامه نویسی پیشرفته</option>
                  <option>مبانی و کاربردهای هوش مصنوعی</option>
                  {/*</optgroup>*/}
                </select>
              </div>
            </div>
            <div className={"flex flex-row gap-2 justify-start"}>
              <label className={""}>
                {" "}
                ایا دانشجو باید این درس را گذرانده باشد؟:
              </label>
              <select
                name="courseName"
                id="courseName"
                className={"bg-gray-200 p-1 rounded-lg"}
              >
                {/*<optgroup label="Swedish Cars">*/}
                <option className={""}>برنامه نویسی پیشرفته</option>
                <option>مبانی و کاربردهای هوش مصنوعی</option>
                {/*</optgroup>*/}
              </select>
            </div>
            <div className={"flex flex-row gap-2"}>
              <label className={"text-black text-lg"}> توضیحات:</label>
              <textarea
                id="text"
                className="block max-h-36 min-h-16 h-36 w-5/6 p-4 text-black rounded-3xl  bg-gray-200 text-lg placeholder:text-[#8B8C8D]
                             focus:outline-none  focus:ring-0 shadow-inner text-start"
                placeholder="پیام خود را برای ما بنویسید...."
                //           onChange={(event) => {
                //     setFormValue({...formValue, text: event.target.value})
                // }}
              />
            </div>

            <div className={" w-full flex justify-center items-start gap-3"}>
              <button
                type="submit"
                className={"bg-[#76ABAE] w-1/3 py-2 rounded-lg"}
              >
                ذخیره
              </button>
              <button
                type="submit"
                className={"bg-[#76ABAE] w-1/3 py-2 rounded-lg"}
              >
                انصراف
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default NewCours;
