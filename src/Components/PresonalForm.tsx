

export default function PresonalForm() {
  return (
   
    <div className='px-10 grid grid-cols-4 pt-5 text-greenAcc font-roboto text-xl font-medium'>
    <div className=''>
        <label className='block p-3'>First Name</label>
        <input type='text' className=' w-[240px] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc' />
    </div>
    {/* father name */}
    <div className=''>
        <label className='block p-3'>Father name</label>
        <input type='text' className=' w-[240px] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc' />
    </div>
    {/* grandba */}
    <div className=''>
        <label className='block p-3'>Grandpa</label>
        <input type='text' className=' w-[240px] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc' />
    </div>
    {/* family name */}
    <div className=''>
        <label className='block p-3'>Family name</label>
        <input type='text' className=' w-[240px] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc' />
    </div>
</div>
  )
}
