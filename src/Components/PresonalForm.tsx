
import { useFormContext } from "react-hook-form";
export default function PresonalForm() {
  

  const {
    register,
  
  } = useFormContext()
  return (
    <div className="px-10 grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 pt-5 text-greenAcc font-roboto text-xl font-medium">
      <div className="">
        <label className="block p-3">First Name</label>
        <input
          {...register("first_name")}
          type="text"
          className={` w-[240px] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
        />

      
      </div>

      {/* father name */}
      <div className="">
        <label className="block p-3">Father name</label>
        <input
          type="text"
          {...register("second_name")}
          className=" w-[240px] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc"
        />
      
      </div>
      {/* grandba */}
      <div className="">
        <label className="block p-3">Grandpa</label>
        <input
          {...register("third_name")}
          type="text"
          className=" w-[240px] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc"
        />
       
      </div>
      {/* family name */}
      <div className="">
        <label className="block p-3">Family name</label>
        <input
          type="text"
          {...register("last_name",)}
          className=" w-[240px] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc"
        />
      
      </div>
    </div>
  );
}
