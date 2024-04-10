import {useState} from "react";

const Header = () => {
    const [professor , setProfessor]=useState([{name: 'بی نام' ,lastName:'' , img:'/sefid.png'},{name: 'بی نام' ,lastName:'' , img:''}]);
    const x = () => {
        setProfessor([{name:'پیمان' ,lastName: 'ادیبی' }])
        setProfessor([{name:'مهران' ,lastName: 'رضایی' }])
    }
 return(
     <div className={'flex flex-row h-28 w-screen bg-[#31363f] items-center gap-x-3'} dir={'rtl'}>
        <div className={'flex flex-row justify-center items-center text-white basis-2/12'}>
            <img className={'w-24 h-24'} src={'/sefid.png'}/>
            <p className={'font-bold text-3xl'}> SAMA </p>
        </div>
         <div className={'text-white basis-8/12 flex flex-row gap-16 items-center'}>
            <a className={''}>
                خانه
            </a>
             <a className={''}>
                 تعریف درس جدید
             </a>
             <a className={''} onClick={x}>
                    درس ها
             </a>
         </div>
         <div className={'flex flex-row justify-center items-center text-white basis-2/12 gap-2'}>
                <div>
                    {professor[0].name}
                    {professor[0].lastName}
                </div>
             <img src={professor[0].img} className={'h-12 w-12 border border-white rounded-full'} />
         </div>
     </div>
 )
}
export default Header;