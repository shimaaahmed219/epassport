import EncryptionType from '../Components/EncryptionType'
import Nav from '../Components/Nav'

import Bcol from '../Components/svg/Bcol'
import Brow from '../Components/svg/Brow'
export default function Encryption() {
  return (
    <div className='bg-bg min-h-screen py-5 w-6/6 '>

      <Nav />
      <hr className='w-6/6  h-[0.15rem] bg-greenAcc my-3'/>


      <div className='w-6/6 h-[100px] m-auto'>
        
        <EncryptionType/>
        
     <div className='md:block hidden'>
      
     <div className='flex flex-row my-0 m-auto justify-center'>
          <Bcol />
          <Brow />
          <Bcol />

        </div>
        <div className=' flex my-0 mt-[-4rem] justify-center'>
          <Brow />
        </div>
     </div>
      


       
      </div>
    

    </div>
  )
}