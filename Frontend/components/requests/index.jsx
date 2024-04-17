import {useState} from "react";
import Request from "@/components/request";

const Requests = () => {
    const [request , setRequest]=useState([
        {name:'محمد امین کیانی' , studentNum:'4003613000' , adjusted:'17' ,field:'مهندسی کامپیوتر' , enterYear:'1400' , rate:'3' ,status:false },
        {name:'محمد امین کیانی' , studentNum:'4003613000' , adjusted:'17' ,field:'مهندسی کامپیوتر' , enterYear:'1400' , rate:'3' ,status:false },
        {name:'محمد امین کیانی' , studentNum:'4003613000' , adjusted:'17' ,field:'مهندسی کامپیوتر' , enterYear:'1400' , rate:'3' ,status:false },
        {name:'محمد امین کیانی' , studentNum:'4003613000' , adjusted:'17' ,field:'مهندسی کامپیوتر' , enterYear:'1400' , rate:'3' ,status:false },
        {name:'محمد امین کیانی' , studentNum:'4003613000' , adjusted:'17' ,field:'مهندسی کامپیوتر' , enterYear:'1400' , rate:'3' ,status:false },
        {name:'محمد امین کیانی' , studentNum:'4003613000' , adjusted:'17' ,field:'مهندسی کامپیوتر' , enterYear:'1400' , rate:'3' ,status:false },
    ])
  return(
      <div className={'flex flex-col border border-black'}>
          <div className={'flex flex-row h-14 '}>
              <p className={'bg-gray-600 text-white text-lg basis-2/12 border border-white items-center justify-center text-center'}>
                  نام و نام خانوادگی
              </p>
              <p className={'bg-gray-600 text-white text-lg text-center  basis-2/12 border border-white'}>
                    شماره دانشجویی
              </p>
              <p className={'bg-gray-600 text-white text-lg text-center basis-1/12 border border-white'}>
                    معدل
              </p>
              <p className={'bg-gray-600 text-white text-lg text-center basis-2/12 border border-white'}>
                    رشته
              </p>
              <p className={'bg-gray-600 text-white text-lg text-center basis-1/12 border border-white'}>
                    ورودی
              </p>
              <p className={'bg-gray-600 text-white text-lg text-center basis-1/12 border border-white'}>
                    امیتاز
              </p>
              <p className={'bg-gray-600 text-white text-lg text-center basis-3/12 border border-white'}>
                    وضعیت درخواست
              </p>
          </div>
              {request.map((k , index)=>
                  <Request key={index} name={k.name} studentNum={k.studentNum} adjusted={k.adjusted}
                           field={k.field} enterYear={k.enterYear} rate={k.rate} status={k.status}/>
              )}
      </div>
  )
}
export default Requests;