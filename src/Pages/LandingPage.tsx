import { Link } from "react-router-dom";
import NavLandingPage from "../Components/NavLandingPage";
import "./style/landingPage.css";

import LandingSvg from "../Components/svg/LandingSvg";
import LandingPolygon from "../Components/svg/LandingPolygon";
import LandingFut from "../Components/LandingFut";
import employee from "../assets/landingPage/work.png";
import tru from "../assets/landingPage/true.svg";
import mob from "../assets/landingPage/mob.svg";
import g4 from "../assets/landingPage/G4.svg";
import t from "../assets/landingPage/t.svg";
import img from "../assets/landingPage/Group.svg";
import Title from "../Components/Title";
import Footer from "../Components/Footer";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen relative">
      <div
        className=" w-full bg-gradient-to-r from-landingBg to-gradiant min-h-[720px] "
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)" }}
      >
        <NavLandingPage />

        <div className="flex lg:flex-row flex-col justify-between w-5/6 m-auto my-10 ">
          {/* title and image */}
          <div className="md:w-3/6 w-6/6  ">
            <h1 className="font-bold leading-[45px] font-tinos text-yellowAcc text-[40px]">
              Obtain your passport easily through our website
            </h1>
            <p className="w-[430px]  text-greenAcc text-[20px] font-roboto font-normal my-4">
              From the small stuff to the big picture, organizes the work know
              what to do, why it matters, and how to get it done.
            </p>
            <Link
              to=""
              className="h-[60px] md:w-[255px] w-[200px] bg-greenAcc mt-[50px] mb-[100px] text-white font-tinos Our services flex items-center justify-center rounded-input md:text-[28px] text-[22px] py-[6px] font-bold "
            >
              Our services
            </Link>
          </div>
          {/* computer image */}
          <div>
          <div className=" flex  items-center lg:ml-[-400px] ml-[100px]">
            <div className="relative">
              <img src={img} className="mt-[170px] absolute ml-[-20px]" />
              <img src={g4} className="" />
            </div>
            <div className="flex items-center mx-3">
              <img src={mob} className="absolute" />
              <img src={tru} className="absolute mt-[160px] ml-[-30px]" />
              <img src={t} className="absolute mt-[160px] ml-[-15px]" />
            </div>
          </div>
          </div>
        </div>
        <LandingSvg />
      </div>
      <LandingPolygon />

      {/* Our website features */}
      <LandingFut />

      <div className="w-full min-h-[456px] bg-bg my-5">
        <div className="w-5/6 min-h-[456px] m-auto grid md:grid-cols-2 grid-cols-1 gap-x-16  items-center md:justify-between justify-center ">
          <img src={employee} className="m-auto" />
          <Title />
        </div>
      </div>

      {/* Services guide */}
      <div className="w-full ">
        <h1 className="text-center my-9 text-black font-tinos font-bold text-[48px] ">
          Services guide
        </h1>
        <div className=" service w-full h-[491px] flex-col flex justify-center items-center ">
          <h1 className="text-yellowAcc font-tinos md:text-[48px] text-[35px] font-bold my-3">
            Online passport service
          </h1>
          <p className="w-[576px] h-[139px] leading-7 md:text-[24px] text-[18px] md:px-0 px-10 text-white font-roboto font-light text-center">
            text ever since when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="w-[166px] h-[53px] font-tinos hover:px-10 hover:bg-gray-50 font-bold mt-[70px] bg-yellowAcc rounded-[25px] text-white text-[22px] hover:text-[18px] hover:bg-bgEmp hover:text-greenAcc items-center flex justify-center">
            see more
          </button>
        </div>
      </div>

      {/* Security */}

      <div className="w-full min-h-[456px] bg-bg my-[100px]">
        <div className="w-5/6 min-h-[456px] m-auto grid md:grid-cols-2 grid-cols-1   items-center md:justify-between justify-center ">
          <div className=" flex  items-center me-auto">
            <div className="relative">
              <img src={img} className="mt-[170px] absolute ml-[-20px]" />
              <img src={g4} className="" />
            </div>
            <div className="flex items-center mx-3">
              <img src={mob} className="absolute" />
              <img src={tru} className="absolute mt-[160px] ml-[-30px]" />
              <img src={t} className="absolute mt-[160px] ml-[-15px]" />
            </div>
          </div>

          <div className="md:w-full w-6/6 ml-[-120px] px-6 md:my-0 my-10 md:text-left  text-center">
            <h1 className="text-yellowAcc font-tinos hover:text-[42px] lg:text-[40px] text-[40px]  md:text-[28px] font-bold lg:w-[550px] leading-[45px] mb-2">
              Our website is characterized by complete data protection
            </h1>
            <p className=" xl:w-[576px]  min-h-[91px]  hover:text-[22px] lg:text-[20px] md:text-[18px] text-[20px] my-7 font-roboto text-greenAcc  font-normal leading-7">
              text ever since when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchange
            </p>
            <button className="w-[166px] h-[53px]  hover:text-yellowAcc hover:bg-bgEmp bg-yellowAcc font-tinos text-white rounded-[25px]   text-[24px] font-bold">
              see more
            </button>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}
