
import { Link, useLocation } from "react-router-dom";


export default function HeaderFormPage() {
  const location = useLocation();
  return (
    <div className="">
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-y-3 font-tinos font-bold text-xl leading-5 text-greenAcc items-center justify-center">
        <li className={`flex`}>
          <div
            className={`${
              location.pathname === "/passForm" && "bg-yellowAcc"
            } w-[29px] mx-2 h-[29px] rounded-full bg-fileUploud flex justify-center items-center font-roboto text-lg`}
          >
            {" "}
            1
          </div>
          <Link to="/passForm" className="mt-1">
            {" "}
            Personal information
          </Link>
        </li>

        <li className="flex">
          <div
            className={`${
              location.pathname === "/status" && "bg-yellowAcc"
            } w-[29px] mx-2 h-[29px] rounded-full bg-fileUploud flex justify-center items-center font-roboto text-lg`}
          >
            {" "}
            2
          </div>
          <Link to="/status" className="mt-1">
            {" "}
            Annat's marital status
          </Link>
        </li>
        <li className="flex">
          <div
            className={`${
              location.pathname === "/NationalForm" && "bg-yellowAcc"
            } w-[29px] mx-2 h-[29px] rounded-full bg-fileUploud flex justify-center items-center font-roboto text-lg`}
          >
            {" "}
            3
          </div>
          <Link to="/NationalForm" className="mt-1">
            {" "}
            I need proof of identity
          </Link>
        </li>
        <li className="flex">
          <div
            className={`${
              location.pathname === "/DetailsForm" && "bg-yellowAcc"
            } w-[29px] mx-2 h-[29px] rounded-full bg-fileUploud flex justify-center items-center font-roboto text-lg`}
          >
            {" "}
            4
          </div>
          <Link to="/DetailsForm" className="mt-1">
            {" "}
            I need proof of identity
          </Link>
        </li>
      </ul>
    </div>
  );
}
