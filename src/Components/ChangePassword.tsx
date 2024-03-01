import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { url } from "./URL";
import axios from "axios";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

type schema = z.infer<typeof schema>;
const schema = z.object({
  current_password: z
    .string()
    .min(8)
    .regex(/.*[A-Z].*/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-].*/, {
      message: "Password must contain at least one special character",
    }),

  new_password: z
    .string()
    .min(8)
    .regex(/.*[A-Z].*/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-].*/, {
      message: "Password must contain at least one special character",
    }),
  new_password_confirmation: z.string().refine(
    (data) => {
      return data === undefined || data === "" || data === new_password;
    },
    {
      message: "New Password Confirmation must match New Password",
    }
  ),
});
export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schema>({
    resolver: zodResolver(schema),
  });

  const changePasswordHandle = async (data: FieldValues) => {
    axios
      .post(`${url}/auth/changePassword`, data, {
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => console.log(res));
  };

  return (
    <>
      <form onSubmit={handleSubmit(changePasswordHandle)}>
        <div
          className={` font-medium font-roboto m-auto  w-[90%] md:text-[22px] grid  extramd:grid-cols-2 grid-cols-1 xl:gap-x-32 lg:gap-x-16 gap-x-8 gap-y-8  rounded-[10px]`}
        >
          {/* Current Password */}
          <div>
            <label className="capitalize  ml-1  text-greenAcc font-semibold block">
              Current Password
            </label>
            <div className="relative">
              <input
                {...register("current_password")}
                placeholder=" Enter password"
                type={showPassword ? "text" : "password"}
                className="pl-2 xl:w-[365px]   w-[90%] text-greenAcc font-semibold  md:text-[22px]   focus:outline-none h-[50px] border-2 rounded-[10px] bg-transparent border-yellowAcc"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="  absolute bottom-[17px] xl:right-[1px]  xl:block hidden cursor-pointer"
              >
                {showPassword ? (
                  <FiEyeOff size={20} color="yellow" />
                ) : (
                  <FiEye size={20} color="yellow" />
                )}
              </span>
            </div>

            {errors.current_password && (
              <div className=" text-red-500 m-auto text-[15px] mt-[10px] mb-[5px]">{`**${errors.current_password.message}`}</div>
            )}
          </div>

          {/* New Password */}

          <div>
            <label className="capitalize  ml-1  text-greenAcc font-semibold block">
              New Password
            </label>
            <div className=" relative">
              <input
                {...register("new_password")}
                placeholder="Enter password"
                type={showPassword ? "text" : "password"}
                className=" pl-2 xl:w-[365px]   w-[90%] text-greenAcc font-semibold  md:text-[22px]   focus:outline-none h-[50px] border-2 rounded-[10px] bg-transparent border-yellowAcc"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="  absolute bottom-[17px] right-[1px]  xl:block hidden cursor-pointer"
              >
                {showPassword ? (
                  <FiEyeOff size={20} color="yellow" />
                ) : (
                  <FiEye size={20} color="yellow" />
                )}
              </span>
            </div>

            {errors.new_password && (
              <div className=" text-red-500 m-auto text-[15px] mt-[10px] mb-[5px]">{`**${errors.new_password.message}`}</div>
            )}
          </div>

          {/* New Password Confirmation */}
          <div>
            <label className="capitalize  ml-1  text-greenAcc font-semibold">
              New Password Confirmation
            </label>
            <input
              {...register("new_password_confirmation")}
              placeholder="Enter Password "
              type={showPassword ? "text" : "password"}
              className="pl-2 xl:w-[365px]   w-[90%] text-greenAcc font-semibold  md:text-[22px]   focus:outline-none h-[50px] border-2 rounded-[10px] bg-transparent border-yellowAcc"
            />
            <div className=" relative">
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="  absolute bottom-[17px] right-[1px]  xl:block hidden cursor-pointer"
              >
                {showPassword ? (
                  <FiEyeOff size={20} color="yellow" />
                ) : (
                  <FiEye size={20} color="yellow" />
                )}
              </span>
            </div>

            {errors.new_password_confirmation && (
              <div className=" text-red-500 m-auto text-[15px] mt-[10px] mb-[5px]">{`**${errors.new_password_confirmation.message}`}</div>
            )}
          </div>
        </div>
        <div className=" flex justify-center">
          <button
            type="submit"
            className={` font-tinos  font-bold ms-7 my-[3rem] rounded-[10px] text-[26px] bg-greenAcc w-[198px] h-[50px] text-white`}
          >
            save
          </button>
        </div>
      </form>
    </>
  );
}
