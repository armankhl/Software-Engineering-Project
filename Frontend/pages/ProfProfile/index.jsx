import Header from "@/components/header";

const ProfessorProfile = () => {
  return (
    <div
      className={" w-screen h-screen bg-white overflow-x-hidden"}
      dir={"rtl"}
    >
      <div className={"w-full h-full flex flex-col"}>
        <Header />
        <div className={"w-full h-full flex flex-row-reverse"}>
          <div
            id={"NavigationBar"}
            className={"flex basis-2/12 bg-[#EEEEEE]"}
          ></div>
          <div className={"flex flex-col basis-10/12 items-center py-16 gap-4"}>
            <img
              className={"w-32 h-32 border border-slate-600 rounded-full"}
              src={"/sefid.png"}
            />
            <h1 className={"text-2xl font-bold text-black"}>مهران رضایی</h1>
            <p className={"text-lg text-black"}>استادیار</p>
            <p className={"text-lg text-black"}>@gmail.com</p>
            <p className={"text-lg text-black"}>www.Rezaee.com</p>
            <div>*****</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfessorProfile;
