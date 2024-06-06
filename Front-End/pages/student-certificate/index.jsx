import Certificate from "@/components/certificate";
import StudentGuard from "@/components/guards/studentGuard";
import Layout from "@/components/layout_TAs";
import { getUser } from "@/utils/user";
import { useRouter } from "next/router";
import React from "react";

const CertificatePage = () => {
  const router = useRouter();
  const query = router.query;
  const user = getUser();

  const info = {
    studentName: user.first_name + " " + user.last_name,
    studentNumber: user.stu_no,
    courseName: query.course,
    instructorName: query.profName + " " + query.profLastname,
    semester: query.term,
  };

  return (
    <StudentGuard>
      <Layout>
        <Certificate {...info} />
      </Layout>
    </StudentGuard>
  );
};

export default CertificatePage;
