import ProfessorGuard from "@/components/guards/professorGuard";
import Layout from "@/components/layout";
import ProfilePage from "@/components/StudentDetails";

const StudentProfile = () => {
  return (
    <ProfessorGuard>
      <Layout>
        <ProfilePage />
      </Layout>
    </ProfessorGuard>
  );
};

export default StudentProfile;
