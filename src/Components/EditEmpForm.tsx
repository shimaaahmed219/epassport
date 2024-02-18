import { url } from "./URL";
import { useParams } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";






type schema = z.infer<typeof schema>;


const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];
const schema = z.object({
    name: z.string().min(6).max(50),
    email: z.string().email(),
    phone: z.string().min(10).max(15),

    job: z
        .string()
        .refine((value) => value.trim() !== "", { message: "Job is required" }),
    photo: z
        .any()
        .refine(
            (files) => files?.[0]?.size <= MAX_FILE_SIZE,
            `Max image size is 5MB.`
        )
        .refine(
            (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
            "Only .jpg, .jpeg, .png and  formats are supported."
        ),
});

export default function EditEmpForm() {
    const { id } = useParams();
    console.log(id);


    // add defolt value in inputs
    const [employeeData, setemployeeData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        photo: '',

    });

    // from apdate
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            ...employeeData
        },
    });

    // show employee data
    useEffect(() => {

        axios.get(`${url}/employee/${id}`, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
        }).then((res) => {
            setemployeeData(res.data.data)
            Object.keys(res.data.data).forEach((key) => {
                setValue(key, res.data.data[key]);
                console.log(res.data.data);

            });
        }
        )

    }, [id])


    // update employee
    const onSubmitForm = async (data: FieldValues) => {


        const formdata = new FormData();
        formdata.append("name", data.name);
        formdata.append("email", data.email);
        formdata.append("position", data.job);
        formdata.append("photo", data.photo[0]);
        formdata.append("phone", data.phone);

        axios
            .post(`${url}/employee/${id}`, formdata, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success",
                    });
                }
            });
    };

    return (
        <div className="lg:w-[70%] w-[90%]  lg:ms-auto m-auto lg:mr-[30px]  mt-5 h-full pt-6 shadow-shadowEmp bg-bgEmp rounded-[20px]">
            <form
                onSubmit={handleSubmit(onSubmitForm)}
                className=" flex-col flex items-center"
            >
                <div>
                    <div className="w-[115px] h-[115px] rounded-full userIconForm flex justify-center items-center ">
                        <input
                            {...register("photo")}
                            type="file"
                            className="w-full h-full z-50 opacity-0"
                        />
                        <img src={employeeData.photo} alt='' />

                    </div>

                    {errors.photo && (
                        <div className=" text-red-500 m-auto  mt-[15px] mb-[15px]">{`**${errors.photo.message}`}</div>
                    )}
                </div>
                <h2 className={` font-tinos text-greenAcc text-[30px] capitalize`}>
                    {employeeData.name}
                </h2>
                <h1
                    className={` font-tinos font-bold text-yellowAcc text-[24px] capitalize`}
                >
                    {" "}
                    update
                </h1>
                <div className="w-[90%] m-auto">
                    <h1 className="font-tinos font-bold text-[26px] text-yellowAcc mb-[-30px] mt-5">Details</h1>
                </div>

                <div
                    className={`font-roboto  w-[100%] px-10 justify-between  grid  extramd:grid-cols-2 grid-cols-1 xl:gap-x-32 lg:gap-x-16 gap-x-8 gap-y-8 mt-10 rounded-[10px]`}
                >
                    {/* name */}
                    <div>
                        <label className="capitalize  ml-1  text-greenAcc font-semibold block  md:text-[22px]">name</label>
                        <input
                            defaultValue={employeeData.name}
                            {...register("name")}
                            placeholder="name"
                            type="text"
                            className="xl:w-[365px]   w-[90%]  text-greenAcc font-semibold    md:text-[22px] pl-2 focus:outline-none h-[50px] border-2 rounded-[10px] bg-transparent border-yellowAcc"
                        />
                        {errors.name && (
                            <div className=" text-red-500 m-auto  mt-[15px] mb-[15px]">{`**${errors.name.message}`}</div>
                        )}
                    </div>

                    {/* number */}
                    <div>
                        <label className="capitalize  ml-1  text-greenAcc font-semibold block text-[22px]">number</label>
                        <input
                            defaultValue={employeeData.phone}
                            {...register("phone")}
                            placeholder="enter employee phone number"
                            type="text"
                            className=" pl-2 xl:xl:w-[365px]   w-[90%] text-greenAcc font-semibold  md:text-[22px]   focus:outline-none h-[50px] border-2 rounded-[10px] bg-transparent border-yellowAcc"
                        />
                        {/* className='xl:w-[365px]   w-[90%] md:text-[22px]  pl-2 focus:outline-none h-[50px] border-2 rounded-[10px] bg-transparent border-yellowAcc' /> */}
                        {errors.phone && (
                            <div className=" text-red-500 m-auto  mt-[15px] mb-[15px]">{`**${errors.phone.message}`}</div>
                        )}
                    </div>

                    {/* email */}
                    <div>
                        <label className="capitalize  ml-1   text-greenAcc font-semibold block text-[22px]">Email address</label>
                        <input
                            defaultValue={employeeData.email}
                            {...register("email")}
                            placeholder="email Adress "
                            type="text"
                            className="xl:w-[365px]   w-[90%] md:text-[22px]  text-greenAcc font-semibold  pl-2 focus:outline-none h-[50px] border-2 rounded-[10px] bg-transparent border-yellowAcc"
                        />
                        {/* className='xl:w-[365px]   w-[90%] md:text-[22px]  pl-2 focus:outline-none h-[50px] border-2 rounded-[10px] bg-transparent border-yellowAcc' /> */}
                        {errors.email && (
                            <div className=" text-red-500 m-auto  mt-[15px] mb-[15px]">{`**${errors.email.message}`}</div>
                        )}
                    </div>

                    {/* job */}
                    <div className="">
                        <label className="capitalize  ml-1  text-greenAcc font-semibold block md:text-[22px]">The jop</label>
                        <input
                            defaultValue={employeeData.position}
                            {...register("job")}
                            type="text"
                            placeholder="job "
                            className=" pl-2 xl:xl:w-[365px]    w-[90%] text-greenAcc font-semibold  md:text-[22px]   focus:outline-none h-[50px] border-2 rounded-[10px] bg-transparent border-yellowAcc"
                        />
                        {errors.job && (
                            <div className=" text-red-500 m-auto  mt-[15px] mb-[15px]">{`**${errors.job.message}`}</div>
                        )}
                    </div>
                </div>
                <button
                    type="submit"
                    className={` font-tinos font-bold ms-7 my-[3rem] rounded-[10px] text-[26px] bg-greenAcc w-[198px] h-[50px] text-white`}
                >
                    save
                </button>
                <div className=" w-[90%] my-5">
                    <h4 className={`font-tinos font-bold text-[26px] text-yellowAcc`}>
                        Change Password
                    </h4>
                </div>
            </form>
            <form>

                <div
                    className={` font-medium font-roboto m-auto  w-[90%] md:text-[22px] grid  extramd:grid-cols-2 grid-cols-1 xl:gap-x-32 lg:gap-x-16 gap-x-8 gap-y-8  rounded-[10px]`}
                >
                    {/* Current Password */}
                    <div>
                        <label className="capitalize  ml-1  text-greenAcc font-semibold block">Current Password</label>
                        <input
                            placeholder=" Enter password"
                            type="password"
                            className="pl-2 xl:w-[365px]   w-[90%] text-greenAcc font-semibold  md:text-[22px]   focus:outline-none h-[50px] border-2 rounded-[10px] bg-transparent border-yellowAcc"
                        />
                    </div>

                    {/* New Password */}

                    <div>
                        <label className="capitalize  ml-1  text-greenAcc font-semibold block">New Password</label>
                        <input
                            placeholder="Enter password"
                            type="password"
                            className=" pl-2 xl:w-[365px]   w-[90%] text-greenAcc font-semibold  md:text-[22px]   focus:outline-none h-[50px] border-2 rounded-[10px] bg-transparent border-yellowAcc"
                        />
                    </div>

                    {/* New Password Confirmation */}
                    <div>
                        <label className="capitalize  ml-1  text-greenAcc font-semibold">New Password Confirmation</label>
                        <input
                            placeholder="Enter Password "
                            type="text"
                            className="pl-2 xl:w-[365px]   w-[90%] text-greenAcc font-semibold  md:text-[22px]   focus:outline-none h-[50px] border-2 rounded-[10px] bg-transparent border-yellowAcc"
                        />
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
        </div>
    );
}

