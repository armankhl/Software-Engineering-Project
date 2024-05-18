const Request = (props) => {
  return (
    <div className={"flex flex-row"}>
      <p
        className={
          "bg-white text-black text-lg text-center basis-2/12 border border-gray-500"
        }
      >
        {props.name}
      </p>
      <p
        className={
          "bg-white text-black text-lg text-center  basis-2/12 border border-gray-500"
        }
      >
        {props.studentNum}
      </p>
      <p
        className={
          "bg-white text-black text-lg text-center basis-1/12 border border-gray-500"
        }
      >
        {props.adjusted}
      </p>
      <p
        className={
          "bg-white text-black text-lg text-center basis-2/12 border border-gray-500"
        }
      >
        {props.field}
      </p>
      <p
        className={
          "bg-white text-black text-lg text-center basis-1/12 border border-gray-500"
        }
      >
        {props.enterYear}
      </p>
      <p
        className={
          "bg-white text-black text-lg text-center basis-1/12 border border-gray-500"
        }
      >
        {props.rate}
      </p>
      <p
        className={
          "flex flex-row justify-center gap-2 bg-white text-black text-lg text-center basis-3/12 border border-gray-500 p-2"
        }
      >
        <button
          className={
            "border border-gray-500 bg-[#76ABAE] px-3 rounded-lg text-center"
          }
        >
          تایید
        </button>
        <button
          className={
            "border border-gray-500 bg-[#76ABAE] px-5 rounded-lg text-center"
          }
        >
          رد
        </button>
      </p>
    </div>
  );
};
export default Request;
