import { createCourseRequestAPI } from "@/utils/api/course";
import { UploadStudentResume } from "@/utils/api/user";
import { falsyString } from "@/utils/falsyString";
import { getUser } from "@/utils/user";
import { Button, Modal } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const UploadResume = ({ course, onClose }) => {
  const [file, setFile] = useState();
  const inputRef = useRef(null);

  const createRequestMutation = useMutation({
    mutationFn: createCourseRequestAPI,
    onSuccess() {
      toast.success("درخواست شما با موفقیت ارسال شد");
      onClose();
    },
    onError() {
      //   toast.error("مشکلی بوجود آمده است");
    },
  });

  const uploadResumeMutation = useMutation({
    mutationFn: UploadStudentResume,
    onSuccess() {
      toast.success("رزومه شما با موفقیت ارسال شد");

      const user = getUser();
      createRequestMutation.mutate({
        professorId: course.professorId,
        enter_year: user.enter_year,
        field_of_study: user.major,
        point: user.average,
        gpa: user.gpa,
        status: "uncertain",
        course: course.courseId,
        student: user.studentid,
      });
    },
    onError() {
      toast.error("مشکلی بوجود آمده است");
    },
  });

  const uploadFileChangeHandler = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const createRequest = () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    uploadResumeMutation.mutate({ id: course.professorId, file: formData });
  };

  return (
    <div className="px-20 py-10 bg-white rounded-xl">
      <p className="text-black mb-4">
        رزومه خود را آپلود کنید و درخواست خود را ثبت کنید
      </p>

      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        onChange={uploadFileChangeHandler}
        className="hidden"
      />

      <div className="flex flex-col justify-start">
        <p className="text-black text-right mb-2">
          {falsyString(file?.name)} :نام فایل
        </p>
        <Button
          variant="contained"
          color="info"
          onClick={() => {
            inputRef.current?.click();
          }}
        >
          اپلود رزومه
        </Button>
      </div>

      <div className="flex items-center gap-2 mt-20">
        <Button
          variant="contained"
          color="success"
          onClick={createRequest}
          disabled={!file}
        >
          ثبت درخواست
        </Button>

        <Button variant="contained" color="error" onClick={onClose}>
          لغو
        </Button>
      </div>
    </div>
  );
};

export default UploadResume;
