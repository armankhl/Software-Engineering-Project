import StudentGuard from "@/components/guards/studentGuard";
import Layout from "@/components/layout_TAs";
import {
  createCourseRequestAPI,
  getStudentCourseAPI,
} from "@/utils/api/course";
import { falsyString } from "@/utils/falsyString";
import { getUser } from "@/utils/user";
import { Button, Modal } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
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

  const [formValue, setFormValue] = useState({
    enter_year: "",
    field_of_study: "",
    gpa: 16,
  });

  const createRequest = () => {
    const user = getUser();
    createRequestMutation.mutate({
      professorId: selectedCourse.professor,
      enter_year: formValue.enter_year,
      field_of_study: formValue.field_of_study,
      point: 4,
      gpa: formValue.gpa,
      status: "uncertain",
      course: selectedCourse.id,
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
              <div className="flex justify-center items-center w-full">
                <div className="w-3/4 bg-white rounded-lg shadow-md p-8 overflow-y-auto">
                  <div className="flex flex-col justify-center items-start mb-4">
                    <h1 className="text-xl font-bold text-right justify-end text-black">
                      لیست درس ها
                    </h1>
                    <div className="w-full h-px bg-gray-400"></div>
                  </div>
                  {data.map((course) => (
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
                            setSelectedCourse(course);
                            setIsModalOpen(true);
                          }}
                        >
                          ارسال درخواست
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <Modal
          open={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            direction: "rtl",
          }}
        >
          <form className="flex flex-col w-[700px] min-h-96 justify-center bg-white p-10 gap-7">
            <div className={"flex flex-row gap-2 w-full"}>
              <label className={"text-black min-w-24"}>رشته تحصیلی:</label>
              <input
                name="filed"
                onChange={(event) => {
                  setFormValue({
                    ...formValue,
                    field_of_study: event.target.value,
                  });
                }}
                id="filed"
                className={"bg-gray-200 p-1 rounded-lg w-full text-black"}
              ></input>
            </div>

            <div className={"flex flex-row gap-2 w-full"}>
              <label className={"text-black min-w-24"}>معدل:</label>
              <input
                name="gpa"
                onChange={(event) => {
                  setFormValue({ ...formValue, gpa: event.target.value });
                }}
                id="gpa"
                className={"bg-gray-200 p-1 rounded-lg w-full text-black"}
              ></input>
            </div>

            <div className={"flex flex-row gap-2 w-full"}>
              <label className={"text-black min-w-24"}>سال ورودی:</label>
              <input
                name="year"
                onChange={(event) => {
                  setFormValue({
                    ...formValue,
                    enter_year: event.target.value,
                  });
                }}
                id="year"
                className={"bg-gray-200 p-1 rounded-lg w-full text-black"}
              ></input>
            </div>

            <Button
              variant="contained"
              color="success"
              onClick={() => {
                createRequest();
              }}
            >
              {createRequestMutation.isLoading ? "درحال ثبت..." : "ثبت"}
            </Button>
          </form>
        </Modal>
      </Layout>
    </StudentGuard>
  );
};
export default StuHome;
