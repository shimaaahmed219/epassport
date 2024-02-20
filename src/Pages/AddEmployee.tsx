
import AddEmpForm from '../Components/AddEmpForm'
import Saidebar from '../Components/Saidebar'
import Nav from '../Components/Nav'

export default function AddEmployee() {
    return (

        <div className='min-h-screen bg-bg '>
            <div className='flex  flex-row'>
               <div className='lg:block hidden'>
               <Saidebar />
                </div> 
                <div className='w-full h-full'>
                <Nav />
                <hr className='w-full h-[0.15rem] bg-greenAcc my-2'/>
                <div className='w-full h-full p-7'>
                <h1 className={` font-roboto ms-[50px] text-[26px]  capitalize text-greenAcc`}>Add Employee </h1>
                <AddEmpForm/>
                </div>
               
                </div>
            </div>
          


        </div>
    )
}
