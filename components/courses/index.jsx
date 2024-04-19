import { useState } from "react";
import Course from "@/components/course";

const Courses = () => {
  const [cours, setCours] = useState([
    {
      name: "مبانی هوش",
      term: "5",
      TANum: "8",
      requestNum: "10",
      accepted: "6",
    },
    {
      name: "ساختمان داده",
      term: "3",
      TANum: "8",
      requestNum: "15",
      accepted: "5",
    },
    {
      name: "برنامه نویسی پیشرفته",
      term: "2",
      TANum: "8",
      requestNum: "8",
      accepted: "8",
    },
    { name: "جبرخطی", term: "2", TANum: "5", requestNum: "3", accepted: "2" },
    {
      name: "یادگیری ماشین",
      term: "6",
      TANum: "8",
      requestNum: "4",
      accepted: "4",
    },
  ]);
  return (
    <div className={" grid grid-cols-4 gap-4"}>
      {cours.map((k, index) => (
        <div>
          <Course
            name={k.name}
            term={k.term}
            TANum={k.TANum}
            requestNum={k.requestNum}
            accepted={k.accepted}
          />
        </div>
      ))}
    </div>
  );
};
export default Courses;
