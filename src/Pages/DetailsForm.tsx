import { Link } from "react-router-dom";
import HeaderFormPage from "../Components/HeaderFormPage";
import Hr from "../Components/Hr";
import Nav from "../Components/Nav";


export default function DetailsForm() {
    return (
        <div className="bg-bg w-full py-2 min-h-[1100px] ">
            <Nav />
            <Hr />
            <form>
                <div className=" w-5/6 min-h-[423px] mb-10 py-5 bg-baform shadow-shadowEmp rounded-[20px] m-auto mt-10">
                    <HeaderFormPage />
                    <Hr />
                    <div className="grid xl:grid-cols-3  lg:grid-cols-2 grid-cols-1 px-10 pt-10 mb-5">
                        {/* name input */}

                        <div>
                            <label className="block font-roboto my-2 text-[20px] text-greenAcc">The name</label>
                            <input className="border-[1px]  border-yellowAcc bg-transparent md:w-[330px] rounded-input h-[50px]" />
                        </div>

                        {/* address input */}
                        <div>
                            <label className="block my-2 font-roboto text-[20px] text-greenAcc">The address</label>
                            <input className="border-[1px] border-yellowAcc bg-transparent md:w-[330px] rounded-input h-[50px]" />
                        </div>
                        {/* phone input  */}
                        <div>
                            <label className="block font-roboto my-2 text-[20px] text-greenAcc">Phone</label>
                            <input className="border-[1px] border-yellowAcc bg-transparent md:w-[330px] rounded-input h-[50px]" />
                        </div>


                    </div>
                    {/*  */}
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 px-10 pt-10 mb-5">
                        {/* name input */}
                        <div>
                            <label className="block font-roboto my-2 text-[20px] text-greenAcc">The name</label>
                            <input className="border-[1px] border-yellowAcc bg-transparent w-[330px] rounded-input h-[50px]" />
                        </div>

                        {/* address input */}
                        <div>
                            <label className="block font-roboto my-2 text-[20px] text-greenAcc">The address</label>
                            <input className="border-[1px] border-yellowAcc bg-transparent w-[330px] rounded-input h-[50px]" />
                        </div>
                        {/* phone input  */}
                        <div>
                            <label className="block font-roboto my-2 text-[20px] text-greenAcc">Phone</label>
                            <input className="border-[1px] border-yellowAcc bg-transparent w-[330px] rounded-input h-[50px]" />
                        </div>


                    </div>
                </div>
                <Hr />
                {/* paragraph */}
                <div className="w-5/6 mt-5 px-10 py-10 m-auto">
                    <p className="font-tinos text-[26px] font-bold">
                        I, the undersigned, declare that all the data shown above, as well as the documents provided
                        , are correct and conform to the situation, and I have not obtained a valid or renewable passport at the present time.
                    </p>
                </div>

                <div className="w-5/6 my-5 px-10 py-10 m-auto flex">
                    <div className="flex items-center py-6">
                <label className="text-[22px] my-2 ml-10 mr-5 text-greenAcc font-roboto font-medium">Done in</label>
                            <input
                                type="text"
                                className="date-input focus:outline-none bg-transparent "
                                value=" .... /   ..../....   22__"
                            />
                            </div>
                            <div className="w-[65%]">
                                <label className="block font-roboto my-5 text-[20px] font-medium mt-[-20px]">Signature of the student (or legal representative)</label>
                                <input className="w-full border-[1px] border-yellowAcc h-[50px] bg-transparent py-[6px] px-[20px] rounded-input"/>
                            </div>
                </div>

                
                <div className="  font-tinos w-5/6 m-auto justify-around flex ">
                    <Link to="NationalForm">
                        <button className="border-[3px] border-greenAcc rounded-input w-[255px] h-[60px] text-greenAcc capitalize font-bold">back</button>
                        </Link>
                        <Link to="">
                        <button className="bg-greenAcc text-white rounded-input w-[255px] h-[60px]  capitalize font-bold">next</button>
</Link>
                    </div>
            </form>
        </div>
    )
}
