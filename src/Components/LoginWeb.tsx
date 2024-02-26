import axios from "axios";
import "../Pages/style/login.css";
import img from "../assets/login/Group (2).svg";
import img2 from "../assets/navImg/Group (1).svg";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { url } from "./URL";
import { useState } from "react";
import Swal from "sweetalert2";
import { FiEye, FiEyeOff } from 'react-icons/fi'
type schima = z.infer<typeof schima>;
const schima = z.object({
  email: z.string().email(),
  password: z.string().min(8, "password must be at last 8 characters"),
});

type User = {
  name: string;
  email: string;
  token: string;
  phone: number;
};

export default function LoginWeb() {
  const navigate = useNavigate();
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [showPassword,setShowPassword]= useState(false)


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schima>({
    resolver: zodResolver(schima),
  });
  const handilform = async (data: FieldValues) => {
    axios
      .post(`${url}/auth/login`, data)
      .then((res) => {
        console.log(res);
        const userData: User = {
          name: res.data.user.name,
          token: res.data.access_token,
          email: res.data.user.email,
          phone: res.data.user.phone,
        };

        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", res.data.access_token);

        navigate("/dashbord");
      })
      .catch((error) => {
        console.log(error);
        if( error.response.status === 422 || error.response.status ===401 ){
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Incorrect username or password!",
          
          });
          
        }
        setLoginAttempts(loginAttempts + 1);
        if (loginAttempts >= 2) {
          navigate("/tryagain");
        }
        console.log(loginAttempts);
      });
  };

  return (
    <div className="login w-full h-full xsm:block hidden  justify-between items-center ">
      {/* description */}
      <div className="w-full h-full flex justify-between">
        <div className="h-full w-[30%] flex justify-center items-center">
          <div className=" w-full h-[65%]  pt-20 pr-[60px]   ">
            <h3
              className={` mb-2 font-ruwudu  w-4/6 text-center text-white m-auto lg:text-3xl md:text-2xl sxm:text-lg text-lg `}
            >
              جمهورية مصر العربيه
            </h3>
            <h4
              className={` font-khand uppercase w-4/6 text-center m-auto text-white lg:text-xl text-lg font-thin `}
            >
              ARAB REPUBLIC OF EGYPT
            </h4>

            <img
              src={img}
              alt="enc"
              className=" my-4 lg:w-[90px] md:w-[70px] sm:w-[50px] m-auto"
            />

            <h3
              className={`font-ruwudu font-medium m-auto w-4/6 text-center text-white md:text-3xl text-lg `}
            >
              جواز سفر
            </h3>
            <h4
              className={` font-khand m-auto mt-2 uppercase  w-4/6 text-center text-white md:text-xl text-lg font-extralight`}
            >
              passport
            </h4>
          </div>
        </div>

        {/* form */}
        <div className="w-[40%] max-h-screen grid items-center lg:mr-[60px]  mr-5 lg:pt-20 md:pt-10 pt-7">
          <div className="w-full h-[80%] ">
            <img src={img2} alt="img" className="m-auto" />

            <h1
              className={`font-tinos font-bold text-center uppercase text-[48px] text-greenAcc`}
            >
              login
            </h1>
            <form
              onSubmit={handleSubmit(handilform)}
              className="text-center mt-[-20px] "
            >
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className={`block focus:outline-none shadow-form placeholder:text-2xl rounded-input m-auto lg:w-[429px] md:w-[350px] sm:w-[280px] w-[240px] px-5 py-[20px] mb-10 mt-10`}
              />
              {errors.email && (
                <div className="text-red-500 mt-[-20px] mb-[15px]">{`**${errors.email.message}`}</div>
              )}
              <input
                {...register("password")}
              type={showPassword ? 'text' : 'password'}
                placeholder="password"
                className="block focus:outline-none shadow-form placeholder:text-2xl rounded-input m-auto lg:w-[429px] md:w-[350px] sm:w-[280px] w-[240px] px-5 py-[20px] mb-10"
              />
             <span
                onClick={() => setShowPassword(!showPassword)} 
                className="absolute lg:top-[65%] xl:right-[129px] top-[59%] lg:right-[90px] md:right-[50px] sm-[30px]    transform -translate-y-1/2 cursor-pointer"
              >
                 {showPassword ? <FiEyeOff size={20} color="yellow" /> : <FiEye size={20} color="yellow" />}
                </span>
              {errors.password && (
                <div className="text-red-500 mt-[-20px] mb-[20px]">{`**${errors.password.message}`}</div>
              )}

              <button
                type="submit"
                className={`font-tinos font-bold md:w-[210px] mt-2 w-[180px] h-[60px] capitalize  text-center text-white text-[32px] bg-greenAcc rounded-input`}
              >
                login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
