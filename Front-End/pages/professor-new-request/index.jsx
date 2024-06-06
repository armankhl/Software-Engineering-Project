import ProfessorGuard from "@/components/guards/professorGuard";
import Layout from "@/components/layout";
import { creatCourseAPI } from "@/utils/api/course";
import { getUser } from "@/utils/user";
import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

const NewCours = () => {
  const router = useRouter();

  const creatCourseMutation = useMutation({
    mutationFn: creatCourseAPI,
    onError(err) {
      //console.log(err);
      toast.error("مشکلی بوجود آمده است");
    },
    onSuccess(data) {
      toast.success("درس با موفقیت ایجاد شد.");
      router.push("/professor-home");
    },
  });

  const [formValue, setFormValue] = useState({
    name: "",
    term: 4022,
    required_TAs: 1,
    minPoint: 12,
    passCourse: 1,
    description: "",
  });

  const handleSubmitClick = (e) => {
    e.preventDefault(); // ba in safeh reload nashe!
    const user = getUser();
    creatCourseMutation.mutate({ ...formValue, professor: user.professorid });
  };

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
            تعریف درس جدید
          </h1>
          <div className={"flex flex-col  justify-center items-center mb-3"}>
            <p
              className={
                "w-4/6 h-10 bg-[#222831] text-white text-center text-bold justify-center"
              }
            >
              مشخصات درس
            </p>
            <form
              onSubmit={handleSubmitClick}
              className={"flex flex-col w-4/6 gap-8 bg-gray-400  p-5"}
            >
              <div className={"text-[#222831] grid grid-cols-2 gap-4"}>
                <div className={"flex flex-row gap-2"}>
                  <label className={"text-[#EEEEEE]"}>نام درس:</label>
                  <input
                    name="courseName"
                    onChange={(event) => {
                      setFormValue({ ...formValue, name: event.target.value });
                    }}
                    id="courseName"
                    className={"bg-gray-200 p-1 rounded-lg"}
                  ></input>
                </div>
                <div className={"flex flex-row gap-2"}>
                  <label className={"text-[#EEEEEE]"}>ترم تحصیلی:</label>
                  <select
                    name="term"
                    onChange={(event) => {
                      setFormValue({ ...formValue, term: event.target.value });
                    }}
                    id="term"
                    className={"bg-gray-200 p-1 rounded-lg"}
                  >
                    {/*<optgroup label="Swedish Cars">*/}
                    <option value={4022}>402-403</option>
                    <option value={4031}>403-404</option>
                    {/*</optgroup>*/}
                  </select>
                </div>
                <div className={"flex flex-row gap-2"}>
                  <label className={"text-[#EEEEEE]"}>
                    تعداد استادیار مورد نیاز:
                  </label>
                  <select
                    name="reqta"
                    onChange={(event) => {
                      setFormValue({
                        ...formValue,
                        required_TAs: event.target.value,
                      });
                    }}
                    id="reqta"
                    className={"bg-gray-200 p-1 rounded-lg"}
                  >
                    {/*<optgroup label="Swedish Cars">*/}
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    {/*</optgroup>*/}
                  </select>
                </div>
                <div className={"flex flex-row gap-2"}>
                  <label className={"text-[#EEEEEE]"}>حداقل معدل:</label>
                  <select
                    name="minp"
                    onChange={(event) => {
                      setFormValue({
                        ...formValue,
                        minPoint: event.target.value,
                      });
                    }}
                    id="minp"
                    className={"bg-gray-200 p-1 rounded-lg"}
                  >
                    {/*<optgroup label="Swedish Cars">*/}
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                    <option value={16}>16</option>
                    <option value={17}>17</option>
                    <option value={18}>18</option>
                    <option value={19}>19</option>
                    <option value={20}>20</option>
                    {/*</optgroup>*/}
                  </select>
                </div>
              </div>
              <div
                className={"text-[#222831] flex flex-row gap-2 justify-start"}
              >
                <label className={"text-[#EEEEEE]"}>
                  {" "}
                  آیا دانشجو باید این درس را گذرانده باشد؟:
                </label>
                <select
                  name="passc"
                  onChange={(event) => {
                    setFormValue({
                      ...formValue,
                      passCourse: event.target.value,
                    });
                  }}
                  id="passc"
                  className={"bg-gray-200 p-1 rounded-lg"}
                >
                  {/*<optgroup label="Swedish Cars">*/}
                  <option value={1}>بله</option>
                  <option value={0}>خیر</option>
                  {/*</optgroup>*/}
                </select>
              </div>
              <div className={"flex flex-row gap-2"}>
                <label className={"text-black text-lg"}> توضیحات:</label>
                <textarea
                  id="text"
                  onChange={(event) => {
                    setFormValue({
                      ...formValue,
                      description: event.target.value,
                    });
                  }}
                  className="block max-h-36 min-h-16 h-36 w-5/6 p-4 text-black rounded-3xl  bg-gray-200 text-lg placeholder:text-[#8B8C8D]
                             focus:outline-none  focus:ring-0 shadow-inner text-start"
                  placeholder="پیام خود را برای ما بنویسید..."
                  //           onChange={(event) => {
                  //     setFormValue({...formValue, text: event.target.value})
                  // }}
                />
              </div>

              <div className={" w-full flex justify-center items-start gap-3"}>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  className={"bg-[#76ABAE] w-1/3 py-2 rounded-lg"}
                >
                  {creatCourseMutation.isPending ? "درحال ذخیره..." : "ذخیره"}
                </Button>
                <Button
                  variant="contained"
                  type="button"
                  color="error"
                  onClick={() => {
                    router.push("/professor-home");
                  }}
                  className={"bg-[#76ABAE] w-1/3 py-2 rounded-lg"}
                >
                  انصراف
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </ProfessorGuard>
  );
};
export default NewCours;
