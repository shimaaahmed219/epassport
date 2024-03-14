import { Checkbox, FormControlLabel} from '@mui/material'
import {UseFormRegister} from 'react-hook-form'
interface CheckboxInputProps {
  register: UseFormRegister<any>; 
}
export default function CheckboxInput({register}: CheckboxInputProps) {
  return (
   
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 mb-5 font-roboto text-xl px-10 pt-7 pb-5 '>
  
  <FormControlLabel  className="xl:w-[150px]" control={<Checkbox {...register("First time")} style={{ color: '#F6C90E' }} />} label="First time"  />
    <FormControlLabel className="xl:ml-[-80px]" control={<Checkbox {...register("Replacement of lost")} style={{ color: '#F6C90E' }} />} label="Replacement of lost" />
  
  
   <FormControlLabel className="xl:w-[320px] xl:ml-[-80px] " control={<Checkbox {...register("Replacement of previous passport")} style={{ color: '#F6C90E' }} />} label="Replacement of previous passport" />
    <FormControlLabel className='pl:ml-5' control={<Checkbox {...register("Damaged replacement")} style={{ color: '#F6C90E' }} />} label="Damaged replacement " />
   
    
</div>

  )
}
