

import Settingsicon from '../assets/saidbaricon/Group (1).svg'
// import logOuticon from '../assets/saidbaricon/Group (2).svg'
import Encrypted from '../assets/saidbaricon/encrypted-icon (1) 1.svg'
import employee from '../assets/saidbaricon/business-team-icon 1.svg'
import users from '../assets/saidbaricon/male-add-icon 1.svg'
import img from '../assets/saidbaricon/graph-icon 1.svg'
import Edit from '../assets/saidbaricon/shape.svg'

import './module.css'
import { Link } from 'react-router-dom'
import Logout from './Logout'


export default function Saidebar() {

    const links = [
        { id: 1, name: 'Statistics', href: "/", src: img },
        { id: 2, name: ' Encrypted files', href: "/addFile", src: Encrypted },
        { id: 3, name: 'Employees', href: "/employee", src: employee },
        { id: 4, name: ' Users', href: "/", src: users },
        { id: 5, name: ' Edit Profile', href: "/EditEmployee", src: Edit },
        { id: 6, name: ' Settings', href: "/", src: Settingsicon },
        
    ]

    return (
<div className=''>
        <div className='w-[311px] min-h-[700px] bg-greenAcc truncate lg:block hidden fixed top-0 left-0 z-50'>
         
            <div className='flex flex-col  items-center py-6'>
            
            <div className="w-[65px] h-[67px] rounded-full userIcon flex justify-center items-center ">
                <img src="" alt='' />
            </div>
            <h2 className={`font-tinos text-yellowAcc capitalize text-[24px]`}>user name</h2>
            <h6 className={`font-roboto font-light text-email  text-[20px]`}>email adrees from user</h6>
            <div className='flex flex-col w-full mt-5  '>
                {links.map(link => (
                    <div className='hover:bg-hover px-5 hover:pl-10'>
   <Link
                        key={link.id}
                        to={link.href}
                        className={`font-roboto font-medium hover:text-gray-100 flex my-2  capitalize items-center gap-[20px] w-full h-[40px] text-white border-none text-left text-[20px] bg-greenAcc hover:bg-opacity-10`}
                    >
                        <img src={link.src} alt='' width={20} height={20} />


                        {link.name}

                    </Link>


                    </div>
                 
                )

                )}
                <Logout/>
            </div>



            </div>

        </div>
        </div>
    )
}
