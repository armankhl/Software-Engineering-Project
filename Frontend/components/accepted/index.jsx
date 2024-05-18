const Accepted = (props) => {
  return (
    <div className={"flex flex-row"}>
      {" "}
      <p
        className={
          "bg-white text-black text-lg text-center basis-3/12 border border-gray-500"
        }
      >
        {props.name}{" "}
      </p>{" "}
      <p
        className={
          "bg-white text-black text-lg text-center basis-3/12 border border-gray-500"
        }
      >
        {props.studentNum}{" "}
      </p>{" "}
      <p
        className={
          "bg-white text-black text-lg text-center basis-1/12 border border-gray-500"
        }
      >
        {props.adjusted}{" "}
      </p>{" "}
      <p
        className={
          "bg-white text-black text-lg text-center basis-3/12 border border-gray-500"
        }
      >
        {props.field}{" "}
      </p>{" "}
      <p
        className={
          "bg-white text-black text-lg text-center basis-1/12 border border-gray-500"
        }
      >
        {props.enterYear}{" "}
      </p>{" "}
      <p
        className={
          "bg-white text-black text-lg text-center basis-1/12 border border-gray-500"
        }
      >
        {props.rate}{" "}
      </p>{" "}
    </div>
  );
};
export default Accepted;
