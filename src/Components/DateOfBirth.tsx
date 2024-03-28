// import { FormControl,FormLabel,FormControlLabel,RadioGroup,Radio } from "@mui/material"

import { FormControlLabel, Checkbox } from "@mui/material";
import { useFormContext } from "react-hook-form";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export default function DateOfBirth() {
  const { register } = useFormContext();
  return (
    <div className="flex  py-5">
      <div className="flex px-10 pt-[15px] items-center text-greenAcc xl:w-[50%]  font-roboto">
        <label className="font-roboto  mx-5 text-[22px] font-semibold text-greenAcc">
          Date of birth{" "}
        </label>

        <div>
          <input
            {...register("date_of_birth")}
            type="text"
            className="border-[1px] txt-[20px] font-roboto px-5 border-yellowAcc w-[250px] h-[50px] rounded-input"
          />
        </div>
      </div>

      <div className="flex w-[30%]  justify-around px-10 items-center mt-[30px] ">
        <h1 className="mx">gender:</h1>
        {/* <div className=" flex-col ">
          <label htmlFor="mela" className="mx-2">
            {" "}
            male
          </label>
          <input
            {...register("gender")}
            type="radio"
            value="male"
            id="field-wind"
            style={{ color: '#F6C90E' }} 
          />
        </div>

        <div className="flex-col">
          <label htmlFor="female" className="mx-2">
            female
          </label>
          <input
          style={{ color: '#F6C90E' }} 
            {...register("gender")}
            type="radio"
            value="female"
            id="field-wind"
          />
        </div> */}
        {/* <Box className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-5/6  m-auto  justify-around lg:gap-x-[13rem] font-medium  font-roboto text-xl pt-7 pb-5  '> */}
        <FormControlLabel
          {...register("gender")}
          value={"male"}
          control={
            <Checkbox
              icon={<RadioButtonUncheckedIcon></RadioButtonUncheckedIcon>}
              checkedIcon={<CheckCircleIcon></CheckCircleIcon>}
              style={{ color: "#F6C90E" }}
            />
          }
          label="male"
          className=""
        />
        <FormControlLabel
          {...register("gender")}
          value={"female"}
          control={
            <Checkbox
              icon={<RadioButtonUncheckedIcon></RadioButtonUncheckedIcon>}
              checkedIcon={<CheckCircleIcon></CheckCircleIcon>}
              style={{ color: "#F6C90E" }}
            />
          }
          label="female"
          className="lg:pl-20"
        />

        {/* </Box> */}
      </div>
    </div>
  );
}
