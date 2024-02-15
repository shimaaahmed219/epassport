

export default function PlaceOfBirth() {
  return (
    <div className='flex'>
    <div className='px-10 mt-5  font-roboto  items-center text-[20px] text-greenAcc'>
        <label className='block my-3 text-greenAcc font-roboto font-medium'> Place of birth (department / governorate)</label>
        <div className='items-center flex'>
            <input type="text" className=' rounded-input  w-[320px] h-50px border-[1px] border-yellowAcc px-[20px] py-[6px]' />
            <span className='font-roboto text-[40px] mx-10 '>/</span>
            <input type="text" className=' rounded-input  w-[320px] h-50px border-[1px] border-yellowAcc px-[20px] py-[6px]' />
        </div>

    </div>
    <div className=' my-7 font-roboto ml-5 items-center text-[20px] text-greenAcc'>
        <label className='block my-[12px] text-greenAcc font-roboto font-medium'> Religion</label>
        <div className='items-center flex'>
            <input type="text" className=' rounded-input  w-[276px] h-50px border-[1px] border-yellowAcc  pl-[20px] py-[6px]' />

        </div>
    </div>
</div>
  )
}
