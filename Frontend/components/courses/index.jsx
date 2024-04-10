import {useState} from "react";
import Course from "@/components/course";

const Courses = () => {
    const [cours , setCours]=useState([{name:'mabani' , status:'dar hal sakht'},{name:'mabani' , status:'dfghjkl'},{name:'mabani' , status:'dfghjkl'},{name:'mabani' , status:'dfghjkl'},{name:'mabani' , status:'dar hal sakht'},])
  return(
      <div className={'flex flex-row gap-10 m-5 justify-center items-center grid grid-cols-4 '}>
          {
              cours.map((k,index)=>

                  <Course name={k.name} status={k.status} key={index}/>
              )
          }
      </div>
  )
}
export default Courses;