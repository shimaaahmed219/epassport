import { Link } from "react-router-dom";
import NavLandingPage from "../Components/NavLandingPage";
import "./style/landingPage.css";
import securty from '../assets/landingPage/folder-with-documents-padlock 1.png'
import LandingSvg from "../Components/svg/LandingSvg";
import LandingPolygon from "../Components/svg/LandingPolygon";
import LandingFut from "../Components/LandingFut";
import employee from '../assets/landingPage/work.png'
import icon from '../assets/landingPage/Group (1).svg'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen relative">
      <div
        className=" w-full bg-gradient-to-r from-landingBg to-gradiant h-[720px] "
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)" }}
      >
        <NavLandingPage />

        <div className="flex justify-between w-5/6 m-auto my-10 ">
          {/* title and image */}
          <div className="w-3/6">
            <h1 className="font-bold leading-[45px] font-tinos text-yellowAcc text-[40px]">
              Obtain your passport easily through our website
            </h1>
            <p className="w-[430px]  text-greenAcc text-[20px] font-roboto font-normal my-4">
              From the small stuff to the big picture, organizes the work know
              what to do, why it matters, and how to get it done.
            </p>
            <Link
              to=""
              className="h-[60px] w-[255px] bg-greenAcc mt-[50px] mb-[100px] text-white font-tinos Our services flex items-center justify-center rounded-input text-[28px] py-[6px] font-bold "
            >
              Our services
            </Link>
          </div>

          {/* computer image */}
          <div></div>
        </div>
        <LandingSvg />
      </div>
      <LandingPolygon />

      {/* Our website features */}
      <LandingFut />
      <div className="w-full h-[456px] bg-bg">
        <div className="w-5/6 m-auto flex items-center justify-araound gap-16">
          <img src={employee} className="mt-[70px]" />
          <div className="">
            <h1 className="text-yellowAcc font-tinos text-[40px] font-bold w-[430px] leading-[45px] mb-2">We have a work team with many skills</h1>
            <p className="w-[496px] h-[91px] text-[20px] font-roboto text-greenAcc  font-normal leading-6 ">text ever since  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
        </div>

      </div>
      {/* Services guide */}
      <div className="w-full ">
        <h1 className="text-center my-5 text-black font-tinos font-bold text-[48px]">Services guide</h1>
        <div className=" service w-full h-[491px] flex-col flex justify-center items-center ">
          <h1 className="text-yellowAcc font-tinos text-[48px] font-bold my-3">Online passport service</h1>
          <p className="w-[576px] h-[139px] leading-7 text-[24px] text-white font-roboto font-light text-center">text ever since  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <button className="w-[166px] h-[53px] font-roboto font-bold mt-[70px] bg-yellowAcc rounded-[25px] text-white text-[22px] items-center flex justify-center">see more</button>

        </div>
      </div>
      {/* Security */}
      <h1 className="text-center font-tinos font-bold my-5 text-[48px] text-greenAcc">Security</h1>
      <div className="w-full h-[456px] bg-bg mb-[110px]">
        <div className=" w-5/6 m-auto justify-around gap-x-5 py-[50px] items-center flex ">
          <img src={securty} />
          <div className="">
            <h1 className="text-yellowAcc font-tinos text-[40px] font-bold w-[430px] leading-[45px] mb-2">We have a work team with many skills</h1>
            <p className="w-[576px] h-[91px] text-[20px] font-roboto text-greenAcc  font-normal leading-6 ">text ever since  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <button className="w-[166px] h-[53px] rounded-[25px]  bg-yellowAcc my-10">see more</button>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="w-full bg-greenAcc h-[332px] pt-10">

        <div className=" w-5/6 m-auto py-10 grid lg:grid-cols-4  md:grid-cols-2  grid-cols-1 ">
          
          <div>
            <img src={icon} />
            <h6 className="text-white text-[16px] w-[165px]">Funding freemium long tail hypotheses first mover.</h6>
            <h6 className="my-2">
              <MailOutlineIcon className="text-gray-400" />
              <span className="text-white mx-2">eagensi@mail.com</span>
            </h6>
            <h6 className="my-2">
              <LocalPhoneIcon className="text-gray-500 " />
              <span className="text-white mx-2">011234567</span>
            </h6>
          </div>

          {/*  */}
          <div className="">
            <h6 className="text-yellowAcc text-[20px] font-roboto capitalize font-light">Navigation</h6>
            <div className="w-[153px] flex-col flex text-white font-ropoto text-[20px]">
              <Link to=''>Home </Link>
              <Link to=''>About Us       </Link>
              <Link to=''>What We Do     </Link>
              <Link to=''>To The Power of 10
                Donate </Link>
            </div>

          </div> 
          {/*  */}
          <div className="">
            <h6 className="text-yellowAcc text-[20px] font-roboto capitalize font-light">What We Do</h6>
            <div className=" flex-col flex text-white font-ropoto text-[20px]">
              <ul>
                <li>Encouraging Testing</li>
                <li>Strengthening Advocacy</li>
                <li>Sharing Information</li>
                <li>Building Leadership</li>
                <li>Engaging With Global Fund</li>
                <li>Shining a Light</li>
              </ul>
            </div>
          </div>
          {/*  */}

          <div className="">
            <h6 className="text-yellowAcc text-[20px] font-roboto capitalize font-light">TALK TO US</h6>
            <div className=" flex-col flex text-white font-ropoto text-[20px]">
              <ul>
                <li>support@ercom.com</li>
                <li>+66 2399 1145</li>
                <li>Contact Us</li>
                <li>Facebook</li>
                <li>Linkedin</li>
                <li>Twitter</li>
              </ul>

            </div>

          </div>

        
        </div>
         <div className="w-full bg-greenAcc">
         <h6 className="text-[14px] text-white m-auto text-center py-2"> © 2019 Lift Media. All Rights Reserved.</h6>
         </div>
      </div>

    </div>
  );
}
