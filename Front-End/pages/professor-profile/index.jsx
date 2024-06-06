import ProfessorGuard from "@/components/guards/professorGuard";
import Layout from "@/components/layout";
import { baseUrl } from "@/utils/api/axios";
import { getProfessorProfile } from "@/utils/api/user";
import { falsyString } from "@/utils/falsyString";
import { getUser } from "@/utils/user";
import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProfessorProfile = () => {
  const router = useRouter();
  const user = getUser();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { data, isLoading } = useQuery({
    queryFn: getProfessorProfile,
    queryKey: ["professor-prof"],
  });

  const profileUrl = data?.data
    ? baseUrl + "/users" + data.data
    : "/user-profile.svg";

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
          {isMounted && (
            <div className="profile-info flex flex-col p-10 w-2/3 h-96 gap-10 bg-white shadow-md rounded-lg mt-4 max-auto">
              <div className="profile-details flex flex-row items-center justify-center w-full space-x-6 lg-x-12 gap-36">
                <div className="profile-picture-container w-3/6 flex items-start justify-start ml-4">
                  <Image
                    src={profileUrl}
                    alt="profile"
                    width={150}
                    height={150}
                    className="rounded-full border p-1 w-32 h-32 object-contain"
                  />
                </div>
                <div className="profile-details-group-1 w-full flex flex-col gap-4">
                  <div className="profile-info-row mb-2">
                    <span className="profile-info-label text-gray-700 pl-2">
                      نام و نام خانوادگی:
                    </span>
                    <span className="profile-info-value text-gray-900">
                      {`${falsyString(user?.first_name)} ${falsyString(
                        user?.last_name
                      )}`}
                    </span>
                  </div>

                  <div className="profile-info-row mb-2">
                    <span className="profile-info-label text-gray-700 pl-2">
                      شماره آموزشی:
                    </span>
                    <span className="profile-info-value text-gray-900">
                      {falsyString(user?.national_no)}
                    </span>
                  </div>

                  <div className="profile-info-row mb-2">
                    <span className="profile-info-label text-gray-700 pl-2">
                      دانشگاه:
                    </span>
                    <span className="profile-info-value text-gray-900">
                      {falsyString(user?.university)}
                    </span>
                  </div>
                </div>

                <div className="profile-details-group-2 w-full mr-4 flex flex-col gap-4">
                  <div className="profile-info-row mb-2">
                    <span className="profile-info-label text-gray-700 pl-2">
                      نام کاربری:
                    </span>
                    <span className="profile-info-value text-gray-900">
                      {falsyString(user?.username)}
                    </span>
                  </div>

                  <div className="profile-info-row mb-2">
                    <span className="profile-info-label text-gray-700 pl-2">
                      ایمیل:
                    </span>
                    <span className="profile-info-value text-gray-900">
                      {falsyString(user?.email)}
                    </span>
                  </div>

                  <div className="profile-info-row mb-2">
                    <span className="profile-info-label text-gray-700 pl-2">
                      دانشکده:
                    </span>
                    <span className="profile-info-value text-gray-900">
                      {falsyString(user?.college)}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="profile-info-row mb-2">
                  <span className="profile-info-label text-gray-700 pl-2">
                    درباره من:
                  </span>
                  <span className="profile-info-value text-gray-900">
                    {falsyString(user?.about_me)}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="profile-buttons flex justify-between mt-4 gap-2">
            ‌
            <Button
              variant="contained"
              color="info"
              onClick={() => router.push("/professor-home")}
            >
              بازگشت
            </Button>
            ‌
            <Button
              variant="contained"
              color="success"
              onClick={() => router.push("/professor-profile-edit")}
            >
              ویرایش
            </Button>
          </div>
        </div>
      </Layout>
    </ProfessorGuard>
  );
};

export default ProfessorProfile;
