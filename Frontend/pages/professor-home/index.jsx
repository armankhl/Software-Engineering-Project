import Courses from "@/components/courses";
import ProfessorGuard from "@/components/guards/professorGuard";
import StudentGuard from "@/components/guards/studentGuard";
import Layout from "@/components/layout";

const ProfHome = () => {
  return (
    <ProfessorGuard>
      <Layout>
        <div
          className={" w-screen h-screen bg-white overflow-x-hidden"}
          dir={"rtl"}
        >
          <div className={"flex flex-col px-10 gap-5 my-10"}>
            <p className={"text-3xl text-gray-900 "}> درس های درحال انتخاب</p>
            <Courses />
          </div>
        </div>
      </Layout>
    </ProfessorGuard>
  );
};
export default ProfHome;
