import StudentGuard from "@/components/guards/studentGuard";
import Layout from "@/components/layout_TAs";
import ProfilePage from "@/components/StudentDetails";

const StudentProfile = () => {
  return (
    <StudentGuard>
      <Layout>
        <ProfilePage />
      </Layout>
    </StudentGuard>
  );
};

export default StudentProfile;
