import { Link, useLocation } from "react-router-dom";
import icon from "../assets/landingPage/Group (1).svg";
import { useState } from "react";
import icon2 from "../assets/filters-2.svg";
import DropDowenNavv from "./landingPage/DropDowenNavv";
import { LoginOutlined } from "@mui/icons-material";
export default function Navbar() {
  // import {log} from '@mui/icons-material'
  const location = useLocation()
  const [showDropDowen, setShowDropDowen] = useState(false);

  const toogleDropDowen = () => {
    const value = showDropDowen ? false : true;
    setShowDropDowen(value);
    console.log(showDropDowen);
  };

  return (
    <div className='w-5/6 m-auto  z-50 items-center justify-between py-10 h-70px flex '>
      <div className='flex '>

      <img src={icon} className="lg:w-[77px] w-[50px]" />
        <h1 className={` font-tinos text-[24px]  items-center gap-x-8 text-white mt-3 ml-3  text-xl`}>
          <span className='text-yellowAcc text-[24px]'>E-</span>passport
        </h1>
      
      </div>

      <nav className='xl:block hidden ms-auto'>

        <ul className='flex text-white justify-between gap-x-16 font-tinos font-bold text-[24px] items-center'>
          <li className={`relative ${location.pathname==='/'?"border-b-2 border-yellowAcc":''} `}><Link to="/">Home</Link></li>
          <li className={`relative ${location.pathname==='/about'?"border-b-2 border-yellowAcc":''} `}><Link to="/about">About Us</Link></li>
          <li className={`relative ${location.pathname==='/service'?"border-b-2 border-yellowAcc":''} `}><Link to="/service">Service</Link></li>
          <li className={`relative ${location.pathname==='/passForm'?"border-b-2 border-yellowAcc":''} `}><Link to="/passForm">passport</Link></li>
          <li><Link to="/login" className='font-roboto    text-white bg-yellowAcc py-[10px] px-[24px] rounded-[25px] h-[48p]'>Sign in</Link></li>
        </ul>
      </nav>
      <div className='xl:hidden block w-6/6 ms-auto'>
        <div className="flex md:flex-row flex-col">
        <button onClick={toogleDropDowen} className={`${showDropDowen&&<DropDowenNavv/>}`}>
        <img src={icon2} />
      </button>
      <div  className={`${!showDropDowen&&"hidden"} `}>
        <DropDowenNavv/>
      </div>
      <Link to="/login" className='font-roboto text-white py-[10px] px-[24px] md:ml-0 ml-[-30px] h-[48p]'> <LoginOutlined/> Sign in</Link>
        </div>
    
      </div>
     
    </div>
   
  
  );
}
