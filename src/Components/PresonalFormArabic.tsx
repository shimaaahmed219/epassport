

export default function PresonalFormArabic() {
  return (
    <div className='px-10 grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 pt-3 text-greenAcc font-roboto text-xl font-medium '>
    <div className=''>
        <label className='block px-10 py-3 text-right'>اسم العائله</label>
        <input type='text' className=' w-[240px] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc' />
    </div>
    <div className=''>
        <label className='block px-10 py-3 text-right'>اسم الجد</label>
        <input type='text' className=' w-[240px] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc' />
    </div>
    <div className=''>
        <label className='block px-10 py-3 text-right '>اسم الاب</label>
        <input type='text' className=' w-[240px] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc' />
    </div>
    <div className=''>
        <label className='block px-10 py-3 text-right'>الاسم الاول</label>
        <input type='text' className=' w-[240px] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc' />
    </div>
</div>
  )
}
