
import Nav from '../Components/Nav'


import EditEmpForm from '../Components/UpdateEmployee/EditEmpForm';
import FexidSidebar from '../Components/FexidSidebar';

export default function EditeProfile() {
    return (
        <div className='min-h-screen bg-bg'>
            <div className='flex  flex-row'>
                <FexidSidebar/>
                <div className='w-full h-full'>
                    <Nav />
                    <hr className='w-full h-[0.15rem] bg-greenAcc my-2' />
                    <div className='w-full h-full p-1'>
                        {/* <h1 className={`${rob.className} ms-[50px]  text-[26px]  capitalize text-greenAcc`}>Edit Employee </h1> */}
                        <EditEmpForm />
                    </div>

                </div>
            </div>



        </div>
    )
}
