

export default function DateOfBirth() {
  return (
    <div className='flex px-10 pt-[15px] items-center text-greenAcc xl:w-[60%] justify-between font-roboto'>
    <label className='font-roboto pt-6 text-[22px] font-semibold text-greenAcc'>Date of birth </label>
    
    <div>
        <label className='block p-2 font-roboto text-[20px] font-medium' >day</label>
        <input type="text" className='border-[1px] border-yellowAcc w-[83px] h-[50px] rounded-input' />
    </div>
    <div>
        <label className='block p-2 font-roboto text-[20px] font-medium'>Month</label>
        <input type="text" className='border-[1px] border-yellowAcc w-[103px] h-[50px] rounded-input' />
    </div>
    <div>
        <label className='block p-2 font-roboto text-[20px] font-medium'>year</label>
        <input type="text" className='border-[1px] border-yellowAcc w-[170px] h-[50px] rounded-input' />
    
    </div>
    </div>
  )
}
