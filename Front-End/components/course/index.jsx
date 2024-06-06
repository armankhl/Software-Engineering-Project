import { useRouter } from "next/router";

const Course = (props) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`professor-course/${props.id}`)}
      className={
        "bg-gray-200 justify-center items-center p-10 flex flex-col rounded-3xl border border-gray-400 cursor-pointer hover:opacity-80 transition-all"
      }
    >
      <p className={"text-xl  text-[#222831] font-bold mt-1 "}>{props.name}</p>
      <p className={"text-lg  text-black"}>ترم :{props.term}</p>
      <p className={"text-lg text-black"}>تی ای مورد نیاز :{props.TANum}</p>
      {/* <p className={"text-lg text-black"}>تعداد داوطلبان :{props.requestNum}</p>
      <p className={"text-lg text-black"}>تایید شده :{props.accepted}</p> */}
    </div>
  );
};
export default Course;
