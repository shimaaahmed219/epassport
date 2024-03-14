import Settingsicon from "../assets/saidbaricon/Group (1).svg";
// import logOuticon from '../assets/saidbaricon/Group (2).svg'
import Encrypted from "../assets/saidbaricon/encrypted-icon (1) 1.svg";
import employee from "../assets/saidbaricon/business-team-icon 1.svg";
import users from "../assets/saidbaricon/male-add-icon 1.svg";
import img from "../assets/saidbaricon/graph-icon 1.svg";
import Edit from "../assets/saidbaricon/shape.svg";
import "./module.css";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "./URL";
import decimg from "../assets/EncAndEecICONS/Group 2288.svg";

interface data {
  name: string;
  email: string;
  photo: string;
}

export default function FexidSidebar() {
  const links = [
    { id: 1, name: "Statistics", href: "/", src: img },
    { id: 2, name: "All Encrypted files", href: "/addFile", src: Encrypted },
    { id: 5, name: "Add request", href: "/passForm", src: Edit },
    { id: 9, name: "add employee", href: "/addEmployee", src: users },
    { id: 7, name: "Encryption file", href: "/encryption", src: Encrypted },
    { id: 8, name: "Decrypt file", href: "/Decrypt", src: decimg },
    { id: 3, name: "Employees", href: "/employee", src: employee },
    { id: 4, name: " Users", href: "/", src: users },
    { id: 6, name: " Settings", href: "/", src: Settingsicon },
  ];

  const [data, setData] = useState<data | undefined>(undefined);
  //   const [close, setClose] = useState(false);
  useEffect(() => {
    axios
      .get(`${url}/auth/myProfile`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => setData(res.data.data));
  }, []);
  // console.log(data);

  //   const handilClose = () => {
  //     setClose(true);
  //   };

  return (
    <>
      <div
        className={` w-[311px] h-[700px] pt-5 pb-10 py-10 bg-greenAcc overflow-y-auto   fixed top-0 left-0 z-50 `}
      >
        <div
          className={` ${
            !data && "hidden"
          } flex flex-col  items-center pb-6 bt-3`}
        >
          <div className="w-[65px] h-[67px] rounded-full userIcon flex justify-center items-center ">
            {data?.photo ? (
              <img
                className="w-[65px] h-[67px] rounded-full"
                src={`https://epassport-api.preview-ym.com/${data?.photo}`}
              />
            ) : (
              ""
            )}
          </div>
          <h2 className={`font-tinos text-yellowAcc capitalize text-[24px]`}>
            {data?.name}
          </h2>
          <h6 className={`font-roboto font-light text-email  text-[20px]`}>
            {data?.email}
          </h6>
          <div className="flex flex-col w-full mt-5  ">
            {links.map((link) => (
              <div className="hover:bg-hover px-5 hover:pl-10">
                <Link
                  key={link.id}
                  to={link.href}
                  className={`font-roboto font-medium hover:text-gray-100 flex my-2  capitalize items-center gap-[20px] w-full h-[40px] text-white border-none text-left text-[20px] hover:bg-opacity-10`}
                >
                  <img src={link.src} alt="" width={20} height={20} />
                  {link.name}
                </Link>
              </div>
            ))}
            <Logout />
          </div>
        </div>
      </div>
    </>
  );
}
