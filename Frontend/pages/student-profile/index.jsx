import StudentGuard from "@/components/guards/studentGuard";
import Layout from "@/components/layout";
import ProfilePage from "@/components/StudentDetails";

const StudentProfile = () => {
  return (
    <StudentGuard>
      <Layout>
        <ProfilePage></ProfilePage>
      </Layout>
    </StudentGuard>
  );
};

export default StudentProfile;
