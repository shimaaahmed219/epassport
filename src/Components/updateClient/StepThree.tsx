/* eslint-disable @typescript-eslint/no-explicit-any */
import HeaderFormPage from "../HeaderFormPage";
import Hr from "../Hr";


interface StepThreeProps {
    register: any;
    errors: any;
    prevStep: () => void;
    nextStep: () => void;
    step: number;
    image:any;
    goToStep: (stepNumber: number) => void;
  }


export default function StepThree({register, errors,prevStep,image,nextStep ,step,goToStep}:StepThreeProps) {
  return (
    <>
     <div className="w-[85%] shadow-shadowEmp mt-10 bg-baform min-h-[778px] m-auto py-7  rounded-[20px] justify-center ">
              <HeaderFormPage goToStep={goToStep} step={step} />
              <Hr />

              {/* inputs */}

              <div className="py-10">
                <div className="w-6/5 m-auto flex px-5 items-center">
                  <label className="text-greenAcc mx-3 font-roboto text-[22px] font-medium ">
                    National ID Card
                  </label>
                  <input
                    {...register("national_id", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    className="rounded-input font-roboto text-lg px-5 tracking-wider bg-transparent focus:outline-none border-[1px] border-yellowAcc w-[83%] h-[50px]"
                  />
                </div>
                {errors.national_id && (
                  <div className="text-red-500 text-[20px] ml-[200px]">
                    ***{errors.national_id.message}
                  </div>
                )}

                <div className="w-5/6 px-5 mx-5 flex items-center my-10">
                  <label className="text-greenAcc   font-roboto text-[22px] font-medium capitalize ">
                    university Id
                  </label>
                  <input
                    {...register("university_id")}
                    type="text"
                    className="rounded-input text-lg px-5 tracking-wider font-roboto   bg-transparent m-auto focus:outline-none border-[1px] border-yellowAcc w-[65%] h-[50px]"
                  />
                </div>
              </div>

              {/* fils */}
              <div className="md:flex justify-center gap-8">
                <div>
                  <div className="pl-5">
                    <label className="block text-yellowAcc my-3 font-roboto text-[22px] font-medium text-center">
                      Birth certificate
                    </label>
                    <div className="w-[236px] h-[200px] rounded-[7px] bg-fileUploud relative">
                      <input
                        {...register("birth_cert")}
                        type="file"
                        className="opacity-0 w-full h-full absolute z-50"
                      />

                      <div className="absolute text-center ">
                        <img
                          className=" w-[236px] h-[200px]"
                          src={`https://epassport-api.preview-ym.com/${image?.birth_cert}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="pl-5">
                    <label className="block text-yellowAcc my-3 font-roboto text-[22px] font-medium text-center">
                      Identification card
                    </label>
                    <div className="w-[236px] h-[200px] rounded-[7px] bg-fileUploud relative">
                      <input
                        {...register("national_id_photo")}
                        type="file"
                        className="opacity-0 w-full h-full absolute z-50"
                      />
                      <div className="absolute text-center ">
                        <img
                          className=" w-[236px] h-[200px]"
                          src={`https://epassport-api.preview-ym.com/${image?.national_id_photo}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="pl-5">
                    <label className="block my-3 text-yellowAcc font-roboto text-[22px] font-medium text-center">
                      graduation cert
                    </label>
                    <div className="w-[236px] h-[200px] rounded-[7px] bg-fileUploud relative">
                      <input
                        {...register("graduation_cert")}
                        type="file"
                        className="opacity-0 w-full h-full absolute z-50"
                      />

                      <div className="absolute text-center ">
                        <img
                          className=" w-[236px] h-[200px]"
                          src={`https://epassport-api.preview-ym.com/${image?.graduation_cert}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* date */}

              <div className="w-5/6 m-auto mt-10">
                <label className="block font-ropoto text-[22px] font-medium text-greenAcc">
                  Issuer
                </label>

                <div className="flex">
                  <input
                    type="text "
                    className="border-[1px] border-yellowAcc rounded-input w-[276px] h-[50px] bx-[20px] by-[6px] bg-transparent"
                  />

                  <label className="text-[22px] my-2 ml-10 mr-5 text-greenAcc font-roboto font-medium">
                    Release Date
                  </label>
                  <input
                    type="text"
                    className="date-input focus:outline-none bg-transparent "
                    value=" .... /   ..../....   22__"
                  />
                </div>
              </div>
            </div>
            <div className="my-10 m-auto mt-[50px] flex w-[80%] justify-around">
              <button
                className="w-[255px] mb-10  h-[65px] bg-greenAcc text-[32px] text-white font-tinos rounded-input"
                type="button"
                onClick={prevStep}
              >
                back
              </button>
              <button
                className="w-[255px] mb-10  h-[65px] bg-greenAcc text-[32px] text-white font-tinos rounded-input"
                type="button"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
    </>
  )
}
