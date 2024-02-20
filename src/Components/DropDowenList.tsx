import { Link } from "react-router-dom"
import Encrypted from '../assets/saidbaricon/encrypted-icon (1) 1.svg'
import employee from '../assets/saidbaricon/business-team-icon 1.svg'
import users from '../assets/saidbaricon/male-add-icon 1.svg'
import img from '../assets/saidbaricon/graph-icon 1.svg'
import Edit from '../assets/saidbaricon/shape.svg'
import Settingsicon from '../assets/saidbaricon/Group (1).svg'
import './module.css'
import './style/scrol.css'
import Logout from "./Logout"

const links = [
    { id: 1, name: 'Statistics', href: "/", src: img },
    { id: 2, name: ' Encrypted files', href: "/addFile", src: Encrypted },
    { id: 3, name: 'Employees', href: "/employee", src: employee },
    { id: 4, name: ' Users', href: "/", src: users },
    { id: 5, name: ' Edit Profile', href: "/EditEmployee", src: Edit },
    { id: 6, name: ' Settings', href: "/", src: Settingsicon },
   
    
]


export default function DropDowenList() {
  return (
    <div className=" p-5 w-[250px] h-[300px] bg-gradient-to-b mt-2 from-greenAcc to-hover z-50 lg:hidden overflow-y-auto text-ellipsis block fixed top-[70px] rounded-xl left-[50px]">
 {links.map((link)=>
    <div className="m-2 p-2 hover:px-5 flex gap-x-2 font-roboto text-[15px] border-b-2 text-white border-b-greenAcc ">
          <img src={link.src} alt='' width={20} height={20}  />
        <Link to={link.href}>{link.name}</Link></div>
 )}
                 
                 <Logout/>
    </div>
  )
}
