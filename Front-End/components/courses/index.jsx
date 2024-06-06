import Course from "@/components/course";

const Courses = ({ courses }) => {
  // const [cours, setCours] = useState([
  //   {
  //     name: "مبانی هوش",
  //     term: "5",
  //     TANum: "8",
  //     requestNum: "10",
  //     accepted: "6",
  //   },
  // ]);
  return (
    <div className={" grid grid-cols-4 gap-4"}>
      {courses?.map((k, index) => (
        <div key={`course-${index}`}>
          <Course
            id={k.id}
            name={k.name}
            term={k.term}
            TANum={k.required_TAs}
            //requestNum={0}
            //accepted={0}
          />
        </div>
      ))}
    </div>
  );
};
export default Courses;
