import StudentGuard from "@/components/guards/studentGuard";
import Layout from "@/components/layout_TAs";
import {
  createCourseRequestAPI,
  getStudentCourseAPI,
} from "@/utils/api/course";
import { falsyString } from "@/utils/falsyString";
import { getUser } from "@/utils/user";
import { Button } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";

const StuHome = () => {
  const router = useRouter();

  const [selectedCourse, setSelectedCourse] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["studentCourseList"],
    queryFn: () => getStudentCourseAPI(),
  });

  const createRequestMutation = useMutation({
    mutationFn: createCourseRequestAPI,
    onSuccess() {
      setIsModalOpen(false);
      toast.success("درخواست شما با موفقیت ارسال شد");
      router.push("/student-requests");
    },
    onError() {
      toast.error("مشکلی بوجود آمده است");
    },
  });

  const [search, setSearch] = useState("");

  const filteredCourses = useMemo(() => {
    return (
      data?.filter((course) => {
        return (
          course.name.includes(search) || course.professorName.includes(search)
        );
      }) ?? []
    );
  }, [data, search]);

  const createRequest = (professorId, courseId) => {
    const user = getUser();
    if (!user.major || !user.gpa || !user.enter_year) {
      toast.error("برای ثبت درخواست باید پروفایل خود را تکمیل کنید");
      return;
    }
    createRequestMutation.mutate({
      professorId: professorId,
      enter_year: user.enter_year,
      field_of_study: user.major,
      point: user.average,
      gpa: user.gpa,
      status: "uncertain",
      course: courseId,
      student: user.studentid,
    });
  };

  return (
    <StudentGuard>
      <Layout>
        <div
          className={" w-screen h-screen bg-white overflow-x-hidden"}
          dir={"rtl"}
        >
          <div className={"flex flex-col px-10 gap-5 my-10"}>
            <p className={"text-3xl text-gray-900 "}> درس های انتخابی</p>
            {isLoading ? (
              "..."
            ) : (
              <div className="flex flex-col justify-center items-center w-full gap-5">
                <div id={"search"} className={"w-1/2"}>
                  <input
                    type="search"
                    id="search-form"
                    className={
                      "w-full h-full text-black bg-gray-300 border-2 rounded-xl px-3 focus:outline-none focus:border-slate-400"
                    }
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="جست و جو اسم درس و استاد"
                  />
                </div>
                <div className="w-3/4 bg-white rounded-lg shadow-md p-8 overflow-y-auto">
                  <div className="flex flex-col justify-center items-start mb-4">
                    <h1 className="text-xl font-bold text-right justify-end text-black">
                      لیست درس ها
                    </h1>
                    <div className="w-full h-px bg-gray-400"></div>
                  </div>
                  {filteredCourses.map((course) => (
                    <div
                      key={`course-${course.id}`}
                      className="flex flex-row bg-gray-200 rounded-md p-4 mb-4 gap-8"
                    >
                      <div className="flex flex-col w-3/4">
                        <h3 className="text-lg font-bold text-right text-black">
                          نام درس: {falsyString(course.name)}
                        </h3>
                        <div className="flex flex-row gap-32 mt-2">
                          <div className="flex justify-between text-black">
                            <span className="pl-3">استاد:</span>
                            <span>
                              {falsyString(course.professorName)}
                            </span>{" "}
                            {/* Replace with instructor name */}
                          </div>
                          <div className="flex justify-between text-black">
                            <span className="pl-3">ترم:</span>
                            <span>{falsyString(course.term)}</span>{" "}
                            {/* Replace with semester */}
                          </div>
                          <div className="flex justify-between text-black">
                            <span className="pl-3">حداقل معدل:</span>
                            <span>{falsyString(course.minPoint)}</span>{" "}
                            {/* Replace with your title */}
                          </div>
                        </div>
                        <div className="flex justify-start text-black mt-2">
                          <span className="pl-3">توضیحات:</span>
                          <span>{falsyString(course.description)}</span>{" "}
                          {/* Replace with description */}
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-1/4">
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() => {
                            createRequest(course.professor, course.id);
                          }}
                        >
                          {createRequestMutation.isPending
                            ? "درحال ثبت..."
                            : "ارسال درخواست"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </StudentGuard>
  );
};
export default StuHome;
