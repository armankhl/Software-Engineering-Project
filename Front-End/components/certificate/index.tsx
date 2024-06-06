// React Component
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  studentName: string;
  studentNumber: string;
  courseName: string;
  instructorName: string;
  semester: string;
}

function Certificate({
  studentName,
  studentNumber,
  courseName,
  instructorName,
  semester,
}: Props) {
  const router = useRouter();

  return (
    <div className="bg-[#EEEEEE] h-screen font-sans flex flex-col justify-center items-center">
      <div className="bg-[#EEEEEE] rounded-md shadow-xl px-8 py-12 w-1/2 p-0">
        <p className=" text-center mb-2 mt-0 text-[#02595E]">
          Verified Certification of Completion
        </p>
        <img
          src="/Certification-top-logo.png"
          alt="Certificate Image"
          style={{ width: "12.5rem", height: "4rem" }}
          className="mx-auto m-0 mb-3"
        />
        <p className="text-xl font-bold text-center mb-2 text-black">
          {studentName}
        </p>
        <p className="text-center text-[#02595E] mb-2">
          Has been teacher assistance in
        </p>
        <p className="text-xl text-center font-bold mb-2 text-black">
          {courseName}
        </p>
        <p className="text-[#02595E] text-center">
          Instructed by{" "}
          <span className="text-[#31363F] font-medium">{instructorName}</span>{" "}
          the University of Isfahan on the{" "}
          <span className="text-[#31363F] font-medium">{semester}</span>{" "}
          semester
        </p>
        <hr className="border border-[#707070] w-80% mx-auto mt-4" />
        <p className="text-black text-center mt-4">
          بدین وسیله گواهی میشود دانشجوی گرامی 
          <span className="text-[#31363F] font-medium">{studentName}</span>  با
          شماره دانشجویی  
          <span className="text-[#31363F] font-medium">{studentNumber}</span>
            در دوره آموزش  
          <span className="text-[#31363F] font-medium">{courseName}</span>  با
          تدریس دکتر 
          <span className="text-[#31363F] font-medium">{instructorName}</span>
            در ترم تحصیلی  
          <span className="text-[#31363F] font-medium">{semester}</span>  به
          عنوان استادیار  درس با تعهد و تلاش مستمر، نقش مؤثری در پیشبرد اهداف
          آموزشی دوره داشته است و  خدمات آموزشی و پژوهشی ارزشمندی را در این
          راستا ارائه داده است
        </p>
        <div className="flex flex-row-reverse mt-2">
          <img
            src="/Uni-Logo.png"
            alt="Image 1"
            style={{ width: "5rem", height: "5rem" }}
            className="w-32 h-32 mr-4"
          />
          <div className="flex flex-col">
            <img
              src="/Signature.png "
              alt="Image 2"
              style={{ width: "5rem", height: "5rem" }}
              className="w-32 h-32"
            />
            <p className="text-center text-black text-sm">معاونت آموزشی</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-4 gap-6">
        <Button variant="contained" onClick={() => router.back()}>
          بازگشت
        </Button>
      </div>
    </div>
  );
}

export default Certificate;
