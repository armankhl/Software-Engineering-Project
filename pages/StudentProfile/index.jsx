import Layout from "@/components/layout";
import ProfilePage from "@/components/StudentDetails"

const profile = {
    fullName: "yazdan",
  email: "string",
  username: "string",
  university: "string",
  faculty: "string",
  studentNumber:" string",
  entryYear: 12,
  gpa: 12,
  bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime tempore quaerat minus, dolore perspiciatis dolorum sint voluptates. Excepturi, dolore dolorem quos asperiores ipsum, autem deleniti minima magni accusantium eligendi mollitia.",
  pictureUrl: "\abi.png",
  score: 15,
};

const StudentProfile = () => {
    return ( 
   <Layout>
    <ProfilePage {...profile}></ProfilePage>
   </Layout> 
    );
};

export default StudentProfile;