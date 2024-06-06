import {
  getStudentFullProfile,
  getStudentOjb,
  pointUserAPI,
} from "@/utils/api/user";
import { falsyString } from "@/utils/falsyString";
import { getUser } from "@/utils/user";
import { Button, Modal } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const router = useRouter();
  const user = getUser();

  const [isPointModalOpen, setIsPointModalOpen] = useState(false);
  const [point, setPoint] = useState(0);

  const studentID = router.query.userId;

  const studentProfileId = router.query.profileId;

  const { data: profile, isLoading } = useQuery({
    queryFn: async () => getStudentFullProfile(studentProfileId),
    queryKey: ["student-full-prof", studentProfileId],
    enabled: !!studentProfileId,
  });

  const { data: profileUser, isUserLoading } = useQuery({
    queryFn: async () => getStudentOjb(studentID),
    queryKey: ["student-full-prof-ojb", studentID],
    enabled: !!studentID,
  });

  const pointMutation = useMutation({
    mutationFn: pointUserAPI,
    onSuccess() {
      setIsPointModalOpen(false);
      toast.success("امتیاز شما با موفقیت ثبت شد");
    },
    onError() {
      toast.error("مشکلی بوجود آمده است");
    },
  });

  const isListLoading = !router.isReady && isLoading && isUserLoading;

  const profileUrl = "/user-profile.svg";

  return (
    <>
      <div
        dir="rtl"
        className="profile-page flex flex-col items-center justify-center min-h-screen bg-gray-200"
      >
        <div className="profile-info-title w-2/3 h-1/12 text-gray-700 text-3xl font-bold mb-4 mr-4 flex-row items-center justify-end mt-4 ">
          پروفایل دانشجو
        </div>
        {isListLoading ? (
          "..."
        ) : (
          <div className="profile-info flex flex-col p-10 w-2/3 h-96 gap-10 bg-white shadow-md rounded-lg mt-4 max-auto">
            <div className="profile-details flex flex-row items-center justify-center w-full space-x-6 lg-x-12 gap-36">
              <div className="profile-picture-container w-1/6 flex items-start justify-start ml-4">
                <Image
                  src={profileUrl}
                  alt="profile picture"
                  width={24}
                  height={24}
                  className="profile-picture rounded-full mr-4 w-24 h-24 object-cover"
                />
              </div>
              <div className="profile-details-group-1 w-full flex flex-col gap-4">
                <div className="profile-info-row mb-2">
                  <span className="profile-info-label text-gray-700 pl-2">
                    نام و نام خانوادگی:
                  </span>
                  <span className="profile-info-value text-gray-900">
                    {`${falsyString(
                      profileUser?.data?.first_name
                    )} ${falsyString(profileUser?.data?.last_name)}`}
                  </span>
                </div>

                <div className="profile-info-row mb-2">
                  <span className="profile-info-label text-gray-700 pl-2">
                    شماره آموزشی:
                  </span>
                  <span className="profile-info-value text-gray-900">
                    {falsyString(profile?.data?.stu_no)}
                  </span>
                </div>

                <div className="profile-info-row mb-2">
                  <span className="profile-info-label text-gray-700 pl-2">
                    دانشگاه:
                  </span>
                  <span className="profile-info-value text-gray-900">
                    {falsyString(profile?.data?.university)}
                  </span>
                </div>

                <div className="profile-info-row mb-2">
                  <span className="profile-info-label text-gray-700 pl-2">
                    معدل:
                  </span>
                  <span className="profile-info-value text-gray-900">
                    {falsyString(profile?.data?.gpa)}
                  </span>
                </div>

                <div className="profile-info-row mb-2">
                  <span className="profile-info-label text-gray-700 pl-2">
                    رشته:
                  </span>
                  <span className="profile-info-value text-gray-900">
                    {falsyString(profile?.data?.major)}
                  </span>
                </div>
              </div>

              <div className="profile-details-group-2 w-full mr-4 flex flex-col gap-4">
                <div className="profile-info-row mb-2">
                  <span className="profile-info-label text-gray-700 pl-2">
                    نام کاربری:
                  </span>
                  <span className="profile-info-value text-gray-900">
                    {falsyString(profileUser?.data?.username)}
                  </span>
                </div>

                <div className="profile-info-row mb-2">
                  <span className="profile-info-label text-gray-700 pl-2">
                    ایمیل:
                  </span>
                  <span className="profile-info-value text-gray-900">
                    {falsyString(profileUser?.data?.email)}
                  </span>
                </div>

                <div className="profile-info-row mb-2">
                  <span className="profile-info-label text-gray-700 pl-2">
                    دانشکده:
                  </span>
                  <span className="profile-info-value text-gray-900">
                    {falsyString(profile?.data?.college)}
                  </span>
                </div>
                <div className="profile-info-row mb-2">
                  <span className="profile-info-label text-gray-700 pl-2">
                    سال ورودی:
                  </span>
                  <span className="profile-info-value text-gray-900">
                    {falsyString(profile?.data?.enter_year)}
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
                  {falsyString(profile?.data?.about_me)}
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
            onClick={() => router.back()}
          >
            بازگشت
          </Button>
          ‌
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              setIsPointModalOpen(true);
            }}
          >
            امتیاز دهی
          </Button>
        </div>
      </div>

      <Modal
        open={isPointModalOpen}
        onClose={() => {
          setIsPointModalOpen(false);
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          direction: "rtl",
        }}
      >
        <form className="flex flex-col w-[700px] min-h-96 justify-center bg-white p-10 gap-7">
          <div className={"flex flex-row gap-2 w-full"}>
            <label className={"text-black min-w-24"}>امتیاز:</label>
            <input
              name="filed"
              type="number"
              max={5}
              min={0}
              value={point}
              onChange={(event) => {
                setPoint(event.target.value);
              }}
              id="filed"
              className={"bg-gray-200 p-1 rounded-lg w-full text-black"}
            ></input>
          </div>

          <Button
            variant="contained"
            color="success"
            onClick={() => {
              pointMutation.mutate({
                id: studentID,
                rate: point,
              });
            }}
          >
            {pointMutation.isLoading ? "درحال ثبت..." : "ثبت"}
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default ProfilePage;
