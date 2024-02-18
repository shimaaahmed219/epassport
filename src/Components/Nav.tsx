
import { useState } from 'react'
import icon2 from'../assets/filters-2.svg'
import icon from '../assets/navImg/Group (1).svg'
import Saidebar from './Saidebar'


function Nav() {

    const [showSidebar,setShowSidebar]=useState(false)
const toogleSidebar =()=>{
   setShowSidebar(showSidebar===false?true:false)

    
    
}

    return (

        <div className={`${showSidebar ? <Saidebar/> : '' }bg-bg w-5/6 mt-3 m-auto flex flex-row justify-between `}>
<button onClick={toogleSidebar}>

            <img src={icon2}/>
</button>
           



            <div className='flex row w-full'>
                <div className='ms-auto flex'>
                <h1 className={` font-tinos text-[26px] text-greenAcc mt-3 mr-3  text-xl`}>
                    <span className='text-yellowAcc text-[22px]'>E-</span>passport
                </h1>




                <img src={icon} alt='enc-img' className='ms-auto' />

                </div>
                
               
            </div>
            {showSidebar===true? <Saidebar/>  : ''}
            {showSidebar===true? <img src={icon2} onClick={toogleSidebar} className='fixed left-[360px]'/>  : ''}
       </div>
        

    )
}

export default Nav