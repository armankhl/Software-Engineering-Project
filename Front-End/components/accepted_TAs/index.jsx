import Accepted from "@/components/accepted";
import { falsyString } from "@/utils/falsyString";

const Accepted_TAs = ({ requests }) => {
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
      {requests &&
        requests.map((k, index) => (
          <Accepted
            key={`accepted-ta-${k.id}-${index}`}
            studentId={k.student_user_id}
            studentProfileId={k.student}
            studentNum={falsyString(k.studentNo)}
            name={`${falsyString(k.studentFirstName)} ${falsyString(
              k.studentLastName
            )}`}
            adjusted={falsyString(k.gpa)}
            field={falsyString(k.field_of_study)}
            enterYear={falsyString(k.enter_year)}
            rate={falsyString(k.average)}
          />
        ))}
    </div>
  );
};
export default Accepted_TAs;
