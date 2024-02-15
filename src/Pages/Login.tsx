
import LoginWeb from '../Components/LoginWeb'
import LoginMob from '../Components/LoginMob'




export default function Login() {
  
    return (
        <div className='w-full h-screen'>
            {/* web screen */}

            <LoginWeb />


            {/* mobile screen  */}
            <div className=' w-full h-screen xsm:hidden block'>


                <LoginMob />

            </div>
        </div>
    )
}