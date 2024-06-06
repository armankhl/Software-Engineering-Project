import Courses from "@/components/courses";
import ProfessorGuard from "@/components/guards/professorGuard";
import StudentGuard from "@/components/guards/studentGuard";
import Layout from "@/components/layout";
import { getCourseAPI } from "@/utils/api/course";
import { useQuery } from "@tanstack/react-query";

const ProfHome = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["cousreList"],
    queryFn: () => getCourseAPI(),
  });
  return (
    <ProfessorGuard>
      <Layout>
        <div
          className={" w-screen h-screen bg-white overflow-x-hidden"}
          dir={"rtl"}
        >
          <div className={"flex flex-col px-10 gap-5 my-10"}>
            <p className={"text-3xl text-gray-900 "}> درس های تعریف شده</p>
            {isLoading ? "..." : <Courses courses={data ? data : []} />}
          </div>
        </div>
      </Layout>
    </ProfessorGuard>
  );
};
export default ProfHome;
