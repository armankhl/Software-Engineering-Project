import ProfessorGuard from "@/components/guards/professorGuard";
import Header from "@/components/header";
import Layout from "@/components/layout";

const ProfessorProfile = () => {
  return (
    <ProfessorGuard>
      <Layout>
        <div
          className={
            " w-screen h-screen bg-white overflow-x-hidden flex flex-row "
          }
          dir={"rtl"}
        >
          <div className={"flex justify-center items-center w-1/3"}>
            <img
              className={"w-56 h-56 border border-slate-600 rounded-full"}
              src={"/icons8-test-account-100.png"}
            />
          </div>
          <div className={"flex flex-col justify-center gap-8 w-1/3"}>
            <h1 className={"text-3xl font-bold text-black mb-12"}>
              مهران رضایی
            </h1>
            <p className={"text-lg text-black"}>استادیار</p>
            <p className={"text-lg text-black"}>دانشگاه اصفهان</p>
            <p className={"text-lg text-black"}> m.rezaei@eng.ui.ac.ir</p>
            <p className={"text-lg text-black"}>
              https://engold.ui.ac.ir/~m.rezaei
            </p>
          </div>
          <div className={"flex justify-center items-center text-5xl w-1/3 "}>
            * * * * *
          </div>
        </div>
      </Layout>
    </ProfessorGuard>
  );
};
export default ProfessorProfile;
{
  /*<div className={'flex flex-col justify-center items-center py-16 gap-4'}>*/
}
{
  /*    <img className={'w-32 h-32 border border-slate-600 rounded-full'} src={'/sefid.png'}/>*/
}
{
  /*    <h1 className={'text-2xl font-bold text-black'}>مهران رضایی</h1>*/
}
{
  /*    <p className={'text-lg text-black'}>استادیار</p>*/
}
{
  /*    <p className={'text-lg text-black'}>@gmail.com</p>*/
}
{
  /*    <p className={'text-lg text-black'}>www.Rezaee.com</p>*/
}
{
  /*    <div>*/
}
{
  /*        ******/
}
{
  /*    </div>*/
}
{
  /*    <button className={'bg-[#76ABAE] p-3 px-4 rounded-lg'}>*/
}
{
  /*        ویرایش اطلاعات*/
}
{
  /*    </button>*/
}
{
  /*</div>*/
}
