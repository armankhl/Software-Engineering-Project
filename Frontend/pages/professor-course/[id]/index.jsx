import ProfessorGuard from "@/components/guards/professorGuard";
import Layout from "@/components/layout";
import { deleteCourseAPI, getCourseAPI } from "@/utils/api/course";
import { falsyString } from "@/utils/falsyString";
import { Button } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const CourseDetailsPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data, isLoading } = useQuery({
    queryKey: ["cousreList"],
    queryFn: () => getCourseAPI(),
    stastaleTime: 100000,
  });

  const deleteCourseMutation = useMutation({
    mutationFn: deleteCourseAPI,
    onError(err) {
      toast.error("مشکلی بوجود آمده است");
    },
    onSuccess(data) {
      toast.success("درس با موفقیت حذف شد.");
      router.push("/professor-home");
    },
  });

  const course = data?.filter((course) => {
    return course.id === +id;
  })[0];

  return (
    <ProfessorGuard>
      <Layout>
        <div
          className={
            " w-screen h-screen bg-white overflow-x-hidden flex flex-col px-10 gap-5 "
          }
          dir={"rtl"}
        >
          <h1 className={"text-3xl px-10 gap-1 my-5 font-bold text-black "}>
            نمایش درس
          </h1>
          <div className={"flex flex-col  justify-center items-center mb-3"}>
            <p
              className={
                "w-4/6 h-10 bg-[#2a313c] text-white text-center text-bold justify-center mt-5"
              }
            >
              جزئیات
            </p>
            <form className={"flex flex-col w-4/6 gap-8 bg-gray-200 p-5"}>
              <div className={"text-[#222831] grid grid-cols-2 gap-4"}>
                <div className={"flex flex-row gap-2"}>
                  <label className={"text-[#000000] text-lg"}>نام درس:</label>
                  <p className={"text-[#4193b1] text-xl"}>
                    {falsyString(course?.name)}
                  </p>
                </div>
                <div className={"flex flex-row gap-2"}>
                  <label className={"text-[#000000] text-lg"}>
                    ترم تحصیلی:
                  </label>
                  <p className={"text-[#4193b1] text-xl"}>
                    {falsyString(course?.term)}
                  </p>
                </div>
                <div className={"flex flex-row gap-2"}>
                  <label className={"text-[#000000] text-lg"}>
                    تعداد استادیار مورد نیاز:
                  </label>
                  <p className={"text-[#4193b1] text-xl"}>
                    {falsyString(course?.required_TAs)}
                  </p>
                </div>
                <div className={"flex flex-row gap-2"}>
                  <label className={"text-[#000000] text-lg"}>
                    حداقل معدل:
                  </label>
                  <p className={"text-[#4193b1] text-xl"}>
                    {falsyString(course?.minPoint)}
                  </p>
                </div>
              </div>
              <div
                className={"text-[#222831] flex flex-row gap-2 justify-start"}
              >
                <label className={"text-[#000000] text-lg"}>
                  {" "}
                  آیا دانشجو باید این درس را گذرانده باشد؟
                </label>
                <p className={"text-[#4193b1] text-xl"}>
                  {course?.passCourse === 1 ? "بله" : "خیر"}
                </p>
              </div>
              <div className={"flex flex-row gap-2"}>
                <label className={"text-black text-lg"}> توضیحات:</label>
                <p className={"text-[#4193b1] text-xl"}>
                  {falsyString(course?.description)}
                </p>
              </div>
              <div className={"flex gap-2 justify-end"}>
                <Button
                  color="error"
                  variant="contained"
                  onClick={() => deleteCourseMutation.mutate({ id: +id })}
                >
                  {deleteCourseMutation.isPending ? "درحال حذف..." : "حذف درس"}
                </Button>
                <Button
                  color="info"
                  variant="contained"
                  onClick={() =>
                    router.push(
                      `/professor-select-student?courseID=${id}&courseName=${course?.name}`
                    )
                  }
                >
                  درخواست ها
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </ProfessorGuard>
  );
};
export default CourseDetailsPage;
