import { Checkbox, FormControlLabel, Box } from '@mui/material'

export default function CheckboxInput() {
  return (
   
    <Box className='flex gap-x-[70px] font-roboto text-xl px-10 pt-7 pb-5 '>
    <FormControlLabel control={<Checkbox style={{ color: '#F6C90E' }} />} label="First time" className='' />
    <FormControlLabel control={<Checkbox style={{ color: '#F6C90E' }} />} label="Replacement of lost" />
    <FormControlLabel control={<Checkbox style={{ color: '#F6C90E' }} />} label="Replacement of previous passport" />
    <FormControlLabel control={<Checkbox style={{ color: '#F6C90E' }} />} label="Damaged replacement " />
</Box>
  )
}
