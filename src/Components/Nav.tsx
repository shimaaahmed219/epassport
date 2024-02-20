
import { useState } from 'react'
import icon2 from '../assets/filters-2.svg'
import icon from '../assets/navImg/Group (1).svg'
import Saidebar from './Saidebar'
// import DropDowenList from './DropDowenList'


function Nav() {

    // show sidebar xl size
    const [showSidebar, setShowSidebar] = useState(false)



    const toogleSidebar = () => {
        setShowSidebar(showSidebar === false ? true : false)

    }



    return (
        // xl button size
        <div className={`bg-bg w-5/6 mt-3 m-auto flex flex-row justify-between `}>
            <button onClick={toogleSidebar} className=' '>

                <img src={icon2} />
            </button>
            {/* small size */}



            <div className='flex row w-full'>
                <div className='ms-auto flex'>
                    <h1 className={` font-tinos text-[26px] text-greenAcc mt-3 mr-3  text-xl`}>
                        <span className='text-yellowAcc text-[22px]'>E-</span>passport
                    </h1>




                    <img src={icon} alt='enc-img' className='ms-auto transition ease-in-out delay-150 duration-700 ' />

                </div>


            </div>
            {showSidebar === true ? <Saidebar /> : ''}
            {showSidebar === true ?
                <img src={icon2} onClick={toogleSidebar} className='fixed left-[360px] ' /> : ''}


        </div>


    )
}

export default Nav