import ProfessorGuard from "@/components/guards/professorGuard";
import Layout from "@/components/layout";
import { baseUrl, USER_KEY } from "@/utils/api/axios";
import {
  getProfessorProfile,
  updateProfessorProfile,
  uploadProfessorFile,
} from "@/utils/api/user";
import { getUser } from "@/utils/user";
import { Button } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const ProfessorProfileEdit = () => {
  const router = useRouter();
  const user = getUser();

  const inputRef = useRef(null);

  const queryClient = useQueryClient();

  const [profile, setProfile] = useState({
    first_name: "",
    last_name: "",
    email: "",
    university: "",
    college: "",
    about_me: "",
  });

  useEffect(() => {
    setProfile({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      university: user.university,
      college: user.college,
      about_me: user.about_me,
    });
  }, []);

  const updateProfileMutation = useMutation({
    mutationFn: updateProfessorProfile,
    onSuccess() {
      localStorage.setItem(USER_KEY, JSON.stringify({ ...user, ...profile }));
      toast.success("عملیات با موفقیت انجام شد");

      router.push("/professor-profile");
    },
    onError() {
      toast.error("مشکلی بوجود آمده است");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProfileMutation.mutate(profile);
  };

  const { data, isLoading } = useQuery({
    queryFn: getProfessorProfile,
    queryKey: ["professor-prof"],
  });

  const profileUrl = data?.data
    ? baseUrl + "/users" + data.data
    : "/user-profile.svg";

  const uploadProfileMutation = useMutation({
    mutationFn: uploadProfessorFile,
    onSuccess() {
      queryClient.invalidateQueries(["professor-prof"]);
      toast.success("عملیات با موفقیت انجام شد");
    },
    onError() {
      toast.error("مشکلی بوجود آمده است");
    },
  });

  const uploadFile = () => {
    inputRef.current.click();
  };

  const handleUploadFileChange = (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("profile_picture", file);

    uploadProfileMutation.mutate(formData);
  };

  return (
    <ProfessorGuard>
      <Layout>
        <div
          className={
            " w-screen h-screen bg-white flex flex-row justify-center py-40"
          }
          dir={"rtl"}
        >
          <form
            onSubmit={handleSubmit}
            className={
              "flex flex-col w-4/6 h-full items-center justify-center px-20"
            }
          >
            <div className={"text-[#222831] w-full grid grid-cols-2 gap-4"}>
              <div className="col-span-2 flex items-center gap-5">
                <Image
                  src={profileUrl}
                  alt="profile"
                  width={150}
                  height={150}
                  className="rounded-full border w-40 h-40 object-contain"
                />

                <div>
                  <Button onClick={uploadFile} variant="contained" color="info">
                    اپلود عکس
                  </Button>
                </div>

                <input
                  ref={inputRef}
                  type="file"
                  placeholder="تغییر پروفایل"
                  className="hidden"
                  onChange={handleUploadFileChange}
                />
              </div>
              <div className={"flex flex-col"}>
                <label className={"pr-3 pb-2"}>نام</label>
                <input
                  type="text "
                  value={profile.first_name}
                  onChange={(e) =>
                    setProfile((prof) => ({
                      ...prof,
                      first_name: e.target.value,
                    }))
                  }
                  className=" text-black-900 rounded-3xl p-3
                                bg-[#EEEEEE] text-lg placeholder:text-[#8B8C8D] focus:outline-none focus:ring-0 shadow-inner"
                />
              </div>
              <div className={"flex flex-col"}>
                <label className={"pr-3 pb-2"}> نام خانوادگی </label>
                <input
                  type="text "
                  value={profile.last_name}
                  onChange={(e) =>
                    setProfile((prof) => ({
                      ...prof,
                      last_name: e.target.value,
                    }))
                  }
                  className=" text-black-900 rounded-3xl p-3
                                bg-[#EEEEEE] text-lg placeholder:text-[#8B8C8D] focus:outline-none focus:ring-0 shadow-inner"
                />
              </div>
              <div className={"flex flex-col"}>
                <label className={"pr-3 pb-2"}>ایمیل</label>
                <input
                  type="text "
                  value={profile.email}
                  onChange={(e) =>
                    setProfile((prof) => ({ ...prof, email: e.target.value }))
                  }
                  className=" text-black-900 rounded-3xl p-3
                                bg-[#EEEEEE] text-lg placeholder:text-[#8B8C8D] focus:outline-none focus:ring-0 shadow-inner"
                />
              </div>
              <div className={"flex flex-col"}>
                <label className={"pr-3 pb-2"}>دانشگاه</label>
                <input
                  type="text "
                  value={profile.university}
                  onChange={(e) =>
                    setProfile((prof) => ({
                      ...prof,
                      university: e.target.value,
                    }))
                  }
                  className=" text-black-900 rounded-3xl p-3
                                bg-[#EEEEEE] text-lg placeholder:text-[#8B8C8D] focus:outline-none focus:ring-0 shadow-inner"
                />
              </div>
              <div className={"flex flex-col w-full col-span-2"}>
                <label className={"pr-3 pb-2"}>دانشکده</label>
                <input
                  type="text "
                  value={profile.college}
                  onChange={(e) =>
                    setProfile((prof) => ({ ...prof, college: e.target.value }))
                  }
                  className=" text-black-900 rounded-3xl p-3
                                bg-[#EEEEEE] text-lg placeholder:text-[#8B8C8D] focus:outline-none focus:ring-0 shadow-inner"
                />
              </div>
            </div>
            <div
              id={"about me"}
              className={"text-[#222831] flex flex-col w-full mt-10"}
            >
              <label className={"pr-3 pb-2"}>درباره من :</label>
              <input
                type="text "
                value={profile.about_me}
                onChange={(e) =>
                  setProfile((prof) => ({ ...prof, about_me: e.target.value }))
                }
                className=" text-black-900 rounded-3xl p-3 w-full h-32 text-start
                                bg-[#EEEEEE] text-lg placeholder:text-black focus:outline-none focus:ring-0 shadow-inner"
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="success"
              className="!mt-5"
            >
              {updateProfileMutation.isPending ? "در حال ذخیره" : "ذخیره"}
            </Button>
          </form>
        </div>
      </Layout>
    </ProfessorGuard>
  );
};
export default ProfessorProfileEdit;
