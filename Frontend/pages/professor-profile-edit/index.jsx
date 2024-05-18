import Header from "@/components/header";
import Layout from "@/components/layout";
import ProfessorGuard from "@/components/guards/professorGuard";

const ProfessorProfileEdit = () => {
  return (
    <ProfessorGuard>
      <Layout>
        <div
          className={
            " w-screen h-screen bg-white overflow-x-hidden flex flex-row"
          }
          dir={"rtl"}
        >
          <div className={"flex justify-center items-center w-2/6 h-full"}>
            <div
              className={
                "border border-slate-600 w-3/6 h-2/3 rounded-lg flex flex-col items-center gap-2"
              }
            >
              <img
                src={"./icons8-test-account-100.png"}
                className={"h-32 w-32"}
              />
              <h1 className={"text-black text-xl font-bold"}>مهران رضایی</h1>
              <p className={"text-black text-sm "}>8414544</p>
              <button
                className={
                  "bg-[#76ABAE] text-black py-2 px-5 border rounded-xl my-3"
                }
              >
                ویرایش عکس
              </button>
              <button
                className={
                  "bg-[#76ABAE] text-black py-2 px-5 border rounded-xl "
                }
              >
                تغییر رمز ورود
              </button>
            </div>
          </div>
          <form
            className={
              "flex flex-col w-4/6 h-full items-center justify-center px-20"
            }
          >
            <div className={"text-[#222831] w-full grid grid-cols-2 gap-4"}>
              <div className={"flex flex-col"}>
                <label className={"pr-3 pb-2"}>نام کاربری</label>
                <input
                  type="text "
                  value={"مهران رضایی"}
                  className=" text-black-900 rounded-3xl p-3
                                bg-[#EEEEEE] text-lg placeholder:text-[#8B8C8D] focus:outline-none focus:ring-0 shadow-inner"
                />
              </div>
              <div className={"flex flex-col"}>
                <label className={"pr-3 pb-2"}>ایمیل</label>
                <input
                  type="text "
                  value={"m.rezaei@eng.ui.ac.ir"}
                  className=" text-black-900 rounded-3xl p-3
                                bg-[#EEEEEE] text-lg placeholder:text-[#8B8C8D] focus:outline-none focus:ring-0 shadow-inner"
                />
              </div>
              <div className={"flex flex-col"}>
                <label className={"pr-3 pb-2"}>دانشگاه</label>
                <input
                  type="text "
                  value={"دانشگاه اصفهان"}
                  className=" text-black-900 rounded-3xl p-3
                                bg-[#EEEEEE] text-lg placeholder:text-[#8B8C8D] focus:outline-none focus:ring-0 shadow-inner"
                />
              </div>
              <div className={"flex flex-col"}>
                <label className={"pr-3 pb-2"}>دانشکده</label>
                <input
                  type="text "
                  value={"کامپیوتر"}
                  className=" text-black-900 rounded-3xl p-3
                                bg-[#EEEEEE] text-lg placeholder:text-[#8B8C8D] focus:outline-none focus:ring-0 shadow-inner"
                />
              </div>
            </div>
            <div
              id={"about me"}
              className={"text-[#222831] flex flex-col w-full mt-10"}
            >
              <label className={"pr-3 pb-2"}>درباره من :</label>
              <input
                type="text "
                value={"به نام معمار هستی..."}
                className=" text-black-900 rounded-3xl p-3 w-full h-32 text-start
                                bg-[#EEEEEE] text-lg placeholder:text-black focus:outline-none focus:ring-0 shadow-inner"
              />
            </div>
            <button
              className={
                "py-2 px-20 bg-[#76ABAE] mt-4 rounded-lg shadow shadow-xl shadow-gray-400"
              }
            >
              ذخیره
            </button>
          </form>
        </div>
      </Layout>
    </ProfessorGuard>
  );
};
export default ProfessorProfileEdit;
