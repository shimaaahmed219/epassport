import img from "../assets/passForm/Group.svg";
import CheckboxInput from "./CheckboxInput";
import DateOfBirth from "./DateOfBirth";
import EduactionForm from "./EduactionForm";
import HeaderFormPage from "./HeaderFormPage";
import PlaceOfBirth from "./PlaceOfBirth";
import PresonalForm from "./PresonalForm";
import uploadImg from "../assets/passForm/upload.svg";
import PresonalFormArabic from "./PresonalFormArabic";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";





export default function FormRequest() {
const {register} =useForm()
  return (
    <div className="w-full px-20">
      <div className="flex">
        {/* title  */}

        <div className="w-1/6 lg:mt-5 mt-20 ml-10 ">
          <img src={img} alt="" />
        </div>
        {/* </div> */}

        <div className="w-3/6 mt-20 mmd:block hidden">
          <div className=" text-center lg:ml-10 flex flex-col justify-center  items-center">
            <h3 className={`font-tinos font-bold text-[26px] leading-8 `}>
              Request to issue a regular Egyptian passport
            </h3>
            <h5 className="font-roboto font-medium text-[24px] leading-7 mt-3 ">
              (Form No. 19 Passports) is possible
            </h5>
          </div>
        </div>
      </div>

      {/* form */}
      <form className="w-full ">
        {/* image 4*6  */}
        <div className="w-[95%] ">
          <div className="w-[158px] h-[207px] bg-fileUploud ms-auto mt-[-9rem]   ">
            <input {...register('image')} type="file" className="opacity-0 w-[6/6] h-[100%] z-50" />

            <img src={uploadImg} className="absolute mt-[-170px] ml-[55px]" />

            <h6
              className={`font-tions font-bold  text-thin text-greenAcc text-[18px] text-center absolute mt-[-7rem] ml-[1rem]`}
            >
              Upload a photo
            </h6>
            <h6
              className={`font-tions font-bold text-thin text-greenAcc uppercase text-[24px] text-center absolute mt-[-5.25rem] ml-[2.5rem]`}
            >
              4*6 cm
            </h6>
          </div>
        </div>

        <div className="w-[100%] mt-10 min-h-screen bg-white rounded-[30px] p-10 shadow-shadowEmp">
          <HeaderFormPage />
          <hr className="w-[100%] h-[1px] my-10 bg-hr" />

          {/* checkbox input */}
          <CheckboxInput register={register} />

          {/* data and passport department */}
          <div className="px-10 flex lg:flex-row flex-col justify-between">
            {/* passport department */}
            <div className="flex gap-x-6 items-center">
              <label className=" font-roboto mr-5 text-[22px] text-greenAcc font-semibold">
                Passports Department
              </label>
              <input
                type="type"
                className=" focus:outline-none w-[300px] h-[50px] px-[20px]   py-[6px] border-[1px] rounded-input border-yellowAcc"
              />
            </div>

            {/* date */}
            <div className="gap-x-6 flex items-center font-roboto lg:mt-0 mt-3 text-[22px] text-greenAcc ">
              <label>The date</label>
              <input
                type="text"
                className="date-input focus:outline-none "
                value=" .... /   ..../....   22__"
              />
            </div>
          </div>

          <PresonalForm />

          <PresonalFormArabic />

          {/* date of birth */}
          <DateOfBirth />

          {/* Place of birth  */}
          <PlaceOfBirth />

          {/*  educational qualification . */}
          <EduactionForm />
        </div>

        {/* button */}
        <div className="w-full flex justify-center mt-10 mb-5">
          <Link to={"/status"}>
            <button className="w-[255px] h-[65px] bg-greenAcc text-[32px] text-white font-tinos rounded-input">
              Next
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
