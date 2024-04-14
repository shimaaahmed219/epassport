
import LoginWeb from '../Components/login/LoginWeb'
import LoginMob from '../Components/login/LoginMob'




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