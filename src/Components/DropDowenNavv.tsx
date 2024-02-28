import { Link } from "react-router-dom";

export default function DropDowenNavv() {
    return (
        <div className=" w-[200px] h-[200px] bg-landingBg shadow-lg text-yellowAcc overflow-auto text-[20px] rounded-xl fixed top-[100px] right-[50px]">
            <ul>
                <Link to="">
                    {" "}
                    <li className="hover:bg-greenAcc py-2 px-5 text-greenAcc font-tinos  rounded-xl font-bold hover:px-8 hover:text-white">
                        Home
                    </li>
                </Link>


                <Link to="">
                    {" "}
                    <li className="hover:bg-greenAcc py-2 px-5 text-greenAcc font-tinos  rounded-xl font-bold hover:px-8 hover:text-white">
                        About Us
                    </li>
                </Link>

                
                <Link to="">
                    {" "}
                    <li className="hover:bg-greenAcc py-2 px-5 text-greenAcc font-tinos  rounded-xl font-bold hover:px-8 hover:text-white">
                        Service
                    </li>
                </Link>
                <Link to="">
                    {" "}
                    <li className="hover:bg-greenAcc py-2 px-5 text-greenAcc font-tinos  rounded-xl font-bold hover:px-8 hover:text-white">
                        passport
                    </li>
                </Link>
            </ul>
        </div>
    );
}
