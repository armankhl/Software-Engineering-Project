import Courses from "@/components/courses";
import Layout from "@/components/layout";

const ProfHome = () => {
  return (
    <Layout>
      <div
        className={" w-screen h-screen bg-white overflow-x-hidden"}
        dir={"rtl"}
      >
        <div className={"flex flex-col px-10 gap-5 my-10"}>
          <p className={"text-lg text-gray-900 "}> درس های درحال انتخاب</p>
          <Courses />
        </div>
      </div>
    </Layout>
  );
};
export default ProfHome;
