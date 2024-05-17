import { USER_KEY } from "@/utils/api/axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProfessorGuard = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(USER_KEY));
    if (!user) {
      router.push("/login");
      return;
    }

    if (user?.role !== "professor") {
      router.push("/student-home");
    }
  }, []);

  return children;
};

export default ProfessorGuard;
