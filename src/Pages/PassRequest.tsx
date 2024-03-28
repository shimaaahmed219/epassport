import PassForm from "./PassForm";
import MartialStatus from "./MartialStatus";
import NationalForm from "./NationalForm";
import DetailsForm from "./DetailsForm";
import { useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

// import { schema } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js";
import { url } from "../Components/URL";
import axios from "axios";
type schema = z.infer<typeof schema>;
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { schema } from "../validation";



export default function PassRequest() {
  const [currentStep, setCurrentStep] = useState(1);
  const methods = useForm<schema>({
    resolver: zodResolver(schema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onsubmit = (data: FieldValues) => {
    console.log(data);
    const formdata = new FormData();
    formdata.append("first_name", data.first_name);
    formdata.append("second_name", data.second_name);
    formdata.append("third_name", data.third_name);
    formdata.append("last_name", data.last_name);
    formdata.append("type", data.type);
    formdata.append("passports_department", data.passports_department);
    formdata.append("national_id", data.national_id);
    formdata.append("national_id_photo", data.national_id_photo[0]);
    formdata.append("date_of_birth", data.date_of_birth);
    formdata.append("birth_cert", data.birth_cert[0]);
    formdata.append("photo", data.photo[0]);
    formdata.append("job", data.job);
    formdata.append("phone", data.phon);
    formdata.append("home_phone", data.home_phone);
    formdata.append("academic_qualification", data.academic_qualification);
    formdata.append("graduation_cert", data.graduation_cert[0]);
    formdata.append("universty_id", data.universty_id);
    formdata.append("marital_status", data.marital_status);
    formdata.append("address", data.address);
    formdata.append("governorate", data.governorate);
    formdata.append("gender", data.gender);
    formdata.append("houband_name", data.houband_name);
    formdata.append("religion", data.religion);
    formdata.append("age", data.age);
    axios
      .post(`${url}/client`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          // "Authorization": `Bearer ${token}`,
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PassForm />;
      case 2:
        return <MartialStatus />;
      case 3:
        return <NationalForm />;
      case 4:
        return <DetailsForm />;
      default:
        return null;
    }
  };
  return (
    <div className=" w-full  bg-bg">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onsubmit)}>
          {renderStep()}
          <div className="w-3/6 flex justify-around m-auto ">
            {currentStep > 1 && (
              <button
                className="w-[255px]  h-[65px] bg-greenAcc text-[32px] text-white font-tinos rounded-input"
                type="button"
                onClick={prevStep}
              >
                Previous
              </button>
            )}
            {currentStep < 4 && (
              <button
                className="w-[255px] mb-10  h-[65px] bg-greenAcc text-[32px] text-white font-tinos rounded-input"
                type="button"
                onClick={nextStep}
              >
                Next
              </button>
            )}
            {currentStep === 4 && (
              <button
                className="w-[255px] mb-10  h-[65px] bg-greenAcc text-[32px] text-white font-tinos rounded-input capitalize"
                type="submit"
              >
                next
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
