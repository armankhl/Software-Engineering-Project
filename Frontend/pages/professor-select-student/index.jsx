import Accepted_TAs from "@/components/accepted_TAs";
import ProfessorGuard from "@/components/guards/professorGuard";
import Layout from "@/components/layout";
import Requests from "@/components/requests";
import { getCourseRequestProfessorAPI } from "@/utils/api/course";
import { getUser } from "@/utils/user";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const ProfChoose = () => {
  const router = useRouter();
  const courseId = router.query.courseID;
  const user = getUser();
  const professorId = user?.professorid;

  const { data, isLoading } = useQuery({
    queryKey: ["course-request", professorId],
    queryFn: () => getCourseRequestProfessorAPI(professorId),
    enabled: !!professorId,
  });

  const isListLoading = router.isReady && isLoading;

  return (
    <ProfessorGuard>
      <Layout>
        {isListLoading ? (
          <div>...</div>
        ) : (
          <div
            className={"w-screen h-screen bg-white overflow-x-hidden "}
            dir="rtl"
          >
            <div>
              <div className={"flex flex-col px-10 gap-5 my-10"}>
                <p className={"text-black font-bold text-4xl"}>
                  استادیار های تایید شده
                </p>
                <div className={"w-full h-10 flex flex-row gap-4"}>
                  <p className={"text-black text-lg basis-2/12"}>
                    درس ساختمان داده
                  </p>
                </div>
                <div className={""}>
                  <Accepted_TAs />
                </div>
              </div>
            </div>
            <div>
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
                  {/* <div
                  className={
                    "text-[#31363F] border rounded-lg basis-2/12 px-3 justify-center items-center"
                  }
                >
                  
                  مرتب سازی
                </div> */}
                </div>
                <div className={""}>
                  <Requests />
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </ProfessorGuard>
  );
};
export default ProfChoose;
