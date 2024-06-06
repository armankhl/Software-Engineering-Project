import StudentGuard from "@/components/guards/studentGuard";
import Layout from "@/components/layout_TAs";
import { getCourseRequestStudentAPI } from "@/utils/api/course";
import { falsyString } from "@/utils/falsyString";
import getStatusName from "@/utils/status";
import { getUser } from "@/utils/user";
import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";

const StuHome = () => {
  const user = getUser();
  const router = useRouter();
  const studentID = user?.studentid;

  const { data, isLoading } = useQuery({
    queryKey: ["course-request-student", studentID],
    queryFn: () => getCourseRequestStudentAPI(studentID),
    enabled: !!studentID,
  });

  const [search, setSearch] = useState("");

  const filteredCourses = useMemo(() => {
    if (!search) return data?.filter((course) => course.status === "accept");

    return (
      data?.filter((course) => {
        return (
          course.status === "accept" &&
          (course.courseName?.includes(search) ||
            course.professorLastName?.includes(search) ||
            course.professorFirstName?.includes(search))
        );
      }) ?? []
    );
  }, [data, search]);

  const isListLoading = !router.isReady && isLoading;

  const statusColors = {
    accept: "green",
    decline: "red",
  };

  const handleUserCertificateClick = (course) => {
    router.push(
      `/student-certificate?profName=${course.professorFirstName}&profLastname=${course.professorLastName}&term=${course.courseTerm}&course=${course.courseName}`
    );
  };

  return (
    <StudentGuard>
      <Layout>
        <div
          className={" w-screen h-screen bg-white overflow-x-hidden"}
          dir={"rtl"}
        >
          <div className={"flex flex-col px-10 gap-5 my-10"}>
            <p className={"text-3xl text-gray-900 "}> درس های من</p>
            {isListLoading ? (
              <div></div>
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
                  {filteredCourses?.map((course) => (
                    <div
                      key={`course-${course.id}`}
                      className="flex flex-row bg-gray-200 rounded-md p-4 mb-4 gap-8"
                    >
                      <div className="flex flex-col w-3/4">
                        <h3 className="text-lg font-bold text-right text-black">
                          نام درس:{falsyString(course.courseName)}
                        </h3>
                        <div className="flex flex-row gap-32 mt-2">
                          <div className="flex justify-between text-black">
                            <span className="pl-3">استاد:</span>
                            <span>
                              {`${falsyString(
                                course.professorFirstName
                              )} ${falsyString(course.professorLastName)}`}
                            </span>{" "}
                            {/* Replace with instructor name */}
                          </div>
                          <div className="flex justify-between text-black">
                            <span className="pl-3">ترم:</span>
                            <span>{falsyString(course.courseTerm)}</span>{" "}
                            {/* Replace with semester */}
                          </div>
                          <div className="flex justify-between text-black">
                            <span className="pl-3">حداقل معدل:</span>
                            <span>
                              {falsyString(course.courseMinpoint)}
                            </span>{" "}
                            {/* Replace with your title */}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center w-2/5 text-black justify-between">
                        <p
                          className={"mx-2 "}
                          style={{
                            color: statusColors[course.status] ?? "orange",
                          }}
                        >
                          <span className="text-black">وضعیت درخواست:</span>{" "}
                          {getStatusName(course.status)}
                        </p>
                        <div>
                          <Button
                            variant="contained"
                            onClick={() => handleUserCertificateClick(course)}
                          >
                            مشاهده گواهی
                          </Button>
                        </div>
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
