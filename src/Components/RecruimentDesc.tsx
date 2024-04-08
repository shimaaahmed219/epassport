import {
  Table,
  Paper,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";

import icon1 from "../assets/employee/edit.svg";
import icon2 from "../assets/employee/shape (4).svg";
import { useEffect, useState } from "react";
import { url } from "./URL";
import axios from "axios";
import ReactPaginate from "react-paginate";
import last from "../assets/employee/Last.svg";
import first from "../assets/employee/First.svg";
import "./style/style.css";
import { Link } from "react-router-dom";
import { client } from "../type";
import Swal from "sweetalert2";
import RecruimentChangeStatus from "./RecruimentChangeStatus";
type data = {
  id: string;
  name: string;
};

const colum: data[] = [
  { id: "name", name: "Name" },
  { id: "National_ID", name: "National ID" },
  { id: "Request_date", name: "Request date" },
  { id: "Request_Status", name: "Request Status" },
  { id: " Options", name: " Options" },
];



export default function RecruimentDesc({ search }: { search: string }) {
  const [cleint, setClient] = useState<client[]>([]);
  const [carrentPage, setCarrentPage] = useState(0);

  const pageSize = 7;

  // fetchData
  useEffect(() => {
    axios
      .get(`${url}/client?type=recruitment district`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setClient(res.data.data);
      });
  }, []);
  console.log(cleint);
  const HandilPageChange = ({ selected }: { selected: number }) => {
    setCarrentPage(selected);
  };
 
  const startIndex = carrentPage * pageSize;
  const visbleEmployees = cleint
    .slice(startIndex, startIndex + pageSize)
    .sort((a, b) =>` ${a.first_name} ${a.second_name} ${a.third_name}`.localeCompare(` ${b.first_name} ${b.second_name} ${b.third_name}`));

    const handilDeletClient = (id: number) => {
      // checked delete
      Swal.fire({
        title: "are you sure?",
        text: "You will not be able to undo this action!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#324134",
        cancelButtonColor: "#d33",
        confirmButtonText: "delete",
        cancelButtonText: "cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`${url}/client/${id}`, {
              headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
              },
            })
            // deleted
            .then((res) => {
              setClient((prev) => prev.filter((client) => client.id !== id));
              console.log(res);
              Swal.fire(
                "Deleted!",
                "Client has been deleted successfully.",
                "success"
              );
            })
            // error messge
            .catch((error) => {
              console.error("Error deleting employee", error);
              Swal.fire(
                "Error",
                "An error occurred while trying to delete the employee.",
                "error"
              );
            });
        }
      });
    };
  return (
    <div className="w-5/6  m-auto my-10">
      <TableContainer
        component={Paper}
        className="shadow-employee   rounded-[14px]"
      >
        <Table className="">
          <TableHead className="bg-greenAcc h-[70px]  ">
            <TableRow className="flex  [&>*:nth-child(1)]:w-[150px]    [&>*:nth-child(2)]:pl-[60px]  [&>*:nth-child(3)]:ml-[-30px] [&>*:nth-child(4)]:ml-[-40px] [&>*:nth-child(1)]:justify-center justify-around items-center ">
              {colum.map((col) => (
                <TableCell
                  className="border-none h-[70px] items-center text-white flex"
                  key={col.id}
                >
                  <span className="ml-[-20px] text-[24px] font-tinos capitalize font-bold ">
                    {col.name}
                  </span>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      {visbleEmployees
        .filter((item) => {
          const fullName =`${item.first_name} ${item.second_name} ${item.third_name}`
          return search.toLowerCase() === ""
            ? item
            : fullName.toLowerCase().includes(search);
        })

        .map((user, index) => (
          <div
            key={user.id}
            className="flex   font-roboto text-[22px]   my-4 bg-white rounded-[14px] shadow-employee lg:h-[70px] items-center px-5"
          >
            <div className="flex  w-[25%] items-center ">
              <span className="xl:text-[22px] text-[15px] text-yellowAcc ">
                {index + 1} -
              </span>
              <img
              className="w-[40px] h-[40px] rounded-full"
                src={`https://epassport-api.preview-ym.com/${user?.photo}`}
              />
              <span className="font-roboto flex  mt-1 xl:text-[15px] text-[15px]  text-greenD mx-3 capitalize">
                {" "}
                {user.first_name} {user.second_name} {user.third_name}
              </span>
            </div>
            <div className="text-yellowAcc text-[18px] w-[150px]  text-center">
              {user.national_id.substring(0, 14)}
            </div>
            <div className="xl:text-[20px]  text-[15px]  w-[130px] text-greenD ml-[80px] ">
              {user.updated_at.substring(0, 10)}
            </div>
           
            <RecruimentChangeStatus setClient={setClient} user={user}/>
            <div className=" flex gap-x-3 items-center  lg:ms-auto ">
              <Link
                to=""
                className="text-[16px] font-normal text-white bg-yellowAcc h-[34px] w-[140px] rounded-[25px] flex items-center justify-center"
              >
                View detail
              </Link>

              <Link to="/" className="mr-3 lg:block hidden ">
                <img src={icon1} />
              </Link>
              <button
                onClick={() => handilDeletClient(user.id)}
                className="lg:block hidden"
              >
                <img src={icon2} />
              </button>
            </div>
          </div>
        ))}
      {/* pageination */}
      <div className="flex justify-center my-10">
        <ReactPaginate
          previousLabel={<img src={first} />}
          nextLabel={<img src={last} />}
          pageCount={Math.ceil(cleint.length / pageSize)}
          onPageChange={HandilPageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
          className="flex space-x-4"
          pageClassName="relative"
          pageLinkClassName="block w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center transition duration-300"
          activeLinkClassName="bg-yellow-400"
          previousClassName="block w-8 h-8 rounded-full  bg-gray-50 flex items-center justify-center transition duration-300"
          previousLinkClassName="flex items-center justify-center text-black"
          nextClassName="block w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center transition duration-300"
          nextLinkClassName="flex items-center justify-center text-black"
        />
      </div>
    </div>
  );
}
