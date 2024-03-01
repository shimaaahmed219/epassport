import { Link } from 'react-router-dom'
import icon from '../assets/landingPage/Group (1).svg'
import { useState } from 'react'
import icon2 from '../assets/filters-2.svg'
import DropDowenNavv from './DropDowenNavv'
export default function NavLandingPage() {
  const [showDropDowen, setShowDropDowen] = useState(false)

  const toogleDropDowen = () => {
    const value = showDropDowen ? false : true
    setShowDropDowen(value)
    console.log(showDropDowen);
    

  }

  return (
    <div className='w-5/6 m-auto  items-center justify-between py-10 h-70px flex '>
      <div className='flex '>

        <h1 className={` font-tinos text-[24px]  items-center gap-x-8 text-greenAcc mt-3 mr-3  text-xl`}>
          <span className='text-yellowAcc text-[24px]'>E-</span>passport
        </h1>
        <img src={icon} />
      </div>

      <nav className='xl:block hidden'>
        
        <ul className='flex text-greenAcc justify-between gap-x-16 font-tinos font-bold text-[24px] items-center'>
          <li><Link to="">Home</Link></li>
          <li><Link to="">About Us</Link></li>
          <li><Link to="">Service</Link></li>
          <li><Link to="">passport</Link></li>
          <li><Link to="/login" className='font-roboto text-white bg-yellowAcc py-[10px] px-[24px] rounded-[25px] h-[48p]'>Sign in</Link></li>
        </ul>
      </nav>
      <div className='xl:hidden block'>
      {/* <Link to="/login" className='font-roboto text-white bg-yellowAcc py-[10px] px-[24px] rounded-[25px] h-[48p]'>Sign in</Link> */}
      <button onClick={toogleDropDowen} className=''>
        <img src={icon2} />
      </button>
      </div>
     
     {showDropDowen?<DropDowenNavv/> :''}
    </div>
  )
}
