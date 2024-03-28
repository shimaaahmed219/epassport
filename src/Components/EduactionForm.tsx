import { useFormContext } from "react-hook-form"


function EduactionForm() {
  const {register} = useFormContext()
  return (
    <div>
  <div className='flex flex-col px-10'>

<label className=' text-greenAcc font-roboto font-medium text-[20px] mt-2 mb-2'>Latest educational qualification and its date</label>
<input {...register("academic_qualification")} className='w-full h-[50px] px-[20px] py-[6px] border-[1px] border-yellowAcc rounded-input ' />


<label className=' text-greenAcc font-roboto font-medium text-[20px] mt-5 '>Profession</label>
<input {...register("job")} className='w-full h-[50px] px-[20px] py-[6px] border-[1px] border-yellowAcc rounded-input ' />


{/* <label className=' text-greenAcc font-roboto font-medium text-[20px] mt-5 text-right'>المهنه</label>
<input  className='w-full h-[50px] px-[20px] py-[6px] border-[1px] border-yellowAcc rounded-input ' />


<label className=' text-greenAcc font-roboto font-medium text-[20px] mt-5 mb-2'>Residence in c. M . O..</label>
<input className='w-full h-[50px] px-[20px] py-[6px] border-[1px] border-yellowAcc rounded-input ' /> */}

<div className='grid grid-cols-2 gap-x-16'>
    <div className='py-3'>
        <label className=' block text-greenAcc font-roboto font-medium text-[20px] mt-2 mb-2  '>Work phone</label>
        <input {...register("phone")} type='text' className=' w-full h-[50px] px-[20px] py-[6px] border-[1px] border-yellowAcc rounded-input' />
    </div>

    <div className='py-3'>
        <label className=' block text-greenAcc font-roboto font-medium text-[20px] mt-2 mb-2 '>Home phone</label>
        <input {...register("home_phone")}  type='text' className=' w-full h-[50px] px-[20px] py-[6px] border-[1px] border-yellowAcc rounded-input' />
    </div>
</div>
</div>





    </div>
  )
}

export default EduactionForm