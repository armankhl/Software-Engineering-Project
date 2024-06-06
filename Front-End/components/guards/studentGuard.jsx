import { USER_KEY } from "@/utils/api/axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

const StudentGuard = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(USER_KEY));
    if (!user) {
      router.push("/login");
      return;
    }

    if (user?.role !== "student") {
      router.push("/professor-home");
    }
  }, []);

  return children;
};

export default StudentGuard;
