import {useState} from "react";
import Course from "@/components/course";

const Courses = () => {
    const [cours , setCours]=useState([{name:'mabani' ,term:'2',TANum:'8',requestNum:'10',accepted:"2"},
        {name:'mabani' ,term:'2',TANum:'8',requestNum:'10',accepted:"2"},
        {name:'mabani' ,term:'2',TANum:'8',requestNum:'10',accepted:"2"},{name:'mabani' ,term:'2',TANum:'8',requestNum:'10',accepted:"2"},
        {name:'mabani' ,term:'2',TANum:'8',requestNum:'10',accepted:"2"},])
  return(
      <div className={' grid grid-cols-4 gap-4'}>
          {cours.map((k,index)=>
                      <div>
                  <Course name={k.name} term={k.term} TANum={k.TANum} requestNum={k.requestNum} accepted={k.accepted} />
              </div>
              )}
      </div>
  )
}
export default Courses;