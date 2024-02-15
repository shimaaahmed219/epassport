
 import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
export default function HeaderFormPage() {
  return (
   

    <div className='lg:flex lg:flex-row justify-around grid md:grid-cols-2 grid-cols-1 font-tinos font-bold text-xl lg:gap-x-[60px]'>
    <Box className='lg:w-[200px] flex items-center my-1'>
    <Link to='' className='w-[29px] h-[29px] font-roboto text-lg font-medium bg-yellowAcc text-white rounded-full flex justify-center items-center mx-1'>1</Link>
        <h4 className='w-[70%]'>
        Personal information
        </h4>
      
    </Box>
    <Box className='lg:w-[220px] flex items-center my-1'>
    <Link to='' className='w-[29px] h-[29px] font-roboto text-lg font-medium bg-fileUploud rounded-full flex justify-center items-center mx-1'>2</Link>
        <h4 className='w-[70%]'>
        Annat's marital status
        </h4>
      
    </Box>
    
    <Box className='lg:w-[200px] flex items-center my-1 '>
    <Link to='' className='w-[29px] h-[29px] font-roboto text-lg font-medium bg-fileUploud rounded-full flex justify-center items-center mx-1'>3</Link>
        <h4 className='w-[80%]'>
        I need proof of identity
        </h4>
      
    </Box>
    
    <Box className='lg:w-[450px] flex flex-row  items-center my-1 '>
    <Link to='' className='w-[29px] h-[29px] font-roboto text-lg font-medium bg-fileUploud rounded-[20px] flex justify-center items-center '>4</Link>
    <h4 className='w-[90%]'>Names of those who can be reviewed when necessary in the A.S.C</h4>
      
    </Box>
    
    
       </div>
    
  )
}
