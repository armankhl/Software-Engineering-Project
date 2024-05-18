import { useState } from "react";
import Accepted from "@/components/accepted";

const Accepted_TAs = () => {
  const [accepted, setaccepted] = useState([
    {
      name: "محمد امین کیانی",
      studentNum: "4003613052",
      adjusted: "17",
      field: "مهندسی کامپیوتر",
      enterYear: "1400",
      rate: "3",
    },
    {
      name: "طناز محمدی",
      studentNum: "983613009",
      adjusted: "20",
      field: "مهندسی کامپیوتر",
      enterYear: "1398",
      rate: "5",
    },
  ]);
  return (
    <div className={"flex flex-col border border-black"}>
      <div className={"flex flex-row h-14 "}>
        <p
          className={
            "bg-gray-600 text-white text-lg basis-3/12 border border-white items-center justify-center text-center"
          }
        >
          نام و نام خانوادگی
        </p>
        <p
          className={
            "bg-gray-600 text-white text-lg text-center  basis-3/12 border border-white"
          }
        >
          شماره دانشجویی
        </p>
        <p
          className={
            "bg-gray-600 text-white text-lg text-center basis-1/12 border border-white"
          }
        >
          معدل
        </p>
        <p
          className={
            "bg-gray-600 text-white text-lg text-center basis-3/12 border border-white"
          }
        >
          رشته
        </p>
        <p
          className={
            "bg-gray-600 text-white text-lg text-center basis-1/12 border border-white"
          }
        >
          ورودی
        </p>
        <p
          className={
            "bg-gray-600 text-white text-lg text-center basis-1/12 border border-white"
          }
        >
          امتیاز
        </p>
      </div>
      {accepted.map((k, index) => (
        <Accepted
          key={index}
          name={k.name}
          studentNum={k.studentNum}
          adjusted={k.adjusted}
          field={k.field}
          enterYear={k.enterYear}
          rate={k.rate}
        />
      ))}
    </div>
  );
};
export default Accepted_TAs;
