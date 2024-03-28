import { FormControlLabel, Box, Checkbox } from "@mui/material"
import HeaderFormPage from "../Components/HeaderFormPage"
import Nav from "../Components/Nav"
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useFormContext } from "react-hook-form";
// import { z } from "zod";

function MartialStatus() {
    const {register} = useFormContext()
    return (
        <div className="w-full min-h-[832px] bg-bg py-2">

            <Nav />
            <hr className='w-6/6 h-[0.15rem] bg-greenAcc my-3' />
            <div className="bg-baform flex flex-col   shadow-shadowEmp w-6/6 pl-6 pt-10 pb-[55px] mx-20 min-h-[520px] rounded-[20px] m-auto my-10">
                <HeaderFormPage />
                <hr className="h-[1px] w-full bg-slate-600 my-8" />
                {/* <form> */}

                    <Box className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-5/6  m-auto  justify-around lg:gap-x-[13rem] font-medium  font-roboto text-xl pt-7 pb-5  '>
                        <FormControlLabel  {...register("marital_status")} value={'Under 16 years old'} control={<Checkbox icon={<RadioButtonUncheckedIcon></RadioButtonUncheckedIcon>} checkedIcon={< CheckCircleIcon></CheckCircleIcon>} style={{ color: '#F6C90E' }} />} label="Under 16 years old" className='' />
                        <FormControlLabel {...register("marital_status")} value={'Married'} control={<Checkbox icon={<RadioButtonUncheckedIcon></RadioButtonUncheckedIcon>} checkedIcon={< CheckCircleIcon></CheckCircleIcon>} style={{ color: '#F6C90E' }} />} label="Married" className="lg:pl-20" />
                        <FormControlLabel {...register("marital_status")} value={'unMarried'}  control={<Checkbox icon={<RadioButtonUncheckedIcon></RadioButtonUncheckedIcon>} checkedIcon={< CheckCircleIcon></CheckCircleIcon>} style={{ color: '#F6C90E' }} />} label="Unmarried" className="lg:pl-20" />
                    </Box>
                 

                    <div className="px-[100px]">
                        <label className="text-greenAcc font-roboto my-3 text-xl font-medium block">Husband name /</label>
                        <input {...register("husband_name")} type="text" className=" focus:outline-none px-5 text-lg text-hreenAcc rounded-input bg-transparent w-full h-[50px] border-[1px] border-yellowAcc" />
                        <label className="text-greenAcc font-roboto mb-3 mt-7 text-xl font-medium block">Nationality /</label>
                        <input type="text" className=" focus:outline-none px-5 rounded-input  text-lg text-hreenAcc w-full bg-transparent h-[50px] border-[1px] border-yellowAcc" />
                    </div>

                    {/* buttons */}

                    {/* <div className="absolute mt-[120px] font-tinos   lg:text-[32px] text-[22px] flex lg:gap-x-32 w-[60%] justify-between gap-16 lg:ml-[13%]">
                       <Link to="/passForm">
                        <button className="border-[3px] border-greenAcc rounded-input w-[255px] h-[60px] text-greenAcc capitalize font-bold">back</button>
                        </Link>
                        <Link to="/NationalForm">
                        <button className="bg-greenAcc text-white rounded-input w-[255px] h-[60px]  capitalize font-bold">next</button>
                        </Link>
                    </div> */}

                {/* </form> */}
            </div>
        </div>

    )
}

export default MartialStatus