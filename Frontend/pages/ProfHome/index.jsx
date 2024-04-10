import Courses from "@/components/courses";
import Header from "@/components/header";

const profHome = () => {
  return(
      <div className={'h-screen w-screen bg-white'}>
          <div>
              <Header/>
          </div>
          <Courses/>
           <div>
              <Header/>
          </div>
      </div>
  )
}
export default profHome