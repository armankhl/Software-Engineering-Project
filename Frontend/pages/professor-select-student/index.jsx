import ProfessorGuard from "@/components/guards/professorGuard";
import Layout from "@/components/layout";
import Requests from "@/components/requests";
import { useState } from "react";

const ProfChoose = () => {
  const [searchQuery, setSearchQuery] = useState({});
  return (
    <ProfessorGuard>
      <Layout>
        <div className={"w-screen h-screen bg-white overflow-x-hidden "}>
          <div className={"flex flex-col px-10 gap-5 my-10"}>
            <p className={"text-black font-bold text-4xl"}>درخواست ها</p>
            <div className={"w-full h-10 flex flex-row gap-4"}>
              <p className={"text-black text-lg basis-2/12"}>
                درس ساختمان داده
              </p>
              <div id={"search"} className={"basis-8/12"}>
                <input
                  type="search"
                  id="search-form"
                  className={
                    "w-full h-full bg-gray-300 border-2 rounded-xl px-3 focus:outline-none focus:border-slate-400"
                  }
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="جست و جو"
                />
              </div>
              <div
                className={
                  "text-[#31363F] border rounded-lg basis-2/12 px-3 justify-center items-center"
                }
              >
                {/*نمیدونم چی به چیه*/}
                مرتب سازی
              </div>
            </div>
            <div className={""}>
              <Requests />
            </div>
          </div>
        </div>
      </Layout>
    </ProfessorGuard>
  );
};
export default ProfChoose;
