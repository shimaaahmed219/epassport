
import { Link } from "react-router-dom";
import HeaderFormPage from "../Components/HeaderFormPage";
import Hr from "../Components/Hr";
import Nav from "../Components/Nav";
import upload from '../assets/passForm/uploadfile.svg'

export default function NationalForm() {
    return (
        <div className="bg-bg lg:min-h-[1050px] min-h-[1200px] w-full py-1">
            <Nav />
            <Hr />
            <div className="w-[85%] shadow-shadowEmp my-10 bg-baform min-h-[778px] m-auto py-7  rounded-[20px] justify-center ">
                <HeaderFormPage />
                <Hr />

                {/* inputs */}
                <form>
                    <div className="py-10">

                        <div className="w-5/6 m-auto flex justify-between items-center">
                            <label className="text-greenAcc font-roboto text-[22px] font-medium ">National ID</label>
                            <input className="rounded-input bg-transparent focus:outline-none border-[1px] border-yellowAcc w-[83%] h-[50px]" />
                        </div>
                        <div className="w-5/6 m-auto flex  items-center my-10">
                            <label className="text-greenAcc font-roboto text-[22px] font-medium ">National ID Card</label>
                            <input className="rounded-input bg-transparent m-auto focus:outline-none border-[1px] border-yellowAcc w-[65%] h-[50px]" />
                        </div>
                    </div>

                    {/* fils */}
                    <div className="md:flex justify-center gap-8">
                        <div className="pl-5">
                            <label className="block text-yellowAcc font-roboto text-[22px] font-medium text-center">Birth certificate</label>
                            <div className="w-[236px] h-[200px] rounded-[7px] bg-fileUploud relative">
                                <input type='file' className="opacity-0 w-full h-full absolute z-50" />
                                <div className="absolute text-center ">
                                    <img src={upload} className="mt-[40px] ml-[79px]" />
                                    <div className="mt-[30px] ml-[60px] text-[18px] font-tinos text-greenAcc">
                                        <h3>Upload a photo</h3>
                                        <h3>4*6 CM</h3></div>
                                </div>

                            </div>
                        </div>

                        <div className="pl-5">
                            <label className="block text-yellowAcc font-roboto text-[22px] font-medium text-center">Identification card</label>
                            <div className="w-[236px] h-[200px] rounded-[7px] bg-fileUploud relative">
                                <input type='file' className="opacity-0 w-full h-full absolute z-50" />
                                <div className="absolute text-center ">
                                    <img src={upload} className="mt-[40px] ml-[79px]" />
                                    <div className="mt-[30px] ml-[60px] text-[18px] font-tinos text-greenAcc">
                                        <h3>Upload a photo</h3>
                                        <h3>4*6 CM</h3></div>
                                </div>

                            </div>
                        </div>

                    </div>
                    {/* date */}


                    <div className="w-5/6 m-auto mt-10">
                        <label className="block font-ropoto text-[22px] font-medium text-greenAcc">Issuer</label>
                       
                        <div className="flex">
                            <input type='text ' className="border-[1px] border-yellowAcc rounded-input w-[276px] h-[50px] bx-[20px] by-[6px] bg-transparent" />

                            <label className="text-[22px] my-2 ml-10 mr-5 text-greenAcc font-roboto font-medium">Release Date</label>
                            <input
                                type="text"
                                className="date-input focus:outline-none bg-transparent "
                                value=" .... /   ..../....   22__"
                            />

                        </div>
                    </div>


                    <div className="absolute mt-[90px] font-tinos   lg:text-[32px] text-[22px] flex lg:gap-x-32 w-[60%] justify-between gap-16 lg:ml-[13%] ml-[10%]">
                       
                       <Link to="/status">
                        <button className="border-[3px] border-greenAcc rounded-input w-[255px] h-[60px] text-greenAcc capitalize font-bold">back</button>
                        </Link>
                        <Link to="/DetailsForm">
                        <button className="bg-greenAcc text-white rounded-input w-[255px] h-[60px]  capitalize font-bold">next</button>
                        </Link>
                    </div>

                </form>
            </div>

        </div>
    )
}