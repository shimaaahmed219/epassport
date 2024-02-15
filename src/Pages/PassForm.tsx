

import FormRequest from '../Components/FormRequest'
import Nav from '../Components/Nav'


export default function PassForm() {
  return (
    <div className='bg-bg w-6/6 min-h-screen py-3'>
    <Nav/>
    <hr className='w-6/6 h-[0.15rem] bg-greenAcc my-3'/>
    <div className='w-6/6 m-auto '>
       <FormRequest/>
    </div>
    
        </div>
  )
}
