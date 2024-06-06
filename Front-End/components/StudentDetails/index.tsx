import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Profile {
  fullName: string;
  email: string;
  username: string;
  university: string;
  faculty: string;
  studentNumber: string;
  entryYear: number;
  gpa: number;
  bio: string;
  pictureUrl?: string;
  score: number;
}

declare const profile: Profile;

const ProfilePage: React.FC<Profile> = (profile) => {
  // Handle cases where profile prop is missing
  if (!profile) {
    return <div>Loading profile information...</div>;
  }

  const {
    fullName,
    email,
    university,
    faculty,
    studentNumber,
    entryYear,
    gpa,
    bio,
    pictureUrl,
    username,
    score,
  } = profile;

  // const navigate = useNavigate();
  // const handleBackClick = () => {
  //   navigate(-1);
  // };

  return (
    <>
      <div
        dir="rtl"
        className="profile-page flex flex-col items-center justify-center min-h-screen bg-gray-200"
      >
        <div className="profile-info-title w-2/3 h-1/12 text-gray-700 text-3xl font-bold mb-4 mr-4 flex-row items-center justify-end mt-4 ">
          پروفایل دانشجو
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
                  دانشگاه:
                </span>
                <span className="profile-info-value text-gray-900">
                  {profile.university}
                </span>
              </div>

              <div className="profile-info-row mb-2">
                <span className="profile-info-label text-gray-700 pl-2">
                  شماره دانشجویی:
                </span>
                <span className="profile-info-value text-gray-900">
                  {profile.studentNumber}
                </span>
              </div>

              <div className="profile-info-row mb-2">
                <span className="profile-info-label text-gray-700 pl-2">
                  معدل:
                </span>
                <span className="profile-info-value text-gray-900">
                  {profile.gpa}
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

              <div className="profile-info-row mb-2">
                <span className="profile-info-label text-gray-700 pl-2">
                  دانشکده:
                </span>
                <span className="profile-info-value text-gray-900">
                  {profile.faculty}
                </span>
              </div>

              <div className="profile-info-row mb-2">
                <span className="profile-info-label text-gray-700 pl-2">
                  ورودی:
                </span>
                <span className="profile-info-value text-gray-900">
                  {profile.entryYear}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-bio-title w-7/12 text-gray-700 text-lg font-medium mr-4 flex-row justify-end mt-4">
          درباره من
        </div>
        <div className="profile-bio mt-4 mb-4 w-7/12 bg-white shadow-md rounded-lg p-4">
          <p className="profile-bio-text text-gray-900">{profile.bio}</p>
        </div>
        <div className="profile-buttons flex justify-between mt-4">
          <Link href="/professor-home">
            <button className="profile-button w-full py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-900 mr-4">
              بازگشت
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
