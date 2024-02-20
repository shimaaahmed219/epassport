import { Link, useNavigate } from 'react-router-dom'
import logOuticon from '../assets/saidbaricon/Group (2).svg'
import axios from 'axios'
import { url } from './URL'

export default function Logout() {

    const navigate = useNavigate()
    if (localStorage.getItem === null) navigate("/login");
    const logout = () => {
        axios.post(`${url}/auth/logout`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                " Authorization": `Bearer ${window.localStorage.getItem("token")}`
            }
        }).then((res) => {
            localStorage.clear();
            navigate("/login")
            console.log(res);

        }

        ).catch((error) => {
            console.log(error)
            localStorage.clear()
            navigate("/login")

        }
        );
    };






    return (
        <div className=' px-5 py-2 hover:pl-10'>
            <Link
                to=""
                className={`font-roboto font-medium flex my-2capitalize   items-center gap-[20px] w-full h-[40px] text-white border-none text-left text-[20px] hover:bg-opacity-10`}
                onClick={logout}
            >
                <img src={logOuticon} alt='' width={20} height={20} />

                log out


            </Link>
        </div>
    )
}
