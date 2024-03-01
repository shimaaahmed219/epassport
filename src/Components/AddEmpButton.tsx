import { Link } from "react-router-dom"

export default function AddEmpButton() {
  return (
    <div>
     <Link to="/addEmployee">
     <button className="w-[267px] h-[60px] bg-greenAcc text-white rounded-input font-roboto text-[24px] font-thin items-center flex justify-center"> <span className=" pr-3">+</span>Add an employee</button>
     </Link> 
    </div>
    
  )
}
