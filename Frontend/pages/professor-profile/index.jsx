import ProfessorGuard from "@/components/guards/professorGuard";
import Header from "@/components/header";
import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

// const ProfessorProfile = () => {
//   return (
//     <Layout>
//       <div
//         className={
//           " w-screen h-screen bg-white overflow-x-hidden flex flex-row "
//         }
//         dir={"rtl"}
//       >
//         <div className={"flex justify-center items-center w-1/3"}>
//           <img
//             className={"w-56 h-56 border border-slate-600 rounded-full"}
//             src={"/icons8-test-account-100.png"}
//           />
//         </div>
//         <div className={"flex flex-col justify-center gap-8 w-1/3"}>
//           <h1 className={"text-3xl font-bold text-black mb-12"}>مهران رضایی</h1>
//           <p className={"text-lg text-black"}>استادیار</p>
//           <p className={"text-lg text-black"}>دانشگاه اصفهان</p>
//           <p className={"text-lg text-black"}> m.rezaei@eng.ui.ac.ir</p>
//           <p className={"text-lg text-black"}>
//             https://engold.ui.ac.ir/~m.rezaei
//           </p>
//         </div>
//         <div className={"flex justify-center items-center text-5xl w-1/3 "}>
//           * * * * *
//         </div>
//       </div>
//     </Layout>
//   );
// };

const ProfessorProfile = () => {
  const profile = {
    fullName: "",
    email: "",
    username: "",
    university: "",
    faculty: "",
    studentNumber: "",
    entryYear: "",
    gpa: "",
    bio: "",
    pictureUrl: undefined,
    score: "",
  };

  return (
    <ProfessorGuard>
      <Layout>
        <div
          dir="rtl"
          className="profile-page flex flex-col items-center justify-center min-h-screen bg-gray-200"
        >
          <div className="profile-info-title w-2/3 h-1/12 text-gray-700 text-3xl font-bold mb-4 mr-4 flex-row items-center justify-end mt-4 ">
            پروفایل استاد
          </div>
          <div className="profile-info flex w-2/3 justify-between bg-white shadow-md rounded-lg p-4 mt-4 max-auto">
            <div className="profile-details flex flex-row items-center justify-center w-full space-x-6 lg-x-12 gap-10">
              <div className="profile-picture-container w-1/6 flex items-start justify-start ml-4">
                <Image
                  src={profile.pictureUrl ?? "/user-profile.svg"}
                  alt="profile picture"
                  width={24}
                  height={24}
                  className="profile-picture rounded-full mr-4 w-24 h-24 object-cover"
                />
              </div>
              <div className="profile-details-group-1 w-full">
                <div className="profile-info-row mb-2">
                  <span className="profile-info-label text-gray-700 pl-2">
                    نام و نام خانوادگی:
                  </span>
                  <span className="profile-info-value text-gray-900">
                    {profile.fullName}
                  </span>
                </div>

                <div className="profile-info-row mb-2">
                  <span className="profile-info-label text-gray-700 pl-2">
                    شماره پرسنلی:
                  </span>
                  <span className="profile-info-value text-gray-900">
                    {profile.studentNumber}
                  </span>
                </div>
              </div>

              <div className="profile-details-group-2 w-full mr-4">
                <div className="profile-info-row mb-2">
                  <span className="profile-info-label text-gray-700 pl-2">
                    نام کاربری:
                  </span>
                  <span className="profile-info-value text-gray-900">
                    {profile.username}
                  </span>
                </div>

                <div className="profile-info-row mb-2">
                  <span className="profile-info-label text-gray-700 pl-2">
                    ایمیل:
                  </span>
                  <span className="profile-info-value text-gray-900">
                    {profile.email}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-buttons flex justify-between mt-4">
            <Link href="/professor-home">
              <button className="profile-button w-full py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-900 mr-4">
                بازگشت
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    </ProfessorGuard>
  );
};

export default ProfessorProfile;
