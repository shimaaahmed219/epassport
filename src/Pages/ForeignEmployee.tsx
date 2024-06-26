import { useState } from "react";
import Hr from "../Components/Hr";
import Nav from "../Components/Nav";
import searchicon from '../assets/employee/shape (3).svg'
import ForginDesc from "../Components/ForeignEmloyee/ForginDesc";

export default function ForeignEmployee() {
    
  const [search ,setSearch] = useState('')
  console.log(search);
  return (
    <div className="w-full min-h-screen bg-bg py-2">
<Nav/>
<Hr/>
<div className="w-5/6 m-auto">
<h1 className="font-tinos my-[50px] leading-9 font-bold text-[32px] text-greenAcc">Recruitment area</h1>

<div className='w-[431px] h-[51px] m-auto bg-searchbg rounded-[12px] justify-center items-center flex '>
            <span className='px-5'>
              <img src={searchicon} />
            </span>
            <input 
     onChange={(e)=>(setSearch(e.target.value))
     }
     value={search}
            type='search' 
            className=' focus:outline-none px-5 w-[90%] h-full placeholder:text-[24px] placeholder:font-roboto focus:outline bg-transparent' placeholder='Search...' />
          </div>
</div>
<ForginDesc search={search}/>
    </div>
  )
}
